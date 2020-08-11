import React, { useState, useEffect, createContext } from 'react';

import { IS_FIXED, WRAP } from './../utils/constants';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  let authToken = localStorage.getItem('token');

  useEffect(() => {
    if(authToken) {
      WRAP.classList.remove(IS_FIXED)
      setIsLoggedIn(authToken)
    }
  }, [authToken])

  return (
    <AuthContext.Provider value={[ isLoggedIn, setIsLoggedIn ]}>
      {props.children}
    </AuthContext.Provider>
  )
}
