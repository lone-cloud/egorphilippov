import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resumé | Egor Philippov',
  description: 'The resumé of Egor Philippov.',
  openGraph: {
    title: 'Resumé | Egor Philippov',
    description: 'The resumé of Egor Philippov.',
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
