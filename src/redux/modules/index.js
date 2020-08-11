import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import postReducer from './post/postReducer';
import commentReducer from './comment/commentReducer';

const reducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
})

export default reducers
