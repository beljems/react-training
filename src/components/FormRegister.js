import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';

import { AuthContext } from './../hooks/useAuth';
import { useFormValidation } from './../hooks/useFormValidation';
import { setAuth } from './../hooks/useAuth';

import FormLogin from './FormLogin';
import './Form.scss';

const FormRegister = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [active, setActive] = useState(false);

  const { values, handleChange, handleSubmit, processing, message } = useFormValidation(registerUser);

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    variables: values
  })

  const [authRegister] = useMutation(AUTHENTICATE, {
    update(_, result) {
      const token = localStorage.setItem('token', result.data.authenticate)
      context.login(result.data.authenticate);
      history.push('/');
      console.log(result)
    },
    onError(err){
      console.log(err);
    },
    variables: values
  })

  useEffect(() => {
    if(loading) {
      console.log('true');
      authRegister();
    }
  }, [loading]);

  function registerUser() {
    addUser();
  }

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <>
      {!active &&
      <div className="form-inner">
        <p className="form-heading">
          Register
        </p>

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
          {message}

          <button className="button" disabled={processing}>Register</button>
        </form>
        <p className="form-text">
          <button className="form-text-link" onClick={() => handleClick()}>
          Already have an account? <span>Login Here</span>
          </button>
        </p>
      </div>}
      {active && <FormLogin />}
    </>
  );
}

const REGISTER_USER = gql`
  mutation registerUser(
    $email: String!,
    $password: String!
  ) {
    register(
      email: $email,
      password: $password
    )
  }
`

const AUTHENTICATE = gql`
  mutation authentication(
    $email: String!,
    $password: String!
  ) {
    authenticate(
      email: $email,
      password: $password
    )
  }
`

export default FormRegister;
