import styled from 'styled-components';

export const Italic = styled.span`
  font-style: italic;
`;
export const Spacer = styled.div`
  height: ${({ theme }) => theme.spacing.small};
`;
export const EntryBody = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  line-height: 1.5;

  ul > li {
    list-style-type: disc;
    margin-left: 2.5rem;
  }

  ol > li {
    list-style-type: decimal;
    margin-left: 2rem;
  }
`;
export const EntryTitle = styled.h2`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.2em;
`;
export const SubTitle = styled.h3`
  margin-top: 0.25rem;
  font-size: 1.1em;
`;
export const EntryDate = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  font-size: 0.9em;
`;

export const BlogEntry = styled.div`
  margin-top: -80px;
  padding-top: 80px;

  &::after {
    margin: ${({ theme }) => theme.spacing.large} 0;
    width: 100%;
    content: '';
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
  }
`;
