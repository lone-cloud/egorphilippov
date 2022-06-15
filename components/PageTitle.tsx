import styled from 'styled-components';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => (
  <TitleContainer>
    <Title>{title}</Title>
  </TitleContainer>
);

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
`;
const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export default PageTitle;
