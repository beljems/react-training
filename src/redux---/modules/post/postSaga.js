import { put, call, getContext } from 'redux-saga/effects'
import { queries } from './postQueries';

import { GET_POSTS } from './postTypes';

import useQuery from '../../../hooks/useQuery';
import useMutation from '../../../hooks/useMutation';

function* getPostsReq(data) {
  return yield call(useQuery, queries.GET_POSTS, data)
}

export function* getPosts(action) {
  try {
    const { data: { posts } } = yield call(getPostsReq, action.payload);
    yield put({ type: `${GET_POSTS}_SUCCESS`, payload: posts })
  } catch (error) {
    yield put({ type: `${GET_POSTS}_FAIL`, payload: error })
  }
}
