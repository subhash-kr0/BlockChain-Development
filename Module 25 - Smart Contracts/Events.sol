// IMP: We can add atmost 3 indexes in one event. 


// SPDX-License-Identifier: GPL-3.0
 
pragma solidity >=0.7.0 <0.9.0;
 
 
contract IndexEvents {
 
    event NewTrade(
        uint256 indexed date,
        address from,
        address indexed to,
        uint256 indexed amount
    );
 
    function trade(address to, uint256 amount) external  {
        emit NewTrade(block.timestamp, msg.sender, to,amount);
    }
}