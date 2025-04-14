import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isNavbarOpen, setIsNavbarOpen }: Readonly<Props>) {
  const { pathname } = useRouter();

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link href="/">
            <NavItem aria-label="Site cloud logo">
              <ImgLogo src="images/logo.jpg" alt="Site cloud logo" />
            </NavItem>
          </Link>

          <NavLinks>
            <li>
              <Link href="/">
                <NavItem title="Home" $isActive={pathname === '/'}>
                  Home
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <NavItem title="Blog" $isActive={pathname === '/blog'}>
                  Blog
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/resume">
                <NavItem title="Resumé" $isActive={pathname === '/resume'}>
                  Resumé
                </NavItem>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <NavItem title="Contact us" $isActive={pathname === '/contact'}>
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

const NavItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.md};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.brand : theme.colors.grey)};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  :hover {
    color: ${({ $isActive, theme }) =>
      darken(0.05, $isActive ? theme.colors.brand : theme.colors.grey)};
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
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;
const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.spacing.navBarHeight};
  background: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `0 ${theme.spacing.sm}`};
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin: auto 0;
  display: flex;

  a {
    text-decoration: none;
    border-bottom: none;
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
  border-radius: 50%;
  margin-top: 0.15rem;

  :focus,
  :hover {
    transform: scale(1.05);
  }
`;
