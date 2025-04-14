import styled from 'styled-components';

export const Italic = styled.span`
  font-style: italic;
`;

export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.small};
`;

export const EntryBody = styled.div`
  padding-top: 80px;
  margin-top: -80px;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  ul,
  ol {
    margin: 1.5rem 0;
  }

  ul > li {
    list-style-type: disc;
    margin-left: 2.5rem;
    margin-bottom: 0.5rem;
  }

  ol > li {
    list-style-type: decimal;
    margin-left: 2rem;
    margin-bottom: 0.5rem;
  }
`;

export const EntryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  transition: color 200ms ease;
`;

export const SubTitle = styled.h3`
  margin-top: 0.25rem;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.black};
`;

export const EntryDate = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey};
`;

export const BlogEntry = styled.div`
  scroll-margin-top: 80px;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition:
    transform 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &::after {
    margin: ${({ theme }) => theme.spacing.large} 0;
    width: 100%;
    content: '';
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.greyLight};
  }
`;
