const { ethers } = require("hardhat");
const { getNetworkConfigurations } = require("../utils");

const networkConfig = getNetworkConfigurations();
async function deployAddLiquidityContract(token1, token2) {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", ethers.utils.formatEther(weiAmount));
 const ContractInstance= await ethers.getContractFactory("LiquidityAdder");

  const contractAddress = await ContractInstance.deploy(
    networkConfig.ROUTER,
    token1,
    token2
  );

  console.log("Token address:", contractAddress.address);

  return contractAddress.address;
}

module.exports = deployAddLiquidityContract;
