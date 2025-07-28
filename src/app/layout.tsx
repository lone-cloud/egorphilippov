import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// This metadata will be used as the default for all pages
export const metadata: Metadata = {
  title: 'Egor Philippov',
  description: 'The personal site of Egor Philippov.',
  authors: [{ name: 'Egor Philippov' }],
  other: {
    'msapplication-TileColor': '#1d7eb1',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://egor.philippov.ca/images/logo-xl.jpg',
        width: 496,
        height: 496,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="grid grid-rows-[1fr_min-content] min-h-screen bg-gray-50">
          <Navbar />

          <main className="mt-16 max-w-4xl mx-auto p-2 relative md:p-8 w-full animate-fade-in-down">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
