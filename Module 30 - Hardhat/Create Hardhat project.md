## Creating a new Hardhat project ##

Open a new terminal and run these commands to create a new folder:

mkdir hardhat-tutorial
cd hardhat-tutorial

npm init

Now we can install Hardhat:
    =>npm install --save-dev hardhat

In the same directory where you installed Hardhat run:
    =>npx hardhat init
    =>Select {Create an empty hardhat.config.js} with your keyboard and hit enter.

Compilation
   =>npx hardhat compile

Explore any task by running 
   =>npx hardhat help [task]

## Plugins ##

In this tutorial we are going to use our recommended plugin, 
@nomicfoundation/hardhat-toolbox
, which has everything you need for developing smart contracts.

To install it, run this in your project directory:
   => npm install --save-dev @nomicfoundation/hardhat-toolbox

Add the highlighted line to your hardhat.config.js so that it looks like this:

{{ require("@nomicfoundation/hardhat-toolbox"); }}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};