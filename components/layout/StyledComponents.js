import styled from 'styled-components';

import theme from 'utils/theme';

export const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.5;
  max-width: ${(props) => (props.fullWidth ? '100%' : '600px')};
`;

export const Image = styled.img`
  display: inline-block;
  height: 430px;
  margin-bottom: 12px;
  width: 300px;
`;

export const H1 = styled.h1`
  font-size: 28px;

  small {
    display: block;
    font-size: 0.6em;
    line-height: 0.6em;
    color: #666;
  }
`;

export const Body = styled.div`
  margin-bottom: 12px;
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
