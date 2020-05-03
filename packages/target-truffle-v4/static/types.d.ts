/**
 * Globals
 */
/// <reference types="chai" />
/// <reference types="mocha" />

declare type BN = import('bn.js')
declare type Web3 = import('web3').default

declare const assert: Chai.AssertStatic
declare const expect: Chai.ExpectStatic

declare const web3: Web3

declare const artifacts: Truffle.Artifacts

/**
 * Global contract function
 */
interface ContractFunction extends Mocha.SuiteFunction {
  (title: string, fn: (this: Mocha.Suite, accounts: Truffle.Accounts) => void): Mocha.Suite
  only: ExclusiveContractFunction
  skip: PendingContractFunction
}

interface ExclusiveContractFunction extends Mocha.ExclusiveSuiteFunction {
  (title: string, fn: (this: Mocha.Suite, accounts: Truffle.Accounts) => void): Mocha.Suite
}

interface PendingContractFunction extends Mocha.PendingSuiteFunction {
  (title: string, fn: (this: Mocha.Suite, accounts: Truffle.Accounts) => void): Mocha.Suite | void
}

declare const contract: ContractFunction

/**
 * Namespace
 */
declare namespace Truffle {
  type Accounts = string[]

  interface TransactionDetails {
    from?: string
    gas?: BN | number | string
    gasPrice?: BN | number | string
    value?: BN | string
  }

  export interface TransactionLog<EVENTS extends AnyEvent> {
    address: string
    event: EVENTS['name']
    args: EVENTS['args']
    blockHash: string
    blockNumber: number
    logIndex: number
    transactionHash: string
    transactionIndex: number
    type: string
  }

  export interface TransactionResponse<EVENTS extends AnyEvent> {
    tx: string
    receipt: any
    logs: TransactionLog<EVENTS>[]
  }

  export interface AnyEvent {
    name: string
    args: any
  }

  interface Contract<T> extends ContractNew<any[]> {
    deployed(): Promise<T>
    at(address: string): T
    address: string
    contractName: string
  }

  interface ContractInstance {
    address: string
    contract: any
    transactionHash: string
  }

  interface ContractNew<ARGs extends any[]> {
    'new'(...args: ARGs): any
  }

  interface Deployer {
    link(library: Truffle.Contract<any>, destination: Truffle.Contract<any>): Deployer
    link(library: Truffle.Contract<any>, destinations: Array<Truffle.Contract<any>>): Deployer
    deploy<T extends any[]>(c: ContractNew<T>, ...args: T): Deployer
  }

  type Migration = (deploy: Deployer, network: string, accounts: Accounts) => void
}
