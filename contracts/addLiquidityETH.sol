// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityAdderETH {
    address private owner;
    IUniswapV2Router02 public uniswapRouter;
    address public wethAddress;

    receive() external payable {
        
    }

    constructor(address _router, address _wethAddress) {
        owner = msg.sender;
        uniswapRouter = IUniswapV2Router02(_router);
        wethAddress = _wethAddress;
    }

    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable {
        IERC20(token).approve(address(uniswapRouter), amountTokenDesired);

        // Add liquidity
        uniswapRouter.addLiquidityETH{value: msg.value}(
            token,
            amountTokenDesired,
            amountTokenMin,
            amountETHMin,
            to,
            deadline
        );
    }
}
