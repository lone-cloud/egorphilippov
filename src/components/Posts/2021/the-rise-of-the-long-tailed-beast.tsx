import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer } from '../UI';

export const meta = {
  id: 'the-rise-of-the-long-tailed-beast',
  title: 'The rise of the long tailed beast',
  date: 'Mar. 9, 2021',
};

const Post = () => (
  <BlogEntry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      Some time ago I watched a{' '}
      <a href="https://www.youtube.com/watch?v=zb_svgYYh9U" target="_blank" rel="noreferrer">
        pretty cool video
      </a>{' '}
      about &quot;long tail websites&quot;. A long tail website aims to attract visitors through its
      sheer number of pages and visitors can be monetized through ads. Of course, and as always,
      marketing and SEO are key. An example of a successful long tail site could be a thesaurus
      website listing hundreds of thousands of pages for different words. Much of the site content
      could consist of data scrapped (ex. sample sentences from children&apos;s books), which is
      exactly what the video creator claims to have done. In essence, this is a way to monetize
      data. The main challenge here is figuring out how to collect, analyze and present big data in
      an interesting way.
      <Spacer />
      Having just moved on from Tomati that had hundreds of thousands of restaurant inspection data
      I got this idea 🤔... and that&apos;s how{' '}
      <a href="https://score.restaurant/" target="_blank" rel="noreferrer">
        https://score.restaurant/
      </a>{' '}
      was born. Will it succeed? Will it get visitors? I don&apos;t know, but I want to give it one
      more shot. At the very least it was a worthwhile experience to get a blueprint to quickly (and
      freely) create and deploy sophisticated web applications. In my next blog post I&apos;ll
      detail exactly how I did it.
    </EntryBody>
  </BlogEntry>
);

export default Post;
