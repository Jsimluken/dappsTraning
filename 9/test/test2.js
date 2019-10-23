const Swap = artifacts.require("AtomicSwap20To721");
const NFT = artifacts.require("NFT");
const Token = artifacts.require("Token");

contract(
    "Test2",async (accounts)=>{
        const secret = web3.utils.randomHex(32);
        const secretLock = web3.utils.soliditySha3(secret)
        it("Add some token",async ()=>{
            const inst = await NFT.deployed()
            var res = web3.utils.asciiToHex("Test")
            await inst.add("Mellon",{from:accounts[1]})
            var num = await inst.num()
            console.log(num.toNumber())
            var name = await inst.get(0)
            console.log(name)
        });
        it("Confirm token balance",async ()=>{
            const token = await Token.deployed()
            var res1 = await token.balanceOf(accounts[0]);
            var res2 = await token.balanceOf(accounts[1]);
            console.log(res1.toNumber(),res2.toNumber())
        });
        it(
            "Open sales!!",async ()=>{
                const nft = await NFT.deployed()
                const token = await Token.deployed()
                const swap = await Swap.deployed()
                //var num = await inst.num()
                //console.log(num.toNumber())
                //swap.open();
                //var value = web3.utils.toWei('1', 'ether');
                var res = await swap.open(1,100,0,11,token.address,nft.address,accounts[1],secretLock);
                //var res = await swap.open(1,100,0, token.address,accounts[1],secretLock,{value:value,});
                console.log(await web3.eth.getBalance(swap.address))
            }
        );
        it("Close!!",async ()=>{
            //var before = await web3.eth.getBalance(accounts[1]);
            
            const nft = await NFT.deployed()
            const token = await Token.deployed()
            const swap = await Swap.deployed()

            var before = await token.balanceOf(accounts[1])

            await nft.approve(swap.address,0,{from:accounts[1]});
            console.log("approved",await nft.getApproved(0))
            await token.approve(swap.address,11)
            var res = await token.allowance(accounts[0],swap.address)
            console.log("allowance",res.toNumber())

            await swap.close(1,secret);
            //var after = await web3.eth.getBalance(accounts[1]);
            var after = await token.balanceOf(accounts[1])
            //console.log(before - after)
            var income = after-before
            //console.log(income.toString())
            console.log(income)
            console.log(await nft.ownerOf(0))
        })
    }
);