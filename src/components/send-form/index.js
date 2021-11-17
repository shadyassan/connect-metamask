import React, { useState } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers';
import { useEffect } from 'react/cjs/react.development';
import Input from '../shared/form';
import Button from '../shared/button';
import ErrorMessage from '../error-message';

const startPayment = async ({ setError, setTxs, ether, addr }) => {
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
    console.log({ ether, addr });
    console.log('tx', tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

const isValidAddress = (adr) => {
  try {
    const web3 = new Web3();
    web3.utils.toChecksumAddress(adr);
    return true;
  } catch (e) {
    return false;
  }
};

const SendForm = () => {
  const [error, setError] = useState(false);
  const [txs, setTxs] = useState([]);
  const [isValid, setIsValid] = useState(false);
  // const { account } = useWeb3React();
  const [{ addr, ether }, setFormData] = useState({
    addr: '',
    ether: '',
  });

  console.log('txs; ', txs);

  useEffect(() => {
    if (isValidAddress(addr)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isValidAddress, addr]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await startPayment({
      setError,
      setTxs,
      ether,
      addr,
    });
  };

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="site-form">
      <h2>Send ETH payment</h2>
      <form noValidate onSubmit={handleSubmit}>
        <Input
          name="addr"
          value={addr}
          onChange={onChangeHandler}
          placeholder="Recipient Address"
        />
        <Input
          name="ether"
          value={ether}
          onChange={onChangeHandler}
          placeholder="Recipient Amount in ETH"
        />
        <Button disabled={!isValid}>Pay Now</Button>
      </form>
      {isValid ? <div>Address is valid</div> : <div>Address is not valid</div>}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default SendForm;
