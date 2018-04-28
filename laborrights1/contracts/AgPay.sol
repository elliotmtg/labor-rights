pragma solidity ^0.4.4;

contract Payroll {

	using SafeMath for uint256;

	address public owner; 

    struct payInput {
    	uint cropcondition;
        uint wage;
        uint count;
        bool checker;
        bool worker;

    }

    mapping(uint => payInput) public payInputs;
    mapping (address => uint256) public balances;
	mapping (address => uint256) public employees;

	function Payroll() public {
		owner=msg.sender;
	}

	function transfer(uint amount, address recipient) payable public{
		require(balances[msg.sender] >= amount); 
		require(balances[msg.sender] - amount <= balances[msg.sender]);
		require(balances[recipient] + amount >= balances[recipient]);

        if (cropcondition == 1 && checker = 1 && worker=1) {
        	amount = wage * count;
		    balances[msg.sender] -= amount;
		    balances[msg.recipient] += amount;
	    } else if (cropcondition == 2 && checker = 1 && worker=1) {
	        amount = wage * count * .8;
		    balances[msg.sender] -= amount;
		    balances[msg.recipient] += amount;
		} else if (cropcondition == 3 && checker = 1 && worker=1) {
        	amount = wage * count * .5;
		    balances[msg.sender] -= amount;
		    balances[msg.recipient] += amount;
	    } else if (cropcondition == 2 && checker = 1 && worker=0) {
	        amount = wage * count * .8;
		    balances[msg.sender] -= amount;
		    balances[msg.recipient] += amount;
		} else if (cropcondition == 3 && checker = 1 && worker=0) {
	        amount = wage * count * .5;
		    balances[msg.sender] -= amount;
		    balances[msg.recipient] += amount;
		} 	
	}
}