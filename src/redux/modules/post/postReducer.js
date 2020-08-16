import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
} from './postTypes'

const INITIAL_STATE = {
  post: {},
  posts: [],
  processing: false,
  updating: false,
  error: null
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
    case `${GET_POSTS}_SUCCESS` :
      return {
        ...state,
        posts: action.payload,
        processing: true,
        error: null
      }
    case `${GET_POST}_SUCCESS` :
      return {
        ...state,
        post: action.payload,
        processing: true,
        error: null
      }
    case `${ADD_POST}_SUCCESS` :
      return {
        ...state,
        post: action.payload,
        processing: true,
        updating: true,
        error: null
      }
    case `${UPDATE_POST}_SUCCESS` :
      //localStorage.setItem('postData', JSON.stringify({ ...action.payload }))
      return {
        ...state,
        processing: true,
        error: null
      }
    case `${GET_POSTS}_FAIL` :
    case `${GET_POST}_FAIL` :
    case `${ADD_POST}_FAIL` :
    case `${UPDATE_POST}_FAIL` :
      return {
        ...state,
        updating: false,
        processing: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default postReducer
