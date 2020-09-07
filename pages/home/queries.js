import { gql } from 'apollo-boost';

export const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: ID!) {
    Page(id: $id) {
      id
      name
      sections
    }
  }
`;
