import { all, takeLatest, setContext } from 'redux-saga/effects';
import { client } from './../utils/apollo';

import { GET_POSTS } from './modules/post/postTypes';
import { getPosts } from './modules/post/postSaga';

export default function* rootSaga() {
  yield setContext({ client })
  yield all([
    takeLatest(GET_POSTS, getPosts)
  ])
}
