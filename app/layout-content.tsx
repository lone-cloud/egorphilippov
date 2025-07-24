'use client';

import { useState } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';

import GlobalStyles from 'styles/GlobalStyles';
import stylesTheme from 'styles/theme';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

config.autoAddCss = false;

export default function LayoutContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <ThemeProvider theme={stylesTheme}>
      <GlobalStyles />
      <MainLayoutContainer>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </MainLayoutContainer>
    </ThemeProvider>
  );
}

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100vh;
`;

const StyledMain = styled.main<{ theme: DefaultTheme }>`
  padding-top: ${({ theme }) => theme.spacing.navBarHeight};
`;
