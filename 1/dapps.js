var contract;
var abi;
var address;

ethereum.enable();



const getContract = async ()=>{
    var response = await fetch("./build/contracts/SimpleStorage.json");
    var json = await response.json();
    abi = json.abi;

}