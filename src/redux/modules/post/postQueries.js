import { gql } from '@apollo/client';

const GET_POSTS = gql`
  query getPosts {
    posts(pagination: { limit: 10 }){
      id
      title
      content
      image
      createdAt
      comments {
        id
        postId
        content
        createdAt
      }
    }
  }
`;

export const queries = GET_POSTS
