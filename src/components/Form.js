import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import { queries } from './../redux/modules/post/postQueries';

import './Form.scss';

const Form = ({ className = '' }) => {
  const [active, setActive] = useState(true);
  const [processing, setProcessing] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', cpassword: ''});
  const posts = useQuery(queries);

  const handleChange = (id, value) => {
    value.persist();

    setForm({
      ...form,
      [id]: value.trim()
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
  }

  const handleClick = () => {
    setActive(!active);
    console.log(posts.data.posts);
  }

  return (
      <div className={`form ${className}`}>
          {active &&
              <div className="form-inner">
                  <p className="form-heading">
                      Login
                  </p>

                  <form onSubmit={handleChange}>
                      <div className="form-group">
                          <label className="form-label">Email</label>
                          <input className="form-field" type="text" name="email" id="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)}/>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Password</label>
                          <input className="form-field" type="password" name="password" id="password" value={form.password} onChange={(e) => handleChange('password', e.target.value)}/>
                      </div>

                      <button className="button" disabled={processing}>Login</button>

                      <p className="form-text">
                          <button className="form-text-link" onClick={() => handleClick()}>
                              No account yet? <span>Register Here</span>
                          </button>
                      </p>
                  </form>
              </div>}

          {!active &&
              <div className="form-inner">
                  <p className="form-heading">
                      Register
                  </p>

                  <form>
                      <div className="form-group">
                          <label className="form-label">Email</label>
                          <input className="form-field" name="email" />
                      </div>
                      <div className="form-group">
                          <label className="form-label">Password</label>
                          <input className="form-field" name="password" />
                      </div>
                      <div className="form-group">
                          <label className="form-label">Confirm Password</label>
                          <input className="form-field" name="cpassword" />
                      </div>

                      <button className="button">Register</button>

                      <p className="form-text">
                          <button className="form-text-link" onClick={() => handleClick()}>
                              Already have an account? <span>Login Here</span>
                          </button>
                      </p>
                  </form>
              </div>}
      </div>
  );
}

export default Form;
