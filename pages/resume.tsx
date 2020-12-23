import Head from 'next/head';
import styled from 'styled-components';
import { NextPage } from 'next';

import { Container } from 'components';

const Clients: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Resumé | Egor Philippov</title>
      </Head>

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
