const crypto = require('crypto');

function createBitcoinMessageHash(message) {
  const messagePrefix = '\x18Bitcoin Signed Message:\n' + message.length.toString();
  const messageBuffer = Buffer.from(messagePrefix + message, 'utf8');
  const messageHash = crypto.createHash('sha256').update(messageBuffer).digest();
  const doubleHash = crypto.createHash('sha256').update(messageHash).digest();
  return doubleHash.toString('hex');
}

const message = "Hello, this is a signed message!";
const messageHash = createBitcoinMessageHash(message);

console.log("Bitcoin Message Hash:", messageHash);
