import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import logoBlog from './../../assets/images/logo-blog.png';

const Header = () => {
    return (
        <div className="l-container">
            <header className="header">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logoBlog} alt="Blog" />
                    </Link>
                </div>
                <div className="header-login">
                    <Link className="header-login-link" to="/login">
                        Login
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
