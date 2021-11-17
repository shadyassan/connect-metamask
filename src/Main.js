import React from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
// import Web3 from 'web3';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import routes from './routes';
import './styles/Main.scss';

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

// window.web3 = new Web3(window.ethereum);

const Main = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  </Web3ReactProvider>
);

export default Main;
