import { AUTH_LOGIN, AUTH_LOGOUT } from './authTypes'

export function authLogout() {
  return {
    type: AUTH_LOGOUT
  };
}

export function authLogin(data) {
  return {
    type: AUTH_LOGIN,
    payload: data
  };
}
