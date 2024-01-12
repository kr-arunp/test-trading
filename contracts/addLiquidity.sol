// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IUniswapV2Router02.sol";
import "hardhat/console.sol";

contract LiquidityAdder {
    IUniswapV2Router02 public uniswapRouter;
    IUniswapV2Pair public uniswapPair;

    address public token1;
    address public token2;

    constructor(address _routerAddress, address _token1, address _token2) {
        uniswapRouter = IUniswapV2Router02(_routerAddress);
        token1 = _token1;
        token2 = _token2;
    }

    function addLiquidity(uint amountToken1, uint amountToken2) external {
        IERC20(token1).approve(address(uniswapRouter), amountToken1);
        IERC20(token2).approve(address(uniswapRouter), amountToken2);

        require(
            IERC20(token1).allowance(address(this), address(uniswapRouter)) >=
                amountToken1,
            "Insufficient allowance for token1"
        );
        require(
            IERC20(token2).allowance(address(this), address(uniswapRouter)) >=
                amountToken2,
            "Insufficient allowance for token2"
        );

        (
            uint amountToken1Used,
            uint amountToken2Used,
            uint liquidityCreated
        ) = uniswapRouter.addLiquidity(
                token1,
                token2,
                amountToken1,
                amountToken2,
                1,
                1,
                address(this),
                block.timestamp
            );

        require(
            amountToken1Used == amountToken1,
            "Incorrect amount of token1 used"
        );
        require(
            amountToken2Used == amountToken2,
            "Incorrect amount of token2 used"
        );
        require(liquidityCreated > 0, "No liquidity created");
    }
}
