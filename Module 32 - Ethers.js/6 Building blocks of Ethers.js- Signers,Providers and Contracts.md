## Building blocks of Ethers.js - Signers, Providers, and Contracts

Ethers.js is built around three core components: **Signers**, **Providers**, and **Contracts**. Each plays a crucial role in interacting with the Ethereum blockchain.

### 1. Signers

A **Signer** is an abstraction for an Ethereum account capable of signing transactions and messages. A signer is needed for sending transactions, deploying contracts, or interacting with smart contracts that require state changes.

- **Signer** is connected to a specific Ethereum account.
- It allows sending transactions and interacting with contracts by signing them.
- A signer can be created from a wallet or a MetaMask provider.

#### Example:

```javascript
const provider = new ethers.providers.Web3Provider(window.ethereum);
await window.ethereum.request({ method: "eth_requestAccounts" });

const signer = provider.getSigner();
```
 - getSigner(): Returns the signer for the current account.
 - signer.getAddress(): Retrieves the address of the signer.

### 2. Providers
A Provider allows interaction with the Ethereum blockchain by querying data from the network (e.g., balances, block information). Providers cannot sign transactions; they are used for reading information.

There are different types of providers:

 - Web3Provider: Used with MetaMask and other injected wallets.
 - JsonRpcProvider: Used for connecting to remote Ethereum nodes or services like Infura and Alchemy.
 - EtherscanProvider: A provider that fetches data from Etherscan.

Example:
```javascript
// Using a JsonRpcProvider with an Infura URL
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Querying the current block number
const blockNumber = await provider.getBlockNumber();
console.log(`Current Block Number: ${blockNumber}`);

```

### 3. Contracts
A Contract in Ethers.js represents an Ethereum smart contract deployed on the blockchain. You can interact with contracts by calling their methods, sending transactions, and listening to events.

To interact with a contract, you need the contract's ABI (Application Binary Interface) and its address.

Example:
```javascript
const contractAddress = "0x...";  // Address of the deployed contract
const abi = [ /* ABI Array */ ];   // ABI of the contract
const contract = new ethers.Contract(contractAddress, abi, provider);

// Interacting with a contract method
const result = await contract.someMethod();
console.log(result);
```
 - new ethers.Contract(): Creates a contract instance.
 - contract.someMethod(): Calls a contract method. You can also pass parameters and retrieve return values.

### Summary
 - Signers: Used for signing transactions and interacting with state-changing methods in contracts.
 - Providers: Used for reading data from the Ethereum blockchain.
 - Contracts: Enable interaction with deployed smart contracts by calling methods and listening to events.