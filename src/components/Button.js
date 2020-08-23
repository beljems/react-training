import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss'

const Button = ({
  modifier,
  disabled = false,
  text = 'Load More',
  onClick = () => {}
}) => {
  return (
    <>
      <button className={`button ${modifier}`} onClick={disabled ? disabled : onClick}>
        {text}
      </button>
    </>
  )
}


Button.propTypes = {
  modifier: PropTypes.any,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
