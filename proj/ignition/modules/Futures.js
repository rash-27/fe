const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const initialOHLCVData = [
     [100, 105, 95, 102, 1500],
     [102, 110, 101, 108, 1700],
     [108, 112, 107, 109, 1200],
     [109, 111, 106, 107, 1800],
     [107, 109, 104, 105, 1600],
     [105, 107, 102, 103, 1550],
     [103, 106, 101, 105, 1650],
     [105, 108, 103, 107, 1400],
     [107, 110, 106, 109, 1450],
     [109, 113, 108, 111, 1750],
     [111, 115, 109, 114, 1900],
     [114, 117, 112, 115, 2000],
     [115, 120, 114, 118, 2100],
     [118, 122, 116, 121, 2200],
     [121, 125, 119, 123, 2300]
 ];

const initialMarketPrice = 100;

module.exports = buildModule("Futures", (m) => {
  // Deploy the Token1 contract with dummy values
  const token = m.contract("Token1");
  // console.log(token.address);
  const futures = m.contract("Futures", ["0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", initialOHLCVData, initialMarketPrice]);
  // Deploy the Futures contract using the deployed Token1 contract
  // const futures = m.contract("Futures", [])
  return {
    token,
    futures
  };
});
