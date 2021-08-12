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

export default GET_ABOUT_CONTENT;
