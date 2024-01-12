const { ethers } = require("hardhat");

async function deploy(ContractName, Name, Symbol, Decimals) {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const weiAmount = (await deployer.getBalance()).toString();
  console.log("Account balance:", ethers.utils.formatEther(weiAmount));

  const Token = await ethers.getContractFactory(ContractName);
  const token = await Token.deploy(Name, Symbol, Decimals);

  console.log("Token address:", token.address);

  return token.address;
}


module.exports = deploy;
