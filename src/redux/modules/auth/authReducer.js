import { AUTH_LOGIN, AUTH_LOGOUT } from './authTypes'

const INITIAL_STATE = {
  token: {},
}

const authReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case AUTH_LOGIN :
      localStorage.setItem('token', action.payload)
      return {
        token: action.payload
      }
    case AUTH_LOGOUT :
      localStorage.removeItem('token')
      return {
        token: {}
      }
    default:
      return state;
  }
}

export default authReducer
