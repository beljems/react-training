import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authLogin } from './../redux/modules/auth/authActions'
import { useForm } from './../hooks/useForm';

import Button from './Button';

const FormLogin = ({ onClick }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { token } = useSelector(state => state.auth);
  const {
    values,
    handleChange,
    handleLoginSubmit,
    processing,
    message,
    setMessage,
  } = useForm(event => getUser(), {
    email: '',
    password: ''
  });

  function getUser() {
    dispatch(authLogin(values));
  }

  useEffect(() => {
    if(token === '') {
      setMessage('Email or password does not match in our database!');
    } else {
      history.push('/')
    }
  }, [history, token, setMessage])

  return (
    <>
      <div className="form-inner">
        <p className="form-heading">
          Login
        </p>

        {message !== '' ? <p class="message error">{message}</p> : ''}
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-field" type="text" name="email" id="email" value={values.email} onChange={(e) => handleChange('email', e.target.value)}/>
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input className="form-field" type="password" name="password" id="password" value={values.password} onChange={(e) => handleChange('password', e.target.value)}/>
          </div>

          <Button text="Login" disabled={processing} />
        </form>
        <p className="form-text">
          <button className="form-text-link" onClick={onClick}>
            No account yet? <span>Register Here</span>
          </button>
        </p>
      </div>
    </>
  );
}

export default FormLogin;
