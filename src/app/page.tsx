'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] animate-fade-in-down border border-gray-200 dark:border-gray-700">
      <div className="uppercase font-bold text-lg tracking-[2px] text-gray-500 dark:text-gray-400 mb-8 inline-block py-2 px-4 bg-gray-200/25 dark:bg-gray-700/25 rounded-lg">
        👋 Hello
      </div>

      <div className="text-xl leading-relaxed mb-4 text-gray-900 dark:text-gray-100 sm:leading-normal">
        Is it me you&apos;re looking for? My name is{' '}
        <span className="text-blue-600 dark:text-blue-400 relative whitespace-nowrap font-semibold hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300">
          Egor Philippov
        </span>{' '}
        and I&apos;m a passionate{' '}
        <span className="text-blue-600 dark:text-blue-400 relative whitespace-nowrap font-semibold hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300">
          Full Stack Software Engineer
        </span>
        . I am comfortable working on the server, browser or mobile.
      </div>

      <div className="text-xl leading-relaxed mb-4 text-gray-900 dark:text-gray-100 sm:leading-normal">
        I am always looking for exciting new opportunities{' '}
        <span className="gap-2 inline-flex flex-wrap">
          <span className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600/20 dark:hover:bg-blue-400/20">
            ✔️ remote
          </span>{' '}
          <span className="inline-flex items-center bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-2 px-4 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600/20 dark:hover:bg-blue-400/20">
            ✔️ contract
          </span>
        </span>
      </div>

      <div className="text-xl mb-4 text-gray-900 dark:text-gray-100">
        Feel free to{' '}
        <Link
          href="/contact"
          className="font-semibold text-blue-600 dark:text-blue-400 no-underline relative pb-0.5 hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300"
        >
          contact me
        </Link>
        .
      </div>
    </div>
  );
}
