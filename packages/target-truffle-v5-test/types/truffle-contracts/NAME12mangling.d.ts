/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface NAME12manglingContract
  extends Truffle.Contract<NAME12manglingInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<NAME12manglingInstance>;
}

type AllEvents = never;

export interface NAME12manglingInstance extends Truffle.ContractInstance {
  works(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  provider(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  methods: {
    works(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    provider(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
