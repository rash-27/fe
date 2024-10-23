// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token1 is ERC20, Ownable {
    uint256 dec = 10**18;

    constructor() ERC20("Token1", "TKN1")  Ownable(msg.sender){
        _mint(msg.sender, 1000000 * dec);
    }

    // Function to mint tokens, only callable by the owner
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

interface IMintableERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function mint(address to, uint256 amount) external;
}
contract Futures {
    IMintableERC20 public token;
    uint256 public currentMarketPrice;

    struct OHLCV {
        uint256 open;
        uint256 high;
        uint256 low;
        uint256 close;
        uint256 volume;
    }

    struct FuturesContract {
        uint256 leverage;
        uint256 entryPrice;
        uint256 tokenUnits;
        uint256 collateral;
        uint256 timestamp;
    }

    mapping(address => FuturesContract[]) private openPositions;
    mapping(address => FuturesContract[]) private settledPositions;

    OHLCV[15] public ohlcvQueue; // Fixed-size array for 15 OHLCV values

    constructor(address token_address, OHLCV[15] memory initialValues, uint256 _currentMarketPrice) {
        token = IMintableERC20(token_address);
        for (uint256 i = 0; i < 15; i++) {
            ohlcvQueue[i] = initialValues[i];
        }
        currentMarketPrice = _currentMarketPrice;
    }

    // Function to add a new OHLCV value
    function addOHLCV(
        uint256 open,
        uint256 high,
        uint256 low,
        uint256 close,
        uint256 volume
    ) external {
        for (uint256 i = 0; i < 14; i++) {
            ohlcvQueue[i] = ohlcvQueue[i + 1];
        }
        ohlcvQueue[14] = OHLCV(open, high, low, close, volume); // add the latest value
    }

    function updateMarketPrice(uint256 newMarketPrice) external {
        currentMarketPrice = newMarketPrice;
    }

    function getOHLCVQueue() public view returns (OHLCV[15] memory) {
        return ohlcvQueue;
    }

    function openPosition(uint256 _leverage, uint256 tokenAmount) external {
        require(_leverage >= 1 && _leverage <= 100, "Leverage range not correct");
        require(token.balanceOf(msg.sender) >= tokenAmount, "User must have sufficient balance");

        token.transferFrom(msg.sender, address(this), tokenAmount); // take the collateral amount inside the contract

        openPositions[msg.sender].push(FuturesContract({
            tokenUnits: tokenAmount,
            leverage: _leverage,
            entryPrice: currentMarketPrice,
            collateral: tokenAmount,
            timestamp: block.timestamp
        }));
    }

    function closePosition(uint256 positionIndex) external {
        require(positionIndex < openPositions[msg.sender].length, "Invalid position index");

        FuturesContract memory position = openPositions[msg.sender][positionIndex];
        int256 pnl = calculatePnL(position); // Calculate PnL

        if (pnl < 0) {
            uint256 loss = uint256(-pnl); // convert to positive value
            if (loss >= position.collateral) {
                delete openPositions[msg.sender][positionIndex]; // Remove position
            } else {
                token.transferFrom(address(this),msg.sender, position.collateral - loss); // Return remaining collateral
                delete openPositions[msg.sender][positionIndex]; // Close position
            }
        } else {
            uint256 profit = uint256(pnl);
            token.mint(address(this), profit+1);
            token.transferFrom(address(this),msg.sender, position.collateral + profit); // Return collateral and profit
            delete openPositions[msg.sender][positionIndex]; // Close position
        }
    }

    function calculatePnL(FuturesContract memory position) public view returns (int256) {
        int256 priceDiff = int256(currentMarketPrice) - int256(position.entryPrice);
        int256 pnl = (priceDiff * int256(position.tokenUnits) * int256(position.leverage)) / int256(position.entryPrice);
        return pnl;
    }

}
