import { put, call, getContext } from 'redux-saga/effects';
import { queries } from './postQueries';
import useQuery from './../../../hooks/useQuery';
import useMutation from './../../../hooks/useMutation';

import { GET_POSTS, ADD_POST } from './postTypes';

function* getPostsReq(data = {}) {
  return yield call(useQuery, queries.POSTS, data);
}

export function* getPosts(action) {
  try {
    let { data: { posts } } = yield call(getPostsReq, action.payload);
    yield put({ type: `${GET_POSTS}_SUCCESS`, payload: posts })
  } catch(error) {
    yield put({ type: `${GET_POSTS}_FAIL`, payload: error })
  }
}

// function* addPostReq(data) {
//   return yield call(useMutation, queries.ADD_POST, data);
// }

function* addPostReq(data) {
  const client = yield getContext('client');
  const mutation = queries.ADD_POST;

  return yield call(client.mutate, { mutation,
    variables: {
      ...data
    }
  });
}

export function* addPost(action) {
  const { data: post } = yield addPostReq(action.payload)
  try {
    //const { data: post } = yield addPostReq(action.payload)
    yield put({ type: `${ADD_POST}_SUCCESS`, payload: post })
  } catch(error) {
    yield put({ type: `${ADD_POST}_FAIL`, payload: error })
    console.log(post)
  }
}
