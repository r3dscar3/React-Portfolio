import { gql } from 'apollo-boost';

const GET_ABOUT_CONTENT = gql`
  query GetContactContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
    }

    sections(id: $id) {
      title
      description
      sectionItems {
        title
        description
        sortOrder
      }
    }
  }
`;

export default GET_ABOUT_CONTENT;
