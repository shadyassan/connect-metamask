import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/wallet/connectors';
import Button from '../../components/shared/button';
import Balance from '../../components/balance';

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="section">
      <div className="block-connect">
        <Button onClick={connect}>Connect to MetaMask</Button>
        {active ? (
          <>
            <span className="status">
              Connected with: <b>{account}</b>
            </span>
            <Balance />
          </>
        ) : (
          <span className="status">Not Connected</span>
        )}
        <Button onClick={disconnect}>Disconnect</Button>
      </div>
    </section>
  );
};

export default Home;
