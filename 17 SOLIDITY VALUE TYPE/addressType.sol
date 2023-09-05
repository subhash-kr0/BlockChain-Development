// Address Type in Solidity


// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract helloGeeks {
	address public userAddress;

	function setAddress(address _newAddress) public {
		userAddress = _newAddress;
	}
}


