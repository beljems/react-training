import { combineReducers } from 'redux'

import posts from './post/postReducer'

const reducers = combineReducers({
  posts
});

export default reducers;
