import { forwardRef, ReactNode, Ref, MouseEvent } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface Props {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  isDisabled?: boolean;
}

const ButtonComponent = (
  { children, onClick, isDisabled, isLoading, ...props }: Props,
  ref: Ref<HTMLButtonElement>,
) => (
  <StyledButton
    ref={ref}
    onClick={(e: MouseEvent<HTMLButtonElement>) => {
      const isClickable = !isDisabled && !isLoading;
      if (typeof onClick === 'function' && isClickable) {
        onClick(e);
      }
    }}
    disabled={isDisabled || isLoading}
    {...props}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.button`
  min-width: 8rem;
  background-color: ${({ theme }) => theme.colors.brand};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.surface};
  text-align: center;
  user-select: none;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transform: translateY(0);
  transition: all 200ms ease;

  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.brand)};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  :active {
    transform: translateY(0);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => lighten(0.2, theme.colors.brand)};
    transform: none;
    box-shadow: none;
  }
`;

const Button = forwardRef(ButtonComponent);

export default Button;
