import { gql } from 'apollo-boost';

const GET_HOME_CONTENT = gql`
  query GetHomeContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
      sections {
        id
        title
        description
        sectionItems {
          id
          title
          description
          years
          src
        }
      }
    }
  }
`;

export default GET_HOME_CONTENT;
