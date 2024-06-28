=> Truffle Dashboard¶
To deploy your smart contract, you need to specify an Ethereum account that has enough funds to cover the transaction fees of the deployment. To do this, you’d typically copy-paste your mnemonic phrase to a .gitignored .env file. This is necessary because your mnemonic or private key gives Truffle the necessary ability to sign transactions on your behalf.

Truffle Dashboard completely removes the need to share your mnemonic phrase or private keys throughout the development lifecycle. You can now safely deploy your smart contracts to your network of choice without Truffle ever needing to know what your keys look like.

Truffle seamlessly connects to your MetaMask wallet without any configuration using the currently selected account and network for Truffle's deployment configuration.

## Installation ##
     npm uninstall -g truffle
     npm install -g truffle

### Quick Start ###
Running truffle dashboard in a separate terminal window starts Truffle Dashboard at http://localhost:24012 and automatically opens a new tab in your browser.
       truffle dashboard [--port <number>] [--host <string>] [--verbose]

Truffle Dashboard running at [http://localhost:24012](http://localhost:24012)
DashboardProvider RPC endpoint running at [http://localhost:24012/rpc](http://localhost:24012/rpc)


    => To deploy your contracts using Truffle Dashboard, run the command:

                   {{ truffle migrate --network dashboard }}


## Configuration ##
The port and host can be configured through command line options, or by configuring them inside your truffle-config.js.

1. On the command line:
    {truffle dashboard --port <port of choice> --host <host of choice>` }

2. In your Truffle configuration (truffle-config.js) file:


    module.exports = {
      ...
      dashboard: {
        port: 25012,
        host: "localhost"
      }
    }


=> Transaction decoding¶
Truffle Dashboard uses the @truffle/decoder library we described earlier to decode requests from certain RPC calls for example eth_sendTransaction, personal_sign, eth_signTypedData_v3, and eth_signTypedData_v4.



## Using Truffle Dashboard with Hardhat##
Truffle Dashboard now offers full support for Hardhat projects through the @truffle/dashboard-hardhat-plugin. Prior to this plugin, Hardhart users were not able to see decoded transaction information, including function names and all argument values. This plugin adds that, providing extra visibility into a transaction before you issue a signature using your browser-based wallet.

=> You can install this plugin by running:
               npm install --save-dev @truffle/dashboard-hardhat-plugin

=> Then simply import the plugin in your hardhat.config.ts:
           import "@truffle/dashboard-hardhat-plugin";

=> To use this plugin, you are required to have Truffle installed either globally or in a local project. If it's not installed, you can install it using the command 
       npm i -g truffle

=> This plugin automatically adds the truffleDashboard, so there's no need to add it manually to hardhat.config.ts.

=> You can start using this plugin by specifying --network truffleDashboard when running Hardhat commands e.g., npx hardhat run ./scripts/deploy-contracts.ts --network truffleDashboard. The truffleDashboard network includes sensible defaults and the URL property is set to http://localhost:24012/rpc.