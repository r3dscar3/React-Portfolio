import { gql } from 'apollo-boost';

export const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
      sections {
        id
        title
        sectionItems {
          id
          title
          description
        }
      }
    }
  }
`;
