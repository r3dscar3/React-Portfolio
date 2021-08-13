import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import GET_HOME_CONTENT from 'queries/home';

import { splitLineBreaks, sortAsc } from 'utils';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';

import theme from 'utils/theme';

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

  const [section1] = sortedSections || [];

  return (
    <PageWrapper heading={name || ''} emoji='👋' fullWidth>
      <Styled.Wrapper fullWidth>
        <Styled.Body>
          <StyledBrowser>
            <Styled.H1>{section1.title}</Styled.H1>

            {splitLineBreaks(section1.description).map((line, idx) => (
              <Styled.Paragraph key={idx}>{line}</Styled.Paragraph>
            ))}
          </StyledBrowser>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default Home;
