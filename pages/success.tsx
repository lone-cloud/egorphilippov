import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import Container from 'components/Container';
import PageTitle from 'components/PageTitle';

const Success = () => (
  <Container>
    <NextSeo
      title="Success | Egor Philippov"
      description="A success page."
      canonical="https://egor.philippov.ca/success"
      nofollow
      noindex
    />

    <ThanksTitleContainer>
      <PageTitle title="Your email has been successfully sent" />
    </ThanksTitleContainer>
  </Container>
);

const ThanksTitleContainer = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
`;

export default Success;
