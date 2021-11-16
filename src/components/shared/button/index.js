import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...rest }) => (
  <button type="submit" className="btn" {...rest}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
