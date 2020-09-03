import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authRegister, authLogin } from './../redux/modules/auth/authActions'

export default (data = {}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token, register, error } = useSelector(state => state.auth);
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState(data);

  useEffect(() => {
    if(register) {
      setMessage('Successfully registered!')
      setTimeout(() => {
        setMessage('')
        dispatch(authLogin(values))
      }, 500)
    }
  }, [values, register, dispatch])

  useEffect(() => {
    if(token === '') {
      setMessage('Email or password does not match in our database!')
    } else {
      history.push('/')
    }
  }, [history, token])

  useEffect(() => {
    if(error !== null) {
      setMessage('Email is already taken!')
    }
  }, [error])

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
      const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!values.email.match(mailFormat)) {
        setMessage('Not a valid email!')
      }
      else if(values.password !== values.cpassword) {
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
    message,
  }

}
