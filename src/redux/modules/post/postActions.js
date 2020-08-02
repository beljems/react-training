import { GET_POSTS, ADD_POST } from './postTypes'

export function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}
