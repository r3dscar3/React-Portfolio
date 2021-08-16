import Document, { Html, Head, Main, NextScript } from 'next/document';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from '@emotion/server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    const initialProps = await Document.getInitialProps(ctx);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => renderStylesToString(renderToString(<App {...props} />)),
      });

    return {
      ...initialProps,
      styles: initialProps.styles,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;700&display=swap'
            rel='stylesheet'
          />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
