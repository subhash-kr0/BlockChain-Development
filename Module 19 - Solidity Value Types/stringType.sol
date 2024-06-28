// String type

// Solidity program to set string value
// using function with parameters
pragma solidity ^0.8.0;

contract LearningStrings
{
	string public text;

	// Assigning the text directly
	function setText() public
	{
		text = 'hello';
	}

	// Assigning the text by passing the value in the function
	function setTextByPassing(string memory message) public
	{
		text = message;
	}

	// Function to get the text
	function getText() view public returns (string memory)
	{
		return text;
	}
}
