import { gql } from 'apollo-boost';

const GET_PAGES = gql`
  query GetPages {
    pages {
      id
      name
      description
      slug
      emoji
    }
  }
`;

export default GET_PAGES;
