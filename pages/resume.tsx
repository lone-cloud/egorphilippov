import styled from 'styled-components';

import Layout from 'components/Layout';

const Clients = () => (
  <Layout title="Resumé | Egor Philippov" description="The resumé of Egor Philippov.">
    <ResumeContainer data="/EgorPhilippovResume.pdf" width="100%" type="application/pdf">
      <iframe
        title="Resumé PDF"
        width="100%"
        src="https://docs.google.com/viewer?url=https://egor.philippov.ca/EgorPhilippovResume.pdf&embedded=true"
      />
    </ResumeContainer>
  </Layout>
);

const ResumeContainer = styled.object`
  height: 80vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 50vh;
  }
`;

export default Clients;
