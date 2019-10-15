

const Storage = artifacts.require("SimpleStorage");


contract("Testst",(accounts)=>{
    it("Test",async ()=>{
        const account = web3.eth.accounts.create()
        const address = account.address
        const storage = await Storage.deployed()
        await storage.set("Hyper Test!!")
        console.log("wallet!!",await web3.eth.accounts.wallet.add(account))
        console.log("Hyper wallet!!",web3.eth.accounts.wallet)
        try{
            await storage.set("Test",{from:address})
        }catch(err){
            console.log("error!!",err)
        }
        

        console.log(address)
        //web3.eth.sendTransaction({from:accounts[0],to:address,value:web3.utils.toWei(0.25, "ether")})
        //web3.eth.sendTransaction({from:address,to:users[0],value:web3.utils.toWei(0.1, "ether")})
        console.log(await web3.eth.getBalance(address))
        console.log(await storage.get())
    })
})

//console.log()
/*web3.eth.getAccounts.then((accounts)=>{
    console.log(accounts)
})*/
//console.log(await web3.eth.getAccounts())