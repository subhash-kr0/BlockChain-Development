const crypto = require('crypto');

class Transaction {
    constructor(sender, receiver, amount) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.signature = null;
    }

    calculateHash() {
        const data = this.sender + this.receiver + this.amount;
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    signTransaction(privateKey) {
        const transactionHash = this.calculateHash();
        const sign = crypto.createSign('SHA256');
        sign.update(transactionHash);
        this.signature = sign.sign(privateKey, 'hex');
    }

    isValid() {
        if (!this.signature || this.signature.length === 0) {
            return false;
        }

        const publicKey = crypto.createPublicKey(this.sender);
        const verify = crypto.createVerify('SHA256');
        verify.update(this.calculateHash());

        return verify.verify(publicKey, Buffer.from(this.signature, 'hex'));
    }
}

class Block {
    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
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
        return new Block('01/01/2023', [], '0');
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

    createTransaction(senderPrivateKey, receiverPublicKey, amount) {
        const senderPublicKey = crypto.createPrivateKey(senderPrivateKey).publicKey;
        const transaction = new Transaction(senderPublicKey, receiverPublicKey, amount);
        transaction.signTransaction(crypto.createPrivateKey(senderPrivateKey));

        this.pendingTransactions.push(transaction);
    }
}

// Usage
const myPrivateKey = crypto.randomBytes(32);
const myPublicKey = crypto.createPublicKey(myPrivateKey);

const blockchain = new Blockchain();

const receiverPublicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAL6eV2v7mlD6/TUq9i71RSP8LG1s0/uz
N6DhLNH2Htj0qKjNzUDtWfbAF1RRYOeP3mI2v36kgsJqq2ml3LPtz7cCAwEAAQ==
-----END PUBLIC KEY-----`;

blockchain.createTransaction(myPrivateKey, receiverPublicKey, 50);
blockchain.minePendingTransactions(myPublicKey);

console.log('Is transaction valid?', blockchain.chain[1].transactions[0].isValid());
