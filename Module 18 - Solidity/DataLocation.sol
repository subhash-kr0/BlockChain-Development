// SPDEX-License_Identifier: MIT

pragma solidity ^0.8.13;

contract DataLocations {
    uint[] public arr;
    mapping(uint => address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint => MyStruct) myStructs;

    function f() pulic {
        // call _f with state variables
        _f(arr, map, myStructs[1])

        //get struct from a mapping
        MyStruct storage myStruct = myStructs[1];
        // Create a struct in memory
        MyStruct memory myMemStruct = MyStruct[0];
    }

    function _f(
        uint storage _arr,
        mapping(uint => address) storage _map,
        MyStruct storage _myStruct
    ) internal {
        // do something with storage variables
    }

    //You can return with storage variables
    function g(uint[] memory _arr) public returns (uint[] memory){
        //do something with memory array
    }

    function h(uint[] calldata _arr) external {
        //do something with calldata array 
        
    }
}