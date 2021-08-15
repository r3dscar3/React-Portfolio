import { withRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import GET_PAGES from 'queries/navigation';

import { sortAsc } from 'utils';
import theme from 'utils/theme';

import Logo from 'components/layout/Logo';

import NavLink from './NavLink';

import Loader from 'components/Loader';

import mediaQueries from 'utils/mediaQueries';

import GitHub from 'icons/GitHub';
import CodePen from 'icons/CodePen';
import LinkedIn from 'icons/LinkedIn';

const Container = styled.div`
  position: relative;
  grid-area: nav;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.backgroundMenu};
  padding-top: 28px;
  z-index: 666;

  ${mediaQueries.tablet`
    padding-top: 20px;
  `}

  ${mediaQueries.desktop`
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

const Navigation = (props) => {
  const { router } = props;

  const { loading, error, data } = useQuery(GET_PAGES);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const routes = sortAsc(data.pages) || [];

  return (
    <Container>
      <Logo />

      <NavWrapper>
        {routes.map((route, idx) => {
          if (idx !== 0) {
            return (
              <NavLink
                active={router.pathname === `/${route.slug}`}
                emoji={route.icon}
                key={idx}
                label={route.name}
                pathname={`/${route.slug}`}
              />
            );
          }
        })}
      </NavWrapper>
      <Footer>
        <a target='_blank' rel='noopener noreferrer nofollow' href='https://github.com/r3dscar3'>
          <GitHub />
        </a>
        <a target='_blank' rel='noopener noreferrer nofollow' href='https://codepen.io/r3dscar3'>
          <CodePen />
        </a>
        <a target='_blank' rel='noopener noreferrer nofollow' href='https://linkedin.com/r3dscar3'>
          <LinkedIn />
        </a>
      </Footer>
    </Container>
  );
};

export default withRouter(Navigation);
