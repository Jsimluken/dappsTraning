pragma solidity ^0.5;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract Token is ERC20,ERC20Detailed{

    constructor(string memory _name,string memory _symbol,uint8 _decimal,uint256 _value) ERC20Detailed( _name, _symbol, _decimal) public {
        _mint(msg.sender, _value);
    }
}