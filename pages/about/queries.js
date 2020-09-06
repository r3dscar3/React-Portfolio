import { gql } from 'apollo-boost';

export const GET_ABOUT_CONTENT = gql`
  query GetAboutContent($id: ID!) {
    Datum(id: $id) {
      id
      name
      sections
    }
  }
`;
