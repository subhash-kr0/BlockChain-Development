// Array

// Solidity program to demonstrate
// creating a fixed-size array
pragma solidity ^0.8.0;

// Creating a contract
contract Types {

	// Declaring state variables
	// of type array
	uint[6] data1;
	
	// Defining function to add
	// values to an array
	function array_example() public returns (
	int[5] memory, uint[6] memory){
		
		int[5] memory data
		= [int(50), -63, 77, -28, 90];
		data1
		= [uint(10), 20, 30, 40, 50, 60];
		
		return (data, data1);
}
}
