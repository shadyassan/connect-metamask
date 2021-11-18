import React, { memo, useEffect } from 'react';
import Input from '../shared/form';
import Button from '../shared/button';
import { isValidAddress, startPayment } from '../../utils';
import { useApp } from '../../contexts/app.provider';

const Form = () => {
  const { isValid, ether, addr, setError, setTxs, setIsValid, setFormData } =
    useApp();

  useEffect(() => {
    if (isValidAddress(addr)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [addr]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    startPayment({
      setError,
      setTxs,
      ether,
      addr,
    });
  };

  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setFormData({ [name]: value });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="my-3">
        <Input
          name="addr"
          value={addr}
          onChange={onChangeHandler}
          placeholder="Recipient Address"
        />
      </div>
      <div className="my-3">
        <Input
          name="ether"
          value={ether}
          onChange={onChangeHandler}
          placeholder="Recipient Amount in ETH"
        />
      </div>
      <Button disabled={!isValid}>Pay Now</Button>
    </form>
  );
};

export default memo(Form);
