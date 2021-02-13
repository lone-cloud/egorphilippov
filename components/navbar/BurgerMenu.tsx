import styled from 'styled-components';

interface Props {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (...args: any[]) => void;
}

const BurgerMenu = ({ isNavbarOpen, setIsNavbarOpen }: Props): JSX.Element => {
  return (
    <Wrapper onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
      <div id="menu-toggle" className={isNavbarOpen ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: ${({ theme }) => theme.colors.brand};
    display: block;
    position: relative;
    user-select: none;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -1.1rem;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 1.1rem;
  }
`;

export default BurgerMenu;
