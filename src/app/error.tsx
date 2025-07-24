'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          <button
            onClick={reset}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Refresh Page
          </button>
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
