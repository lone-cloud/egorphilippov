import styled from 'styled-components';

const Container = styled.div`
  max-width: 60rem;
  margin: auto;
  margin-top: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => `0 ${theme.spacing.large}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: auto;
    margin: 0 ${({ theme }) => `0 ${theme.spacing.medium}`};
    padding: ${({ theme }) => `0 ${theme.spacing.small}`};
  }
`;

export default Container;
