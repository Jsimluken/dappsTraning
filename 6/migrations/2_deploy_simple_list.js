const SimpleList = artifacts.require("SimpleList");

module.exports = function(deployer) {
    deployer.deploy(SimpleList);
};