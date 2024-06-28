The Truffle for VS Code extension simplifies how you create, build, debug and deploy smart contracts on Ethereum and all EVM-based blockchains and layer 2. The extension has built-in integration with many tools and services including Truffle, Ganache, and Infura.

It combines all the important features of Truffle CLI, Ganache and Infura into a single, more user-friendly user experience so that you do not have to leave Visual Studio while building a dapp.

Truffle for VS Code also offers comprehensive native IDE Solidity debugging support, taking advantage of VS Code's great debugging features such as variables, watches, and breakpoints. This means that you no longer need to jump between different tools or windows while you edit, compile, deploy, transact, and debug smart contracts.

Installation¶
Truffle for VS Code can be installed from the VS Code marketplace. After installation, the extension may ask you to install certain local dependencies if you haven't done so already. But, don't worry! We have created a helpful guide to make the installation process smooth and easy.

Create project¶
The Truffle extension for VS Code provides an easy way for developers to create a new Solidity project using the Command Palette. If you are not familiar with Truffle, this is a simple way to scaffold out a project directory. Just select "Truffle: New Solidity Project" from the Command Palette, choose an empty directory, give your project a name, and hit Enter.

Alternatively, you can also use the Truffle CLI directly from the VS Code terminal by running truffle init.

Compile contract
After creating a project directory, it will include a basic contract and all the necessary files to build and deploy a simple working contract to an RPC endpoint. To build your contract, simply select the Solidity (.sol) file of your contract, right-click on it, and choose "Truffle: Build Contracts". That's it!

Deploy contract¶
Once you've compiled your contract, the contract metadata (including the contract ABI and bytecode) will be available in a .json file located in the ./build directory.

To deploy your compiled contract, right-click on the Solidity (.sol) file and select "Truffle: Deploy Contracts". The extension will start a Ganache instance by default and deploy the contract to a local network.

For more information on how you can deploy to any Ethereum network through Infura, see Truffle for VS Code documentation..

Debug contract¶
Truffle for VS Code extension comes bundled with the Truffle debugger, you can use the debugger by following these steps:

Start the debugger by selecting Truffle: Debug Transaction in the command palette which can be accessed using Ctrl + Shift + P for Windows or ⌘ + Shift + P for Macs. Then select the network to debug against.
Select the transaction hash to debug.
The VSCode debugger launches, and you can use typical debugger functions such as watch windows, view the call stack, and step in/out/over.