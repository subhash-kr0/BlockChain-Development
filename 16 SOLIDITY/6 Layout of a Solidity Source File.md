
A Solidity source file can contain an arbitrary number of contract definitions, import , pragma and using directives.

Here is the basic layout of a Solidity source file:

pragma solidity ^0.8.0;

// Import directives
import "other.sol";

// Using directives
using Counter for Counter;

// Contract definitions
contract MyContract {
  // Contract variables
  uint256 public count;

  // Contract functions
  function increment() public {
    count++;
  }
}

contract OtherContract {
  // Contract variables
  uint256 public count;

  // Contract functions
  function decrement() public {
    count--;
  }
}
The pragma solidity directive specifies the version of Solidity that the source file is written in.

The import directive imports a file from another Solidity source file.

The using directive imports a namespace from another Solidity source file.

The contract keyword defines a contract.

The public keyword specifies that a variable or function is accessible from outside the contract.

The function keyword defines a function.

The { and } characters delimit the body of the contract.

Here are some of the other keywords that are commonly used in Solidity:

struct: Defines a struct, which is a data structure that can be used to group together related data.
enum: Defines an enum, which is a data type that can be used to represent a set of named values.
event: Defines an event, which is used to notify other contracts of an event that has occurred.
modifier: Defines a modifier, which is a function that can be used to restrict the execution of a function.