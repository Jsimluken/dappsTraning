const AtomicSwap20To721 = artifacts.require("AtomicSwap20To721");

module.exports = function(deployer) {
  deployer.deploy(AtomicSwap20To721);
};