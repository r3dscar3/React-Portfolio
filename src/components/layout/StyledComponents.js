import styled from '@emotion/styled';

import theme from 'utils/theme';

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.5;
  max-width: 100%;
`;

export const Image = styled.img`
  display: inline-block;
  height: 430px;
  margin-bottom: 12px;
  width: 300px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5em;

  small {
    display: block;
    font-size: 0.6em;
    line-height: 1em;
    color: ${theme.colors.textGrey};
  }
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

export const H4 = styled.h4`
  font-size: 18px;
  font-weight: 700;
`;

export const Body = styled.div`
  margin-bottom: 60px;
`;

export const Paragraph = styled.div`
  margin-bottom: 6px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  list-style: circle inside;
  margin-bottom: 12px;
`;

export const ListItem = styled.li`
  line-height: 2;
`;
