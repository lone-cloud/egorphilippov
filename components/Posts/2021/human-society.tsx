import Image from 'next/image';
import styled from 'styled-components';

import { BlogEntry, EntryTitle, EntryDate, EntryBody, Spacer, SubTitle } from '../UI';

export const meta = {
  id: 'human-society-of-tomorrow',
  title: 'My human society of tomorrow',
  date: 'May 8, 2021',
};

function HumanSociety(): JSX.Element {
  return (
    <BlogEntry id={meta.id}>
      <EntryTitle>{meta.title}</EntryTitle>
      <EntryDate>{meta.date}</EntryDate>
      <EntryBody>
        The world we live in is one of inequality. As we move forward, towards the world of
        tomorrow, I like to imagine what that might be like. When it comes down to it, in my vision
        of an ideal human society we must:
        <ol>
          <li>maximize human productivity</li>
          <li>minimize human suffering</li>
        </ol>
        <Spacer />
        <SubTitle>Government</SubTitle>
        It all starts with the leadership of our society. There must be always be some sort of
        government oversight and we, as humans, should continue living in a civil society.
        <Spacer />
        One of the greatest problems of the modern governments is that they are operated by career
        politicians. Even if they start with pure intentions, power will eventually corrupt,
        especially those who base their identity around it and have nothing else to fall back on. In
        addition, positions of power will inevitably attract the power-hungry. I believe that no
        good man should make it his life&apos;s ambition to rule over a fellow man. As such, all
        politicians must only be in power for a pre-determined period of time and must find a way to
        contribute to society in other ways.
        <Spacer />
        I believe that in a purely anarchist society, a ruling party will eventually rise. It may
        not start with the intent or even the design to be one, but eventually a group will realize
        that mutual effort and co-operation will outperform a group of individuals greedily
        co-existing. Such a group will be able to snowball their advantage until the society will
        eventually descend to authoritarianism under their influence.
        <Spacer />
        Our ideal future government must not lean too heavily to one side of the political spectrum
        and should ideally be composed of a combination of both capitalist and socialist policies. A
        purely capitalist government will lead to greater inequality. On the other hand, a purely
        socialist government will rob its citizens of their desire to work and innovate.
        <Spacer />
        <SubTitle>Maximizing human productivity</SubTitle>
        To maximize human productivity we must first help meet the basic human needs and minimize
        the inequality of choice. Note how only once a human&apos;s basic needs are met, can they
        focus their attention on something worthwhile. Our modern society&apos;s inequality of
        choice prohibits from letting humans reach their potential.
        <Spacer />
        As such our ideal society must provide:
        <ol>
          <li>universal health and dental care</li>
          <li>universal access to childcare and pre-school to university level education</li>
          <li>
            subsidized food and shelter for those in need, for a period of time (not indefinite)
          </li>
        </ol>
        <Spacer />
        <SubTitle>Minimize human suffering</SubTitle>
        I believe that some level of suffering is required to be able to compete and to maximize
        productivity. Everything has a price. However, suffering as a result of hate, prejudice or
        cruelty will lead to a decrease in productivity in a society. Ask yourself for what reason a
        gay man would want to contribute to a society that berates him.
        <Spacer />
        It is imperative that a society offers:
        <ol>
          <li>freedom of religion</li>
          <li>full rights and destigmatization of LGBT groups</li>
        </ol>
        <SubTitle>A call for superheros</SubTitle>
        Much of the developed world has eased into a state of stability and we are largely
        maintaining the status quo. Virtually all of the world has a distinct ruling class that is
        able to hold power and create dynasties thanks in part to low wealth transfer taxes but high
        incomes taxes, snowball effects of wealth and lobbying. In today&apos;s world the public
        opinion is for sale on social media networks. Most governments have now realized this and
        are waging a disinformation war against each other and/or running propaganda campaigns
        against their own citizens. The cries of the poor and the powerless will continue to go
        unheard, be it in Russia, Myanmar, Belarus or Xinjiang.
        <Spacer />
        As humans, we are inherently greedy, tribalistic and selfish. Even if we weren&apos;t, the
        deterrent of a nuclear war as well as the strong unwillingness of anyone in power to give it
        up will prevent the world from making any substantial change any time soon.
        <Spacer />
        This is a call to superheroes that can change the world for the better as we humans can no
        longer bring change on our own. It&apos;s impossible. Our superheroes must be the best of us
        and must be willing to step aside when the human society is able to transition to a higher
        state. Until our superhero comes to save us, the best we can do is try to leave this world a
        better place and
        <CenteredContainer>
          <Image src="/images/be-excellent-to-each-other.jpg" width={341} height={246} />
        </CenteredContainer>
      </EntryBody>
    </BlogEntry>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default HumanSociety;
