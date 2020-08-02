import { all, fork, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

import { AUTH_LOGIN, AUTH_REGISTER } from './modules/auth/authTypes';
import { GET_POSTS, ADD_POST } from './modules/post/postTypes';

import { authLogin, authRegister } from './modules/auth/authSaga';
import { getPosts, addPost } from './modules/post/postSaga';

export function* authRegisterSaga() {
  yield takeLatest(AUTH_REGISTER, authRegister)
}

export function* authLoginSaga() {
  yield takeLatest(AUTH_LOGIN, authLogin)
}

export function* getPostsSaga() {
  yield takeLatest(GET_POSTS, getPosts)
}

export function* addPostSaga() {
  yield takeLatest(ADD_POST, addPost)
}

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    fork(authRegisterSaga),
    fork(authLoginSaga),
    fork(getPostsSaga),
    fork(addPostSaga),
  ])
}
