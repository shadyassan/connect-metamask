import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}) => (
  <div className="form-field">
    <label>
      <span>{label}</span>

      <div className="form-field__element">
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </label>
  </div>
);

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default memo(Input);
