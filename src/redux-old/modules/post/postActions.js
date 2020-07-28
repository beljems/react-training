import { GET_POSTS } from './postTypes';

export function getPosts(data) {
  return { type: GET_POSTS , payload: data };
}
