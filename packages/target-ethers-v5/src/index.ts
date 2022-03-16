import { readFileSync } from 'fs'
import { compact, partition, uniqBy } from 'lodash'
import { join, relative, resolve } from 'path'
import { Dictionary } from 'ts-essentials'
import {
  BytecodeWithLinkReferences,
  CodegenConfig,
  Config,
  Contract,
  createBarrelFiles,
  detectInputsRoot,
  extractAbi,
  extractBytecode,
  extractDocumentation,
  FileDescription,
  getFileExtension,
  getFilename,
  normalizeName,
  normalizeSlashes,
  parse,
  parseContractPath,
  shortenFullJsonFilePath,
  TypeChainTarget,
} from 'typechain'

import { codegenAbstractContractFactory, codegenContractFactory, codegenContractTypings } from './codegen'
import { generateHardhatHelper } from './codegen/hardhat'
import { FACTORY_POSTFIX } from './common'

export interface IEthersCfg {
  outDir?: string
}

const DEFAULT_OUT_PATH = './types/ethers-contracts/'

export default class Ethers extends TypeChainTarget {
  name = 'Ethers'

  private readonly inputsRoot: string
  private readonly allFiles: string[]
  private readonly outDirAbs: string
  private readonly contractsWithoutBytecode: Dictionary<{ abi: any; contract: Contract } | undefined> = {}
  private readonly bytecodeCache: Dictionary<BytecodeWithLinkReferences | undefined> = {}

  constructor(config: Config) {
    super(config)

    const { cwd, outDir, allFiles } = config

    this.inputsRoot = detectInputsRoot(allFiles)
    this.allFiles = allFiles
      .map((p) => shortenFullJsonFilePath(p, allFiles))
      .map((p) => relative(this.inputsRoot, p))
      .map(normalizeSlashes)
    this.outDirAbs = resolve(cwd, outDir || DEFAULT_OUT_PATH)
  }

  transformFile(file: FileDescription): FileDescription[] | void {
    const fileExt = getFileExtension(file.path)

    // For json files with both ABI and bytecode, both the contract typing and factory can be
    // generated at once. For split files (.abi and .bin) we don't know in which order they will
    // be transformed -- so we temporarily store whichever comes first, and generate the factory
    // only when both ABI and bytecode are present.

    if (fileExt === '.bin') {
      return this.transformBinFile(file)
    }
    return this.transformAbiOrFullJsonFile(file)
  }

  transformBinFile(file: FileDescription): FileDescription[] | void {
    const bytecode = extractBytecode(file.contents)

    if (!bytecode) {
      return
    }

    if (this.contractsWithoutBytecode[file.path]) {
      const { contract, abi } = this.contractsWithoutBytecode[file.path]!
      delete this.contractsWithoutBytecode[file.path]
      return [this.genContractFactoryFile(contract, abi, bytecode)]
    } else {
      this.bytecodeCache[file.path] = bytecode
    }
  }

  transformAbiOrFullJsonFile(file: FileDescription): FileDescription[] | void {
    const abi = extractAbi(file.contents)

    if (abi.length === 0) {
      return
    }

    const documentation = extractDocumentation(file.contents)

    const path = relative(this.inputsRoot, shortenFullJsonFilePath(file.path, this.cfg.allFiles))

    const contract = parse(abi, path, documentation)

    const bytecode = extractBytecode(file.contents) || this.bytecodeCache[file.path]

    if (bytecode) {
      return [
        this.genContractTypingsFile(contract, this.cfg.flags),
        this.genContractFactoryFile(contract, abi, bytecode),
      ]
    } else {
      this.contractsWithoutBytecode[file.path] = { abi, contract }
      return [this.genContractTypingsFile(contract, this.cfg.flags)]
    }
  }

  genContractTypingsFile(contract: Contract, codegenConfig: CodegenConfig): FileDescription {
    return {
      path: join(this.outDirAbs, ...contract.path, `${contract.name}.ts`),
      contents: codegenContractTypings(contract, codegenConfig),
    }
  }

  genContractFactoryFile(contract: Contract, abi: any, bytecode?: BytecodeWithLinkReferences) {
    return {
      path: join(this.outDirAbs, 'factories', ...contract.path, `${contract.name}${FACTORY_POSTFIX}.ts`),
      contents: codegenContractFactory(this.cfg.flags, contract, abi, bytecode),
    }
  }

  override afterRun(): FileDescription[] {
    // For each contract that doesn't have bytecode (it's either abstract, or only ABI was provided)
    // generate a simplified factory, that allows to interact with deployed contract instances.
    const abstractFactoryFiles = Object.keys(this.contractsWithoutBytecode).map((contractName) => {
      const { contract, abi } = this.contractsWithoutBytecode[contractName]!
      return {
        path: join(this.outDirAbs, 'factories', ...contract.path, `${contract.name}${FACTORY_POSTFIX}.ts`),
        contents: codegenAbstractContractFactory(contract, abi),
      }
    })

    const common = {
      path: join(this.outDirAbs, 'common.ts'),
      contents: readFileSync(join(__dirname, '../static/common.ts'), 'utf-8'),
    }

    const allContracts = this.allFiles.map((path) => normalizeName(getFilename(path)))
    const hardhatHelper =
      this.cfg.flags.environment === 'hardhat'
        ? { path: join(this.outDirAbs, 'hardhat.d.ts'), contents: generateHardhatHelper(allContracts) }
        : undefined

    const typesBarrels = createBarrelFiles(this.allFiles, { typeOnly: true })
    const factoriesBarrels = createBarrelFiles(
      this.allFiles.map((s) => `factories/${s}`),
      { typeOnly: false, postfix: FACTORY_POSTFIX },
    )

    const allBarrels = typesBarrels.concat(factoriesBarrels)
    const [rootIndexes, otherBarrels] = partition(allBarrels, (fd) => fd.path === 'index.ts')

    const rootIndex = {
      path: join(this.outDirAbs, 'index.ts'),
      contents: createRootIndexContent(rootIndexes, this.allFiles),
    }

    const allFiles = compact([
      common,
      hardhatHelper,
      rootIndex,
      ...abstractFactoryFiles,
      ...otherBarrels.map((fd) => ({
        path: join(this.outDirAbs, fd.path),
        contents: fd.contents,
      })),
    ])

    return allFiles
  }
}

// root index.ts reexports also from deeper paths
function createRootIndexContent(rootIndexes: FileDescription[], paths: string[]) {
  const contracts: { path: string[]; name: string }[] = paths.map(parseContractPath)
  const rootReexports = uniqBy(Object.values(contracts), (c) => c.name).flatMap((c) => {
    const path = c.path.length === 0 ? c.name : `${c.path.join('/')}/${c.name}`
    return [
      `export type { ${c.name} } from './${path}';`,
      `export { ${c.name}${FACTORY_POSTFIX} } from './factories/${path}${FACTORY_POSTFIX}';`,
    ]
  })

  const rootIndexContent = new Set([
    ...rootIndexes[0].contents.split('\n'),
    ...rootIndexes[1].contents.split('\n'),
    ...rootReexports,
  ])

  return [...rootIndexContent].join('\n')
}
