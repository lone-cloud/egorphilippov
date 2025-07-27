import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import PageTitle from '@/components/PageTitle';

export const metadata: Metadata = {
  title: 'Contact | Egor Philippov',
  description: 'A contact form for Egor Philippov.',
  openGraph: {
    title: 'Contact | Egor Philippov',
    description: 'A contact form for Egor Philippov.',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto p-8 relative sm:p-4 animate-fade-in-down">
      <PageTitle title="Get in touch" />
      {children}
    </div>
  );
}
