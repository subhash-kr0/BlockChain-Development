## Connecting to Ethereum: MetaMask

MetaMask is a popular browser extension wallet that allows users to interact with the Ethereum network. To connect to Ethereum using MetaMask with Ethers.js, follow these steps:

### Steps:

1. **Install MetaMask**:
   - Install the MetaMask extension in your browser (Chrome, Firefox, etc.) if you haven’t already.
   - Set up your MetaMask wallet and connect it to the desired Ethereum network (e.g., Mainnet, Rinkeby).

2. **Access the Ethereum Provider**:
   - MetaMask injects the `ethereum` object into the browser window, which Ethers.js uses as a provider.

3. **Request Account Access**:
   - Request the user to connect their MetaMask account by calling `eth_requestAccounts`.

4. **Create a Provider and Signer**:
   - Use Ethers.js to create a provider from MetaMask and obtain the signer for sending transactions.

### Example Code:

```javascript
// Check if MetaMask is installed
if (typeof window.ethereum !== 'undefined') {
    // Create a provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Request account access (MetaMask will prompt the user)
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get the signer (user's wallet)
    const signer = provider.getSigner();

    // Now you can interact with the Ethereum network
    const userAddress = await signer.getAddress();
    console.log(`Connected address: ${userAddress}`);
} else {
    console.log("MetaMask is not installed.");
}
```

## Explanation:
 - window.ethereum.request({ method: "eth_requestAccounts" }): Prompts the user to connect their MetaMask account.
 - ethers.providers.Web3Provider(window.ethereum): Creates a new provider to interact with Ethereum.
 - provider.getSigner(): Retrieves the signer (the connected wallet) to send transactions and interact with smart contracts.