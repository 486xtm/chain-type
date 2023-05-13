/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  NestedLibrary,
  NestedLibraryInterface,
} from "../../../../v0.8.9/nested/b/NestedLibrary";

const _abi = [
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class NestedLibrary__factory {
  static readonly abi = _abi;
  static createInterface(): NestedLibraryInterface {
    return new Interface(_abi) as NestedLibraryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NestedLibrary {
    return new Contract(address, _abi, runner) as unknown as NestedLibrary;
  }
}
