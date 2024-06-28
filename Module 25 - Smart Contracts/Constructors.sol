// Solidity program to demonstrate 
// Indirect Initialization
pragma solidity ^0.5.0;

// Creating a contract
contract Base {

// Declaring state variable
string str;

// Defining a constructor
constructor(
	string memory _str) public {
	str = _str; 
}

// Defining a function
function Print(
) public returns(string memory){
	return "Indirect Initialization";
}
}

// Child contract inheriting 
// parent contract 'Base'
contract Derived is Base {

// Defining a constructor
constructor(
	string memory _info) Base(
	string(abi.encodePacked(
	_info, _info))) public {}

// Defining function to 
// return value of parent 
// contract variable 'str'
function getStr(
) public view returns(string memory){
	return str;
}
}

// Caller contract
contract caller {

	// Creating an object of 
	// child contract
	Derived c 
	= new Derived("GeeksForGeeks");

	//Defining a function to access 
	// functions of the parent
	//contract and child contract
	function getResult() public view{
		c.Print();
		c.getStr();
	}
}
