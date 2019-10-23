pragma solidity ^0.5;

import "./NFT.sol";

contract AtomicSwap721{
    struct Swap {
        uint256 timelock;
        uint256 tokenId;
        uint256 value;
        address tokenContract;
        address payable tokenSeller;
        address payable tokenBuyer;
        bytes32 secretLock;
    }

    enum States {
        INVALID,
        OPEN,
        CLOSED,
        EXPIRED
    }

    event Open(uint256 _swapId); //TO DO more detail!!
    event Close(uint256 _swapId); // TO DO more detail!!;
    event Expired(uint256 _swapId); // TODO

    mapping(uint256 => Swap) swaps;
    mapping(uint256 => States) states;

      modifier onlyInvalidSwaps(uint256 _swapID) {
        require (states[_swapID] == States.INVALID,"Already used!!");
        _;
    }

    modifier onlyOpenSwaps(uint256 _swapID) {
        require (states[_swapID] == States.OPEN,"Not opend!!");
        _;
    }

    modifier needSecretKey(uint256 _swapId,bytes32 _secretKey){
        require(swaps[_swapId].secretLock == keccak256(abi.encodePacked(_secretKey)),"Invalid key!!");
        _;
    }

    function open(uint256 _swapId,uint256 _timelock,uint256 _tokenId,address _tokenContract,address payable _tokenSeller,bytes32 _secretLock) public onlyInvalidSwaps(_swapId) payable {
        Swap memory swap = Swap({
            timelock:_timelock,
            tokenId:_tokenId,
            value: msg.value,
            tokenContract:_tokenContract,
            tokenSeller:_tokenSeller,
            tokenBuyer:msg.sender,
            secretLock:_secretLock
        });
        swaps[_swapId] = swap;
        states[_swapId] = States.OPEN;
        emit Open(_swapId);
    }

    function expire(uint256 _swapId) public onlyOpenSwaps(_swapId){
        swaps[_swapId].tokenBuyer.transfer(swaps[_swapId].value);
        states[_swapId] = States.EXPIRED;
    }

    function close(uint256 _swapId,bytes32 _secretKey) public onlyOpenSwaps(_swapId) needSecretKey(_swapId,_secretKey) {
        //TODO value is OK?
        NFT nft = NFT(swaps[_swapId].tokenContract);
        require(nft.getApproved(swaps[_swapId].tokenId) == address(this),"I cant pay for you!!");
        //require(nft.transferFrom(swaps[_swapId].tokenSeller,swaps[_swapId].tokenBuyer,swaps[_swapId].tokenId));
        nft.transferFrom(swaps[_swapId].tokenSeller,swaps[_swapId].tokenBuyer,swaps[_swapId].tokenId);
        swaps[_swapId].tokenSeller.transfer(swaps[_swapId].value);
        emit Close(_swapId);
    }


}