import { ethers } from 'ethers';
import Web3 from 'web3';

export const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error('No crypto wallet found. Please install it.');

    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export const isValidAddress = (adr) => {
  try {
    const web3 = new Web3();
    web3.utils.toChecksumAddress(adr);
    return true;
  } catch (e) {
    return false;
  }
};
