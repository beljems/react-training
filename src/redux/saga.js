import { all, fork, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

import { AUTH_LOGIN } from './modules/auth/authTypes';
import { authLogin } from './modules/auth/authSaga';

export function* authLoginSaga() {
  yield takeLatest(AUTH_LOGIN, authLogin)
}

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    fork(authLoginSaga)
  ])
}
