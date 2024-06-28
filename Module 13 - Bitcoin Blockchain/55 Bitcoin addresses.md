Bitcoin addresses are alphanumeric strings that represent a destination for Bitcoin transactions. They are derived from public keys and are used to receive funds. Bitcoin addresses help ensure the privacy of the parties involved in a transaction since they don't directly reveal the public key or identity of the recipient. Here's how Bitcoin addresses work and how they're constructed:

Address Generation Process:

Public Key: The starting point is the public key, which is derived from the private key using elliptic curve cryptography.

Hashing: A hash function, usually SHA-256, is applied to the public key to create a hash. Then, RIPEMD-160 hash function is applied to the SHA-256 hash to produce a shorter hash.

Version Byte: A version byte is added to indicate the address type and network (mainnet, testnet, etc.). This helps ensure that addresses for different networks don't overlap.

Checksum: A checksum is calculated by taking the first 4 bytes of the double SHA-256 hash of the extended hash (version byte + RIPEMD-160 hash). This checksum acts as a form of error detection.

Base58 Encoding: The version byte, extended hash, and checksum are combined and encoded in base58 format. Base58 is used to represent the data in a human-readable and compact form, excluding ambiguous characters.

Bitcoin Address Formats:

Pay-to-Public-Key-Hash (P2PKH): These addresses begin with a '1'. They're the most common and recognizable type of Bitcoin address. P2PKH addresses start with a '1' and are 34 characters long.

Pay-to-Script-Hash (P2SH): These addresses begin with a '3'. P2SH addresses are used for more complex transaction scripts, including multi-signature transactions. They're 34 characters long.

Native Segregated Witness (P2WPKH): These addresses start with 'bc1' and are used to take advantage of the Segregated Witness (SegWit) upgrade. They're more efficient and secure than traditional P2PKH addresses.


// Code
const bitcoin = require('bitcoinjs-lib');

const keyPair = bitcoin.ECPair.makeRandom(); // Generate random key pair
const publicKey = keyPair.publicKey;

const publicKeyHash = bitcoin.crypto.hash160(publicKey); // Hash the public key
const version = 0x00; // Mainnet P2PKH address version byte

const payload = Buffer.concat([Buffer.from([version]), publicKeyHash]); // Add version byte and hash
const checksum = bitcoin.crypto.sha256(bitcoin.crypto.sha256(payload)).slice(0, 4); // Calculate checksum

const addressBytes = Buffer.concat([payload, checksum]); // Combine payload and checksum
const address = bitcoin.address.toBase58Check(addressBytes); // Base58 encode

console.log('Public Key:', publicKey.toString('hex'));
console.log('Bitcoin Address:', address);
