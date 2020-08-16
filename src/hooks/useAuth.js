import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useAuth = props => {
  const history = useHistory();
  const authToken = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    if(authToken) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }

    if(!authToken) history.push('/')
  }, [history, authToken])

  return {
    isLoggedIn,
    setIsLoggedIn
  }
}
