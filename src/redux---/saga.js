import { all, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

import { GET_POSTS } from './modules/post/postTypes.js';

import { getPosts  } from './modules/post/postSaga.js';

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    takeLatest(GET_POSTS, getPosts)
  ])
}
