'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-500 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block py-3 px-6 bg-blue-600 text-white no-underline rounded-lg font-medium transition-colors duration-200 hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
