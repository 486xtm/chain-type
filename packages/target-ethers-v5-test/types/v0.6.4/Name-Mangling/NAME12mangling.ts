/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface NAME12manglingInterface extends utils.Interface {
  functions: {
    "provider()": FunctionFragment;
    "works()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "provider" | "works"): FunctionFragment;

  encodeFunctionData(functionFragment: "provider", values?: undefined): string;
  encodeFunctionData(functionFragment: "works", values?: undefined): string;

  decodeFunctionResult(functionFragment: "provider", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "works", data: BytesLike): Result;

  events: {};
}

export interface NAME12mangling extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NAME12manglingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    provider(overrides?: CallOverrides): Promise<[boolean]>;

    works(overrides?: CallOverrides): Promise<[boolean]>;
  };

  works(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    provider(overrides?: CallOverrides): Promise<boolean>;

    works(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    provider(overrides?: CallOverrides): Promise<BigNumber>;

    works(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    works(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}