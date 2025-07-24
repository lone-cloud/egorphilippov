'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';

export default function NotFound() {
  return (
    <Container>
      <Content>
        <Title>404 - Page Not Found</Title>
        <Description>Sorry, the page you are looking for doesn&apos;t exist.</Description>
        <HomeLink href="/">Return Home</HomeLink>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Content = styled.div`
  text-align: center;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.colors.brand)};
  }
`;
