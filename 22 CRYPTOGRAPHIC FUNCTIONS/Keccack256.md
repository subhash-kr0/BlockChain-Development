You can use Keccak256 hashing to authenticate payloads of data. For example, consider an object that generates a unique hash. This hash can be saved on the blockchain along with information such as who saved it, when it was saved, etc. Later, when someone is presented with the object from some other source, they can compute the hash themselves and then consult the blockchain for authenticity. The blockchain would either respond that there is no known object with that hash (inauthentic), or it would be able to respond with the recorded details. This is just one of the many use cases for hashing.

Remember you can create a unique hash from an input but you can not determine the input from the hash. It is a one way street that provides unique authenticity.

Keccak is a family of cryptographic hash functions that eventually got standardized to SHA-3. Ethereum called it Keccak instead of SHA-3 as it has slightly different parameters than the current SHA-3. Keccak256 is a cryptographic function built into solidity. This function takes in any amount of inputs and converts it to a unique 32 byte hash.

The sample contract below takes a text value, a number and an Ethereum address and converts it to a unique 32 byte hash using Keccak256. It is a simple demonstration on how values can be hashed into a unique id.

Try out with the sample contract below. Input text, a number and an Ethereum address into the function and note the bytes32 output (hash). Then change one of the parameters, regenerate the bytes32 output and you will notice that the hash changes. Finally change all parameters back to what you started with and the bytes32 output (hash) will be the same as the original hash.

pragma solidity ^0.6.0;

//input text, number and address
//output is a unique 32 byte hash
contract hashtest {
    function hash(string memory _text, uint _num, address _addr) public pure returns (bytes32) {
        return keccak256(abi.encode(_text, _num, _addr));
    }
}