import { put, call, getContext } from 'redux-saga/effects'
import useQuery from './../../../hooks/useQuery';
import { queries } from './postQueries';

export const GET_POSTS = 'posts/get-posts';

const initialState = {
    posts: [],
    pagination: {},
    processing: false,
    updating: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
          return {
            ...state,
            processing: true,
            updating: true,
            error: null
          };
        case `${GET_POSTS}_FAIL`:
          return {
            ...state,
            processing: false,
            updating: false,
            error: action.payload
          };
        case `${GET_POSTS}_SUCCESS`:
          return {
            ...state,
            processing: true,
            updating: true,
            error: null
          };
        default:
            return state;
     }
}

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
