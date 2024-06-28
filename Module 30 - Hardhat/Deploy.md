To tell Hardhat to connect to a specific Ethereum network, you can use the --network parameter when running any task, like this:

  =>npx hardhat ignition deploy ./ignition/modules/Token.js --network <network-name>

Deploying to remote networks
To deploy to a remote network such as mainnet or any testnet, you need to add a network entry to your {hardhat.config.js} file. We’ll use Sepolia for this example, but you can add any network. For key storage, utilize the configuration variables.


Infura or Alchemy
require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and add it to the configuration variables
const INFURA_API_KEY = vars.get("INFURA_API_KEY");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};