const SimpleStorage = artifacts.require("SimpleStorage");


contract("SimpleStorageTest", async ()=>{
    it("test1",async ()=>{
        var ss = await SimpleStorage.deployed();
        await ss.set("Test");
        var data = await ss.get();
        assert.equal(data,"Test","fuck");
    });
});