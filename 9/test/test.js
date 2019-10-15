const Swap = artifacts.require("AtomicSwap721");
const NFT = artifacts.require("NFT");

contract(
    "Test",async (accounts)=>{
        const secret = web3.utils.randomHex(32);
        const secretLock = web3.utils.soliditySha3(secret)
        it("Add some token",async ()=>{
            const inst = await NFT.deployed()
            var res = web3.utils.asciiToHex("TEst")
            await inst.add("Mellon",{from:accounts[1]})
            var num = await inst.num()
            console.log(num.toNumber())
            var name = await inst.get(0)
            console.log(name)
        });
        it(
            "Open sales!!",async ()=>{
                const token = await NFT.deployed()
                const swap = await Swap.deployed()
                //var num = await inst.num()
                //console.log(num.toNumber())
                //swap.open();
                var value = web3.utils.toWei('1', 'ether');
                var res = await swap.open(1,100,0, token.address,accounts[1],secretLock,{value:value,});
                console.log(await web3.eth.getBalance(swap.address))
            }
        );
        it("Close!!",async ()=>{
            var before = await web3.eth.getBalance(accounts[1]);
            const token = await NFT.deployed()
            const swap = await Swap.deployed()
            await token.approve(swap.address,0,{from:accounts[1]});
            console.log("approved",await token.getApproved(0))
            await swap.close(1,secret);
            var after = await web3.eth.getBalance(accounts[1]);
            //console.log(before - after)
            var income = after-before
            //console.log(income.toString())
            console.log(web3.utils.fromWei(income.toString(),"ether"))
            console.log(await token.ownerOf(0))
        })
    }
);