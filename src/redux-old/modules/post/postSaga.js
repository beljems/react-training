import { put, call, getContext } from 'redux-saga/effects'
import useQuery from './../../../hooks/useQuery';
import { queries } from './postQueries';
import { GET_POSTS } from './postTypes';

function* getPostsReq(data) {
  return yield call(useQuery, queries.GET_POSTS, data);
}

export function* getPosts(action) {
  try {
    const { data: { posts } } = yield call(getPostsReq, action.payload)
    yield put({ type: `${GET_POSTS}_SUCCESS`, payload: posts })
  } catch(e) {
    yield put({ type: `${GET_POSTS}_FAIL`, payload: e.response })
  }
}
