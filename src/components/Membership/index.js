import * as React from 'react';
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { toast } from 'react-toastify';

import './styles.scss';
import genesisImg from 'img/genesis.png';
import auroraImg from 'img/aurora.png';
import novaImg from 'img/nova.png';
import supernovaImg from 'img/supernova.png';
import { injectedConnector } from 'App';

import { abi as WagmiClubAbi } from 'abis/WagmiClub.json';
import { contractAddress, networkId } from 'config';

const Membership = () => {
  const {
    chainId,
    active: networkActive,
    activate: activateNetwork,
    error: networkError,
    account,
    library,
  } = useWeb3React();

  const [wagmiClubContract, setWagmiClubContract] = React.useState(undefined);
  const [costGenesis, setCostGenesis] = React.useState(undefined);
  const [costAurora, setCostAurora] = React.useState(undefined);
  const [costNova, setCostNova] = React.useState(undefined);
  const [costSuperNova, setCostSuperNova] = React.useState(undefined);

  const handleMintGenesis = (event) => {
    event.preventDefault();
    if (networkActive) {
      if (wagmiClubContract === undefined || costGenesis === undefined) return;
      wagmiClubContract.mintGenesis(1, {
        value: costGenesis.toString(),
      });
    } else {
      handleConnectWallet();
    }
  };

  const handleMintAurora = (event) => {
    event.preventDefault();
    if (networkActive) {
      if (wagmiClubContract === undefined || costAurora === undefined) return;
      wagmiClubContract.mintAurora(1, {
        value: costAurora.toString(),
      });
    } else {
      handleConnectWallet();
    }
  };

  const handleMintNova = (event) => {
    event.preventDefault();
    if (networkActive) {
      if (wagmiClubContract === undefined || costNova === undefined) return;
      wagmiClubContract.mintNova(1, {
        value: costNova.toString(),
      });
    } else {
      handleConnectWallet();
    }
  };

  const handleMintSuperNova = (event) => {
    event.preventDefault();
    if (networkActive) {
      if (wagmiClubContract === undefined || costSuperNova === undefined)
        return;
      wagmiClubContract.mintSuperNova(1, {
        value: costSuperNova.toString(),
      });
    } else {
      handleConnectWallet();
    }
  };

  const handleConnectWallet = () => {
    if (window.ethereum) activateNetwork(injectedConnector);
    else toast.warn('Please install Metamask extension.');
  };

  React.useEffect(() => {
    if (networkActive && chainId === networkId) {
      const _wagmiClubContract = new Contract(
        contractAddress,
        WagmiClubAbi,
        library?.getSigner()
      );
      /* Set Main Contract */
      setWagmiClubContract(_wagmiClubContract);
      _wagmiClubContract.costGenesis().then((_price) => {
        console.log(_price);
        setCostGenesis(_price);
      });
      _wagmiClubContract.costAurora().then((_price) => setCostAurora(_price));
      _wagmiClubContract.costNova().then((_price) => setCostNova(_price));
      _wagmiClubContract
        .costSuperNova()
        .then((_price) => setCostSuperNova(_price));
    }
  }, [networkActive, chainId, account, library]);

  return (
    <section className="themembership" id="membership">
      <div className="container">
        <div className="theme__header">
          <h2>
            <span className="d-block text-start">The</span>
            <span>Memberships</span>
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="membership__text">
              <h4>Genesis</h4>
              <button
                className="memberbtn d-none d-lg-inline-block"
                onClick={handleMintGenesis}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="membership__mintv">
              <div className="membership__thumnail">
                <img src={genesisImg} alt="genesis" />
              </div>
              <video muted="muted" autoPlay className="membervideo">
                <source src="./video/genesis.mp4" type="video/mp4" />
              </video>
              <button
                className="memberbtn d-lg-none"
                onClick={handleMintGenesis}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="membership__mintv">
              <div className="membership__thumnail">
                <img src={auroraImg} alt="aurora" />
              </div>
              <video muted="muted" autoPlay className="membervideo">
                <source src="./video/aurora.mp4" type="video/mp4" />
              </video>
              <button
                className="memberbtn d-lg-none"
                onClick={handleMintAurora}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="membership__text aurora">
              <h4>Aurora</h4>
              <button
                className="memberbtn d-none d-lg-inline-block"
                onClick={handleMintAurora}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#2DECCF"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="membership__text nova">
              <h4>Nova</h4>
              <button
                className="memberbtn d-none d-lg-inline-block"
                onClick={handleMintNova}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#E85AE3"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="membership__mintv">
              <div className="membership__thumnail">
                <img src={novaImg} alt="nova" />
              </div>
              <video muted="muted" autoPlay className="membervideo">
                <source src="./video/nova.mp4" type="video/mp4" />
              </video>
              <button className="memberbtn d-lg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="membership__mintv">
              <div className="membership__thumnail">
                <img src={supernovaImg} alt="supernova" />
              </div>
              <video muted="muted" autoPlay className="membervideo">
                <source src="./video/supernova.mp4" type="video/mp4" />
              </video>
              <button className="memberbtn d-lg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="membership__text supernova">
              <h4>Supernova</h4>
              <button
                className="memberbtn d-none d-lg-inline-block"
                onClick={handleMintSuperNova}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="263.071"
                  height="85.002"
                  viewBox="0 0 263.071 85.002"
                >
                  <g transform="translate(-812.798 -2846.333)">
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(825.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      fontSize="40"
                      fontFamily="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {networkActive ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#FFAA22"
                      strokeWidth="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
