// Integer types

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IntegerExample {
uint256 public myUint;
int256 public myInt;
	
function setValues(uint256 _myUint, int256 _myInt) public {
	myUint = _myUint;
	myInt = _myInt;
}

function multiply(uint256 _value) public view returns (uint256) {
	return myUint * _value;
}
}
