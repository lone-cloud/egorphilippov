import { forwardRef, ReactNode, Ref, MouseEvent } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

interface Props {
  children?: ReactNode;
  onClick?: (...args: any[]) => void;
  type?: string;
  as?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

function ButtonComponent(
  { children, onClick, isDisabled, isLoading, ...props }: Props,
  ref: Ref<HTMLButtonElement>
) {
  return (
    // @ts-ignore TODO improve typing
    <StyledButton
      ref={ref}
      onClick={(e: MouseEvent) => {
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
}

const StyledButton = styled.button`
  min-width: 8rem;
  background-color: ${({ theme }) => theme.colors.brand};
  font-size: 1.1em;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.brand)};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => lighten(0.2, theme.colors.brand)};
  }
`;

export const Button = forwardRef(ButtonComponent);
