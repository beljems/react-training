import { useState, useEffect } from 'react';

export const useAuth = props => {
  const authToken = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    if(authToken) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [authToken])

  return {
    isLoggedIn,
    setIsLoggedIn
  }
}
