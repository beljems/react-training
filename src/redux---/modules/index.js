import { combineReducers } from 'redux'
import posts from './post/postReducer'

const reducer = combineReducers({
  posts
});

export default reducer
