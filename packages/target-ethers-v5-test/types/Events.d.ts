/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EventsInterface extends ethers.utils.Interface {
  functions: {
    "emit_anon1()": FunctionFragment;
    "emit_event1()": FunctionFragment;
    "emit_event2()": FunctionFragment;
    "emit_event3()": FunctionFragment;
    "emit_event3_overloaded()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emit_anon1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3_overloaded",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emit_anon1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emit_event1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3_overloaded",
    data: BytesLike
  ): Result;

  events: {
    "AnonEvent1(uint256)": EventFragment;
    "Event1(uint256,uint256)": EventFragment;
    "Event2(uint256)": EventFragment;
    "Event3(bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnonEvent1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event3"): EventFragment;
}

export class Events extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EventsInterface;

  functions: {
    emit_anon1(overrides?: Overrides): Promise<ContractTransaction>;

    "emit_anon1()"(overrides?: Overrides): Promise<ContractTransaction>;

    emit_event1(overrides?: Overrides): Promise<ContractTransaction>;

    "emit_event1()"(overrides?: Overrides): Promise<ContractTransaction>;

    emit_event2(overrides?: Overrides): Promise<ContractTransaction>;

    "emit_event2()"(overrides?: Overrides): Promise<ContractTransaction>;

    emit_event3(overrides?: Overrides): Promise<ContractTransaction>;

    "emit_event3()"(overrides?: Overrides): Promise<ContractTransaction>;

    emit_event3_overloaded(overrides?: Overrides): Promise<ContractTransaction>;

    "emit_event3_overloaded()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  emit_anon1(overrides?: Overrides): Promise<ContractTransaction>;

  "emit_anon1()"(overrides?: Overrides): Promise<ContractTransaction>;

  emit_event1(overrides?: Overrides): Promise<ContractTransaction>;

  "emit_event1()"(overrides?: Overrides): Promise<ContractTransaction>;

  emit_event2(overrides?: Overrides): Promise<ContractTransaction>;

  "emit_event2()"(overrides?: Overrides): Promise<ContractTransaction>;

  emit_event3(overrides?: Overrides): Promise<ContractTransaction>;

  "emit_event3()"(overrides?: Overrides): Promise<ContractTransaction>;

  emit_event3_overloaded(overrides?: Overrides): Promise<ContractTransaction>;

  "emit_event3_overloaded()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    emit_anon1(overrides?: CallOverrides): Promise<void>;

    "emit_anon1()"(overrides?: CallOverrides): Promise<void>;

    emit_event1(overrides?: CallOverrides): Promise<void>;

    "emit_event1()"(overrides?: CallOverrides): Promise<void>;

    emit_event2(overrides?: CallOverrides): Promise<void>;

    "emit_event2()"(overrides?: CallOverrides): Promise<void>;

    emit_event3(overrides?: CallOverrides): Promise<void>;

    "emit_event3()"(overrides?: CallOverrides): Promise<void>;

    emit_event3_overloaded(overrides?: CallOverrides): Promise<void>;

    "emit_event3_overloaded()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    AnonEvent1(value1: BigNumberish | null): EventFilter;

    Event1(value1: BigNumberish | null, value2: null): EventFilter;

    Event2(undefined: null): EventFilter;

    Event3(value1: boolean | null, value2: null): EventFilter;
  };

  estimateGas: {
    emit_anon1(overrides?: Overrides): Promise<BigNumber>;

    "emit_anon1()"(overrides?: Overrides): Promise<BigNumber>;

    emit_event1(overrides?: Overrides): Promise<BigNumber>;

    "emit_event1()"(overrides?: Overrides): Promise<BigNumber>;

    emit_event2(overrides?: Overrides): Promise<BigNumber>;

    "emit_event2()"(overrides?: Overrides): Promise<BigNumber>;

    emit_event3(overrides?: Overrides): Promise<BigNumber>;

    "emit_event3()"(overrides?: Overrides): Promise<BigNumber>;

    emit_event3_overloaded(overrides?: Overrides): Promise<BigNumber>;

    "emit_event3_overloaded()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    emit_anon1(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emit_anon1()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    emit_event1(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emit_event1()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    emit_event2(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emit_event2()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    emit_event3(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emit_event3()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emit_event3_overloaded()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
