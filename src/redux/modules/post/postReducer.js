import { GET_POSTS } from './postTypes';

const INITIAL_STATE = {
  posts: []
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_POSTS:
      return {
        posts: action.payload.data
      };
    default: return state;
  }
}
