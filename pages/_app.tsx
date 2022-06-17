import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import Head from 'next/head';
import ReactGA from 'react-ga';
import { PageTransition } from 'next-page-transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { darken } from 'polished';
import { config } from '@fortawesome/fontawesome-svg-core';
import { DefaultSeo } from 'next-seo';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import Navbar from 'components/Navbar';

import '@fontsource/roboto';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const year = new Date().getFullYear();

Router.events.on('routeChangeComplete', () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          images: [
            {
              url: 'https://www.egorphilippov.me/images/logo-xl.jpg',
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
          <PageTransition timeout={200} classNames="page-transition" skipInitialTransition>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </StyledMain>

        <StyledFooter>
          <FindMeLinks>
            <FindMeText>- Find me on</FindMeText>

            <a
              href="https://github.com/lone-cloud"
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <StyledFontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://ca.linkedin.com/in/egor-philippov-1482207b"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <StyledFontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </FindMeLinks>

          <ForgedLinkContainer>
            Forged from{' '}
            <span role="img" aria-label="hot fire burning">
              🔥
            </span>{' '}
            ©{year}{' '}
            <ForgedLink href="https://www.nidratech.com/" target="_blank">
              Nidratech Ltd.
            </ForgedLink>
          </ForgedLinkContainer>
        </StyledFooter>
      </MainLayoutContainer>
    </ThemeProvider>
  );
};

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 0 0.5rem;
`;
const FindMeText = styled.span`
  text-transform: uppercase;
  margin-right: ${({ theme }) => theme.spacing.medium};
  font-weight: 600;
  font-size: 0.9em;
`;
const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;
const StyledMain = styled.main`
  padding-top: ${({ theme }) => theme.spacing.navBarHeight};
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  flex-direction: column;
`;
const ForgedLink = styled.a`
  color: ${({ theme }) => theme.colors.nidratech};

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.05, theme.colors.nidratech)};
  }
`;
const FindMeLinks = styled.div`
  align-self: flex-end;
  margin: 0 20vw;
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: all 200ms;

    :focus,
    :hover {
      color: ${({ theme }) => darken(0.05, theme.colors.brand)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;
const ForgedLinkContainer = styled.div`
  margin-top: 2rem;
  align-self: center;
`;

export default App;
