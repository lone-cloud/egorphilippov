import { ReactNode } from 'react';
import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export const StyledLink = ({ href, children, external = false }: StyledLinkProps) => {
  const linkClasses =
    "font-semibold text-blue-600 dark:text-blue-400 no-underline relative pb-0.5 hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClasses} underline`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
};
