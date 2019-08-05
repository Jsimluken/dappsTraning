var contract;
var abi;
var address;

ethereum.enable();

const getContract = async ()=>{
    var response = await fetch("./build/contracts/SimpleStorage.json");
    var json = await response.json();
    abi = json.abi;
    address = json.networks[5777].address;
    contract = web3.eth.contract(abi).at(address);
}

getContract();