# Creating New Smart Contract Instance

In Ethers.js, a **Contract** is an abstraction that allows interaction with smart contracts deployed on the Ethereum blockchain. To create a new instance, you need the contract's address and Application Binary Interface (ABI).

Example:
```javascript
const contract = new ethers.Contract(contractAddress, contractABI, signerOrProvider);
```

---

## Contract Properties
- `address`: The address of the deployed contract.
- `provider`: The provider used to interact with the contract.
- `signer`: The signer used to send transactions.
- `interface`: The ABI interface of the contract.

---

## Contract Methods
Contract methods represent the functions defined in the smart contract:
- **Read-only (constant)**: Call functions that do not modify blockchain state.
  ```javascript
  const result = await contract.readFunction(arg1, arg2);
  ```
- **State-changing (transactional)**: Send transactions to execute functions that modify state.
  ```javascript
  const tx = await contract.writeFunction(arg1, arg2);
  const receipt = await tx.wait();
  ```

---

## Events
Contracts can emit events during execution, which can be listened to using:
- `contract.on(eventName, listener)`: Subscribe to an event.
- `contract.once(eventName, listener)`: Listen to an event once.
- `contract.off(eventName, listener)`: Unsubscribe from an event.
- `contract.removeAllListeners([eventName])`: Remove all listeners.

Example:
```javascript
contract.on("Transfer", (from, to, amount) => {
  console.log(`${amount} tokens transferred from ${from} to ${to}`);
});
```

---

## ContractFactory
A **ContractFactory** is an abstraction for deploying new contracts. It encapsulates the bytecode and ABI of a contract.

### Creating ContractFactory Instances
You can create a `ContractFactory` by providing the ABI and bytecode:
```javascript
const factory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
```

---

### ContractFactory Interface Properties
- `interface`: The contract's ABI interface.
- `bytecode`: The bytecode of the contract.
- `signer`: The signer used to deploy the contract.

---

### ContractFactory Methods
- `deploy(...args)`: Deploys a new contract instance.
  ```javascript
  const contract = await factory.deploy(arg1, arg2);
  await contract.deployed();
  ```
- `getDeployTransaction(...args)`: Returns the transaction data for deployment.
- `attach(address)`: Returns a `Contract` instance attached to an existing address.

---

## Meta-Class
The Meta-Class in Ethers.js allows for advanced contract interactions, such as dynamically interacting with multiple instances of contracts with similar interfaces.

---

## Deploying a Contract
To deploy a contract using a `ContractFactory`:
```javascript
const factory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
const contract = await factory.deploy(arg1, arg2);
await contract.deployed();
console.log("Contract deployed at:", contract.address);
```

---

## Connecting to a Contract
You can connect to an already deployed contract using:
```javascript
const contract = new ethers.Contract(contractAddress, contractABI, signerOrProvider);
```

### Properties
- `address`
- `interface`
- `signer`
- `provider`

### Methods
- Read-only methods for fetching data.
- Transactional methods for modifying data.

### Events
- Listen to and react to contract events.

---

## Meta-Class Methods
- `populateTransaction`: Prepares a transaction without sending it.
- `estimateGas`: Estimates the gas required for a transaction.

---

## Meta-Class Filters
- `filters[eventName]`: Creates a filter object for an event.

---

## Hardhat Automated Testing with Ethers.js and Waffle
**Hardhat** provides an environment for Ethereum development, and Waffle is a library for testing smart contracts. Together with Ethers.js, they simplify automated testing.

### Setting up a Test
1. Install dependencies:
   ```bash
   npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai ethers
   ```
2. Write a test:
   ```javascript
   const { expect } = require("chai");

   describe("MyContract", function () {
     it("Should deploy and interact", async function () {
       const [owner] = await ethers.getSigners();
       const MyContract = await ethers.getContractFactory("MyContract");
       const contract = await MyContract.deploy();
       await contract.deployed();

       expect(await contract.someFunction()).to.equal("Expected Value");
     });
   });
   ```
3. Run tests:
   ```bash
   npx hardhat test
   ```

This setup enables seamless contract deployment, interaction, and validation in tests.
