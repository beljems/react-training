import gql from 'graphql-tag';

const POSTS_FIELDS = gql`
  fragment PostsFields on Comment {
    id
    postId
    content
    createdAt
  }
`;

const COMMENT = gql`
  mutation AddComment(
    $postId: Int!,
    $content: String!
  ) {
    comment: addComment(
      postId: $postId,
      content: $content
    ) {
      ...PostsFields
    }
  }
  ${POSTS_FIELDS}
`;

export const queries = {
  COMMENT
}
