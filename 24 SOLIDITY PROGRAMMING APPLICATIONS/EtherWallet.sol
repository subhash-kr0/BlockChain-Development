// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

// contract EtherWallet {
//     address public owner;
    
//     constructor(address _owner) {
//         owner = _owner;
//     }
    
//     function deposit() payable public {
        
//     }
    
//     function send(address payable to, uint amount) public {
//         if(msg.sender == owner) {
//             to.transfer(amount);
//             return;
//         }
//         revert('Sender is not allowed');
//     }
    
//     function balanceOf() view public returns(uint) {
//         return address(this).balance;
//     }
// }

contract EtherWallet {
    address payable public owner;

    contructor() {
        owner = msg.sender;
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, 'You are not the owner');
        owner.transfer(_amount);
    }

    function balanceOf() view public returns(uint) {
        return address(this).balance;
    }
}