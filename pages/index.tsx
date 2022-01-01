import styled from 'styled-components';
import Link from 'next/link';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <NextSeo
        title="Egor Philippov"
        description="The personal site of Egor Philippov."
        canonical="https://www.egorphilippov.me"
      />

      <PageBody>
        <PageSection>
          <HelloText>- Hello</HelloText>
        </PageSection>

        <PageSection>
          Is it me you&apos;re looking for? My name is{' '}
          <HighlightedText>Egor Philippov</HighlightedText> and I&apos;m a passionate{' '}
          <HighlightedText>Full Stack Software Engineer</HighlightedText>. I am comfortable working
          on the server, browser or mobile. You may have heard of me from.
        </PageSection>

        <PageSection>
          I am always looking for exciting new opportunities (
          <span role="img" aria-label="check mark">
            ✔️
          </span>{' '}
          remote{' '}
          <span role="img" aria-label="check mark">
            ✔️
          </span>{' '}
          contract{' '}
          <span role="img" aria-label="cross mark">
            ❌
          </span>{' '}
          recruiters/agencies).
          <br />
          Feel free to{' '}
          <Link href="/contact" passHref>
            contact me
          </Link>
          .
        </PageSection>
      </PageBody>
    </HomeContainer>
  );
};

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.colors.brand};
`;
const HelloText = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9em;
`;
const HomeContainer = styled.div`
  background-size: 100px 199px;
  padding: 12vh 3vw;
`;
const PageBody = styled.div`
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0 15vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 3vw;
  }
`;
const PageSection = styled.div`
  margin: 0.5rem 0;
`;

export default Home;
