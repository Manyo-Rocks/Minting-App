import React from 'react'
import "../src/Styles/App.css";
import Content from '../src/Pages/Content'
import {ListNft} from './components/ListNft'
import {Tasks} from "./components/Tasks"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegisterLand } from './register';
import { connectwallet } from './connectWallet';
import { useState, useEffect } from 'react';
import {Mint} from './mint';


const App = () => {
const [walletAddress, setWalletAddress]=useState("")
const [status, setstatus]=useState("")


  const connectwalletPressed=  async()=>{
    const walletResponse = await connectwallet();
    setstatus(walletResponse.status)
    setWalletAddress(walletResponse.walletAddress)

     
    }

  return (
    <>
    <div className="section_container">
    <div>
    <button id='wallet'
    onClick={connectwalletPressed}>
    
    {walletAddress ? 
    (<p>"connected to " + String(walletAddress).substring(0, 5) + String(walletAddress).substring(38)</p>):
    (<p>connect to wallet</p>)
    }
    </button>
    <p id='status'>{status}</p>
</div>
    <RegisterLand />
    <Mint/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Tasks />} exact />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/nftlisting" element={<ListNft />} />
           <Route path="/mint" element={<Content />} />
        </Routes>
      </Router> */}
    </div>
    </>
  );
};

export default App;
