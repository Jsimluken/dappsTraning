pragma solidity ^0.5;


contract Caller {
    function hyperCall(address _to, bytes memory _data) public returns (bool, bytes memory){
        return _to.call(_data);
    }
}