import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

import { WRAP } from './../../constants';

import logoBlogWhite from './../../assets/images/logo-blog-white.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleClick = () => {
        WRAP.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    return (
       <footer className="footer">
            <div className="l-container footer-container">
                <div className="footer-back-top">
                    <Link to="/" onClick={() => handleClick()}>
                        TOP
                    </Link>
                </div>
                <div className="footer-logo">
                    <Link to="/">
                        <img src={logoBlogWhite} alt="Blog" />
                    </Link>
                </div>
                <p className="footer-text">
                    サンプルテキストサンプル ルテキストサンプルテキストサ
                    <br />ンプルテキストサンプル ルテキスト
                </p>
            </div>
            <p className="footer-copyright">
                <small>Copyright©2007-{currentYear} Blog Inc.</small>
            </p>
       </footer>
    );
}

export default Footer;
