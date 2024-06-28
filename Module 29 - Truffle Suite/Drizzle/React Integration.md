React Integration¶

@drizzle/react-plugin is the official way to integrate Drizzle with your React dapp.

Check out the Drizzle Truffle Box for a complete example or continue reading to create your own setup.

Also, check out @drizzle/react-components for Drizzle's codebuilt react components.

Installation¶
Install Drizzle React-Plugin via npm:

          npm install @drizzle/react-plugin

Note: @drizzle/react-plugin requires Requires React v16.3+ for the Context API. You'll also need the @drizzle/store package, if it isn't already installed.

## Getting Started¶##

1. Import the DrizzleContext provider.

   import { DrizzleContext } from '@drizzle/react-plugin'

2. Create a drizzleOptions object and pass in the desired contract artifacts for Drizzle to instantiate. Other options are available, see the Options section of the Drizzle docs.


// Import contracts
import SimpleStorage from './../build/contracts/SimpleStorage.json'
import TutorialToken from './../build/contracts/TutorialToken.json'

const drizzleOptions = {
  contracts: [
    SimpleStorage,
    TutorialToken
  ],
  events: {
    SimpleStorage: ["StorageSet"],
  },
}


3. Import Drizzle.

        import { Drizzle } from "@drizzle/store";

4. Create a new drizzle instance with the drizzleOptions object.

          const drizzle = new Drizzle(drizzleOptions);

5. Pass the drizzle object to the DrizzleContext.Provider component.

<DrizzleContext.Provider drizzle={drizzle}></DrizzleContext.Provider>

6. Use DrizzleContext.Consumer to consume the drizzle context and pass drizzle and drizzleState to your component. Drizzle also provides codebuilt components via the @drizzle/react-components.

Note: We have to check that Drizzle is initialized before fetching data. The initialized variable returns the drizzle store's initialization status.


<DrizzleContext.Provider drizzle={drizzle}>
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const {drizzle, drizzleState, initialized} = drizzleContext;

      if(!initialized) {
        return "Loading..."
      }

      return (
          <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
        )
      }}
  </DrizzleContext.Consumer>
</DrizzleContext.Provider>


1. Fetch contract data by accessing contracts via drizzle and drizzleState in props. For more information on how this works, see How Data Stays Fresh in the Drizzle docs. For more info on the drizzle state, see state tree docs.
The example below utilizes drizzle's cacheCall feature, which caches and synchronizes the call with the store. For more information on cacheCall and also cacheSend, see Contract Interaction.


// sample component
import React from 'react';

class CacheCallExample extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.SimpleStorage;
    let dataKey = contract.methods["storedData"].cacheCall(); // declare this call to be cached and synchronized
    this.setState({ dataKey });
  }

  render() {
    const { SimpleStorage } = this.props.drizzleState.contracts;
    const displayData = SimpleStorage.storedData[this.state.dataKey]; // if displayData (an object) exists, then we can display the value below
    return (
      <p>Hi from Truffle! Here is your storedData: {displayData && displayData.value}</p>
    )
  }
}

export default CacheCallExample


Note: The contract instances have all the standard web3 properties and methods.


drizzle.contracts.SimpleStorage.methods.set(5).send(); // sets SimpleStorage contract's storedData state variable to uint 5.
drizzle.contracts.SimpleStorage.methods.storedData.call(); // gets the storedData value


## Example Code Snippet¶ ##

// App.js
import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";

import SimpleStorage from "./contracts/SimpleStorage.json";
import MyComponent from "./MyComponent"; // Check out drizzle's react components at @drizzle/react-components

const drizzleOptions = {
  contracts: [SimpleStorage],
  events: {
    SimpleStorage: ["StorageSet"],
  },
};

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const {drizzle, drizzleState, initialized} = drizzleContext;

          if(!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
            )
          }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;