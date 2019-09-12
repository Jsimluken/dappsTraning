const SimpleList = artifacts.require("SimpleList");


module.exports = async (deployer) => {
    const simpleList = await SimpleList.deployed();
    console.log(simpleList)
    await simpleList.addList("Testst");
    await simpleList.addList("Test2");
    await simpleList.addList("Test3");
    console.log(await simpleList.getList());
};