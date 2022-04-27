const CoinExample = artifacts.require("CoinExample");

module.exports = function (deployer) {
  deployer.deploy(CoinExample);
};
