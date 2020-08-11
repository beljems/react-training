import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST
} from './postTypes'

export function getPosts(data) {
  return {
    type: GET_POSTS,
    payload: data
  };
}

export function getPost(data) {
  return {
    type: GET_POST,
    payload: data
  };
}

export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
  };
}

export function updatePost(data) {
  return {
    type: UPDATE_POST,
    payload: data
  };
}
