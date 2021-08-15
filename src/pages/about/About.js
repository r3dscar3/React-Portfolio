import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import GET_ABOUT_CONTENT from 'queries/about';

import { splitLineBreaks, sortAsc } from 'utils';
import theme from 'utils/theme';
import mediaQueries from 'utils/mediaQueries';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';

import Bass from 'icons/Bass';
import Glasses from 'icons/Glasses';
import Golf from 'icons/Golf';
import Hockey from 'icons/Hockey';

const StyledWrapMaster = styled.div`
  margin: 0 -15px;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.tablet`
    flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
  `}
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 15px;

  ${mediaQueries.tablet`
      flex: 0 0 ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%;
			max-width: ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%; 
  `}
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15px;
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  background: #fff;
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

const Hobbies = [<Bass key={1} />, <Golf key={2} />, <Hockey key={3} />];

const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_CONTENT, {
    variables: {
      id: 2,
    },
  });

  if (loading) return <PageWrapper />;
  if (error) return <p>Error :(</p>;

  const { page, sections, sectionItems } = data || {};
  const { name, emoji } = page || {};

  const sortedSections = sortAsc(sections);

  const [section1, section2, section3, section4] = sortedSections || [];

  return (
    <PageWrapper heading={name} emoji={emoji}>
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
          <StyledWrapMaster>
            <StyledCardsWrapper>
              {sortAsc(section3.sectionItems).map((card, idx) => {
                return (
                  <StyledCardWrapper key={idx} count={section3.sectionItems.length}>
                    <StyledCard>
                      <StyledCardIcon>{Hobbies[idx] || <Glasses />}</StyledCardIcon>
                      <Styled.H3 style={{ paddingTop: 15 }}>{card.title}</Styled.H3>
                      <Styled.Paragraph style={{ textAlign: 'center' }}>{card.description}</Styled.Paragraph>
                    </StyledCard>
                  </StyledCardWrapper>
                );
              })}
            </StyledCardsWrapper>
          </StyledWrapMaster>
        </Styled.Body>
        <Styled.Body>
          <Styled.H2 style={{ paddingBottom: 12 }}>{section4.title}</Styled.H2>
          <StyledWrapMaster>
            <StyledCardsWrapper>
              {sortAsc(section4.sectionItems).map((card, idx) => {
                return (
                  <StyledCardWrapper key={idx} count={section3.sectionItems.length}>
                    <StyledCard count={section4.sectionItems.length}>
                      <StyledCardImageWrapper>
                        <StyledCardImage src={card.src} />
                      </StyledCardImageWrapper>
                      <Styled.H3 style={{ paddingTop: 15 }}>{card.title}</Styled.H3>
                      <Styled.Paragraph style={{ textAlign: 'center' }}>
                        {card.years} years of professional experience
                      </Styled.Paragraph>
                    </StyledCard>
                  </StyledCardWrapper>
                );
              })}
            </StyledCardsWrapper>
          </StyledWrapMaster>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default About;
