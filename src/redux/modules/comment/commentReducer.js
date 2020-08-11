import { ADD_COMMENT } from './commentTypes'

const INITIAL_STATE = {
  comment: {},
  error: null
}

const commentReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        error: null
      }
    case `${ADD_COMMENT}_SUCCESS` :
      return {
        ...state,
        comment: action.payload,
        error: null
      }
    case `${ADD_COMMENT}_FAIL` :
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default commentReducer
