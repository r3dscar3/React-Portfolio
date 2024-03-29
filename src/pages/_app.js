import React from 'react';
import App from 'next/app';
import 'cross-fetch/polyfill';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { PageTransition } from 'next-page-transitions';

import mediaQueries from 'utils/mediaQueries';
import theme from 'utils/theme';

import GlobalStyle from 'components/layout/GlobalStyle';
import Navigation from 'components/layout/navigation';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'nav main';

  ${mediaQueries.tablet} {
    grid-template-columns: 108px 1fr;
  }

  ${mediaQueries.desktop} {
    grid-template-columns: 200px 1fr;
  } ;
`;

const MainContent = styled.div`
  grid-area: main;
  min-height: 100vh;
`;

const client = new ApolloClient({
  uri: process.env.API_URL,
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Navigation />
            <MainContent>
              <PageTransition classNames='page-transition' timeout={300}>
                <Component {...pageProps} key={router.route} />
              </PageTransition>
            </MainContent>
          </Wrapper>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
