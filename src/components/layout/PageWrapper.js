import React from 'react';
import styled from 'styled-components';

import mediaQueries from 'utils/mediaQueries';
import theme from 'utils/theme';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1 0 0%;
  flex-direction: column;
  min-width: 0;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  flex: 0 0 auto;
  height: 72px;
  padding-left: 34px;
`;

const Emoji = styled.div`
  width: 16px;
  opacity: 0.7;
`;

const Heading = styled.h1`
  color: ${theme.colors.textGrey};
  font-family: ${(props) => props.theme.fontStack};
  font-size: 18px;
  line-height: 1.5;
  margin-left: 13px;
`;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundContent};
  flex: 1 0 0%;
  min-height: 0;
  overflow-y: scroll;
  padding: 30px 15px;

  ${mediaQueries.tablet`
    padding: 30px;
  `}
`;

const Content = styled.div`
  max-width: ${(props) => (props.fullWidth ? '100%' : '768px')};
`;

export default (props) => {
  const { children, heading, emoji, fullWidth } = props;

  return (
    <Container>
      <Header>
        <Emoji>{emoji}</Emoji>
        <Heading>{heading}</Heading>
      </Header>

      <ContentWrapper>
        <Content fullWidth={fullWidth}>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};
