import React, { useState } from 'react';

import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import './Form.scss';

const Form = ({ className = '' }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className={`form ${className}`}>
      {!active ? <FormLogin onClick={() => handleClick()}/> : <FormRegister onClick={() => handleClick()}/>}
    </div>
  );
}

export default Form;
