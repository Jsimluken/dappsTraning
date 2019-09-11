pragma solidity ^0.5;


contract RecoverAddress{
    function recoverAddress(bytes memory sig,bytes32 _hash) public pure returns (address){
        require(sig.length == 65);
        bytes32 ra;
        bytes32 sa;
        uint8 va;

        assembly{
            ra := mload(add(sig, 32))
            sa := mload(add(sig, 64))
            va := byte(0, mload(add(sig, 96)))
        }
        if (va < 27) {
            va += 27;
        }
      bytes memory prefix = "\x19Ethereum Signed Message:\n32";
      bytes32 prefixedHash = keccak256(abi.encodePacked(prefix, _hash));

      address recoveredAddress = ecrecover(prefixedHash, va, ra, sa);
      return recoveredAddress;
    }
}