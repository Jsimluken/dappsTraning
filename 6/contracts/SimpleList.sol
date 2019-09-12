pragma solidity ^0.5;
pragma experimental ABIEncoderV2;


contract SimpleList{
    string[] list;

    function getList() public view returns (string[] memory){
        return list;
    }
    function addList(string memory str) public{
        list.push(str);
    } 
}