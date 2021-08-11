import { gql } from 'apollo-boost';

const GET_ABOUT_CONTENT = gql`
  query GetAboutContent($id: Int!) {
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

export default GET_ABOUT_CONTENT;
