import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './Form.scss';

const Form = () => {
    return (
        <div className="form">
            <div className="form-inner">
                <Switch>
                     <Route path="/login">
                        <p className="form-heading">
                            Login
                        </p>

                        <form>
                            <div className="form-group">
                                <label className="form-label" for="email">Email</label>
                                <input className="form-field" name="email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" for="password">Password</label>
                                <input className="form-field" name="password" />
                            </div>

                            <button className="button">Login</button>

                            <p className="form-text">
                                No account yet?
                                <Link className="form-text-link" to="/register">Register Here</Link>
                            </p>
                        </form>
                    </Route>
                    <Route path="/register">
                        <p className="form-heading">
                            Register
                        </p>

                        <form>
                            <div className="form-group">
                                <label className="form-label" for="email">Email</label>
                                <input className="form-field" name="email" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" for="password">Password</label>
                                <input className="form-field" name="password" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" for="cpassword">Confirm Password</label>
                                <input className="form-field" name="cpassword" />
                            </div>

                            <button className="button">Register</button>

                            <p className="form-text">
                                Already have an account?
                                <Link className="form-text-link" to="/login">Login Here</Link>
                            </p>
                        </form>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Form;
