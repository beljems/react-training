import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authRegister, authLogin } from './../redux/modules/auth/authActions'
import { useForm } from './../hooks/useForm';

import Button from './Button';

const FormRegister = ({ onClick }) => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const history = useHistory();
  const { token, register, error } = useSelector(state => state.auth);
  const {
    values,
    handleChange,
    handleSubmit,
    processing,
    message,
    setMessage
  } = useForm(event => registerUser(), {
    email: '',
    password: '',
    cpassword: '',
  });

  let authToken = localStorage.getItem('token');

  function registerUser() {
    dispatch(authRegister(values));
  }

  useEffect(() => {
    if(error !== null) {
      setMessage('Email is already taken!')
    } else {
      if(register) {
        setMessage('Successfully registered!')

        setTimeout(() => {
          dispatch(authLogin(values))
        }, 500)
      }
    }
  }, [values, processing, setMessage, register, error, dispatch])

  useEffect(() => {
    if(token === authToken) history.push(path)
  }, [token, authToken, history, path])

  return (
    <div className="form-inner">
      <p className="form-heading">
        Register
      </p>

      {message !== '' ? <p class={`message ${register ? 'success' : 'error'}`}>{message}</p> : ''}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-field" type="text" name="email" id="email" value={values.email} onChange={(e) => handleChange('email', e.target.value)}/>
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input className="form-field" type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange('password', e.target.value)}/>
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input className="form-field" type="password" name="cpassword" id="cpassword" value={values.cpassword} onChange={(e) => handleChange('cpassword', e.target.value)}/>
        </div>

        <Button text="Register" disabled={processing} />
      </form>
      <p className="form-text">
        <button className="form-text-link" onClick={onClick}>
          Already have an account? <span>Login Here</span>
        </button>
      </p>
    </div>
  );
}

export default FormRegister;
