import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Web3 from "web3";
import {Futures} from "./abis/Futures"
function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [futureContract, setFutureContract] = useState(null);
  const futureContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  const [positions, setPositions] = useState(null);
  const [marketPrice, setMarketPrice] = useState(null);
  
    useEffect(()=>{
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(() => {
                    const web3Instance = new Web3(window.ethereum);
                    console.log("web3 from app",web3Instance);
                    setWeb3(web3Instance);
                    web3Instance.eth.getAccounts()
                    .then(accounts => {
                        setAccount(accounts[0]);
                        // Futures contract
                        const futuresInstance = new web3Instance.eth.Contract(Futures, futureContractAddress);
                        setFutureContract(futuresInstance);
                    }).catch(err=>{
                        console.log("error fetching accounts", err);
                    })
                })
                .catch(err => {
                    // Handle error if the user rejects the connection request
                    console.error(err);
                });
        } else {
            alert('Please install an another Ethereum wallet.');
        }
    },[])
  const handleOnclick = async()=>{
    const tmp = await futureContract.methods.getOHLCVQueue().call();
    setPositions(tmp);
  console.log("ohlc", tmp);
    const mp = await futureContract.methods.currentMarketPrice().call();
console.log("market price", mp)
   // setMarketPrice(mp);
  }
  return (
  <div>
  <button onClick={handleOnclick}>Get OHLC Queue</button>
  </div>
  )
}

export default App
