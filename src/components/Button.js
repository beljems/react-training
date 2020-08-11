import React from 'react';

import './Button.scss'

const Button = ({
  modifier = '',
  onClick = '',
  disabled = '',
  text = 'Load More',
}) => {
  return (
    <>
      <button className={`button ${modifier}`} onClick={disabled ? disabled : onClick}>
        {text}
      </button>
    </>
  )
}

export default Button;
