import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import Link from 'next/link';
import { darken } from 'polished';
import { useRouter } from 'next/router';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const CollapseMenu = ({ isNavbarOpen, setIsNavbarOpen }: Props) => {
  const { pathname } = useRouter();
  const ref = useRef(null);

  const transition = useTransition(isNavbarOpen, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const menuToggle = document.querySelector('#menu-toggle');
    const handleClickOutside = (event) => {
      if (
        isNavbarOpen &&
        !ref?.current.contains(event.target) &&
        !menuToggle?.contains(event.target)
      ) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isNavbarOpen]);

  return (
    <>
      {transition(
        (style, item) =>
          item && (
            // @ts-ignore TODO: weird style typing?
            <CollapseWrapper ref={ref} style={style}>
              <NavLinks>
                <li>
                  <Link href="/" passHref>
                    <NavItem
                      href="/"
                      as="a"
                      title="Home"
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/'}
                    >
                      Home
                    </NavItem>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    <NavItem
                      href="/blog"
                      as="a"
                      title="Blog"
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/blog'}
                    >
                      Blog
                    </NavItem>
                  </Link>
                </li>
                <li>
                  <Link href="/resume" passHref>
                    <NavItem
                      href="/resume"
                      as="a"
                      title="Resumé"
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/resume'}
                    >
                      Resumé
                    </NavItem>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    <NavItem
                      href="/contact"
                      as="a"
                      title="Contact"
                      onClick={() => setIsNavbarOpen(false)}
                      isActive={pathname === '/contact'}
                    >
                      Contact
                    </NavItem>
                  </Link>
                </li>
              </NavLinks>
            </CollapseWrapper>
          )
      )}
    </>
  );
};

const NavItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing.medium};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.brand : theme.colors.grey)};
  justify-content: center;
  min-width: 10vw;

  :hover {
    color: ${({ isActive, theme }) =>
      darken(0.05, isActive ? theme.colors.brand : theme.colors.grey)};
  }
`;
const CollapseWrapper = styled(animated.div)`
  background: ${({ theme }) => darken(0.05, theme.colors.white)};
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 999;
`;
const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  display: flex;
  justify-content: center;
  min-width: 10vw;

  a {
    text-decoration: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export default CollapseMenu;
