pragma solidity ^0.5;

contract Storage{
    address owner;
    string data;

    event Set(string  data);
    
    constructor(address _owner) public {
        owner = _owner;
    }

    function set(string memory _data) public {
        require(msg.sender == owner,"Who are you!?");
        data = _data;
        emit Set(_data);
    }
    function get() public view returns(string memory){
        return data;
    }
}