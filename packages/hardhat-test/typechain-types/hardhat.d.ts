/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Counter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Counter__factory>;
    getContractFactory(
      name: "Demo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Demo__factory>;
    getContractFactory(
      name: "Hello",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hello__factory>;
    getContractFactory(
      name: "StructsInConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StructsInConstructor__factory>;

    getContractAt(
      name: "Counter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Counter>;
    getContractAt(
      name: "Demo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Demo>;
    getContractAt(
      name: "Hello",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hello>;
    getContractAt(
      name: "StructsInConstructor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StructsInConstructor>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
