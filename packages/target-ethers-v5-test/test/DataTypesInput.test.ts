import { FunctionFragment } from '@ethersproject/abi'
import { expect } from 'earljs'
import { Awaited } from 'earljs/dist/mocks/types'
import { BigNumber, ethers } from 'ethers'
import { AssertTrue, IsExact, q18, typedAssert } from 'test-utils'

import { DataTypesInput } from '../types/DataTypesInput'
import { createNewBlockchain, deployContract } from './common'

describe('DataTypesInput', () => {
  let contract!: DataTypesInput
  let ganache: any
  beforeEach(async () => {
    const { ganache: _ganache, signer } = await createNewBlockchain()
    ganache = _ganache
    contract = await deployContract<DataTypesInput>(signer, 'DataTypesInput')
  })

  afterEach(() => ganache.close())

  it('works', async () => {
    typedAssert(await contract.input_uint8('42'), 42)
    typedAssert(await contract.input_uint8(42), 42)

    typedAssert(await contract.input_uint256(q18(1)), BigNumber.from(q18(1)))
    typedAssert(await contract.input_uint256(1), BigNumber.from(1))

    typedAssert(await contract.input_int8('42'), 42)
    typedAssert(await contract.input_int8(42), 42)

    typedAssert(await contract.input_int256(q18(1)), BigNumber.from(q18(1)))
    typedAssert(await contract.input_int256(1), BigNumber.from('1'))

    typedAssert(await contract.input_bool(true), true)

    typedAssert(
      await contract.input_address('0x70b144972C5Ef6CB941A5379240B74239c418CD4'),
      '0x70b144972C5Ef6CB941A5379240B74239c418CD4',
    )
    typedAssert(await contract.functions.input_address('0x70b144972C5Ef6CB941A5379240B74239c418CD4'), [
      '0x70b144972C5Ef6CB941A5379240B74239c418CD4',
    ])

    typedAssert(
      await contract.input_address('0x70b144972C5Ef6CB941A5379240B74239c418CD4'),
      '0x70b144972C5Ef6CB941A5379240B74239c418CD4',
    )

    typedAssert(await contract.input_bytes1('0xaa'), '0xaa')
    typedAssert(await contract.input_bytes1([0]), '0x00')

    typedAssert(
      await contract.input_bytes(ethers.utils.formatBytes32String('TypeChain')),
      '0x54797065436861696e0000000000000000000000000000000000000000000000',
    )

    typedAssert(await contract.input_string('TypeChain'), 'TypeChain')

    typedAssert(await contract.input_stat_array(['1', '2', '3']), [1, 2, 3])
    typedAssert(await contract.input_stat_array([1, 2, 3]), [1, 2, 3])

    // TODO: this reverts for some weird reason
    // typedAssert(await contract.input_tuple('1', '2'), { 0: new BigNumber('1'), 1: new BigNumber('2') })
    // typedAssert(await contract.input_tuple(1, 2), { 0: '1', 1: '2' })

    expect(
      await contract.input_struct({ uint256_0: BigNumber.from('1'), uint256_1: BigNumber.from('2') }),
    ).toLooseEqual(expect.a(Array))
    typedAssert(await contract.input_struct({ uint256_0: BigNumber.from('1'), uint256_1: BigNumber.from('2') }), {
      0: BigNumber.from('1'),
      1: BigNumber.from('2'),
      uint256_0: BigNumber.from('1'),
      uint256_1: BigNumber.from('2'),
    } as any)

    typedAssert(await contract.input_enum('1'), 1)
    typedAssert(await contract.input_enum(1), 1)
  })

  // tests: https://github.com/ethereum-ts/TypeChain/issues/232
  // NOTE: typesAssert is too simple to tests type compatibility here so we can't use it
  it('generates correct types for tuples', () => {
    type ViewTupleType = Awaited<ReturnType<typeof contract.input_tuple>>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type _t1 = AssertTrue<IsExact<ViewTupleType, [BigNumber, BigNumber]>>
  })

  it('generates correct types for structs', () => {
    type ViewStructType = Awaited<ReturnType<typeof contract.input_struct>>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type _t1 = AssertTrue<
      IsExact<ViewStructType, [BigNumber, BigNumber] & { uint256_0: BigNumber; uint256_1: BigNumber }>
    >
  })

  it('generates correct signature for tuples', () => {
    const fragment: FunctionFragment = contract.interface.functions['input_struct((uint256,uint256))']
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    expect(fragment !== undefined).toEqual(true)
  })

  // we skip this test as ts only about types
  it.skip('prevents from using not existing methods', () => {
    // @ts-expect-error
    contract.not_existing(1)
    // @ts-expect-error
    contract.functions.not_existing(1)
  })
})
