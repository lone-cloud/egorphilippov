'use client';

import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { motion } from 'motion/react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function Home() {
  return (
    <Container>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        <PageBody>
          <ContentSection>
            <HelloText>👋 Hello</HelloText>

            <MainText>
              Is it me you&apos;re looking for? My name is{' '}
              <HighlightedText>Egor Philippov</HighlightedText> and I&apos;m a passionate{' '}
              <HighlightedText>Full Stack Software Engineer</HighlightedText>. I am comfortable
              working on the server, browser or mobile.
            </MainText>

            <MainText>
              I am always looking for exciting new opportunities <Badge>✔️ remote</Badge>{' '}
              <Badge>✔️ contract</Badge>
            </MainText>

            <ContactLink>
              Feel free to <Link href="/contact">contact me</Link>.
            </ContactLink>
          </ContentSection>
        </PageBody>
      </motion.main>
    </Container>
  );
}

const Container = styled.div`
  background-size: 100px 199px;
  padding: 3vh 3vw 0;
`;

const PageBody = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const ContentSection = styled.div`
  max-width: 800px;
  animation: ${fadeInUp} 0.8s ease-out;
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 4px 20px rgb(0 0 0 / 6%);
`;

const HelloText = styled.div`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2.5rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => `${theme.colors.greyLight}40`};
  border-radius: 0.5rem;
`;

const MainText = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.greyLight};
  padding: 0.4rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin: 0 0.5rem;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.brand}20;
  }
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.brand};
  position: relative;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.brand};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContactLink = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-top: 2.5rem;

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.brand};
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme.colors.brand};
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
