import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import PageTitle from '@/components/PageTitle';

export const metadata: Metadata = {
  title: 'Blog | Egor Philippov',
  description: 'The personal blog of Egor Philippov.',
  openGraph: {
    title: 'Blog | Egor Philippov',
    description: 'The personal blog of Egor Philippov.',
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto p-8 relative sm:p-4 animate-fade-in-down">
      <div>
        <PageTitle title="Latest posts" />
      </div>
      {children}
    </div>
  );
}
