import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import Container from 'components/Container';

const Clients = () => (
  <Container>
    <NextSeo
      title="Resumé | Egor Philippov"
      description="The resumé of Egor Philippov."
      canonical="https://egor.philippov.ca/resume"
    />

    <ResumeContainer data="/resume.pdf" width="100%" type="application/pdf">
      <iframe
        title="Resumé PDF"
        width="100%"
        src="https://docs.google.com/viewer?url=https://egor.philippov.ca/resume.pdf&embedded=true"
      />
    </ResumeContainer>
  </Container>
);

const ResumeContainer = styled.object`
  height: 70vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 50vh;
  }
`;

export default Clients;
