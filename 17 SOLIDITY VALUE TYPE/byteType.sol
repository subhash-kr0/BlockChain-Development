// Byte Type

// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract EndiannessExample {
	bytes4 public number;

	constructor() {
		number = 0x12345678;
	}

	function getIndividualBytes() public view returns (bytes1, bytes1, bytes1, bytes1) {
		bytes1 byte1 = bytes1(number[0]);
		bytes1 byte2 = bytes1(number[1]);
		bytes1 byte3 = bytes1(number[2]);
		bytes1 byte4 = bytes1(number[3]);

		return (byte1, byte2, byte3, byte4);
	}
}
