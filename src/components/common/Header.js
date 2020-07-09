import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import './Header.scss';

import logoBlog from './../../assets/images/logo-blog.png';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;
    let element = '';

    const logoLink = (
        <Link to="/">
            <img src={logoBlog} alt="Blog" />
        </Link>
    );

    if(path === '/') {
        element = (
            <h1 className="header-logo">
                {logoLink}
            </h1>
        );
    } else {
        element = (
           <div className="header-logo">
                {logoLink}
           </div>
        );
    }

    const modifier = (
        path !== '/single' && path !== '/not-found' ? ' header-absolute' : ''
    );

    return (
        <header className={`header${modifier}`}>
            <div className="l-container header-container">

                {element}

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
