## nstallation¶ ##
Install Drizzle via npm:  npm install --save @drizzle/store
-> Using React?: The easiest way to get started with Drizzle is to use our official @drizzle/react-plugin package and (optionally) its companion @drizzle/react-components.

## Initialization¶ ##
Note: Since Drizzle uses web3 1.0 and web sockets, be sure your development environment can support these. As a development blockchain, you'll need ganache-cli v6.1.0+, geth or parity.

1. Import the provider.
        import { Drizzle } from '@drizzle/store'


2. Create an options object and pass in the desired contract artifacts for Drizzle to instantiate. Other options are available, see the Options section.

// Import contracts
import SimpleStorage from './../build/contracts/SimpleStorage.json'
import TutorialToken from './../build/contracts/TutorialToken.json'

const options = {
  contracts: [
    SimpleStorage
  ]
}

const drizzle = new Drizzle(options)