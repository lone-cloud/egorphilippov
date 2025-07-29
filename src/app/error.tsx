'use client';

import { useEffect } from 'react';

import { Button } from '@/components/Button';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    // Log error to monitoring service
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by Next.js error boundary:', error);
    }

    // In production, send to error monitoring service
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. Please try again or refresh the page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={reset}>Try Again</Button>
          <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        </div>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Error Details (Development Only)
            </summary>
            <div className="mt-2 p-3 bg-gray-100 rounded-md">
              <p className="text-xs font-semibold text-red-600 mb-2">Error Message:</p>
              <p className="text-xs text-red-600 mb-3">{error.message}</p>
              {error.digest && (
                <>
                  <p className="text-xs font-semibold text-red-600 mb-2">Error Digest:</p>
                  <p className="text-xs text-red-600 mb-3">{error.digest}</p>
                </>
              )}
              <p className="text-xs font-semibold text-red-600 mb-2">Stack Trace:</p>
              <pre className="text-xs text-red-600 overflow-auto whitespace-pre-wrap">
                {error.stack}
              </pre>
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
