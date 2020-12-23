import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
  // this is the key to making styled components reload properly in an SSR environment
  // code copied from https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#1d7eb1" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="Personal website of Egor Philippov" />
          <meta
            name="keywords"
            content="egor,philippov,huegasm,tomati,web,mobile,chrome,extension,tech,consulting"
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Egor Philippov" />
          <meta property="og:description" content="Personal website of Egor Philippov" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Egor Philippov" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
