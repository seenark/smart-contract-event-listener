/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "greeting",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "GreetingEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "NumberUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newNumber",
        type: "uint256",
      },
    ],
    name: "setCounter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006001553480156200001657600080fd5b5060405162000db138038062000db183398181016040528101906200003c91906200027d565b6200006c60405180606001604052806022815260200162000d8f60229139826200008c60201b620002ac1760201c565b8060009080519060200190620000849291906200015b565b50506200049c565b6200012e8282604051602401620000a592919062000303565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200013260201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200016990620003f7565b90600052602060002090601f0160209004810192826200018d5760008555620001d9565b82601f10620001a857805160ff1916838001178555620001d9565b82800160010185558215620001d9579182015b82811115620001d8578251825591602001919060010190620001bb565b5b509050620001e89190620001ec565b5090565b5b8082111562000207576000816000905550600101620001ed565b5090565b6000620002226200021c8462000372565b6200033e565b9050828152602081018484840111156200023b57600080fd5b62000248848285620003c1565b509392505050565b600082601f8301126200026257600080fd5b8151620002748482602086016200020b565b91505092915050565b6000602082840312156200029057600080fd5b600082015167ffffffffffffffff811115620002ab57600080fd5b620002b98482850162000250565b91505092915050565b6000620002cf82620003a5565b620002db8185620003b0565b9350620002ed818560208601620003c1565b620002f8816200048b565b840191505092915050565b600060408201905081810360008301526200031f8185620002c2565b90508181036020830152620003358184620002c2565b90509392505050565b6000604051905081810181811067ffffffffffffffff821117156200036857620003676200045c565b5b8060405250919050565b600067ffffffffffffffff82111562000390576200038f6200045c565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620003e1578082015181840152602081019050620003c4565b83811115620003f1576000848401525b50505050565b600060028204905060018216806200041057607f821691505b602082108114156200042757620004266200042d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6108e380620004ac6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638381f58a146100515780638bb5d9c31461006f578063a41368621461008b578063cfae3217146100a7575b600080fd5b6100596100c5565b60405161006691906106b7565b60405180910390f35b61008960048036038101906100849190610571565b6100cb565b005b6100a560048036038101906100a09190610530565b61011a565b005b6100af61021a565b6040516100bc91906105e2565b60405180910390f35b60015481565b60006001549050816001819055507f6ada386509b5b660320fe5bd746575dfb30ec326896e2f9d28a4405f8edfdf83816001544260405161010e939291906106d2565b60405180910390a15050565b6101c760405180606001604052806023815260200161088b6023913960008054610143906107d2565b80601f016020809104026020016040519081016040528092919081815260200182805461016f906107d2565b80156101bc5780601f10610191576101008083540402835291602001916101bc565b820191906000526020600020905b81548152906001019060200180831161019f57829003601f168201915b505050505083610348565b80600090805190602001906101dd929190610410565b507feab205dcafc6282ae9b97968661721c3a330212d7ce90665ca411c75d401e3dc814260405161020f929190610687565b60405180910390a150565b606060008054610229906107d2565b80601f0160208091040260200160405190810160405280929190818152602001828054610255906107d2565b80156102a25780601f10610277576101008083540402835291602001916102a2565b820191906000526020600020905b81548152906001019060200180831161028557829003601f168201915b5050505050905090565b61034482826040516024016102c2929190610604565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103e7565b5050565b6103e28383836040516024016103609392919061063b565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103e7565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461041c906107d2565b90600052602060002090601f01602090048101928261043e5760008555610485565b82601f1061045757805160ff1916838001178555610485565b82800160010185558215610485579182015b82811115610484578251825591602001919060010190610469565b5b5090506104929190610496565b5090565b5b808211156104af576000816000905550600101610497565b5090565b60006104c66104c18461073a565b610709565b9050828152602081018484840111156104de57600080fd5b6104e9848285610790565b509392505050565b600082601f83011261050257600080fd5b81356105128482602086016104b3565b91505092915050565b60008135905061052a81610873565b92915050565b60006020828403121561054257600080fd5b600082013567ffffffffffffffff81111561055c57600080fd5b610568848285016104f1565b91505092915050565b60006020828403121561058357600080fd5b60006105918482850161051b565b91505092915050565b60006105a58261076a565b6105af8185610775565b93506105bf81856020860161079f565b6105c881610862565b840191505092915050565b6105dc81610786565b82525050565b600060208201905081810360008301526105fc818461059a565b905092915050565b6000604082019050818103600083015261061e818561059a565b90508181036020830152610632818461059a565b90509392505050565b60006060820190508181036000830152610655818661059a565b90508181036020830152610669818561059a565b9050818103604083015261067d818461059a565b9050949350505050565b600060408201905081810360008301526106a1818561059a565b90506106b060208301846105d3565b9392505050565b60006020820190506106cc60008301846105d3565b92915050565b60006060820190506106e760008301866105d3565b6106f460208301856105d3565b61070160408301846105d3565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156107305761072f610833565b5b8060405250919050565b600067ffffffffffffffff82111561075557610754610833565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156107bd5780820151818401526020810190506107a2565b838111156107cc576000848401525b50505050565b600060028204905060018216806107ea57607f821691505b602082108114156107fe576107fd610804565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61087c81610786565b811461088757600080fd5b5056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220ca59f327808114f3171ba38533b44ae8346a04ac88c85ee37d77b5300273cc0464736f6c634300080000334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

export class Greeter__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
