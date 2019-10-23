const Token = artifacts.require("Token");



contract("Hyper Test",async (accounts) =>{
    it("GutenMorgen!!",async ()=>{
        var token = await Token.deployed()
        var res = await token.balanceOf(accounts[0])
        console.log(res.toNumber())
        await token.transfer(accounts[1],100)
        var res = await token.balanceOf(accounts[0])
        var res2 = await token.balanceOf(accounts[1])
        console.log(res.toNumber(),res2.toNumber())
    })
});