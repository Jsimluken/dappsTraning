const Caller = artifacts.require("Caller");
const Callee = artifacts.require("Callee");

contract("Test call from contract",async (accounts)=>{
    it("Test",async ()=>{
        const caller = await Caller.deployed();
        const callee = await Callee.deployed();
        var result = await callee.get();
        console.log(result);
        
        var abi = callee.contract.methods.set("Hyper!!!!!").encodeABI();
        var address = callee.address;
        await caller.hyperCall(address,abi);
        var result = await callee.get();


        console.log(result);

    })
});