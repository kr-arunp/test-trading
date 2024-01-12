const addLiquidity = require("./addLiquidity");
const deploy = require("./deploy");

class TokenScript {
  constructor() {}
  async deployRandomToken(
    ContractName,
    name = "TokenName2024",
    symbol = "TokenSymbol2024",
    decimals = 18
  ) {
    const token = await deploy(ContractName, name, symbol, decimals);
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
}

module.exports = TokenScript;
