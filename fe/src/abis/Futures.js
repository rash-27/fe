export const Futures = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token_address",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "open",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "high",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "low",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "close",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "volume",
              "type": "uint256"
            }
          ],
          "internalType": "struct Futures.OHLCV[15]",
          "name": "initialValues",
          "type": "tuple[15]"
        },
        {
          "internalType": "uint256",
          "name": "_currentMarketPrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "open",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "high",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "close",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "volume",
          "type": "uint256"
        }
      ],
      "name": "addOHLCV",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionIndex",
          "type": "uint256"
        }
      ],
      "name": "calculatePnL",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "positionIndex",
          "type": "uint256"
        }
      ],
      "name": "closePosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentMarketPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOHLCVQueue",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "open",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "high",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "low",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "close",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "volume",
              "type": "uint256"
            }
          ],
          "internalType": "struct Futures.OHLCV[15]",
          "name": "",
          "type": "tuple[15]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPositions",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "leverage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "entryPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tokenUnits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "collateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Futures.FuturesContract[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ohlcvQueue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "open",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "high",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "low",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "close",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "volume",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_leverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "openPosition",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "openPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenUnits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "settledPositions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "leverage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "entryPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenUnits",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "collateral",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "contract IMintableERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newMarketPrice",
          "type": "uint256"
        }
      ],
      "name": "updateMarketPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
]
