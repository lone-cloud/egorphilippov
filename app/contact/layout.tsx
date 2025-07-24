import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Egor Philippov',
  description: 'A contact form for Egor Philippov.',
  openGraph: {
    title: 'Contact | Egor Philippov',
    description: 'A contact form for Egor Philippov.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
