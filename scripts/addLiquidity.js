const { ethers } = require("hardhat");
const contractABI = require("../artifacts/contracts/addLiquidity.sol/LiquidityAdder.json");
CONTRACT_ADDRESS = "0xFA5Cdf716ae709aC330F7AadB98a8B9B1BBd80e3";
const { getNetworkConfigurations } = require("../utils");
const networkConfig = getNetworkConfigurations();
async function addLiquidity(token, decimals) {
  const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Uniswap V2 Router address

  const [deployer] = await ethers.getSigners();

  console.log(
    `Adding Liquidity in Token ${token} with the account ${deployer.address}`
  );

  const amountToken1 = ethers.BigNumber.from("500000000000");
  const amountToken2 = ethers.BigNumber.from("500000000000");
  let signer;
  try {
    signer = await ethers.getSigner(deployer.address);
  } catch (error) {
    console.log("🚀 ~ addLiquidity 12 ~ error:", error);
  }
  let tx = null;
  try {
    const liquidityAdder = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI.abi,
      signer
    );

    tx = await liquidityAdder.addLiquidity(amountToken1, amountToken2, {
      gasLimit: 100000,
    });
  } catch (error) {
    console.log("🚀101 ~ addLiquidity ~ error:", error);
  }

  console.log("Transaction Hash:", tx.hash);
}
module.exports = addLiquidity;
