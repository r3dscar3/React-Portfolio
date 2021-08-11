import React from 'react';
import App from 'next/app';
import 'cross-fetch/polyfill';
import styled, { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import GlobalStyle from 'components/layout/GlobalStyle';
import Navigation from 'components/layout/navigation';

import theme from 'utils/theme';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Navigation />
            <Component {...pageProps} />
          </Wrapper>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
