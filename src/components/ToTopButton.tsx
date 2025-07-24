import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'motion/react';

function ToTopButton() {
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsArrowVisible(window.scrollY > 300);
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isArrowVisible && (
        <ToTopButtonContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
        >
          <ButtonContent>
            <StyledFontAwesomeIcon icon={faArrowAltCircleUp} aria-label="Scroll to top" />
            <ButtonText>Top</ButtonText>
          </ButtonContent>
        </ToTopButtonContainer>
      )}
    </AnimatePresence>
  );
}

const ToTopButtonContainer = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.brand};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: background-color 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export default ToTopButton;
