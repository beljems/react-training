import { GET_POSTS } from './postTypes';

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    payload: posts
  };
}
