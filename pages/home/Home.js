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

const StyledAppWrapper = styled.div`
  width: 100%;
  border-radius: 0.25em;
  padding: 1.3em 15px 20px;
  border: 1px solid ${theme.colors.border};
  background: radial-gradient(circle closest-side at 0.5em 0.5em, #c92f2f, #c92f2f 2px, #6c6c6c 3px, transparent 3px),
    radial-gradient(circle closest-side at 1.03em 0.5em, #d5c035, #d5c035 2px, #6c6c6c 3px, transparent 3px),
    radial-gradient(circle closest-side at 1.53em 0.5em, #32b42c, #32b42c 2px, #6c6c6c 3px, transparent 3px),
    linear-gradient(to bottom, ${theme.colors.darkGrey} 1em, white 1em);
`;

export default () => {
  const { loading, error, data } = useQuery(GET_HOME_CONTENT, {
    variables: {
      id: 1,
    },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <PageWrapper heading='Welcome' emoji='👋'>
      <Styled.Wrapper>
        <Styled.Body>
          <StyledAppWrapper>
            <Styled.H1>Hello World!</Styled.H1>

            {splitLineBreaks(data.Datum.sections[0].content).map((line, idx) => {
              return <Styled.Paragraph>{line}</Styled.Paragraph>;
            })}
          </StyledAppWrapper>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};
