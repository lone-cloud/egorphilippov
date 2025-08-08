import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  const baseClasses =
    'max-w-4xl p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] animate-fade-in-down border border-gray-200 dark:border-gray-700';

  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};
