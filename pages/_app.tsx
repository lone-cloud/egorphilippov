import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import GlobalStyles from 'styles/GlobalStyles';
import stylesTheme from 'styles/theme';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import '@fontsource/roboto';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <ThemeProvider theme={stylesTheme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://egor.philippov.ca/images/logo-xl.jpg',
              width: 496,
              height: 496,
            },
          ],
        }}
      />

      <Head>
        <title>Egor Philippov</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#1d7eb1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Egor Philippov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GlobalStyles />

      <MainLayoutContainer>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />

        <StyledMain>
          <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </StyledMain>

        <Footer />
      </MainLayoutContainer>
    </ThemeProvider>
  );
};

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;
const StyledMain = styled.main`
  padding-top: ${({ theme }) => theme.spacing.navBarHeight};
`;

export default App;
