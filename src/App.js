import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Mint from './pages/mint';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import { networkId, networkIdHex } from 'config';

export const injectedConnector = new InjectedConnector({});

const App = () => {
  const {
    chainId,
    active: networkActive,
    activate: activateNetwork,
    error: networkError,
  } = useWeb3React();

  React.useEffect(() => {
    if (networkActive && chainId !== networkId) {
      window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networkIdHex }],
      });
    }
  }, [chainId, networkActive]);

  React.useEffect(() => {
    if (!networkActive)
      injectedConnector.isAuthorized().then((isAuthorized) => {
        if (isAuthorized && !networkError) activateNetwork(injectedConnector);
      });
  }, [activateNetwork, networkError, networkActive]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Mint />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
