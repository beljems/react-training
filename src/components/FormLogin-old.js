import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { useForm } from './../hooks/useForm';
import { useAuth } from './../hooks/useAuth';

import FormRegister from './FormRegister';
import './Form.scss';

const FormLogin = () => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const { values, handleChange, handleSubmit, processing } = useForm(loginUserCallback);

  const { user, login, logout } = useAuth();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, result) {
      console.log(login(result));
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function loginUserCallback() {
    loginUser();
  }

  // const handleChange = (id, value) => {
  //   //value.persist();
  //   setForm({
  //     ...form,
  //     [id]: value.trim()
  //   });
  // }
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setProcessing(true);
  //   const { email, password } = form;
  // }
  //
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //
  //   if(form.password === form.cpassword) {
  //     setProcessing(true);
  //     setMessage('');
  //     addUser();
  //     addAuth();
  //     //console.log(form);
  //   } else {
  //     setProcessing(false);
  //     setMessage(<p className="error-message">Error! confirm password does not match password.</p>);
  //   }
  // }

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
