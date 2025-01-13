# What are Providers?

In the Ethers.js library, a **Provider** is an abstraction that provides a connection to the Ethereum network. It allows developers to query blockchain data, interact with smart contracts, and send transactions. Providers do not manage private keys or sign transactions but focus on retrieving and broadcasting blockchain data.

---

## Ethers.js Provider API Overview

Ethers.js offers various types of providers to connect to the Ethereum network through different nodes and APIs. These providers enable interactions with Ethereum data, including accounts, blocks, transactions, and logs.

---

### Provider Account Methods
- `getBalance(address[, blockTag])`
- `getTransactionCount(address[, blockTag])`
- `getCode(address[, blockTag])`
- `getStorageAt(address, position[, blockTag])`

---

### Blocks Methods
- `getBlock(blockHashOrBlockTag)`
- `getBlockWithTransactions(blockHashOrBlockTag)`
- `getBlockNumber()`
- `getGasPrice()`
- `getFeeData()`

---

### Ethereum Naming Service (ENS) Methods
- `resolveName(name)`
- `lookupAddress(address)`
- `getAvatar(name)`

---

### EnsResolver
An object to interact with resolved ENS names:
- `getAddress()`
- `getContentHash()`
- `getText(key)`

---

### Logs Methods
- `getLogs(filter)`

---

### Network Status Methods
- `getNetwork()`
- `getChainId()`

---

### Transactions Methods
- `getTransaction(transactionHash)`
- `getTransactionReceipt(transactionHash)`
- `waitForTransaction(transactionHash[, confirmations[, timeout]])`

---

### Event Emitter Methods
- `on(eventName, listener)`
- `once(eventName, listener)`
- `off(eventName[, listener])`
- `removeAllListeners([eventName])`

---

### Inspection Methods
- `listAccounts()`
- `listenerCount(eventName)`
- `listeners(eventName)`

---

## BaseProvider
Base class for all providers in Ethers.js. Implements common methods for querying blockchain data.

---

## JsonRpcProvider
Connects to the Ethereum network using JSON-RPC over HTTP or HTTPS.

---

## JsonRpcSigner
Manages signing transactions using private keys.

---

## JsonRpcUncheckedSigner
Similar to `JsonRpcSigner` but skips transaction nonce management.

---

## StaticJsonRpcProvider
A variation of `JsonRpcProvider` with static network configuration.

---

## Node-Specific Methods
Node-specific provider extensions, such as `IpcProvider` and `WebSocketProvider`, allow enhanced interactions depending on the environment.

---

## API Providers

### EtherscanProvider
Uses the Etherscan API to access Ethereum data.

### InfuraProvider
Connects via the Infura API for scalable Ethereum access.

### AlchemyProvider
Utilizes the Alchemy API for blockchain data.

### CloudflareProvider
Provides Ethereum data via Cloudflare's service.

### PocketProvider
Uses Pocket Network to fetch Ethereum data.

### AnkrProvider
Connects through the Ankr API for reliable access to Ethereum.

---

## Other Providers

### FallbackProvider
Combines multiple providers for reliability and redundancy.

### IpcProvider
Connects to the Ethereum network using Inter-Process Communication (IPC).

### JsonRpcBatchProvider
Allows batch processing of JSON-RPC requests.

### UrlJsonRpcProvider
Simplifies connection setup using a URL endpoint.

### Web3Provider
Wraps a web3-compatible provider for Ethereum interactions.

### WebSocketProvider
Provides a persistent WebSocket connection for real-time updates.
