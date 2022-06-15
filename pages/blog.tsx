import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import Container from 'components/Container';
import ToTopButton from 'components/ToTopButton';
import { posts as posts2021, metas as metas2021 } from 'components/Posts/2021';

const Clients = () => (
  <Container>
    <NextSeo
      title="Blog | Egor Philippov"
      description="The personal blog of Egor Philippov."
      canonical="https://www.egorphilippov.me/blog"
    />

    <BlogContainer>
      <BlogIndex>
        <BlogIndexYear>
          <YearTitle>2021</YearTitle>

          {metas2021.map(({ id, title }) => (
            <div key={id}>
              <BlogEntryLink href={`#${id}`}>{title}</BlogEntryLink>
            </div>
          ))}
        </BlogIndexYear>
      </BlogIndex>

      {posts2021.map((Post, i) => (
        <Post key={i} />
      ))}

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
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
const BlogIndexYear = styled.div`
  font-size: 0.9em;
`;
const YearTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export default Clients;
