const { TOKEN_INFO } = require("./data");
const TokenScript = require("./scripts");
const { wait } = require("./utils");

const fs = require("fs").promises;

const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;

const writeResultsToFile = async (result) => {
  try {
    const coloredResults = result.map((x, index) =>
      colorize(`${index + 1}. ${JSON.stringify(x, null, 2)}`, "32")
    );
    await fs.writeFile("tokens.txt", coloredResults.join("\n"));
    console.log("Results written to results.txt successfully.");
  } catch (error) {
    console.error("Error writing results to file:", error);
  }
};

const tokenScript = new TokenScript();
const TokenTrading = async (tokenInfo) => {
  // Deploy the Random Token
  const newToken = await tokenScript.deployRandomToken(tokenInfo);
  console.log("🚀 ~ TokenTrading ~ newToken:", newToken);
  await wait(3);
  const tx = await tokenScript.addTokenLiquidityETH(newToken);
  return { tokenAddress: newToken, txHash: tx?.hash };
};

const main = async () => {
  const result = [];
  for (const data of TOKEN_INFO) {
    const x = await TokenTrading(data);
    result.push(x);
  }
  console.log("Results:", result);
  await writeResultsToFile(result);
};

main().catch((error) => console.error(error));

// Results: [
//   {
//     tokenAddress: '0x263ad622cF0C7cEB1e9fA378a5271A7818f16e76',
//     tx: undefined
//   },
//   {
//     tokenAddress: '0x2C9472438424E8926117D442438803abb0716E15',
//     tx: undefined
//   },
//   {
//     tokenAddress: '0xc3c08B2010ED5ca84E73CdDc1d12a5e660a41E05',
//     tx: undefined
//   }
// ]
