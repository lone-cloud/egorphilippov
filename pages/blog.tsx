import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';

import { Container } from 'components';

const Clients: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Blog | Egor Philippov</title>
      </Head>

      <TrollFace>( ͡° ͜ʖ ͡°)</TrollFace>
    </Container>
  );
};

const TrollFace = styled.div`
  font-size: 1.5em;
  text-align: center;
`;

export default Clients;
