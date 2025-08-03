import { ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  isDisabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({
  children,
  onClick,
  isDisabled,
  isLoading,
  variant = 'primary',
  className,
  ...props
}: Props) => (
  <button
    onClick={(e: MouseEvent<HTMLButtonElement>) => {
      const isClickable = !isDisabled && !isLoading;
      if (typeof onClick === 'function' && isClickable) {
        onClick(e);
      }
    }}
    disabled={isDisabled || isLoading}
    className={cn(
      // Base styles
      'min-w-32 text-base font-medium leading-normal text-center select-none border-none py-3 px-6 rounded-lg cursor-pointer shadow-sm transform translate-y-0 transition-all duration-200',
      // Variant styles
      variant === 'primary' &&
        'bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700 focus:bg-blue-700 dark:focus:bg-blue-700',
      variant === 'secondary' &&
        'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 focus:bg-gray-300 dark:focus:bg-gray-600',
      // Hover/focus effects
      'hover:-translate-y-0.5 hover:shadow-md focus:-translate-y-0.5 focus:shadow-md',
      // Active state
      'active:translate-y-0 active:shadow-sm',
      // Disabled state
      'disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
      variant === 'primary' && 'disabled:bg-blue-300 dark:disabled:bg-blue-800',
      variant === 'secondary' && 'disabled:bg-gray-100 dark:disabled:bg-gray-800',
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
