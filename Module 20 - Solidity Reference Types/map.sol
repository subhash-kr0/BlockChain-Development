// Solidity program to
// demonstrate mapping
pragma solidity ^0.4.18;

// Defining contract
contract mapping_example {
	
	//Defining structure
	struct student
	{
		// Declaring different
		// structure elements
		string name;
		string subject;
		uint8 marks;
	}
	
	// Creating a mapping
	mapping (
	address => student) result;
	address[] public student_result;
}
