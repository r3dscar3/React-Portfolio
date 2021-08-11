import { gql } from 'apollo-boost';

export const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: Int!) {
    page(id: $id) {
      id
      title
      description
      sections {
        id
        title
        sectionItems {
          title
          description
        }
      }
    }
  }
`;
