const Callee = artifacts.require("Callee");

module.exports = function(deployer) {
  deployer.deploy(Callee,"test");
};