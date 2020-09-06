import { gql } from 'apollo-boost';

export const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: ID!) {
    Datum(id: $id) {
      id
      name
      sections
    }
  }
`;
