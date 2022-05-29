/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IRoyaltiesProvider,
  IRoyaltiesProviderInterface,
} from "../IRoyaltiesProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getRoyalties",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "value",
            type: "uint96",
          },
        ],
        internalType: "struct LibPart.Part[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IRoyaltiesProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IRoyaltiesProviderInterface {
    return new utils.Interface(_abi) as IRoyaltiesProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRoyaltiesProvider {
    return new Contract(address, _abi, signerOrProvider) as IRoyaltiesProvider;
  }
}