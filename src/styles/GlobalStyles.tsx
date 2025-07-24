import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { darken } from 'polished';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 200ms ease, border-color 200ms ease;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    font-family: Roboto, system-ui, -apple-system, sans-serif;
  }

  html, body {
    font-family: ${({ theme }) => theme.typography.fontFamily.base};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 { font-size: ${({ theme }) => theme.typography.fontSize['4xl']}; }
  h2 { font-size: ${({ theme }) => theme.typography.fontSize['3xl']}; }
  h3 { font-size: ${({ theme }) => theme.typography.fontSize['2xl']}; }
  h4 { font-size: ${({ theme }) => theme.typography.fontSize.xl}; }
  h5 { font-size: ${({ theme }) => theme.typography.fontSize.lg}; }
  h6 { font-size: ${({ theme }) => theme.typography.fontSize.base}; }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
  
  a {
    color: inherit;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    :focus, :hover {
      color: ${(props) => darken(0.1, props.theme.colors.brand)};
      border-bottom-color: currentcolor;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${({ theme }) => `${theme.colors.brand}40`};
    color: ${({ theme }) => theme.colors.brand};
  }

  .page-transition-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }

  .page-transition-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .page-transition-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 300ms, transform 300ms;
  }
`;

const GlobalStyles = () => (
  <>
    <Reset />
    <GlobalStyle />
  </>
);

export default GlobalStyles;
