//Here's a simple example using the crypto module in Node.js:

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


//if you want to implement a Bitcoin message hash without using the Node.js crypto module, you can use the js-sha256 library which provides SHA-256 hashing functionality for browsers

<!-- <!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
</head>
<body>
  <script>
    function createBitcoinMessageHash(message) {
      const messagePrefix = '\x18Bitcoin Signed Message:\n' + message.length.toString();
      const messageBuffer = new TextEncoder().encode(messagePrefix + message);
      const messageHash = sha256.array(messageBuffer);
      const doubleHash = sha256.array(messageHash);
      return doubleHash.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }

    const message = "Hello, this is a signed message!";
    const messageHash = createBitcoinMessageHash(message);

    console.log("Bitcoin Message Hash:", messageHash);
  </script>
</body>
</html> -->
