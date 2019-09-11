const RecoverAddress = artifacts.require("RecoverAddress");

module.exports = function(deployer) {
  deployer.deploy(RecoverAddress);
};