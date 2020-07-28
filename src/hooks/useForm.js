import { useState } from 'react';

export const useForm = (callback) => {
  const [processing, setProcessing] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (id, value) => {
    //value.persist();
    setValues({
      ...values,
      [id]: value.trim()
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    callback();
    setProcessing(true);
  }

  return {
    values,
    handleChange,
    handleSubmit,
    processing
  }
}
