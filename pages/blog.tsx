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
        <BlogIndex>
          <BlogIndexYear>
            <YearTitle>2021</YearTitle>
            <div>
              <BlogEntryLink href="#the-rise-of-the-long-tailed-beast">
                The rise of the long tailed beast
              </BlogEntryLink>
            </div>

            <div>
              <BlogEntryLink href="#huegasm-is-free">
                Huegasm is now free and a look into the future...
              </BlogEntryLink>
            </div>

            <div>
              <BlogEntryLink href="#good-night-sweet-tomati">
                Good night, sweet Tomati
              </BlogEntryLink>
            </div>
          </BlogIndexYear>
        </BlogIndex>

        <BlogEntry id="the-rise-of-the-long-tailed-beast">
          <EntryTitle>The rise of the long tailed beast</EntryTitle>
          <EntryDate>Mar. 9, 2021</EntryDate>
          <EntryBody>
            Some time ago I watched a{' '}
            <a href="https://www.youtube.com/watch?v=zb_svgYYh9U" target="_blank" rel="noreferrer">
              pretty cool video
            </a>{' '}
            about &quot;long tail websites&quot;. A long tail website aims to attract visitors
            through its sheer number of pages and visitors can be monetized through ads. Of course,
            and as always, marketing and SEO are key. An example of a successful long tail site
            could be a thesaurus website listing hundreds of thousands of pages for different words.
            Much of the site content could consist of data scrapped (ex. sample sentences from
            children&apos;s books), which is exactly what the video creator claims to have done. In
            essence, this is a way to monetize data. The main challenge here is figuring out how to
            collect, analyze and present big data in an interesting way.
            <Spacer />
            Having just moved on from Tomati that had hundreds of thousands of restaurant inspection
            data I got this idea 🤔... and that&apos;s how{' '}
            <a href="https://score.restaurant/" target="_blank" rel="noreferrer">
              https://score.restaurant/
            </a>{' '}
            was born. Will it succeed? Will it get visitors? I don&apos;t know, but I want to give
            it one more shot. At the very least it was a worthwhile experience to get a blueprint to
            quickly (and freely) create and deploy sophisticated web applications. In my next blog
            post I&apos;ll detail exactly how I did it.
          </EntryBody>
        </BlogEntry>

        <BlogEntry id="huegasm-is-free">
          <EntryTitle>Huegasm is now free and a look into the future...</EntryTitle>
          <EntryDate>Feb. 2, 2021</EntryDate>
          <EntryBody>
            About 5 years ago I moved to a new apartment and wanted to synchronize my music to the
            smart light bulbs in my living room.{' '}
            <a href="http://www.huegasm.com/" target="_blank" rel="noreferrer">
              And so Huegasm was born.
            </a>{' '}
            Originally developed solely as a web app for synchronizing music to Philips Hue lights,
            its best iteration came in the form of a{' '}
            <a
              href="https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj"
              target="_blank"
              rel="noreferrer"
            >
              Chrome browser extension
            </a>{' '}
            that, as of today, I am offering for free!
            <Spacer />
            Why the sudden generosity? The Chrome browser{' '}
            <a
              href="https://developer.chrome.com/docs/webstore/cws-payments-deprecation/"
              target="_blank"
              rel="noreferrer"
            >
              team announced that they&apos;ll be removing the billing API
            </a>
            . The $ that the extension brings in monthly is not worth the trouble of trying to
            migrate users to a new payment system, especially given that Chrome will not allow
            exporting of its licensing data. The other big benefit for the user is that they&apos;ll
            now be able to load Huegasm from any other browser that supports extension.
            Chromium-based browsers like Brave should now start working with Huegasm which is
            awesome.
            <Spacer />
            Huegasm was my first real software engineering project outside of my usual client
            projects and it it has been a fantastic learning experience. It has shown me the
            importance of a need for a more thought-out business model which would encourage me to
            provide more updates and support for the future. A one time fee, which was the case with
            Huegasm, is just not a worthwhile time investment. Of course, all mistakes can be
            forgiven in the world of business with a stellar marketing execution.
            <Spacer />
            As I continue to move forward, I want to explore the benefits of creating &quot;long
            tail&quot; web sites. I must minimize the time spent working on platforms (ex. iOS,
            Android, Hue) which tend to end up restricting, monetizing and controlling me.
          </EntryBody>
        </BlogEntry>

        <BlogEntry id="good-night-sweet-tomati">
          <EntryTitle>Good night, sweet Tomati</EntryTitle>
          <EntryDate>Jan. 3, 2021</EntryDate>
          <EntryBody>
            Four years ago, my team and I started a in-house project called Tomati with a goal to
            aggregate the health inspection data and use it to rate restaurants across Canada and
            US. Today we officially calling it quits.
            <Spacer />
            While it started out as a passion project to try to expose naughty restaurants,
            I&apos;ve come to realize that maintaining over a dozen scrappers for crappy government
            sites was not a good use of our team&apos;s time and resources. Getting exposure through
            Reddit and getting interviewed by the news was cool, but getting harassed by restaurant
            owners for minimal gain is just not worth it. In the end, we failed to find a way to
            keep users to coming back and also, don&apos;t want to be in the business of selling
            negativity.
            <Spacer />
            Lessons Learned:
            <ul>
              <li>
                Never cheap out on server auto-scaling in case you accidentally blow up. Getting
                hugged to death when it&apos;s time to shine and getting angry emails and 1 ⭐
                reviews is a very <Italic>feelsbadman</Italic> moment.
              </li>
              <li>
                Reddit is fantastic for marketing and getting feedback. Just need to find the
                appropriate subreddits and be prepared to engage with its inhabitants.
              </li>
              <li>
                Figure out how the business will be monetized right away. How will you keep the
                users coming back? This is where the network effect is most powerful.
              </li>
            </ul>
            <Spacer />
            On to the next one.
          </EntryBody>
        </BlogEntry>
      </BlogContainer>
    </Container>
  );
};

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
const Italic = styled.span`
  font-style: italic;
`;
const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.small};
`;
const EntryBody = styled.p`
  margin-top: ${({ theme }) => theme.spacing.medium};
  line-height: 1.5;

  ul li {
    list-style-type: disc;
    margin-left: 2.5rem;
  }
`;
const EntryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.2em;
`;
const EntryDate = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
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
  margin-top: -80px;
  padding-top: 80px;

  :after {
    margin: ${({ theme }) => theme.spacing.large} 0;
    width: 100%;
    content: '';
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
  }
`;

export default Clients;
