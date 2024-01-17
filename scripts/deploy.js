const { ethers } = require("hardhat");
const { INTIAL_SUPPLY, wait } = require("../utils");
const { CONTRACT_ADDRESS } = require("./addLiquidityETH");

async function deploy(data) {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", ethers.utils.formatEther(weiAmount));

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(data.name,data.symbol);

  console.log("Token address:", token.address);
  await wait(1);
  console.log("Transferring the tokens to the contract", INTIAL_SUPPLY);
  console.log("🚀 ~ deploy ~ CONTRACT_ADDRESS:", CONTRACT_ADDRESS);
  try {
    await token.transfer(CONTRACT_ADDRESS, INTIAL_SUPPLY);
    console.log("Transferred the tokens to the contract", INTIAL_SUPPLY);
  } catch (error) {
    console.log("Error transferring tokens to the contract", error);
  }

  return token.address;
}

module.exports = deploy;
