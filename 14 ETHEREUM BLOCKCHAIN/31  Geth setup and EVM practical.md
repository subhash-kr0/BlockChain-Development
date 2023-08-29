Here are the steps on how to setup Geth and perform some EVM practicals:

Install Geth. Geth is an Ethereum client that can be used to run a full node, mine Ethereum, and develop Ethereum applications. You can install Geth on your computer by following the instructions on the Geth website.
Create a Geth keystore. A Geth keystore is a file that stores your Ethereum private key. You can create a Geth keystore by running the following command:
     geth account new
This will create a new keystore file in your current directory.

Start a Geth node. Once you have installed Geth and created a Geth keystore, you can start a Geth node by running the following command:
    geth --datadir /path/to/datadir --networkid 1337
This will start a Geth node on the Ropsten test network.

Deploy an EVM contract. Once you have a Geth node running, you can deploy an EVM contract by running the following command:
    geth contract deploy /path/to/contract.sol
This will deploy the contract file contract.sol to the Ethereum blockchain.

Call an EVM contract function. Once you have deployed an EVM contract, you can call a function on the contract by running the following command:
    geth contract call /path/to/contract.sol myFunction someArgs
This will call the function myFunction on the contract contract.sol with the arguments someArgs.

These are just some of the things you can do with Geth and the EVM. There are many other things you can do, such as mining Ethereum, creating a private Ethereum network, and developing Ethereum applications.