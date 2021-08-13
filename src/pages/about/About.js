import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import GET_ABOUT_CONTENT from 'queries/about';

import { splitLineBreaks } from 'utils';
import theme from 'utils/theme';
import mediaQueries from 'utils/mediaQueries';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';

import Bass from 'icons/Bass';
import Glasses from 'icons/Glasses';
import Golf from 'icons/Golf';
import Hockey from 'icons/Hockey';
import { sortAsc } from 'src/utils';

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
      flex: 0 0 calc(${(props) => (props.count <= 4 ? 100 / props.count : 50)}% - 20px);
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

const StyledCardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
`;

const StyledCardImage = styled.img`
  width: auto;
  height: 100%;
`;

const CodeWrapper = styled.pre`
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  font-family: monospace;
  background-color: #fff;
  width: em(440);
  margin: 30px auto;
  padding: 8px;
  border-radius: 0.25em;
  line-height: 0;
  counter-reset: line;
  border: 1px solid ${theme.colors.border};

  span {
    min-height: 1.5rem;
    display: block;
    position: relative;
    padding-left: 45px;
    max-width: em(400);
    line-height: 1.5rem;

    &:before {
      position: absolute;
      left: 0;
      text-align: right;
      width: 20px;
      height: 100%;
      counter-increment: line;
      content: counter(line);
      display: inline-block;
      border-right: 1px solid ${theme.colors.border};
      padding: 0 8px;
      color: ${theme.colors.textDefault};
    }
  }
`;

const Hobbies = [<Bass />, <Golf />, <Hockey />];

const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_CONTENT, {
    variables: {
      id: 2,
    },
  });

  if (loading) return <PageWrapper />;
  if (error) return <p>Error :(</p>;

  const { page, sections, sectionItems } = data || {};
  const { name } = page || {};

  const sortedSections = sortAsc(sections);

  const [section1, section2, section3, section4] = sortedSections || [];

  return (
    <PageWrapper heading={name} emoji='☠️'>
      <Styled.Wrapper>
        <Styled.Body>
          <Styled.H1>
            {section1.title}
            <small>{section1.description}</small>
          </Styled.H1>

          <CodeWrapper>
            {splitLineBreaks(section2.description).map((line, idx) => {
              return <span key={idx}>{line}</span>;
            })}
          </CodeWrapper>
        </Styled.Body>
        <Styled.Body>
          <Styled.H2 style={{ paddingBottom: 12 }}>{section3.title}</Styled.H2>
          <StyledCardsWrapper>
            {sortAsc(section3.sectionItems).map((card, idx) => {
              return (
                <StyledCard count={section3.sectionItems.length} key={idx}>
                  <StyledCardIcon>{Hobbies[idx] || <Glasses />}</StyledCardIcon>
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
            {sortAsc(section4.sectionItems).map((card, idx) => {
              return (
                <StyledCard count={section4.sectionItems.length} key={idx}>
                  <StyledCardImageWrapper>
                    <StyledCardImage src={card.src} />
                  </StyledCardImageWrapper>
                  <Styled.H3 style={{ paddingTop: 15 }}>{card.title}</Styled.H3>
                  <Styled.Paragraph style={{ textAlign: 'center' }}>
                    {card.years} years of professional experience
                  </Styled.Paragraph>
                </StyledCard>
              );
            })}
          </StyledCardsWrapper>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default About;
