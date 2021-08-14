import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';

import GET_CONTACT_CONTENT from 'queries/contact';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';
import { sortAsc } from 'utils';

const StyledContactItem = styled.div`
  display: flex;
  margin-top: 15px;
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
    <PageWrapper heading={name} emoji={emoji}>
      <Styled.Wrapper>
        <Styled.Body>
          <Styled.H1>{section1.title}</Styled.H1>
          {sortAsc(section1.sectionItems).map((item, idx) => {
            return (
              <StyledContactItem key={idx}>
                <Styled.Paragraph>{item.title}</Styled.Paragraph>
                <Styled.Paragraph>
                  <Link href={`${idx === 0 ? 'tel:' : 'mailto:'}${item.description}`} passHref>
                    {item.description}
                  </Link>
                </Styled.Paragraph>
              </StyledContactItem>
            );
          })}
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default Contact;
