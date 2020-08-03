import React, { useState, useContext } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { IS_ACTIVE, IS_FIXED, WRAP } from './../../utils/constants';
import { AuthContext } from './../../hooks/useAuth'

import Form from './../Form';
import './Header.scss';

import logoBlog from './../../assets/images/logo-blog.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  const [buttonText, setButtonText] = useState('Login');
  const [isOpen, setIsOpen] = useState(false);
  const [delay, setDelay] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const path = location.pathname;

  const text = isOpen ? 'Login' : 'Close';

  console.log(path);

  const handleClick = () => {
    if(!isOpen) {
      WRAP.classList.add(IS_FIXED)
    } else {
      WRAP.classList.remove(IS_FIXED)
    }
    if(delay) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 200);
      setDelay(!delay);
    } else {
      setTimeout(() => {
        setDelay(!delay);
      });
      setIsOpen(!isOpen);
    }
    setButtonText(text);
  }

  const handleRemoveClick = () => {
    if(!isOpen) return;
    WRAP.classList.remove(IS_FIXED);
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
    setDelay(!delay);
    setButtonText(text);
  }

  const handleLogoutClick = () => {
    const removeToken = localStorage.removeItem('token');
    if(!isLoggedIn || !isOpen) return;
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
    setDelay(!delay);
    setButtonText(text);
    setIsLoggedIn(removeToken);
    history.push(path)
    console.log(path);
  }

  const logoLink = <Link to="/" onClick={() => handleRemoveClick()}>
    <img src={logoBlog} alt="Blog" />
  </Link>;

  let element;
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
      <header className="header">
        <div className="l-container header-container">
          {element}
          <div className="header-right">
            {isLoggedIn &&
            <button className="header-right-button" onClick={() => handleLogoutClick()}>
              Logout
            </button>}
            {!isLoggedIn &&
            <button className="header-right-button" onClick={() => handleClick()}>
              {buttonText}
            </button>}
          </div>
        </div>
      </header>
      {!isLoggedIn && (isOpen &&
      <Form className={`${delay ? IS_ACTIVE : ''}`}/>)}
    </>
  );
}

export default Header;
