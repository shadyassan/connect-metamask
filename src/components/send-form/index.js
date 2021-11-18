import React from 'react';

import { useApp } from '../../contexts/app.provider';
import Form from '../form';

import ErrorMessage from '../error-message';
import TxList from '../txlist';

// const sendPayment = async (setError, account, ether, addr) => {
//   const wei = window.web3.utils.toWei(ether);
//   window.ethereum
//     .request({
//       method: 'eth_sendTransaction',
//       params: [
//         {
//           from: account,
//           to: addr,
//           value: (+wei).toString(16),
//         },
//       ],
//     })
//     .catch((e) => console.log(e));
// };

const SendForm = () => {
  const { error, txs } = useApp();

  return (
    <div className="site-form credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white mt-4 p-6">
      <h2 className="font-semibold text-gray-700">Send ETH payment</h2>
      <Form />
      {error && <ErrorMessage message={error} />}
      <TxList txs={txs} />
    </div>
  );
};

export default SendForm;
