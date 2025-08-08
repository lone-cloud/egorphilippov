import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import '@/styles/globals.css';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Egor Philippov - Full Stack Software Engineer',
    template: '%s | Egor Philippov',
  },
  description:
    'Full Stack Software Engineer specializing in React, Next.js, Ember.js, React Native, and cloud technologies. Available for remote work, contract, and full-time opportunities.',
  keywords: [
    'Egor Philippov',
    'Full Stack Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'Ember.js',
    'React Native',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Mobile Development',
    'Remote Developer',
    'Contract Developer',
  ],
  authors: [{ name: 'Egor Philippov', url: 'https://egor.philippov.ca' }],
  creator: 'Egor Philippov',
  publisher: 'Egor Philippov',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new globalThis.URL('https://egor.philippov.ca'),
  alternates: {
    canonical: '/',
  },
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
    url: 'https://egor.philippov.ca',
    siteName: 'Egor Philippov',
    title: 'Egor Philippov - Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer specializing in React, Next.js, Ember.js, React Native, and cloud technologies. Available for remote work, contract, and full-time opportunities.',
    images: [
      {
        url: 'https://egor.philippov.ca/images/logo-xl.webp',
        width: 496,
        height: 496,
        alt: 'Egor Philippov',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egor Philippov - Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer specializing in React, Next.js, Ember.js, React Native, and cloud technologies.',
    images: ['https://egor.philippov.ca/images/logo-xl.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'system';
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (theme === 'system' && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Egor Philippov',
              jobTitle: 'Full Stack Software Engineer',
              url: 'https://egor.philippov.ca',
              sameAs: ['https://github.com/lone-cloud'],
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Ember.js',
                'React Native',
                'Full Stack Development',
                'Web Development',
                'Mobile Development',
                'Software Engineering',
              ],
              description:
                'Full Stack Software Engineer specializing in React, Next.js, Ember.js, React Native, and cloud technologies. Available for remote work, contract, and full-time opportunities.',
            }),
          }}
        />
        <div className="grid grid-rows-[1fr_min-content] min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          <Navbar />

          <main className="mt-16 max-w-4xl mx-auto p-2 relative md:p-8 w-full">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
