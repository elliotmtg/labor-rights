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
        uint pieceWeight;
        uint pueceRate;
        uint date;
    }

    // this data is all publicly explorable
    mapping(bytes32 => pieceEntry) public pieceEntries;

    // for event listeners    
    event LogApprovedDocument(address approver, bytes32 docHash);
    
    //add view function
 
    
}