import { gql } from 'apollo-boost';

const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
      emoji
    }
    sections(id: $id) {
      id
      title
      description
      sortOrder
      sectionItems {
        id
        title
        description
        years
        src
        sortOrder
      }
    }
  }
`;

export default GET_HOME_CONTENT;
