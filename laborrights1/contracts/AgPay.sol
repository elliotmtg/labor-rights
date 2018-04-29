pragma solidity ^0.4.6;

contract AgPay {

    address public checker;
    address public worker;

    struct pieceEntry {
        address checker;
        address worker;
        bool approvedBychecker;
        bool approvedByworker;
        string pieceCondition;
        string employmentContract;
        uint pieceWeight;
        uint pueceRate;
        uint date;

    }

    // this data is all publicly explorable
    mapping(bytes32 => pieceEntry) public pieceEntries;

    //record
    event Record(address checker, address worker,bool approvedBychecker, bool approvedByworker,
        string pieceCondition, string employmentContract, uint pieceWeight, uint pueceRate,
        uint date);
        
    function record(address checker, address worker, bool approvedBychecker, bool approvedByworker,
        string pieceCondition, string employmentContract, uint pieceWeight, uint pueceRate,
        uint date) public {
        registry[msg.sender] = pieceEntry(checker,
        worker,
        approvedBychecker,
        approvedByworker,
        pieceCondition,
        employmentContract,
        pieceWeight,
        pueceRate,
        date);
    }
    mapping (address => pieceEntry) public registry;
    
    //view fx

}