'use client';

import styled from 'styled-components';
import { motion } from 'motion/react';

import ToTopButton from 'components/ToTopButton';
import blogPosts from 'components/Posts';

export default function BlogPage() {
  return (
    <BlogContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle>Latest Posts</PageTitle>
        <BlogIndex>
          {blogPosts.map(({ year, metas }) => (
            <BlogIndexYear key={year}>
              <YearTitle>{year}</YearTitle>
              <PostsList>
                {metas.map(({ id, title }) => (
                  <PostItem key={id}>
                    <BlogEntryLink href={`#${id}`}>{title}</BlogEntryLink>
                  </PostItem>
                ))}
              </PostsList>
            </BlogIndexYear>
          ))}
        </BlogIndex>

        <PostsContainer>
          {blogPosts.map(({ year, posts }) =>
            posts.map((Post, i) => (
              <motion.div
                key={`${year}-post-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Post />
              </motion.div>
            )),
          )}
        </PostsContainer>
      </motion.div>

      <ToTopButton />
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`;

const BlogIndex = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
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

const PostItem = styled.li`
  margin-bottom: 0.75rem;
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
