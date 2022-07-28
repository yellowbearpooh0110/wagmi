import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';

import Mint from './pages/mint';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  const { active, account, chainId } = useWeb3React();
  React.useEffect(() => {
    if (active) {
      const loadFunc = async () => {
        if (chainId !== '250') {
          // if (chainId !== '4') {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xfa' }],
            // params: [{ chainId: '0x4' }],
          });
        }
        // const _contract = new ethers.Contract(
        //   contractAddress,
        //   Abi,
        //   new ethers.providers.Web3Provider(window.ethereum).getSigner()
        // );
        // setContract(_contract);
      };
      loadFunc();
    } else {
      // setContract(null);
    }
  }, [active, chainId]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mint />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
