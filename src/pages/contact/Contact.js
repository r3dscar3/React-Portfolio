import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';

import GET_CONTACT_CONTENT from 'queries/contact';

import { sortAsc } from 'utils';
import mediaQueries from 'utils/mediaQueries';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';

const StyledContactItem = styled.div`
  display: flex;
  margin-top: 15px;
	line-height: 1.2em;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Emoji = styled.div`
  font-size: 20px;
  min-width: 30px;
  margin-right: 10px;

  ${mediaQueries.desktop} {
    width: 18px;
    font-size: 18px;
  }
`;

const Contact = () => {
  const { loading, error, data } = useQuery(GET_CONTACT_CONTENT, {
    variables: {
      id: 3,
    },
  });

  if (loading) return <PageWrapper />;
  if (error) return <p>Error :(</p>;

  const { page, sections } = data || {};
  const { name, emoji } = page || {};

  const [section1] = sections || [];

  return (
    <PageWrapper heading={name} emoji={emoji || '📱'}>
      <Styled.Wrapper>
        <Styled.Body>
          <Styled.H1>{section1.title}</Styled.H1>
          {sortAsc(section1.sectionItems).map((item, idx) => {
            return (
              <StyledContactItem key={idx}>
                <Emoji>{item.emoji || (idx === 0 ? '📱' : '📧')} :</Emoji>

                <Link href={`${idx === 0 ? 'tel:' : 'mailto:'}${item.description}`} passHref>
                  {item.description}
                </Link>
              </StyledContactItem>
            );
          })}
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default Contact;
