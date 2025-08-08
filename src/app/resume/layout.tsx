import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "Download or view Egor Philippov's professional resume. Full Stack Software Engineer with expertise in React, Next.js, Node.js, and cloud technologies.",
  openGraph: {
    title: 'Egor Philippov - Resume',
    description: 'Professional resume of Egor Philippov, Full Stack Software Engineer',
    url: 'https://egor.philippov.ca/resume',
  },
};

export default function ResumeLayout({ children }: { children: ReactNode }) {
  return children;
}
