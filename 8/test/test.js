const NFT = artifacts.require("NFT")
contract("Test",async (accounts)=>{
    it("Test",async ()=>{
        const nft = await NFT.deployed();
        await nft.add("Apple");
        var res = await nft.ownerOf(0);
        console.log(res);
        var res = await nft.get(0);
        console.log(res);
        await nft.add("Orange");
        var res = await nft.get(1);
        console.log(res);
        //console.log("Unchi");
        var nonce = await nft.num()
        console.log(nonce.toNumber())
    })
});