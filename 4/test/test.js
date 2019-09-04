const StorageFactory = artifacts.require("StorageFactory");
const Storage = artifacts.require("Storage");

contract("Test",async (accounts)=>{
    a1 = accounts[1];
    a2 = accounts[2];
    it("HyperTest",async ()=>{
        const factory = await StorageFactory.deployed();
        //console.log(factory);
        var res = await factory.makeStorage({from:a1});
        const st1 = await Storage.at(res.logs[0].args._storage);
        //console.log(st1);
        await st1.set("unchi",{from:a1});
        // await st1.set("unchi",{from:a2}); this will be error
        var res = await factory.makeStorage({from:a2});
        const st2 = await Storage.at(res.logs[0].args._storage);
        await st2.set("unchi",{from:a2});
        console.log(await st2.get())
        var num = await factory.getNum()
        console.log(num.toNumber());
    });
});