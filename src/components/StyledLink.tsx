import { ReactNode } from 'react';
import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export const StyledLink = ({ href, children, external = false }: StyledLinkProps) => {
  const baseClasses =
    'font-semibold text-blue-600 dark:text-blue-400 no-underline hover:underline transition-all duration-300';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
};
