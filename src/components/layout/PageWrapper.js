import React from 'react';
import styled from 'styled-components';

import mediaQueries from 'utils/mediaQueries';
import theme from 'utils/theme';

import Loader from 'components/Loader';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1 0 0%;
  flex-direction: column;
  min-width: 0;
`;

const Header = styled.div`
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
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
  position: relative;
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
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;

const PageWrapper = (props) => {
  const { children, heading, emoji } = props;

  return (
    <Container>
      <Header>
        <Emoji>{emoji}</Emoji>
        <Heading>{heading}</Heading>
      </Header>

      <ContentWrapper>
        {!children && <Loader />}
        <Content className='content-transition'>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default PageWrapper;
