import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer, Italic } from '../UI';

export const meta = {
  id: 'good-night-sweet-tomati',
  title: 'Good night, sweet Tomati',
  date: 'Jan. 3, 2021',
};

function Post() {
  return (
    <BlogEntry id={meta.id}>
      <EntryTitle>{meta.title}</EntryTitle>
      <EntryDate>{meta.date}</EntryDate>
      <EntryBody>
        Four years ago, my team and I started a in-house project called Tomati with a goal to
        aggregate the health inspection data and use it to rate restaurants across Canada and US.
        Today we officially calling it quits.
        <Spacer />
        While it started out as a passion project to try to expose naughty restaurants, I&apos;ve
        come to realize that maintaining over a dozen scrappers for crappy government sites was not
        a good use of our team&apos;s time and resources. Getting exposure through Reddit and
        getting interviewed by the news was cool, but getting harassed by restaurant owners for
        minimal gain is just not worth it. In the end, we failed to find a way to keep users to
        coming back and also, don&apos;t want to be in the business of selling negativity.
        <Spacer />
        Lessons Learned:
        <ul>
          <li>
            Never cheap out on server auto-scaling in case you accidentally blow up. Getting hugged
            to death when it&apos;s time to shine and getting angry emails and 1{' '}
            <span role="img" aria-label="star">
              ⭐
            </span>{' '}
            reviews is a very <Italic>feelsbadman</Italic> moment.
          </li>
          <li>
            Reddit is fantastic for marketing and getting feedback. Just need to find the
            appropriate subreddits and be prepared to engage with its inhabitants.
          </li>
          <li>
            Figure out how the business will be monetized right away. How will you keep the users
            coming back? This is where the network effect is most powerful.
          </li>
        </ul>
        <Spacer />
        On to the next one.
      </EntryBody>
    </BlogEntry>
  );
}

export default Post;
