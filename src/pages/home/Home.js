import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import Image from 'next/image';

import GET_HOME_CONTENT from 'queries/home';

import { splitLineBreaks, sortAsc } from 'utils';
import mediaQueries from 'utils/mediaQueries';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';

import theme from 'utils/theme';

const StyledBrowser = styled.div`
  width: 100%;
  border-radius: 0.25em;
  padding: 3em 30px 20px;
  border: 1px solid ${theme.colors.border};
  background: radial-gradient(circle closest-side at 0.7em 0.7em, #ea5a5a, #ea5a5a 3px, #6c6c6c 4px, transparent 4px),
    radial-gradient(circle closest-side at 1.4em 0.7em, #d5c035, #d5c035 3px, #6c6c6c 4px, transparent 4px),
    radial-gradient(circle closest-side at 2.1em 0.7em, #32b42c, #32b42c 3px, #6c6c6c 4px, transparent 4px),
    linear-gradient(to bottom, ${theme.colors.activeLink} 1.5em, white 1.5em);
`;

const StyledProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

const StyledProject = styled.div`
  width: 100%;
  margin: 15px 0;

  ${mediaQueries.tablet`
		width: 50%;
	`}
`;

const StyledImageWrapper = styled.div`
  border: 1px solid ${theme.colors.lightGrey};
  box-shadow: 0 2px 8px -4px ${theme.colors.darkGrey};
  margin-top: 15px;
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_CONTENT, {
    variables: {
      id: 1,
    },
  });

  if (loading) return <PageWrapper />;
  if (error) return <p>Error :(</p>;

  const { page, sections } = data || {};
  const { name } = page || {};

  const sortedSections = sortAsc(sections);

  const [section1, section2, section3] = sortedSections || [];

  return (
    <PageWrapper heading={name || ''} emoji='👋' fullWidth>
      <Styled.Wrapper fullWidth>
        <Styled.Body>
          <StyledBrowser>
            <Styled.H1>{section1.title}</Styled.H1>

            {splitLineBreaks(section1.description).map((line, idx) => (
              <Styled.Paragraph key={idx}>{line}</Styled.Paragraph>
            ))}

            <StyledProjectsWrapper>
              <Styled.H2>{section2.title}</Styled.H2>
              {sortAsc(section2.sectionItems).map((item, idx) => {
                return (
                  <StyledProject key={idx}>
                    <Styled.H4 style={{ marginBottom: 15 }}>{item.title}</Styled.H4>
                    {item.description.length > 0 && <Styled.Paragraph>{item.description}</Styled.Paragraph>}
                    {item.src.length > 0 && (
                      <StyledImageWrapper>
                        <Image src={item.src} alt={item.title} width={1800} height={1494} />
                      </StyledImageWrapper>
                    )}
                  </StyledProject>
                );
              })}
            </StyledProjectsWrapper>

            <StyledProjectsWrapper>
              <Styled.H2>{section3.title}</Styled.H2>
              {sortAsc(section3.sectionItems).map((item, idx) => {
                return (
                  <StyledProject key={idx}>
                    <Styled.H4 style={{ marginBottom: 15 }}>{item.title}</Styled.H4>
                    {item.description.length > 0 && <Styled.Paragraph>{item.description}</Styled.Paragraph>}
                    {item.src.length > 0 && (
                      <StyledImageWrapper>
                        <Image src={item.src} alt={item.title} width={1800} height={1494} />
                      </StyledImageWrapper>
                    )}
                  </StyledProject>
                );
              })}
            </StyledProjectsWrapper>
          </StyledBrowser>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default Home;
