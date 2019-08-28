pragma solidity ^0.5;


contract Callee {
    event Set(string data);
    string data;

    constructor(string memory _data) public{
        data = _data;
    }

    function set(string memory _data) public {
        data = _data;
        emit Set(_data);
    }
    
    function get() public view returns (string memory){
        return data;
    }
}