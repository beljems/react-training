import { AUTH_LOGIN, AUTH_REGISTER } from './authTypes'

const INITIAL_STATE = {
  token: {},
  values: {},
  register: false,
  error: null,
}

const authReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case AUTH_REGISTER :
      return {
        ...state,
        values: action.payload,
      }
    case `${AUTH_REGISTER}_SUCCESS` :
      return {
        ...state,
        values: action.payload.data,
        register: true,
        error: null,
      }
    case `${AUTH_REGISTER}_FAIL` :
      return {
        ...state,
        register: false,
        error: action.payload,
      }
    case AUTH_LOGIN :
      //localStorage.setItem('token', action.payload)
      return {
        ...state,
      }
    case `${AUTH_LOGIN}_SUCCESS` :
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        token: action.payload,
        register: true,
        error: null,
      }
    case `${AUTH_LOGIN}_FAIL` :
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default authReducer
