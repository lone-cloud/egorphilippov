import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';

import { Container } from 'components';

const Clients: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Blog | Egor Philippov</title>
      </Head>

      <BlogContainer>
        <BlogEntry id="good-night-sweet-tomati">
          <EntryTitle>Good night, sweet Tomati</EntryTitle>
          <EntryDate>Jan. 3, 2021</EntryDate>
          <EntryBody>
            Four years ago I started a personal project called Tomati with a goal to aggregate the
            health inspection data and use it to rate restaurants across Canada and US. Today
            I&apos;m officially calling it quits.
            <Spacer />
            While it started out as a passion project to try to expose dirty restaurants, I&apos;ve
            come to realize that maintaining over a dozen scrappers for crappy government sites is
            not how I like to spend my time. Getting exposure through Reddit and getting interviewed
            for by the news was cool, but getting harassed by restaurant owners for minimal gain is
            just not worth it. In the end, I failed to find a way to keep users to coming back and I
            don&apos;t want to be in the business of selling negativity.
            <Spacer />
            On to the next one.
            <Spacer />
            Note to future self: never cheap out on auto-scaling in case you blow up. Getting hugged
            to death when it&apos;s time to shine and getting angry emails and 1 ⭐ reviews is a
            very <Italic>feelsbadman</Italic> moment.
          </EntryBody>
        </BlogEntry>
      </BlogContainer>
    </Container>
  );
};

const Italic = styled.span`
  font-style: italic;
`;
const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.small};
`;
const EntryBody = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  line-height: 1.5;
`;
const EntryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.2em;
`;
const EntryDate = styled.p`
  font-size: 0.9em;
`;
const BlogContainer = styled.div`
  font-size: 1.25em;
  margin: 0 10vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 3vw;
  }
`;
const BlogEntry = styled.div`
  :after {
    margin: ${({ theme }) => theme.spacing.large} 0;
    width: 100%;
    content: '';
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
  }
`;

export default Clients;
