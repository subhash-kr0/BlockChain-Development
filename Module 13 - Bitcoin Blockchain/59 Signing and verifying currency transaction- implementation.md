const crypto = require('crypto');

// Simulate sender and receiver wallets
const senderPrivateKey = crypto.randomBytes(32); // Replace with actual private key
const senderPublicKey = crypto.createPublicKey(senderPrivateKey).export({ type: 'spki', format: 'pem' });

const receiverPublicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAL6eV2v7mlD6/TUq9i71RSP8LG1s0/uz
N6DhLNH2Htj0qKjNzUDtWfbAF1RRYOeP3mI2v36kgsJqq2ml3LPtz7cCAwEAAQ==
-----END PUBLIC KEY-----`;

// Simulate a currency transaction
const amount = 100;
const transactionData = `Sender: ${senderPublicKey}\nReceiver: ${receiverPublicKey}\nAmount: ${amount}`;

// Sign the transaction data with the sender's private key
const sign = crypto.createSign('SHA256');
sign.update(transactionData);
const signature = sign.sign(senderPrivateKey, 'hex');

console.log('Transaction Data:', transactionData);
console.log('Sender Signature:', signature);

// Verify the signature using the sender's public key
const verify = crypto.createVerify('SHA256');
verify.update(transactionData);

// Convert the signature from hex to a buffer
const receivedSignatureBuffer = Buffer.from(signature, 'hex');

// Verify the signature
const isValid = verify.verify(senderPublicKey, receivedSignatureBuffer);

console.log('Is the Signature Valid?', isValid);
