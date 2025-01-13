# What are Signers?

In Ethers.js, a **Signer** represents an entity that can sign transactions and messages. Signers are used to send transactions, interact with smart contracts, and authenticate actions. Unlike Providers, which read data from the blockchain, Signers perform write operations by creating and signing transactions.

---

## Wallet Signer
The **Wallet Signer** is a representation of a private key in Ethers.js. It can be used to sign transactions and messages or interact with smart contracts. Wallets can be created in several ways:

- From a private key: `new ethers.Wallet(privateKey)`
- From a mnemonic phrase: `ethers.Wallet.fromMnemonic(mnemonic)`
- From a JSON wallet: `ethers.Wallet.fromEncryptedJson(json, password)`

---

## JsonRPC Signer
The **JsonRPC Signer** is associated with a JSON-RPC provider. It allows signing transactions and interacting with blockchain accounts managed by the connected node.

Example:
```javascript
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
```

---

## Signer Class and Member Functions
The `Signer` class is the base for all Signer objects. Common methods include:

- `getAddress()`: Returns the address of the signer.
- `signMessage(message)`: Signs a message.
- `sendTransaction(transaction)`: Sends a signed transaction.
- `connect(provider)`: Connects the signer to a provider.
- `signTransaction(transaction)`: Signs a raw transaction object.

---

## Ethers.js Wallet Class and Member Functions
The `Wallet` class in Ethers.js is an extension of the `Signer` class. It represents a private key and provides the following functions:

- `getAddress()`: Returns the wallet's address.
- `signMessage(message)`: Signs a message using the wallet's private key.
- `signTransaction(transaction)`: Signs a transaction object.
- `sendTransaction(transaction)`: Sends a signed transaction.
- `encrypt(password[, options])`: Encrypts the wallet's private key with a password.

---

## VoidSigner
The **VoidSigner** is a placeholder signer. It is used when you need to represent an address without having access to its private key. This is useful for read-only operations.

Example:
```javascript
const voidSigner = new ethers.VoidSigner(address, provider);
```

---

## Interacting with Externally Owned Accounts (EOA)
Externally Owned Accounts (EOAs) are accounts controlled by private keys, as opposed to smart contract accounts. Signers are essential for interacting with EOAs because they:

- Authenticate the account holder.
- Sign transactions to be sent to the blockchain.
- Enable interaction with smart contracts on behalf of the account.

Typical interactions include:
- Sending ETH or tokens.
- Invoking smart contract functions.
- Signing off-chain messages for authentication or data integrity.
