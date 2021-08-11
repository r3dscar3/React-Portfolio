import { withRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Logo from 'components/layout/Logo';
import NavLink from './NavLink';

import mediaQueries from 'utils/mediaQueries';

import GitHub from 'icons/GitHub';
import CodePen from 'icons/CodePen';
import LinkedIn from 'icons/LinkedIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  flex: 0 0 auto;
  padding-top: 28px;
  width: 50px;

  ${mediaQueries.tablet`
    width: 108px;
    padding-top: 20px;
  `}

  ${mediaQueries.desktop`
    width: 200px;
    padding-top: 15px;
  `}
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 42px;
  padding-top: 41px;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;

  svg {
    width: 26px;
    height: 26px;
    margin: 5px 0;
  }
`;

const routes = [
  {
    emoji: '👋',
    key: 'index',
    label: 'Welcome',
    pathname: '/',
  },
  {
    emoji: '☠️',
    key: 'about',
    label: 'About',
    pathname: '/about',
  },
  {
    emoji: '✉️',
    key: 'contact',
    label: 'Contact',
    pathname: '/contact',
  },
];

const Navigation = (props) => {
  const { router } = props;

  return (
    <Container>
      <Logo />

      <NavWrapper>
        {routes.map((route) => (
          <NavLink
            active={router.pathname === route.pathname}
            emoji={route.emoji}
            key={route.key}
            label={route.label}
            pathname={route.pathname}
          />
        ))}
      </NavWrapper>
      <Footer>
        <a target='_blank' rel='noopener noreferer nofollow' href='https://github.com/r3dscar3'>
          <GitHub />
        </a>
        <a target='_blank' rel='noopener noreferer nofollow' href='https://codepen.io/r3dscar3'>
          <CodePen />
        </a>
        <a target='_blank' rel='noopener noreferer nofollow' href='https://linkedin.com/r3dscar3'>
          <LinkedIn />
        </a>
      </Footer>
    </Container>
  );
};

export default withRouter(Navigation);
