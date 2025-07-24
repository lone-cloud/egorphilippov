import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Egor Philippov',
  description: 'The personal blog of Egor Philippov.',
  openGraph: {
    title: 'Blog | Egor Philippov',
    description: 'The personal blog of Egor Philippov.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
