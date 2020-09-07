import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { GET_HOME_CONTENT } from './queries';

import { splitLineBreaks } from 'utils';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';
import Loader from 'components/Loader';

import theme from 'utils/theme';
import mediaQueries from 'utils/mediaQueries';

import Bass from 'icons/Bass';
import Logo from 'icons/Logo';
import Golf from 'icons/Golf';
import Hockey from 'icons/Hockey';

const StyledBrowser = styled.div`
  width: 100%;
  border-radius: 0.25em;
  padding: 1.3em 15px 20px;
  border: 1px solid ${theme.colors.border};
  background: radial-gradient(circle closest-side at 0.5em 0.5em, #ea5a5a, #ea5a5a 2px, #6c6c6c 3px, transparent 3px),
    radial-gradient(circle closest-side at 1.03em 0.5em, #d5c035, #d5c035 2px, #6c6c6c 3px, transparent 3px),
    radial-gradient(circle closest-side at 1.53em 0.5em, #32b42c, #32b42c 2px, #6c6c6c 3px, transparent 3px),
    linear-gradient(to bottom, ${theme.colors.darkGrey} 1em, white 1em);
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mediaQueries.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: #fff;
  margin: 35px 0;

  ${mediaQueries.tablet`
    flex: 0 0 calc(33.33% - 20px);
  `}
`;

const StyledCardIcon = styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -55px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: ${theme.colors.lightGrey};
  border: 1px solid ${theme.colors.border};
  box-shadow: 0 5px 10px -8px ${theme.colors.darkGrey};

  svg {
    width: 70%;
    height: auto;
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_HOME_CONTENT, {
    variables: {
      id: 1,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const { sections } = data.Page;

  const Hobbies = [<Bass />, <Golf />, <Hockey />];

  return (
    <PageWrapper heading='Welcome' emoji='👋' fullWidth>
      <Styled.Wrapper fullWidth>
        <Styled.Body>
          <StyledBrowser>
            <Styled.H1>Hello World!</Styled.H1>

            {splitLineBreaks(sections[0].content).map((line, idx) => {
              return <Styled.Paragraph key={idx}>{line}</Styled.Paragraph>;
            })}
          </StyledBrowser>
        </Styled.Body>
        <Styled.Body>
          <Styled.H2 style={{ paddingBottom: 12 }}>{sections[1].title}</Styled.H2>
          <StyledCardsWrapper>
            {sections[1].content.map((card, idx) => {
              return (
                <StyledCard key={idx}>
                  <StyledCardIcon>{Hobbies[idx] || <Logo />}</StyledCardIcon>
                  <Styled.H3 style={{ paddingTop: 15 }}>{card.title}</Styled.H3>
                  <Styled.Paragraph style={{ textAlign: 'center' }}>{card.description}</Styled.Paragraph>
                </StyledCard>
              );
            })}
          </StyledCardsWrapper>
        </Styled.Body>
        <Styled.Body>
          <Styled.H2 style={{ paddingBottom: 12 }}>{sections[2].title}</Styled.H2>
          <StyledCardsWrapper>
            {sections[2].content.map((card, idx) => {
              return (
                <StyledCard key={idx}>
                  <StyledCardIcon>{Hobbies[idx] || <Logo />}</StyledCardIcon>
                  <Styled.H3 style={{ paddingTop: 15 }}>{card.title}</Styled.H3>
                  <Styled.Paragraph style={{ textAlign: 'center' }}>{card.description}</Styled.Paragraph>
                </StyledCard>
              );
            })}
          </StyledCardsWrapper>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};
