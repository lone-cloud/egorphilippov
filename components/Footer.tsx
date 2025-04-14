import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { darken } from 'polished';

const year = new Date().getFullYear();

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <SocialSection>
        <FindMeText>Find me on</FindMeText>
        <SocialLinks>
          <SocialLink
            href="https://github.com/lone-cloud"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <StyledFontAwesomeIcon icon={faGithub} size="lg" />
            <SocialLinkText>GitHub</SocialLinkText>
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/egor-philippov"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <StyledFontAwesomeIcon icon={faLinkedin} size="lg" />
            <SocialLinkText>LinkedIn</SocialLinkText>
          </SocialLink>
        </SocialLinks>
      </SocialSection>

      <Copyright>
        Forged with{' '}
        <span role="img" aria-label="hot fire burning">
          🔥
        </span>{' '}
        ©{year}{' '}
        <ForgedLink href="https://www.nidratech.com/" target="_blank">
          Nidratech Ltd.
        </ForgedLink>
      </Copyright>
    </FooterContent>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FindMeText = styled.span`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.grey};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  transition: all 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
    background: ${({ theme }) => theme.colors.greyLight};
    transform: translateY(-2px);
  }
`;

const SocialLinkText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: transform 200ms ease;
`;

const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

const ForgedLink = styled.a`
  color: ${({ theme }) => theme.colors.brand};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 200ms ease;

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.brand)};
  }
`;

export default Footer;
