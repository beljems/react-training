import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  GET_UPDATED_POST,
} from './postTypes'

const INITIAL_STATE = {
  post: {},
  postData: {},
  posts: [],
  processing: false,
  updating: false,
  error: null,
}

const postReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
    case GET_POST:
    case ADD_POST:
    case UPDATE_POST:
      return {
        ...state,
        error: null
      }
    case `${GET_UPDATED_POST}` :
      return {
        ...state,
        postData: action.payload,
        updating: true,
        error: null
      }
    case `${GET_POSTS}_SUCCESS` :
      return {
        ...state,
        posts: action.payload,
        error: null,
      }
    case `${GET_POST}_SUCCESS` :
      return {
        ...state,
        post: action.payload,
        error: null
      }
    case `${ADD_POST}_SUCCESS` :
      return {
        ...state,
        post: action.payload,
        updating: true,
        error: null
      }
    case `${UPDATE_POST}_SUCCESS` :
      return {
        ...state,
        updating: true,
        error: null
      }
    case `${GET_POSTS}_FAIL` :
    case `${GET_POST}_FAIL` :
    case `${ADD_POST}_FAIL` :
    case `${UPDATE_POST}_FAIL` :
      return {
        ...state,
        updating: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default postReducer
