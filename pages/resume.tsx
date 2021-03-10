import styled from 'styled-components';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Container } from 'components';

const Clients: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title="Resumé | Egor Philippov"
        description="The resumé of Egor Philippov."
        canonical="https://www.egorphilippov.me/resume"
      />

      <ResumeContainer data="/resume.pdf" width="100%" type="application/pdf">
        <iframe
          width="100%"
          src="https://docs.google.com/viewer?url=https://www.egorphilippov.me/resume.pdf&embedded=true"
        ></iframe>
      </ResumeContainer>
    </Container>
  );
};

const ResumeContainer = styled.object`
  height: 70vh;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 50vh;
  }
`;

export default Clients;
