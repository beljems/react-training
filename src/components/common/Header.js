import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

import Form from './../Form';
import { IS_ACTIVE, IS_FIXED, WRAP } from './../../constants';

import logoBlog from './../../assets/images/logo-blog.png';

const Header = () => {
    const [buttonText, setButtonText] = useState('Login');
    const [active, setActive] = useState(false);
    const [delay, setDelay] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    let element;

    const text = active ? 'Login' : 'Close';

    const handleClick = () => {
        if(!active) {
            WRAP.classList.add(IS_FIXED)
        } else {
            WRAP.classList.remove(IS_FIXED)
        }
        if(delay) {
            setTimeout(() => {
                setActive(!active);
            }, 200);
            setDelay(!delay);
        } else {
            setTimeout(() => {
                setDelay(!delay);
            });
            setActive(!active);
        }
        setButtonText(text);
    }

    const handleRemoveClick = () => {
        if(!active) return;
        WRAP.classList.remove(IS_FIXED);
        setTimeout(() => {
            setActive(!active);
        }, 200);
        setDelay(!delay);
        setButtonText(text);
    }

    const logoLink = <Link to="/" onClick={() => handleRemoveClick()}>
        <img src={logoBlog} alt="Blog" />
    </Link>;

    const modifier = path !== '/single' && path !== '/not-found' ? ' header-absolute' : '';

    if(path === '/') {
        element = <h1 className="header-logo">
            {logoLink}
        </h1>;
    } else {
        element = <div className="header-logo">
            {logoLink}
       </div>;
    }

    return (
        <>
            <header className={`header${modifier}`}>
                <div className="l-container header-container">
                    {element}
                    <div className="header-right">
                        <button className="header-right-button" onClick={() => handleClick()}>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </header>
            {active &&
            <Form className={`${delay ? IS_ACTIVE : ''}`}/>}
        </>
    );
}

export default Header;
