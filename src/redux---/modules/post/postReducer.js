import { GET_POSTS } from './postTypes';

const INITIAL_STATE = {
  posts: [],
  pagination: {},
  processing: false,
  updating: false,
  error: null
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        processing: true,
        updating: true,
        error: null
      };
    case `${GET_POSTS}_SUCCESS`:
      return {
        ...state,
        posts: action.payload.data,
        processing: false,
        updating: false,
        error: null
      };
    case `${GET_POSTS}_FAIL`:
      return {
        ...state,
        processing: false,
        updating: false,
        error: action.payload
      };
    default: return state;
  }
}
