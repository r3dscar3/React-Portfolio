import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';

import GET_CONTACT_CONTENT from 'queries/contact';

import { sortAsc } from 'utils';
import mediaQueries from 'utils/mediaQueries';
import theme from 'utils/theme';

import * as Styled from 'components/layout/StyledComponents';
import PageWrapper from 'components/layout/PageWrapper';
import Icon from 'components/Icon';

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

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px 15px;

  ${mediaQueries.tablet} {
    flex: 0 0 ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%;
    max-width: ${(props) => (props.count >= 3 ? 100 / props.count : 25)}%;
  }

  a {
    display: block;
    width: 100%;
  }
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

const StyledCardImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;

  svg {
    width: 75px;
    height: auto;
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

  const [section1, section2] = sections || [];

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
                  <a>{item.description}</a>
                </Link>
              </StyledContactItem>
            );
          })}
        </Styled.Body>
        <Styled.Body>
          <Styled.H2>{section2.title}</Styled.H2>
          <StyledCardsWrapper>
            {sortAsc(section2.sectionItems).map((item, idx) => {
              return (
                <StyledCardWrapper key={idx} count={section2.sectionItems.length}>
                  <Link key={idx} href={item.description} passHref>
                    <a target='_blank'>
                      <StyledCard>
                        <StyledCardImageWrapper>
                          <Icon name={item.src} fill={theme.colors.textDefault} />
                        </StyledCardImageWrapper>
                        <Styled.H3 style={{ paddingTop: 15 }}>{item.title}</Styled.H3>
                      </StyledCard>
                    </a>
                  </Link>
                </StyledCardWrapper>
              );
            })}
          </StyledCardsWrapper>
        </Styled.Body>
      </Styled.Wrapper>
    </PageWrapper>
  );
};

export default Contact;
