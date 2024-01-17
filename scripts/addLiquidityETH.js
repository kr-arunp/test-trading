const { ethers } = require("hardhat");
const contractABI = require("../artifacts/contracts/addLiquidityETH.sol/LiquidityAdderETH.json");
const { CONTRACT_ADDRESS } = require("../utils");

async function addLiquidityETH(token) {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 ~ addLiquidityETH ~ deployer:", deployer.address);

  console.log(
    `Adding LiquidityETH in Token ${token} with the account ${deployer.address}`
  );

  let signer;
  try {
    signer = await ethers.getSigner(deployer.address);
  } catch (error) {
    console.log("🚀 ~ addLiquidity 12 ~ error:", error);
  }
  let tx = null;
  try {
    const liquidityAdderETH = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    );

    const tx = await liquidityAdderETH.addLiquidityETH(
      token,
      1000000000,
      0,
      0,
      deployer.address,
      2708406486,
      {
        value: ethers.utils.parseEther("0.0001"),
      }
    );
    console.log("🚀 ~ addLiquidityETH ~ tx:", tx);
    return tx;
  } catch (error) {
    console.log("🚀101 ~ addLiquidity ~ error:", error);
  }
  console.log("🚀 ~ addLiquidityETH ~  deployer.address:", deployer.address);
  return null;
}

module.exports = {
  CONTRACT_ADDRESS,
  addLiquidityETH,
};


