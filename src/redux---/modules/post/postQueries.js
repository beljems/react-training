import gql from 'graphql-tag';

const POSTS_FIELDS = gql`
  fragment PostsFields on Post {
    id
    title
    content
    image
    createdAt
    comments
  }
`;

const GET_POSTS = gql`
  query getPosts {
    posts(pagination: { limit: 10 }){
      ...PostsFields
    }
  }
  ${POSTS_FIELDS}
`;

export const queries = {
  GET_POSTS
}
