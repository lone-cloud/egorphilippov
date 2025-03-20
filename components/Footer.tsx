import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { darken } from 'polished';

const year = new Date().getFullYear();

const Footer = () => (
  <StyledFooter>
    <FindMeLinks>
      <FindMeText>- Find me on</FindMeText>

      <a href="https://github.com/lone-cloud" rel="noreferrer" target="_blank" aria-label="GitHub">
        <StyledFontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a
        href="https://www.linkedin.com/in/egor-philippov"
        rel="noreferrer"
        target="_blank"
        aria-label="LinkedIn"
      >
        <StyledFontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </FindMeLinks>

    <ForgedLinkContainer>
      Forged from{' '}
      <span role="img" aria-label="hot fire burning">
        🔥
      </span>{' '}
      ©{year}{' '}
      <ForgedLink href="https://www.nidratech.com/" target="_blank">
        Nidratech Ltd.
      </ForgedLink>
    </ForgedLinkContainer>
  </StyledFooter>
);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  padding: 0 0.5rem;
`;
const FindMeText = styled.span`
  text-transform: uppercase;
  margin-right: ${({ theme }) => theme.spacing.medium};
  font-weight: 600;
  font-size: 0.9em;
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  flex-direction: column;
`;
const ForgedLink = styled.a`
  color: ${({ theme }) => theme.colors.nidratech};

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.05, theme.colors.nidratech)};
  }
`;
const FindMeLinks = styled.div`
  align-self: flex-end;
  margin: 0 20vw;
  display: flex;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: all 200ms;

    :focus,
    :hover {
      color: ${({ theme }) => darken(0.05, theme.colors.brand)};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0;
  }
`;
const ForgedLinkContainer = styled.div`
  margin-top: 2rem;
  align-self: center;
`;

export default Footer;
