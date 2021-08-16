import { gql } from 'apollo-boost';

const GET_ABOUT_CONTENT = gql`
  query GetContactContent($id: Int!) {
    page(id: $id) {
      id
      name
      description
      emoji
    }

    sections(id: $id) {
      title
      description
      sectionItems {
        title
        description
        sortOrder
        emoji
        src
      }
    }
  }
`;

export default GET_ABOUT_CONTENT;
