import React from 'react';

import FormLogin from './FormLogin';
import './Form.scss';

const Form = ({ className = '' }) => {
  return (
    <div className={`form ${className}`}>
      <FormLogin />
    </div>
  );
}

export default Form;
