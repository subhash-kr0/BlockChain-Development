// Dynamic Array

// Solidity program to demonstrate
// creating a dynamic array
pragma solidity ^0.8.0;

// Creating a contract
contract Types {

	// Declaring state variable
	// of type array. One is fixed-size
	// and the other is dynamic array
	uint[] data
	= [10, 20, 30, 40, 50];
	int[] data1;

	// Defining function to
	// assign values to dynamic array
	function dynamic_array() public returns(
	uint[] memory, int[] memory){

		data1
		= [int(-60), 70, -80, 90, -100, -120, 140];
		return (data, data1);
	}
}
