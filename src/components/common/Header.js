import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import './Header.scss';

import logoBlog from './../../assets/images/logo-blog.png';

const Header = () => {
    let location = useLocation();
    const path = location.pathname;

    return (
        <header className={`header${path !== '/single' && path !== '/not-found' ? ' header-absolute' : ''}`}>
            <div className="l-container header-container">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logoBlog} alt="Blog" />
                    </Link>
                </div>
                <div className="header-login">
                    <Switch>
                        <Route path="/" exact>
                            <Link className="header-login-link" to="/login">
                                Login
                            </Link>
                        </Route>
                        <Route path="/admin">
                            <Link className="header-login-link" to="/login">
                                Logout
                            </Link>
                        </Route>
                        <Route path="/single">
                            <Link className="header-login-link" to="/login">
                                Login
                            </Link>
                        </Route>

                        <Link className="header-login-link" to="/">
                            Close
                        </Link>
                    </Switch>
                </div>
            </div>
        </header>
    );
}

export default Header;
