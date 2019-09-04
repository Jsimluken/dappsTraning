pragma solidity ^0.5;
import "./Storage.sol";

contract StorageFactory{
    mapping(address => Storage) storages;
    address[] addresses;

    event MakeStorage(address creator,Storage _storage);

    function makeStorage() public returns (Storage){
        Storage _storage = new Storage(msg.sender);
        storages[msg.sender] = _storage;
        addresses.push(msg.sender);
        emit MakeStorage(msg.sender,_storage);
        return _storage;
    }
    function getNum() public view returns  (uint){
        return addresses.length;
    }
}