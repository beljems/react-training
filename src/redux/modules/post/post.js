import axios from 'axios';
import { useQuery } from '@apollo/client';
import { getPosts } from './postActions';
import { queries } from './postQueries';

const posts = useQuery(queries);
export function getPostsDetails() {
  return function(dispatch) {
    const data = posts.data
    dispatch(getPosts(data));
  }
}
