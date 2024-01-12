const deployAddLiquidityContract = require("./scripts/contractDeploy");

const token1 = "0xE5222C801FA2635295E4Da89F4CC02321ec22b70";

const token2 = "0x91300FA4907C8fCccEc7cA9EFa082F3DB809dDFe";


(async()=>{
 await deployAddLiquidityContract(token1, token2);
})()