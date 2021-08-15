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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
