import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authLogin } from './../redux/modules/auth/authActions';
import './Form.scss';

const Form = ({ className = '' }) => {
    const auth = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const [active, setActive] = useState(true);

    const handleClick = () => {
      setActive(!active);
      dispatch(authLogin(1));
    }

    return (
        <div className={`form ${className}`}>
            {active &&
                <div className="form-inner">
                    <p className="form-heading">
                        Login
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

                        <button className="button">Login</button>

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
