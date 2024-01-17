const addLiquidity = require("./addLiquidity");
const { addLiquidityETH } = require("./addLiquidityETH");
const deploy = require("./deploy");

class TokenScript {
  constructor() {}
  async deployRandomToken(args) {
    const token = await deploy(args);
    return token;
  }
  async addTokenLiquidity(token, decimals) {
    let tx = null;
    try {
      tx = await addLiquidity(token, decimals);
    } catch (error) {
      console.log("🚀 ~ TokenScript ~ addTokenLiquidity ~ error:", error);
    }
    return tx;
  }

  async addTokenLiquidityETH(token) {
    let tx = null;
    try {
      tx = await addLiquidityETH(token);
    } catch (error) {
      console.log("🚀 ~ TokenScript ~ addTokenLiquidity ~ error:", error);
    }
    return tx;
  }
}

module.exports = TokenScript;
