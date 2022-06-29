import { BlogEntry, EntryTitle, EntryDate, EntryBody } from '../UI';

export const meta = {
  id: 'home-automation-pt1',
  title: 'Home automation is cool - pt 1',
  date: 'June 27, 2022',
};

const Post = () => (
  <BlogEntry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      It&apos;s been some time since my last blog post, but that&apos;s because I was busy moving
      and settling in to my new home. It is there that I came to discover the magic of home
      automation and right now the name of the game is{' '}
      <a href="https://score.restaurant/" target="_blank" rel="noreferrer">
        Home Assistant
      </a>
      . Through Home Assistant, one may run a local server (I run it on a Raspberry Pi 4) that may
      connect to smart devices and unify them out in a single UI. The greatest benefit of this is
      that now these devices may be automated together and they may now be controlled remotely even
      when away from home. Another amazing thing about Home Assistant is that it allows the
      community to extend its functionality through the Home Assistant Community Store. HACS
      essentially allows the user to download custom device integrations and UI customizations from
      GitHub. Sounds cool? Because it is! My current automations are as follows:
      <ul>
        <li>
          turn off all the lights, change the alarm system to &quot;Away&quot; and start the Roomba
          when all home occupants have left
        </li>
        <li>Re-dock the Roomba when one of the home occupants comes back</li>
        <li>change the alarm system to &quot;Night&quot; after 10pm</li>
        <li>
          change the alarm system to &quot;Home&quot; after 7am unless no one is home or when
          someone comes back home from 7am to 10pm
        </li>
        <li>
          send an alert to all home owners when any of the wetness detection sensors turn from
          &quot;Dry&quot; to &quot;Wet&quot;
        </li>
        <li>flash all lights red when when the router disconnects from WAN for over 3 seconds</li>
        <li>
          turn the lights on to 40% in the living room when a home owner comes home after sunset
        </li>
      </ul>
      Now that the summer&apos;s here I&apos;ll be looking to automate my A/C using an IR blaster
      and to automate the positioning of my window blinds. More about my dive into home automation
      in part 2!
    </EntryBody>
  </BlogEntry>
);

export default Post;
