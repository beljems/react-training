import { ADD_COMMENT } from './commentTypes'

export function addComment(data) {
  return {
    type: ADD_COMMENT,
    payload: data
  };
}
