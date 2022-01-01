import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer } from '../UI';

export const meta = {
  id: 'huegasm-is-free',
  title: 'Huegasm is now free and a look into the future...',
  date: 'Feb. 2, 2021',
};

function Post() {
  return (
    <BlogEntry id={meta.id}>
      <EntryTitle>{meta.title}</EntryTitle>
      <EntryDate>{meta.date}</EntryDate>
      <EntryBody>
        About 5 years ago I moved to a new apartment and wanted to synchronize my music to the smart
        light bulbs in my living room.{' '}
        <a href="http://www.huegasm.com/" target="_blank" rel="noreferrer">
          And so Huegasm was born.
        </a>{' '}
        Originally developed solely as a web app for synchronizing music to Philips Hue lights, its
        best iteration came in the form of a{' '}
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
        . The $ that the extension brings in monthly is not worth the trouble of trying to migrate
        users to a new payment system, especially given that Chrome will not allow exporting of its
        licensing data. The other big benefit for the user is that they&apos;ll now be able to load
        Huegasm from any other browser that supports extension. Chromium-based browsers like Brave
        should now start working with Huegasm which is awesome.
        <Spacer />
        Huegasm was my first real software engineering project outside of my usual client projects
        and it it has been a fantastic learning experience. It has shown me the importance of a need
        for a more thought-out business model which would encourage me to provide more updates and
        support for the future. A one time fee, which was the case with Huegasm, is just not a
        worthwhile time investment. Of course, all mistakes can be forgiven in the world of business
        with a stellar marketing execution.
        <Spacer />
        As I continue to move forward, I want to explore the benefits of creating &quot;long
        tail&quot; web sites. I must minimize the time spent working on platforms (ex. iOS, Android,
        Hue) which tend to end up restricting, monetizing and controlling me.
      </EntryBody>
    </BlogEntry>
  );
}

export default Post;
