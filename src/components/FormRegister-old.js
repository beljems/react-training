import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';

import { useFormValidation } from './../hooks/useFormValidation';
import { setAuth } from './../hooks/useAuth';

import FormLogin from './FormLogin';
import './Form.scss';

const FormRegister = () => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState('');

  const {
    values,
    handleChange,
    handleSubmit,
    processing,
    message
  } = useFormValidation(registerUser);

  const [addUser] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log(result)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function registerUser() {
    addUser();
  }

  const handleClick = () => {
    setActive(!active);
  }

  // const dispatch = useDispatch();
  // const categories = useSelector(state => state.user.);
  //
  // useEffect(() => {
  //     dispatch(setAuth());
  // }, [dispatch]);

  // const handleChange = (id, value) => {
  //   //value.persist();
  //   setForm({
  //     ...form,
  //     [id]: value.trim()
  //   });
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setProcessing(true);
  //   const { email, password } = form;
  // }

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //
  //   if(form.password === form.cpassword) {
  //     setProcessing(true);
  //     setMessage('');
  //     //addUser();
  //     //addAuth();
  //     //console.log(form);
  //   } else {
  //     setProcessing(false);
  //     setMessage(<p className="error-message">Error! confirm password does not match password.</p>);
  //   }
  // }

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

export default FormRegister;
