import * as React from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

import './styles.scss';
import genesisImg from 'img/genesis.png';
import auroraImg from 'img/aurora.png';
import novaImg from 'img/nova.png';
import supernovaImg from 'img/supernova.png';

const Membership = () => {
  const { active, account, activate, deactivate, error, chainId } =
    useWeb3React();

  const handleMintGenesis = (event) => {
    event.preventDefault();
    if (active) {
    } else {
      handleConnectWallet();
    }
  };

  const handleConnectWallet = () => {
    activate(new InjectedConnector({}));
  };

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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
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
              <video muted="muted" autoplay className="membervideo">
                <source src="./video/genesis.mp4" type="video/mp4" />
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
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
              <video muted="muted" autoplay className="membervideo">
                <source src="./video/aurora.mp4" type="video/mp4" />
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="membership__text aurora">
              <h4>Aurora</h4>
              <button className="memberbtn d-none d-lg-inline-block">
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#2DECCF"
                      stroke-width="4"
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
              <button className="memberbtn d-none d-lg-inline-block">
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#E85AE3"
                      stroke-width="4"
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
              <video muted="muted" autoplay className="membervideo">
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
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
              <video muted="muted" autoplay className="membervideo">
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="membership__text supernova">
              <h4>Supernova</h4>
              <button className="memberbtn d-none d-lg-inline-block">
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
                      stroke-width="2"
                    />
                    <text
                      transform="translate(849.333 2867.299)"
                      fill="#fff"
                      font-size="40"
                      font-family="BebasNeue, Bebas Neue"
                    >
                      <tspan x="36" y="36">
                        {active ? 'MINT NOW' : 'CONNECT'}
                      </tspan>
                    </text>
                    <path
                      d="M0,16.461v36.5L26.007,78.964H240.572v-36.5L214.565,16.461Z"
                      transform="translate(824.048 2841.122)"
                      fill="none"
                      stroke="#FFAA22"
                      stroke-width="4"
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
