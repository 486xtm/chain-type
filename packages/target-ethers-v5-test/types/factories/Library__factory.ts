/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Library, LibraryInterface } from "../Library";
import { Interface } from "@ethersproject/abi";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "b",
        type: "Lib.BOOL",
      },
    ],
    name: "other",
    outputs: [
      {
        internalType: "enum Lib.BOOL",
        name: "",
        type: "Lib.BOOL",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class Library__factory {
  static readonly abi = _abi;
  static get interface(): LibraryInterface {
    return new Interface(_abi) as LibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Library {
    return new Contract(address, _abi, signerOrProvider) as Library;
  }
}
