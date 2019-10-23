const Token = artifacts.require("Token");

module.exports = function(deployer,network,accounts) {
  deployer.deploy(Token,"HyperToken","HTK",3,10000);
};