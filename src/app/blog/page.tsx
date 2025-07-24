'use client';

import styled from 'styled-components';
import { motion } from 'motion/react';

import ToTopButton from '@/components/ToTopButton';
import blogPosts from '@/components/Posts';
import PageTitle from '@/components/PageTitle';

export default function BlogPage() {
  return (
    <BlogContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle title="Latest posts" />
        <BlogIndex>
          {blogPosts.map(({ year, metas }) => (
            <BlogIndexYear key={year}>
              <YearTitle>{year}</YearTitle>
              <PostsList>
                {metas.map(({ id, title }) => (
                  <li key={id}>
                    <BlogEntryLink href={`#${id}`}>{title}</BlogEntryLink>
                  </li>
                ))}
              </PostsList>
            </BlogIndexYear>
          ))}
        </BlogIndex>

        <PostsContainer>
          {blogPosts.map(({ year, posts }) =>
            posts.map((Post, i) => <Post key={`${year}-post-${i}`} />),
          )}
        </PostsContainer>
      </motion.div>

      <ToTopButton />
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const BlogIndex = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const BlogIndexYear = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const YearTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.brand};
  margin-bottom: 1rem;
`;

const PostsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BlogEntryLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 200ms ease;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    border-bottom-color: currentcolor;
  }
`;

const PostsContainer = styled.div`
  > div {
    margin-bottom: 3rem;
  }
`;
