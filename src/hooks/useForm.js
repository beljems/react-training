import { useState } from 'react';

export const useForm = (formCallback = '', data = {}) => {
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState(data);

  const handleChange = (id, value) => {
    setValues({
      ...values,
      [id]: value.trim()
    });

    setProcessing('')
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(values.email.length !== 0 &&
      values.password.length !== 0 &&
      values.cpassword.length !== 0) {
      if(values.password !== values.cpassword) {
        setMessage('Confirm password does not match with password!')
      } else {
        setProcessing(true);
        setMessage('');
        formCallback()
        //dispatch(authRegister(values))
      }
    } else {
      setMessage('Fields must not be blank!')
    }
  }

  const handleLoginSubmit = e => {
    e.preventDefault();

    if(values.email.length !== 0 &&
      values.password.length !== 0) {
      setProcessing(true);
      setMessage('');
      formCallback()
      //dispatch(authLogin(values))
    } else {
      setMessage('Fields must not be blank!')
    }
  }

  return {
    values,
    handleChange,
    handleSubmit,
    handleLoginSubmit,
    processing,
    message,
    setMessage
  }

}
