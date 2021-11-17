import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ message }) {
  if (!message) return null;

  return (
    <div className="alert">
      <label>{message}</label>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
