Tezos Quickstart¶
Wanna build apps on Tezos using Truffle? You're in the right place.

## Installing Truffle¶ ##
You'll need to download a special version of Truffle to use Tezos.

   $ npm install -g truffle@tezos
If you already have Truffle installed, we recommend uninstalling truffle before running the above command.

## Using the Tezos Truffle Box¶ ##
This quick start uses an already-created project to provide the base Truffle project structure and example contracts.

In your workspace directory, run the following commands:

$ mkdir tezos-example
$ cd tezos-example
$ truffle unbox tezos-example

## Writing Contracts¶ ##
The example box comes with two contracts, which you can find in the ./contracts folder:

Counter.ligo
Migrations.ligo
SimpleStorage.ligo
You can see that these contracts end in the .ligo file extension. This refers to the LIGO programming language. See the Writing Tezos contracts section for more info.

## Configuring Truffle to point to the Tezos testnet ##
First, navigate to https://faucet.tzalpha.net/ to get a faucet account. This will create a new account for you on the testnet and fill it with some testnet XTZ. This account is valid for all Tezos test networks. Download the file and save it as faucet.json in the root of your project.

Next, replace the box's truffle-config.js with the following:


const { mnemonic, secret, password, email } = require("./faucet.json");

module.exports = {
  // see <https://trufflesuite.com/docs/tezos/truffle/reference/configuring-tezos-projects>
  // for more details on how to specify configuration options!
  networks: {
    development: {
      host: "https://delphinet.smartpy.io",
      port: 443,
      network_id: "*",
      secret,
      mnemonic,
      password,
      email,
      type: "tezos"
    }
  }
};


## Running Truffle's deployment scripts ##
The example box comes default with pre-written deployment scripts, found within the ./migrations directory:

1_initial_migration.js
2_deploy_simple_storage.js
3_deploy_counter.js
Truffle will handle running these scripts when you run the following command:
      $ truffle migrate