// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract A{
    string public name = "Contract A";

    function grtName() public view returns (string memory){
        return name;
    }
}

//shadowing is not allowed in solidity 0.6

contract C is A {
    //This is correct way to override inherited state variable
    constructor() {
        name = "Contract C";
    }
}