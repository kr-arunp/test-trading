/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { getNetworkConfigurations } = require("./utils");

const networkConfig = getNetworkConfigurations();

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "goerli",
  networks: {
    sepolia: {
      url: networkConfig.RPC,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 20000000000,
      gas: 6000000,
      loggingEnabled: true,
    },
    goerli: {
      url: networkConfig.RPC,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      gasPrice: 20000000000,
      gas: 6000000,
      loggingEnabled: true,
    },
  },
};
