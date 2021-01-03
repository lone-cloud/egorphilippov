import Head from 'next/head';
import styled from 'styled-components';
import { NextPage } from 'next';

import { Container, PageTitle } from 'components';

const Success: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Success</title>
      </Head>

      <ThanksTitleContainer>
        <PageTitle title="Your email has been successfully sent" />
      </ThanksTitleContainer>
    </Container>
  );
};

const ThanksTitleContainer = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
`;

export default Success;
