import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authRegister, authLogin } from './../redux/modules/auth/authActions'

export const useForm = (data = {}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token, register, error } = useSelector(state => state.auth);
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState(data);

  useEffect(() => {
    if(error !== null) {
      setMessage('Email is already taken!')
    }
    if(register) {
      setMessage('Successfully registered!')
      setTimeout(() => {
        setMessage('')
        dispatch(authLogin(values))
      }, 500)
      history.push('/')
    }
  }, [history, values, error, register, dispatch])

  useEffect(() => {
    if(token === '') {
      setMessage('Email or password does not match in our database!')
    } else {
      history.push('/')
    }
  }, [history, token])

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
        dispatch(authRegister(values))
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
      dispatch(authLogin(values))
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
    message
  }

}
