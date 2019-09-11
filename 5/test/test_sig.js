const RecoverAddress = artifacts.require("RecoverAddress");
contract("RecoverAddress",async (accounts)=>{
    it("SigTest", async ()=>{
        const data = "I am a hyper god";
        const _hash = web3.utils.sha3(data);
        console.log(_hash);
        const sig = await web3.eth.sign(_hash,accounts[0])
        console.log(_hash,sig);
        const inst = await RecoverAddress.deployed();
        var res = await inst.recoverAddress(sig,_hash);
        console.log(res,accounts[0]);
    })
});