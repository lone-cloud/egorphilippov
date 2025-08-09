import Image from 'next/image';

import { Entry, EntryTitle, EntryDate, EntryBody, Figure, Spacer } from '../UI';
import { getBlurDataUrl } from '@/lib/blurDataUrls';

export const meta = {
  id: 'i-use-arch-btw',
  title: 'I use Arch BTW',
  date: 'August 9, 2025',
};

const Post = () => (
  <Entry id={meta.id}>
    <EntryTitle>{meta.title}</EntryTitle>
    <EntryDate>{meta.date}</EntryDate>
    <EntryBody>
      <Figure caption="A monument to Arch Linux generated locally with FLUX.1-dev">
        <Image
          src="/images/arch-fire.webp"
          alt="A monument to Arch Linux"
          width={400}
          height={400}
          quality={85}
          placeholder="blur"
          blurDataURL={getBlurDataUrl('NEUTRAL')}
        />
      </Figure>
      I've finally done it. After almost 30 years of Windows I have finally taken the full plunge
      into Linux. And you know what? I should have done it much sooner.
      <Spacer />
      Let's back up, what's the problem with Windows? Windows is but another victim of modern
      enshitification. Once a product gets popular, it becomes more appealing for companies to try
      to milk the product for all its worth and to continue riding the momentum of success. As with
      Windows, its been getting more and more intrusive, filled with ads and various crapware, which
      lead me to think more and more of the greener pastures. Sure, for a while I continued coping
      and make concessions such as by switching over to Windows 11 IOT LTSC, but ultimately it's
      been feeling like I've been climbing up a sinking ship. As I now have a bit of free time I've
      decided that it's finally time to take the plunge and to jump fully into the world of Linux.
      <Spacer />
      So which distro did I choose? As historically an Ubuntu (Kubuntu is better) user, I wanted to
      try and find something better. My research lead me to Linux Mint, which is arguably the most
      popular distro right now due to its maturity and reputation of using old but well tested
      software for the sake of stability. Its desktop environment, Cinnamon, is highly praised, but
      ultimately it did not work well for me and its lack of Wayland (a rabbit hole not worth
      jumping into for a casual) support and slow release cycle were too frustrating. I had
      inadvertently stumbled into a Firefox bug where it would not match the system theme unless the
      theme was toggled a few times. The bug was identified and fixed, but I'd need to wait for the
      next bi-annual release of Mint to receive it. After a bit more research I went with the fad
      and installed a *drum roll*...
      <Spacer />
      Arch Linux! Not to sound like too much of a glazer, but Arch + KDE was easily the most
      enjoyable desktop experience that I've ever had. While KDE Plasma 6 has full Wayland support
      and endless customization, should one choose to look for it, Arch's simplicity and flexibility
      was the key for me. Consider that while Mint officially supports 3 different desktop
      environments, Arch supports around 14 and the user does not need to re-install the entire
      system. Its package manager, Pacman, is a joy to use and its AUR (Arch User Repository)
      provides access to a vast array of managed software that encourages users to stay closed to
      the stable but bleeding edge. Arch allows for full flexibility and even allowing the user to
      select the kernel (I went with the default), which is currently about 7 minor releases ahead
      of Mint's. The Arch Wiki is one of the top resources for Linux users right now and its
      community, system performance and momentum are currently unmatched even by the likes of Mint.
      I'm not even (yet) going to dip my toes into the world of emerging tiling window managers,
      like hyprland, and desktop "ricing", but never say never.
      <Spacer />
      While perfect software does not exist, what Arch and its community is creating something truly
      special. I so far very happy with the decision to switch over to Arch and I hope that it
      continues to impress me in the future.
    </EntryBody>
  </Entry>
);

export default Post;
