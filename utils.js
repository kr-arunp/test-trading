const dotenv = require("dotenv");
dotenv.config()


const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const QUICK_NODE = process.env.QUICK_NODE;
const QUICK_NODE_TEST = process.env.QUICK_NODE_TEST;
const network=process.env.NETWORK || "ETH_TEST";

const getNetworkConfigurations = () => {
    let RPC, WETH, ROUTER, FACTORY, CHAIN_ID, SYMBOL;
    switch (network) {
      case "ETH_TEST":
        SYMBOL = "ETH";
        CHAIN_ID = 5;
        RPC = `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`;
        WETH = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
        ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        break;
      case "ETH":
        SYMBOL = "ETH";
        CHAIN_ID = 1;
        RPC = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`;
        WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        break;
      case "BNB_TEST":
        SYMBOL = "BNB";
        CHAIN_ID = 97;
        RPC = `https://powerful-warmhearted-bridge.bsc-testnet.quiknode.pro/${QUICK_NODE_TEST}`;
        WETH = "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd";
        ROUTER = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
        FACTORY = "0x6725F303b657a9451d8BA641348b6761A6CC7a17";
        break;
      case "BNB":
        SYMBOL = "BNB";
        CHAIN_ID = 56;
        RPC = `https://cosmopolitan-bold-thunder.bsc.quiknode.pro/${QUICK_NODE}/`;
        WETH = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
        ROUTER = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
        FACTORY = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
        break;
      default:
        SYMBOL = "ETH";
        CHAIN_ID: 1;
        RPC = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`;
        WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        break;
    }
  
    const NETWORK_CONFIG = {
      CHAIN_ID: CHAIN_ID ,
      SYMBOL,
      RPC,
      WETH,
      ROUTER,
      FACTORY,
    };
  
    return NETWORK_CONFIG;
  };

  module.exports ={
    getNetworkConfigurations
  }