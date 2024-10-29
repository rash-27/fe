import React, { createContext, useState, useEffect } from 'react';
import Web3 from "web3";
import { Futures } from "./abis/Futures";
import { Token } from './abis/Token';

// Create context
export const MetaMaskContext = createContext();

// Create provider component
export const MetaMaskProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [futureContract, setFutureContract] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const futureContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const tokenContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  // Method to connect to MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const web3Instance = new Web3(window.ethereum);
        const futuresInstance = new web3Instance.eth.Contract(Futures, futureContractAddress);
        const tokenInstance = new web3Instance.eth.Contract(Token, tokenContractAddress);
        setFutureContract(futuresInstance);
        setTokenContract(tokenInstance);
        console.log('Connected to MetaMask account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask!');
    }
  };

  return (
    <MetaMaskContext.Provider value={{ account, futureContract, connectToMetaMask, tokenContract, futureContractAddress }}>
      {children}
    </MetaMaskContext.Provider>
  );
};
