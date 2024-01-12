const TokenScript = require("./scripts");

const tokenScript = new TokenScript();
const decimals =18
 CONTRACT_ADDRESS="0xA0F7A8CE706780Aee663aBC3F7891b22d48a8a92"
//  0xA0F7A8CE706780Aee663aBC3F7891b22d48a8a92 //second contract 
const TokenTrading = async () => {
  //First it will deployed the Random Token
  // const newToken = await tokenScript.deployRandomToken("MyContract2024");
  // console.log("🚀 ~ TokenTrading ~ newToken:", newToken);
  const tx=await tokenScript.addTokenLiquidity("newToken",decimals);
};
TokenTrading().catch((error) => console.log("Error", error));

module.exports ={CONTRACT_ADDRESS}