import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type LayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  isHome?: boolean;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

const Layout = ({ children, title, description, isHome }: LayoutProps) => (
  <Container $isHome={isHome}>
    <NextSeo title={title} description={description} openGraph={{ title, description }} />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  </Container>
);

const Container = styled.div<{ $isHome: boolean }>`
  ${({ $isHome }) => {
    if ($isHome) {
      return css`
        background-size: 100px 199px;
        padding: 12vh 3vw;
      `;
    }

    return css`
      max-width: 60rem;
      margin: auto;
      margin-top: ${({ theme }) => theme.spacing.medium};
      padding: ${({ theme }) => `0 ${theme.spacing.large}`};

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: auto;
        margin: 0 ${({ theme }) => `0 ${theme.spacing.medium}`};
        padding: ${({ theme }) => `0 ${theme.spacing.small}`};
      }
    `;
  }}
`;

export default Layout;
