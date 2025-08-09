import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resume',
  description: "Download or view Egor Philippov's professional resume.",
  openGraph: {
    title: 'Egor Philippov - Resume',
    description: 'Professional resume of Egor Philippov',
    url: 'https://egor.philippov.ca/resume',
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
