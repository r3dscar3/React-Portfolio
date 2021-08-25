import { Global, css } from '@emotion/react';

import theme from 'utils/theme';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        /* */
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        body,
        html,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          color: #4a4a4a;
          font-family: ${theme.fontStack};
        }

        * {
          box-sizing: border-box;
        }

        b,
        strong {
          font-weight: bold;
        }

        em,
        i {
          font-style: italic;
        }

        a {
          color: ${theme.colors.darkGrey};
          font-weight: 700;
          text-decoration: none;
        }

        [class^='page-transition-'] {
          flex: 1;
        }

        .page-transition-enter {
          opacity: 0;

          .content-transition {
            transform: translate(-100%, 0);
          }
        }

        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 300ms ease-in;

          .content-transition {
            transform: translate(0, 0);
            transition: transform 200ms ease-out;
          }
        }

        .page-transition-exit {
          opacity: 1;

          .content-transition {
            transform: translate(0, 0);
          }
        }

        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 300ms ease-in;
        }
      `}
    />
  );
};

export default GlobalStyle;
