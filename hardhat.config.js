/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { getNetworkConfigurations } = require("./utils");

const networkConfig = getNetworkConfigurations();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: 
     {
      url: networkConfig.RPC,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 20000000000,
      gas: 6000000,
      loggingEnabled:true,

    },
  },
};
