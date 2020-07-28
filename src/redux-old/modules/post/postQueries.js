import { gql } from '@apollo/client';

const POSTS_INFO = gql`
  fragment postsInfo on Posts {
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
`

const GET_POSTS = gql`
  query getPosts($pagination: Pagination) {
    posts(pagination: $pagination){
      ...postsInfo
    }
  }
  ${POSTS_INFO}
`;

export const queries = {
  GET_POSTS
}
