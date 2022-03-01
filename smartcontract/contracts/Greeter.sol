//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    event GreetingEvent(string greeting, uint256 time);
    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
        emit GreetingEvent(_greeting, block.timestamp);
    }

    uint256 public number = 0;
    event NumberUpdated(uint256 oldNumber, uint256 newNumber, uint256 time);
    function setCounter(uint256 newNumber) public {
        uint256 oldNum = number;
        number = newNumber;
        emit NumberUpdated(oldNum, number, block.timestamp);
    }
}
