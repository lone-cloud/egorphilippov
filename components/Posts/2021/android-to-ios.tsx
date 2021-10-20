import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer } from '../UI';

export const meta = {
  id: 'android-to-ios',
  title: 'Ashes to ashes, Android to iOS',
  date: 'Oct. 18, 2021',
};

function Post(): JSX.Element {
  return (
    <BlogEntry id={meta.id}>
      <EntryTitle>{meta.title}</EntryTitle>
      <EntryDate>{meta.date}</EntryDate>
      <EntryBody>
        My faithful Pixel 3 endured 3 years of heavy use, but it&apos;s finally come time to put it
        to rest and so came the time to pick out a new daily driver. In my opinion, phones should be
        compact and I am absolutely not a fan of the fact that all the modern Android flagships are
        at least 6.2&quot; in screen size. Year over year there is a very real push to create
        faster, higher spec phones and the simplest way to do that is to simply create larger phones
        so that they can hold higher performing components. As such, this time I chose to go with my
        very first iPhone. Mind you, this is not my first Apple device. In particular, I&apos;m a
        big fan of AirPods and I actually rocked the very first iTouch back in the day. This time I
        went with a (product)red iPhone mini and it&apos;s been fun getting used to a new phone
        operating system. I consider myself an advanced user and I&apos;ve now spent a ton of time
        tinkering and playing around with my new phone. Here is my comparison of the pros and cons
        of Android vs iOS.
        <Spacer />
        iOS Pros:
        <ul>
          <li>Beautiful screen and a powerful haptic engine</li>
          <li>The UI generally looks better</li>
          <li>
            Significantly less bloatware and most apps that come pre-installed can be uninstalled
          </li>
          <li>
            AirPods work much better with their intended OS. iOS works much better with the Apple
            ecosystem devices
          </li>
          <li>Widgets for the stock apps look great</li>
          <li>Iconic phone design and sounds</li>
        </ul>
        <Spacer />
        iOS Cons:
        <ul>
          <li>It really hurts to lose Pixel&apos;s call screening</li>
          <li>No system-wide back gesture results in an inconsistent experience between apps</li>
          <li>
            Terrible UX without an iWatch due to the new 6 digit passcode, lack of touch id and
            severe limitations of face ID for this COVID season
          </li>
          <li>No USB-C :(</li>
          <li>
            Live wallpapers are implemented in the worst way (why do I have to press down on the
            screen to animate the wallpaper? why???)
          </li>
          <li>Much harder to block system-wide ads</li>
          <li>
            severe custom app restrictions (I ended up paying $30 a year for a{' '}
            <a href="https://appdb.to/" target="_blank" rel="noreferrer">
              appdb PRO
            </a>{' '}
            subscription which allowed installation of &quot;non-app store&quot; apps)
          </li>
          <li>
            The stock keyboard is horrendous and does not allow much customization (custom keyboards
            come with restrictions which make them not ideal)
          </li>
        </ul>
        <Spacer />
        There are definitely a fair bit of shortcomings of iOS over my previous Pixel phone and it
        was not easy to get used to at first. Since then I have built up my muscle memory for
        re-entering the passcode and it&apos;s starting to feel better now. I&apos;ve decided
        I&apos;ll be be sticking with my new iPhone mini for the foreseeable future.
      </EntryBody>
    </BlogEntry>
  );
}

export default Post;
