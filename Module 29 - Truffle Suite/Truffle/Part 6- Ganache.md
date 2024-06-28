## Ganache ##
Ganache is a local blockchain simulator or a personal blockchain for dapp development, It allows developers to simulate an Ethereum network locally on their machine, making it easier and faster to test and debug smart contracts without having to deploy them on a live network.

It also allows developers to customize the blockchain to suit their testing needs. For example, developers can specify the number of accounts on the blockchain, the initial balance of each account, the gas limit for each block, the block time and more.

In addition to usage via the CLI from within JavaScript programmatically, ganache also provides a GUI, aptly named Ganache UI.

Ganache UI provides a graphical user interface that displays useful information such as account balances, transactions, and gas usage, making it easier for developers to understand the behavior of their smart contracts.

## Installation ##
-> Ganache comes in two forms, as a UI and as a CLI, but it can be used in three ways: UI, CLI, and programmatically. Ganache UI can be downloaded from the Truffle Suite website while the ganache npm package can be installed with the following command:

             =>npm install ganache --global


## How to connect a Truffle project to Ganache ##
-> To link a Truffle project with Ganache, make sure that a Ganache instance is active in the background. You can initiate a CLI instance by executing the command ganache in the terminal or launch a UI instance by clicking the Ganache icon after downloading it.

Depending on which one you choose, you'll have access to 10 accounts, each with 100 ether at your disposal. In a separate terminal window, navigate to your Truffle project directory and run the following command to compile your smart contracts:
             {truffle compile}

=> Next, you need to configure Truffle to use the Ganache network by updating the {truffle-config.js} file in your project directory. Open the file and update the networks section as follows:

Ganache CLI:


    module.exports = {
      networks: {
        development: {
          host: "127.0.0.1",
          port: 8545,
          network_id: "*", // Match any network id
        },
      },
      // ...rest of your config
    }
Ganache UI:


    module.exports = {
      networks: {
        development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: "*", // Match any network id
        },
      },
      // ...rest of your config
    }
The above code snippets tells Truffle to connect to the local Ganache blockchain running on localhost at port 8545 (CLI) or 7545 (UI). Once you've updated the configuration file, you can deploy your smart contracts to the Ganache network using the following command:

    {truffle migrate --network development}

This will deploy your smart contracts to the Ganache network, and you should see the output in your terminal indicating the status of the deployment.


## Forking ##
A very useful step in software development is being able to test applications in a sandbox environment that closely resembles the production environment in which the application is going to live. This is particularly important in web3 and dapp development since we want to ensure that our dapps work as expected before deploying to a live network.

Ganache as mentioned earlier, acts like a sandbox environment for dapp development but the forking feature makes it even more interesting as it allows developers to make a copy of the Ethereum blockchain’s state. This means that developers can now develop dapps in an environment that closely resembles production.

This isn’t only limited to Ethereum mainnet as you can also fork any Ethereum testnet as well. To use this feature, start an instance of Ganache on the command line, passing in the --fork flag like so:
       {ganache --fork}

This command creates a fork of Ethereum Mainnet. Alternatively, you can specify which network to fork using the --fork.network option.
            {ganache --fork.network <network name>}

By default, Ganache uses Infura as the blockchain provider but you can specify the provider URL to use with the --fork.url option.
             {ganache --fork.url <URL>}


## Time manipulation ##
Ganache also supports time manipulation during testing, e.g fast forwarding and rewinding time. This is particularly useful when testing a smart contract that requires that a specific time passes before users can take certain actions.

Ganache exposes two RPC methods for manipulating time during testing:

         evm_increaseTime
         evm_setTime


Ganache in the browser¶
Ganache can be used in the browser with this line of code:


<script src="[https://cdn.jsdelivr.net/npm/ganache@](https://cdn.jsdelivr.net/npm/ganache@)>VERSION NUMBER>/dist/web/ganache.min.js"></script>
If you specify the version number 7.3.2 or greater, you also get the zero-config mainnet forking feature. The latest version as of the time of writing is 7.8.0. You can try this out with the below code sample.


<script src="https://cdn.jsdelivr.net/npm/ganache@7.8.0/dist/web/ganache.min.js"></script>

    <script>
        const options = { fork: { network: "mainnet" } }
        const provider = Ganache.provider(options);
    <script>
Now verify that this is working by attempting to fetch a mainnet block using the eth_getBlockByNumber method:


const block = await provider.request({ method: "eth_getBlockByNumber", params: ["0xec4eb0"] });

console.log(block); // will be mainnet's block 15486640
Here’s a sample HTML code that puts it all together:


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ganache Example</title>
</head>
<body>
    <h1>Ganache Example</h1>
    <script src="https://cdn.jsdelivr.net/npm/ganache@7.8.0/dist/web/ganache.min.js"></script>


    <script>
        (async function() {
            const options = { fork: { network: "mainnet" } }
            const provider = Ganache.provider(options);
            const block = await provider.request({ method:       "eth_getBlockByNumber", params: ["0xec4eb0"] });
            console.log(block); // will be mainnet's block 15486640
        })()
    </script>
</body>
</html>