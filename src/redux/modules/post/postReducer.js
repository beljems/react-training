import { GET_POSTS, ADD_POST } from './postTypes'

const INITIAL_STATE = {
  post: [],
  posts: [],
  //processing: false,
  error: null
}

const postReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        error: null
      }
    case `${GET_POSTS}_SUCCESS` :
      return {
        ...state,
        posts: action.payload,
        //processing: true,
        error: null
      }
    case `${GET_POSTS}_FAIL` :
      return {
        ...state,
        //processing: false,
        error: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        error: null
      }
    case `${ADD_POST}_SUCCESS` :
      return {
        ...state,
        posts: action.payload.data,
        //processing: true,
        error: null
      }
    case `${ADD_POST}_FAIL` :
      return {
        ...state,
        //processing: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default postReducer
