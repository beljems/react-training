import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  GET_UPDATED_POST,
  ADD_COMMENT,
} from './postTypes'

const INITIAL_STATE = {
  post: {},
  postData: {},
  posts: [],
  comment: {},
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
    case ADD_COMMENT:
      return {
        ...state,
        error: null
      }
    case `${GET_UPDATED_POST}` :
      const postsData = state.posts.map((obj) => obj.id === action.payload.id ? { ...obj, ...action.payload } : obj)

      return {
        ...state,
        posts: postsData,
        postData: action.payload,
        updating: false,
        error: null
      }
    case `${GET_POSTS}_SUCCESS` :
      let itemPost = {}, itemComment = {}
      state.posts.map((item, key) => itemPost = item[key].id)
      const postsArr = action.payload.map((obj) => obj.id === itemPost ? { ...obj, ...state.posts } : obj )

      return {
        ...state,
        posts: postsArr,
        error: null
      }
    case `${GET_POST}_SUCCESS` :
      let filteredPost = {};
      if(Object.keys(state.comment).length > 0) {
        let k = Object.keys(state.comment.comment)[0];
        filteredPost = [state.comment.comment, ...action.payload.comments.filter(item => {
          return Object.keys(item) !== k
        })]
      } else {
        filteredPost = action.payload
      }

      return {
        ...state,
        post: filteredPost,
        updating: true,
        error: null
      }
    case `${ADD_POST}_SUCCESS` :
      let postKey = Object.keys(action.payload)[0];
      const filteredPosts = [action.payload, ...state.posts.filter(item => {
        return Object.keys(item) !== postKey
      })]
      return {
        ...state,
        post: action.payload,
        posts: filteredPosts,
        error: null
      }
    case `${UPDATE_POST}_SUCCESS` :
      return {
        ...state,
        updating: false,
        error: null
      }
    case `${ADD_COMMENT}_SUCCESS` :
      return {
        ...state,
        comment: action.payload,
        error: null
      }
    case `${GET_POSTS}_FAIL` :
    case `${GET_POST}_FAIL` :
    case `${ADD_POST}_FAIL` :
    case `${UPDATE_POST}_FAIL` :
    case `${ADD_COMMENT}_FAIL` :
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
