Web3.js Providers Overview
Providers are services that are responsible for enabling Web3.js connectivity with the Ethereum network. Using a provider to connect your application to an Ethereum node is necessary for querying data, sending transactions, and interacting with smart contracts. This guide will explore the different types of Web3.js providers, how to set them up, and how to use them in an application.

A provider is typically supplied when constructing a new Web3 object:

Initialize a provider
import { Web3 } from 'web3';

const web3 = new Web3(/* PROVIDER*/);

// calling any method that interacts with the network will use the supplied provider
await web3.eth.getBlockNumber();

The new Web3 instance will use the supplied provider to interact with the blockchain network. This interaction happens when sending requests and receiving responses, and possibly when listening to provider events (if the provider supports this).

Providers Types
Web3.js supports several types of providers for different use cases. Here are the available types:

HTTP Provider
WebSocket Provider
IPC Provider (for Node.js)
Injected Providers (Compliant with EIP 1193)
HTTP and WebSocket providers can be supplied as URL strings. All provider types can be supplied by constructing one of the SupportedProviders types.