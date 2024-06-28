Implementing a full distributed peer-to-peer blockchain system like Coinbase from scratch using JavaScript is a massive undertaking that requires a deep understanding of blockchain concepts, cryptography, networking, and more. However, I can provide you with a high-level outline of how you might approach building a simple blockchain system using JavaScript:

1. Set Up Node Environment:
Make sure you have Node.js and a package manager like npm or yarn installed on your system.

2. Create the Blockchain:
Create a JavaScript class to represent the blockchain. This class will manage the chain of blocks, validate transactions, and handle consensus mechanisms.

3. Create Blocks:
Define a block structure that contains the previous block's hash, a timestamp, a list of transactions, and a nonce. Implement methods to calculate the hash of a block and mine a new block.

4. Implement Proof of Work (PoW):
Add a PoW mechanism to validate new blocks. Miners must find a nonce that, when combined with the block's data, produces a hash with a specific number of leading zeros. This process ensures the blockchain's security and consensus.

5. Transactions and Wallets:
Create classes for transactions and wallets. Transactions should include sender, receiver, amount, and signature. Wallets generate key pairs (public and private keys) for users and sign transactions using private keys.

6. Peer-to-Peer Networking:
Implement a simple networking layer using WebSocket or other libraries to connect nodes in a P2P network. Nodes will broadcast transactions and new blocks to each other.

7. Consensus Algorithm:
Develop a consensus algorithm that ensures agreement among nodes on the validity of transactions and blocks. PoW or other consensus mechanisms can be used.

8. API Endpoints:
Create API endpoints using a web framework like Express.js to allow users to interact with the blockchain, submit transactions, and view the blockchain's state.

9. Mining and Transactions:
Implement the process of mining new blocks by selecting pending transactions and running the PoW algorithm. Transactions should be validated and added to the pending transaction pool before being included in a block.

10. Security Measures:
Implement proper encryption, hashing, and validation mechanisms to ensure the security of transactions and data.

11. Testing and Debugging:
Thoroughly test the blockchain for different scenarios, including transactions, mining, and network disruptions. Use debugging tools to identify and fix issues.

12. Deployment:
Deploy your blockchain on multiple nodes and simulate a network environment. Monitor the network's health and performance.


const crypto = require('crypto');

class Transaction {
    constructor(sender, receiver, amount) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
    }

    calculateHash() {
        const data = this.sender + this.receiver + this.amount;
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    signTransaction(signingKey) {
        const transactionHash = this.calculateHash();
        const signature = signingKey.sign(transactionHash, 'base64');
        this.signature = signature.toDER('hex');
    }
}

class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        const data = this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce;
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block mined:', this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block('01/01/2023', 'Genesis Block', '0');
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
        const rewardTx = new Transaction(null, miningRewardAddress, this.miningReward);
        this.pendingTransactions.push(rewardTx);

        const block = new Block(Date.now(), this.pendingTransactions, this.getLastBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        this.pendingTransactions = [];
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }
}

// Usage
const myKey = crypto.createECDH('secp256k1');
const myWalletAddress = myKey.generateKeys('base64').publicKey;

const blockchain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'receiverPublicKey', 10);
tx1.signTransaction(myKey);
blockchain.createTransaction(tx1);

console.log('Starting the miner...');
blockchain.minePendingTransactions(myWalletAddress);

console.log('My balance:', blockchain.getBalanceOfAddress(myWalletAddress));
