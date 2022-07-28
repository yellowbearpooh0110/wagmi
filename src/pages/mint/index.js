import * as React from 'react';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

import './styles.scss';

import Navbar from 'components/Navbar';
import Banner from 'components/Banner';
import About from 'components/About';
import Membership from 'components/Membership';
import Feature from 'components/Feature';
import Contactus from 'components/Contactus';
import Footer from 'components/Footer';

const Mint = () => {
  const { active, account, activate, deactivate, error, chainId } =
    useWeb3React();
  return (
    <>
      <Navbar />
      <Banner />
      <div className="bgm">
        <About />
        <Membership />
        <Feature />
        <Contactus />
        <Footer />
      </div>
    </>
  );
};

export default Mint;
