import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { darken } from 'polished';

export function ToTopButton(): JSX.Element {
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset > 300) {
        return setIsArrowVisible(true);
      }

      setIsArrowVisible(false);
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <ToTopButtonContainer isDisplayed={isArrowVisible}>
      <StyledFontAwesomeIcon
        icon={faArrowAltCircleUp}
        aria-label="Scroll to top"
        aria-role="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        size="2x"
      />
    </ToTopButtonContainer>
  );
}

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.black};
  transition: all 200ms;

  :focus,
  :hover {
    color: ${({ theme }) => darken(0.05, theme.colors.brand)};
  }
`;
const ToTopButtonContainer = styled.div<{ isDisplayed?: boolean }>`
  bottom: 10%;
  right: 10%;
  position: fixed;
  cursor: pointer;
  display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 5%;
  }
`;
