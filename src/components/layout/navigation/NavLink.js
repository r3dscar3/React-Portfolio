import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import mediaQueries from 'utils/mediaQueries';
import theme from 'utils/theme';

const Container = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => (props.active ? theme.colors.activeLink : null)};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px 0;

  ${mediaQueries.desktop`
    height: 42px;
    justify-content: flex-start;
    padding: 0 0 0 38px;
  `}
`;

const Emoji = styled.div`
  display: inline-block;
  width: 22px;

  ${mediaQueries.desktop`
    width: 14px;
  `}
`;

const Text = styled.a`
  color: ${(props) => (props.active ? '#fff' : '#cacaca')};
  display: none;
  font-family: ${(props) => props.theme.fontStack};
  font-weight: 700;
  margin-left: 18px;

  ${mediaQueries.desktop`
    display: inline;
  `}
`;

const NavLink = (props) => {
  const { active, emoji, label, pathname } = props;

  return (
    <Container>
      <Link href={pathname}>
        <Wrapper active={active}>
          <Emoji>{emoji}</Emoji>
          <Text active={active}>{label}</Text>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default NavLink;
