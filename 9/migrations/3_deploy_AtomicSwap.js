const AtomicSwap721 = artifacts.require("AtomicSwap721");

module.exports = function(deployer) {
  deployer.deploy(AtomicSwap721);
};