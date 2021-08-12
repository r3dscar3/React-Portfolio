import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import GET_ABOUT_CONTENT from 'queries/about';

import { splitLineBreaks } from 'utils';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';
import Loader from 'components/Loader';

import theme from 'utils/theme';

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

const About = () => {
  const { loading, error, data } = useQuery(GET_ABOUT_CONTENT, {
    variables: {
      id: 2,
    },
  });

  if (loading) return <PageWrapper />;
  if (error) return <p>Error :(</p>;

  return (
    <PageWrapper heading={data?.page.name} emoji='☠️'>
      <Styled.Wrapper>
        <Styled.Body>
          <Styled.H1>
            Nolan Thompson
            <small>Frontend developer & ex. graphic designer</small>
          </Styled.H1>

          <CodeWrapper>
            {splitLineBreaks(data.page.sections[0].sectionItems[0].description).map((line, idx) => {
              return <span key={idx}>{line}</span>;
            })}
          </CodeWrapper>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default About;
