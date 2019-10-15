pragma solidity ^0.5;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

contract NFT is ERC721Full{
    uint256 nonce;
    mapping(uint256 => string) idToName;
    /*struct NTF{
        uint256 id;
        string name;
    }*/

    constructor() ERC721Full("MyToken","MT") public {
        nonce = 0;
    }

    function add(string memory _name) public {
        _mint(msg.sender,nonce);
        idToName[nonce] = _name;
        nonce += 1;
    }

    function get(uint256 id) public view returns (string memory){
        return idToName[id];
    }

    function num() public view returns(uint256){
        return nonce;
    }



}
