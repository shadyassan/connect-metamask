import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatEther } from '@ethersproject/units';

function Balance() {
  const { account, library, chainId } = useWeb3React();

  const [balance, setBalance] = useState(null);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!!account && !!library) {
      let stale = false;

      library
        .getBalance(account)
        .then((b) => {
          if (!stale) {
            setBalance(b);
          }
        })
        .catch(() => {
          if (!stale) {
            setBalance(null);
          }
        });

      return () => {
        stale = true;
        setBalance(null);
      };
    }
  }, [account, library, chainId]);

  return (
    <div className="block-balance">
      <span>Balance</span>
      <span role="img" aria-label="gold">
        💰
      </span>
      <span>{balance !== null && `${formatEther(balance)}`}</span>
    </div>
  );
}

export default Balance;
