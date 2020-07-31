import { put, call, getContext } from 'redux-saga/effects';
import { queries } from './authQueries';

import { AUTH_LOGIN } from './authTypes';

function* authLoginReq({ email, password }) {
  const client = yield getContext('client');
  const mutation = queries.LOGIN;

  return yield call(client.mutate, { mutation,
    variables: { email, password }
  });
}

export function* authLogin(action) {
  try {
    const { data: { login } } = yield authLoginReq(action.payload);
    yield put({ type: `${AUTH_LOGIN}_SUCCESS`, payload: login })
  } catch(error) {
    yield put({ type: `${AUTH_LOGIN}_FAIL`, payload: error })
  }
}
