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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "greet()": FunctionFragment;
    "number()": FunctionFragment;
    "setCounter(uint256)": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "greet", values?: undefined): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCounter",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;

  decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setCounter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;

  events: {
    "GreetingEvent(string,uint256)": EventFragment;
    "NumberUpdated(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GreetingEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NumberUpdated"): EventFragment;
}

export type GreetingEventEvent = TypedEvent<
  [string, BigNumber] & { greeting: string; time: BigNumber }
>;

export type NumberUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    oldNumber: BigNumber;
    newNumber: BigNumber;
    time: BigNumber;
  }
>;

export class Greeter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GreeterInterface;

  functions: {
    greet(overrides?: CallOverrides): Promise<[string]>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    setCounter(
      newNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  greet(overrides?: CallOverrides): Promise<string>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  setCounter(
    newNumber: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGreeting(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    greet(overrides?: CallOverrides): Promise<string>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    setCounter(
      newNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "GreetingEvent(string,uint256)"(
      greeting?: null,
      time?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { greeting: string; time: BigNumber }
    >;

    GreetingEvent(
      greeting?: null,
      time?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { greeting: string; time: BigNumber }
    >;

    "NumberUpdated(uint256,uint256,uint256)"(
      oldNumber?: null,
      newNumber?: null,
      time?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { oldNumber: BigNumber; newNumber: BigNumber; time: BigNumber }
    >;

    NumberUpdated(
      oldNumber?: null,
      newNumber?: null,
      time?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { oldNumber: BigNumber; newNumber: BigNumber; time: BigNumber }
    >;
  };

  estimateGas: {
    greet(overrides?: CallOverrides): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    setCounter(
      newNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCounter(
      newNumber: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGreeting(
      _greeting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
