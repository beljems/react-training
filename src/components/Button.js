import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

const Button = ({
  modifier,
  label,
  disabled = false,
  onClick = () => {}
}) => {
  return (
    <>
      <button className={`button ${modifier}`} onClick={disabled ? disabled : onClick}>
        {label}
      </button>
    </>
  )
}

Button.propTypes = {
  modifier: PropTypes.any,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button;
