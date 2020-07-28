import React, { useState } from 'react';

export const useFormValidation = (callback) => {
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (id, value) => {
    //value.persist();
    setValues({
      ...values,
      [id]: value.trim()
    });
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(values.password !== '' ||
      values.password !== '' ||
      values.cpassword !== '') {
      if(values.password !== values.cpassword) {
        setMessage(<p class="error-message">Confirm password does not match with password!</p>)
      } else {
        setProcessing(true);
        setMessage('')
        callback();

        console.log(values.password, values.email)
      }
    } else {
      setMessage(<p class="error-message">Fields must not be blank!</p>)
    }
  }

  return {
    values,
    handleChange,
    handleSubmit,
    processing,
    message,
  }

}
