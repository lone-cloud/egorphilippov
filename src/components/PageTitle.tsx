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
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

const TitleContainer = styled.div`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export default PageTitle;
