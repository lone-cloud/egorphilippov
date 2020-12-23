import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

export function Navbar({ isNavbarOpen, setIsNavbarOpen }: Props): JSX.Element {
  const { pathname } = useRouter();

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link href={'/'} passHref>
            <NavItem as="a" aria-label={'Site cloud logo'}>
              <ImgLogo src="images/logo.jpg" alt="Site cloud logo" />
            </NavItem>
          </Link>

          <NavLinks>
            <li>
              <Link href={'/'} passHref>
                <NavItem as="a" title={'Home'} isActive={pathname === '/'}>
                  Home
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href={'/blog'} passHref>
                <NavItem as="a" title={'Blog'} isActive={pathname === '/blog'}>
                  Blog
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href={'/resume'} passHref>
                <NavItem as="a" title={'Resumé'} isActive={pathname === '/resume'}>
                  Resumé
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href={'/contact'} passHref>
                <NavItem as="a" title={'Contact us'} isActive={pathname === '/contact'}>
                  Contact
                </NavItem>
              </Link>
            </li>
          </NavLinks>

          <BurgerWrapper>
            <BurgerMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>

      <CollapseMenu isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
    </>
  );
}

const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand : theme.colors.grey)};
  align-items: center;

  :hover {
    color: ${({ isActive, theme }) =>
      darken(0.05, isActive ? theme.colors.brand : theme.colors.grey)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  height: ${({ theme }) => theme.spacing.navBarHeight};
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `0 ${theme.spacing.small}`};
  }
`;
const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
const ImgLogo = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 3.75rem;
  border: 2px solid #fff;
  transition-duration: 0.3s;

  :focus,
  :hover {
    transform: scale(1.05);
  }
`;
