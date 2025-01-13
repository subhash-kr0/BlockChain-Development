## Connecting to Ethereum: RPC

You can also connect to Ethereum using a remote provider through **RPC** (Remote Procedure Call). Services like **Infura**, **Alchemy**, or your own Ethereum node provide RPC endpoints that allow you to interact with the Ethereum blockchain without needing to run a full node yourself.

### Steps:

1. **Sign up for an RPC provider**:
   - **Infura**: [Sign up here](https://infura.io/) and get a project ID for accessing the Ethereum network.
   - **Alchemy**: [Sign up here](https://www.alchemy.com/) to obtain an API URL.
   - You can also set up your own Ethereum node and use its RPC URL.

2. **Connect using the RPC URL**:
   - Once you have your RPC URL from Infura or Alchemy, you can use it to connect to the Ethereum network.

### Example Code:

```javascript
// Replace with your own RPC URL from Infura, Alchemy, or your Ethereum node
const rpcUrl = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";

// Create a new provider
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

// Now you can interact with the Ethereum network
const blockNumber = await provider.getBlockNumber();
console.log(`Current Block Number: ${blockNumber}`);
```

## Explanation:
 - ethers.providers.JsonRpcProvider(rpcUrl): Creates a provider using the RPC URL to connect to the Ethereum network.
 - You can query blockchain data, like block numbers, account balances, and send transactions, using this provider.
 - This method doesn't require any user interaction, unlike MetaMask, making it ideal for server-side applications or automated scripts.