// Boolean in Solidity

pragma solidity ^0.8.9;

contract Boolean {
    bool public myBool = true;
    
    function getValue() public constant returns(bool) {
        return myBool;
    }
    
    function setValue(bool _myBool) public {
        myBool = _myBool;
    }
}
