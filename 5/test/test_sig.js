const RecoverAddress = artifacts.require("RecoverAddress");
contract("RecoverAddress",async (accounts)=>{
    it("SigTest", async ()=>{
        const data = "I am a hyper god";
        const _hash = web3.utils.sha3(data);
        //console.log(_hash);
        const sig = await web3.eth.sign(_hash,accounts[0])
        //console.log(_hash,sig);
        const inst = await RecoverAddress.deployed();
        var res = await inst.recoverAddress(sig,_hash);
        console.log(res,accounts[0]);
    })
    it("hash_test",async ()=>{
        const inst = await RecoverAddress.deployed();
        //var res = await inst.recoverAddress(sig,_hash);
        var res1 = await inst.packHashUint256(11);
        var res2 = await inst.packHashUint256(11);
        var res3 = web3.utils.soliditySha3(11,11);
        //console.log(res1,res2)
        
        console.log(res1,res2,res3)
    });
});