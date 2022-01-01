import styled from 'styled-components';

interface Props {
  title: string;
}

export function PageTitle({ title }: Props) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
}

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5em;
`;
const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
