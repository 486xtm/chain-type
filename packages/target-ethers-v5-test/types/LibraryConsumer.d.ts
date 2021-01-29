/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface LibraryConsumerInterface extends ethers.utils.Interface {
  functions: {
    "someOther(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "someOther",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "someOther", data: BytesLike): Result;

  events: {};
}

export class LibraryConsumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: LibraryConsumerInterface;

  functions: {
    someOther(b: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;
  };

  someOther(b: BigNumberish, overrides?: CallOverrides): Promise<number>;

  "someOther(uint8)"(
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  callStatic: {
    someOther(b: BigNumberish, overrides?: CallOverrides): Promise<number>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    someOther(b: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    someOther(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
