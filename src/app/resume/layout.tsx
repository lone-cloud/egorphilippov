import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resumé | Egor Philippov',
  description: 'The resumé of Egor Philippov.',
  openGraph: {
    title: 'Resumé | Egor Philippov',
    description: 'The resumé of Egor Philippov.',
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
