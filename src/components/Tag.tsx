import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  color: 'yellow' | 'green' | 'purple' | 'blue';
}

export const Tag = ({ children, color }: TagProps) => {
  const colorClasses = {
    yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
  };

  return (
    <span className={`px-3 py-1 ${colorClasses[color]} text-sm rounded-full`}>{children}</span>
  );
};
