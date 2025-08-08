'use client';

import { HiDownload } from 'react-icons/hi';

import { Card } from '@/components/Card';

export default function Resume() {
  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Resume</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Download or view my professional experience and qualifications
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/EgorPhilippovResume.pdf"
              download="EgorPhilippovResume.pdf"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 no-underline"
            >
              <HiDownload className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden p-0">
        <object
          data="/EgorPhilippovResume.pdf"
          width="100%"
          type="application/pdf"
          className="lg:h-[80vh] h-[60vh] min-h-96"
        >
          <div className="p-8 text-center">
            <p className="text-gray-900 dark:text-gray-100 mb-4">
              Unable to display PDF in your browser.
            </p>
            <a
              href="/EgorPhilippovResume.pdf"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 no-underline"
              download="EgorPhilippovResume.pdf"
            >
              <HiDownload className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </object>
      </Card>
    </div>
  );
}
