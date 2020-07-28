import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { AuthContext } from './../hooks/useAuth';
import { useForm } from './../hooks/useForm';

import FormRegister from './FormRegister';
import './Form.scss';

const FormLogin = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const AUTH_TOKEN = 'token';

  const { values, handleChange, handleSubmit, processing } = useForm(loginUserCallback);

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      const token = result.data.authenticate;
      //console.log(result.data.authenticate);
      localStorage.setItem(AUTH_TOKEN, token)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function loginUserCallback() {
    loginUser();
  }
  
  const handleClick = () => {
    setActive(!active);
  }

  return (
    <>
      {!active &&
      <div className="form-inner">
        <p className="form-heading">
          Login
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

          <button className="button" disabled={processing}>Login</button>
        </form>
        <p className="form-text">
          <button className="form-text-link" onClick={() => handleClick()}>
            No account yet? <span>Register Here</span>
          </button>
        </p>
      </div>}
      {active && <FormRegister />}
    </>
  );
}

const LOGIN_USER = gql`
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

export default FormLogin;
