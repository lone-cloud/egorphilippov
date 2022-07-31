import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer } from '../UI';

export const meta = {
  id: 'de-google',
  title: "It's time to de-Google",
  date: 'July 29, 2022',
};

const Post = () => (
  <BlogEntry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      I screwed up. I really, really did. I took my privacy for granted and now I&apos;m feeling
      legitimately creeped out that a single monopolistic, advertisement conglomerate knows
      basically everything about me. Where I go, what I read, what I buy and basically most of the
      significant events in my life. Now don&apos;t get me wrong. I have nothing to hide, but I also
      don&apos;t have anything to share (without my express consent of course). Up until last year I
      had an Android phone in my pocket, browsed the web using Google Chrome, sent all my emails
      using Gmail, noted my events in Google calendar, had Google Analytics on all my personal
      sites, uploaded all my pics and videos to Google Photos and stored some personal files in
      Google Drive. Notice how many times Google comes up there? It&apos;s absolutely insane! Google
      services are just far too convenient and most importantly free, which make them very
      attractive to use for many people, me included.
      <Spacer />I am aware that the world is going through a privacy crisis where the{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.securitymadesimple.org/cybersecurity-blog/fourteen-eyes-surveillance-explained"
      >
        14 eyes
      </a>{' '}
      have made closed door agreements to record every moment of our lives in the name of
      &quot;fighting terror&quot; or for &quot;national security&quot;, but the reality is it&apos;s
      all about amassing power. I don&apos;t need to write too much about this as Edward Snowden put
      it all out there for the world to see, but most still aren&apos;t listening. While I do think
      that if many entities and/or corporations knew bits and pieces of a person&apos;s life, that
      would not be so scary. It becomes very scary when all the data about an individual gets
      aggregated together given that all western countries have virtually no privacy laws (or at
      least none that get enforced) and the state is above all.
      <Spacer />I am now fighting to take my privacy back by:
      <ul>
        <li>
          Only using Firefox as my personal browser. In Firefox I have enabled enhanced fingerprint
          prevention (hidden feature meant for Tor users), enhanced tracking prevention, total
          cookie protection, HTTPs everywhere and I use uBlock Origin in &quot;easy mode&quot; (to
          block third party scripts and frames by default).
        </li>
        <li>
          Using an iPhone and never Android. Maybe in the future I will get an Android device and
          flash a more privacy-focused OS onto it.
        </li>
        <li>
          Absolute no Facebook services or any kind of social media. However, for the time being, I
          am making an exception for Strava which is social media adjacent.
        </li>
        <li>Switching over to Protonmail for my email, calendar and file storage.</li>
        <li>Removing Google-analytics from all my personal sites.</li>
      </ul>
      <Spacer />I encourage the reader to think about their privacy and how comfortable they are
      allowing mega-corporation and the state knowing and recording all aspects of their lives. And
      always remember, if a service is free then you are the product!
    </EntryBody>
  </BlogEntry>
);

export default Post;
