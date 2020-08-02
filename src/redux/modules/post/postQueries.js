import gql from 'graphql-tag';

const POSTS_FIELDS = gql`
  fragment PostsFields on Post {
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
`;

const POSTS = gql`
  query Posts{
    posts: posts{
      ...PostsFields
    }
  }
  ${POSTS_FIELDS}
`;

const ADD_POST = gql`
  query AddPost{
    post: addPost{
      ...PostsFields
    }
  }
  ${POSTS_FIELDS}
`;

export const queries = {
  POSTS,
  ADD_POST
}
