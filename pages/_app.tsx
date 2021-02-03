import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import { PageTransition } from 'next-page-transitions';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { darken } from 'polished';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { GlobalStyles, theme } from 'styles';
import { Navbar } from 'components';

import 'fontsource-roboto';

const year = new Date().getFullYear();

Router.events.on('routeChangeComplete', () => {
  ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
});

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID as string);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Egor Philippov</title>
        <meta name="description" content="The personal site of Egor Philippov." />
        <meta name="keywords" content="Egor,Philippov" />
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

            <a href="https://github.com/lone-cloud" rel="noreferrer" target="_blank">
              <StyledFontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://ca.linkedin.com/in/egor-philippov-1482207b"
              rel="noreferrer"
              target="_blank"
            >
              <StyledFontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </FindMeLinks>

          <ForgedLinkContainer>
            Forged from 🔥 ©{year}{' '}
            <ForgedLink href="https://www.nidratech.com/">Nidratech Ltd.</ForgedLink>
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
const ForgedLink = styled.a`
  color: ${({ theme }) => theme.colors.nidratech};

  :focus,
  :hover {
    color: ${({ theme }) => darken(0.05, theme.colors.nidratech)};
  }
`;

export default App;