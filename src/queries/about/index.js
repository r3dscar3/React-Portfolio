import { gql } from 'apollo-boost';

const GET_ABOUT_CONTENT = gql`
  query GetAboutContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
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

export default GET_ABOUT_CONTENT;
