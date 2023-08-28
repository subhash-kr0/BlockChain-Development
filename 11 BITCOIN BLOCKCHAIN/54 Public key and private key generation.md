Here's a simplified example of generating a Bitcoin key pair using JavaScript (Node.js):

javascript
Copy code
const crypto = require('crypto');
const bitcoin = require('bitcoinjs-lib');

// Generate a random private key
const privateKey = crypto.randomBytes(32); // 256 bits

// Generate the corresponding public key
const publicKey = bitcoin.ECPair.fromPrivateKey(privateKey).publicKey;

// Generate a Bitcoin address from the public key
const keyPair = bitcoin.ECPair.fromPublicKey(publicKey);
const address = keyPair.getAddress();

console.log('Private Key:', privateKey.toString('hex'));
console.log('Public Key:', publicKey.toString('hex'));
console.log('Bitcoin Address:', address);
In practice, you should use well-established libraries like bitcoinjs-lib or wallets to manage your Bitcoin keys securely. It's important to follow best practices for key storage, backup, and recovery to prevent the loss of funds.