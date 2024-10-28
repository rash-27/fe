import React, { createContext, useState, useEffect } from 'react';
import Web3 from "web3";
import { Futures } from "./abis/Futures";

// Create context
export const MetaMaskContext = createContext();

// Create provider component
export const MetaMaskProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [futureContract, setFutureContract] = useState(null);
  const futureContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  // Method to connect to MetaMask
  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const web3Instance = new Web3(window.ethereum);
        const futuresInstance = new web3Instance.eth.Contract(Futures, futureContractAddress);
        setFutureContract(futuresInstance);
        console.log('Connected to MetaMask account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask!');
    }
  };

  return (
    <MetaMaskContext.Provider value={{ account, futureContract, connectToMetaMask }}>
      {children}
    </MetaMaskContext.Provider>
  );
};