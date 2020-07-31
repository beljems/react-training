import gql from 'graphql-tag';

const LOGIN = gql`
  mutation Authenticate(
    $email: String!,
    $password: String!
  ) {
    authenticate(
      email: $email,
      password: $password
    )
  }
`;

export const queries = {
  LOGIN
}
