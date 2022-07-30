import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import Container from 'components/Container';
import ToTopButton from 'components/ToTopButton';
import blogPosts from 'components/Posts';

const Clients = () => (
  <Container>
    <NextSeo
      title="Blog | Egor Philippov"
      description="The personal blog of Egor Philippov."
      canonical="https://egor.philippov.ca/blog"
    />

    <BlogContainer>
      <BlogIndex>
        {blogPosts.map(({ year, metas }) => (
          <BlogIndexYear key={year}>
            <YearTitle>{year}</YearTitle>

            {metas.map(({ id, title }) => (
              <div key={id}>
                <BlogEntryLink href={`#${id}`}>{title}</BlogEntryLink>
              </div>
            ))}
          </BlogIndexYear>
        ))}
      </BlogIndex>

      {blogPosts.map(({ posts }) => posts.map((Post, i) => <Post key={i} />))}

      <ToTopButton />
    </BlogContainer>
  </Container>
);

export const BlogContainer = styled.div`
  font-size: 1.25em;
  margin: 0 10vw;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 3vw;
  }
`;
const BlogEntryLink = styled.a`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;
const BlogIndex = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.brand};
  border-radius: 0.25rem;
  padding: ${({ theme }) =>
    `0 ${theme.spacing.medium} ${theme.spacing.medium} ${theme.spacing.medium}`};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
const BlogIndexYear = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: 0.9em;
`;
const YearTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export default Clients;
