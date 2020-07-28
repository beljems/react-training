import React, { useReducer, createContext } from 'react';

const AuthContext = createContext({
  token: null,
  login: (data) => {},
  logout: () => {}
})

// reducer
function authReducer(state, action) {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null
      }
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, {
    token: null
  })

  function login(data) {
    dispatch({
      type: 'LOGIN',
      payload: data
    })
  }

  function logout(data) {
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <AuthContext.Provider value={{
      token: state.token, login, logout
    }} {...props} />
  )
}

export { AuthContext, AuthProvider }
