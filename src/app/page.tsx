'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-8 mt-8  animate-fade-in-down">
      <div className="max-w-4xl p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="uppercase font-bold text-lg tracking-[2px] text-gray-500 mb-8 inline-block py-2 px-4 bg-gray-200/25 rounded-lg">
          👋 Hello
        </div>

        <div className="text-xl leading-relaxed mb-4 text-gray-900 sm:leading-normal">
          Is it me you&apos;re looking for? My name is{' '}
          <span className="text-blue-600 relative whitespace-nowrap font-semibold hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300">
            Egor Philippov
          </span>{' '}
          and I&apos;m a passionate{' '}
          <span className="text-blue-600 relative whitespace-nowrap font-semibold hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300">
            Full Stack Software Engineer
          </span>
          . I am comfortable working on the server, browser or mobile.
        </div>

        <div className="text-xl leading-relaxed mb-4 text-gray-900 sm:leading-normal">
          I am always looking for exciting new opportunities{' '}
          <span className="inline-flex items-center bg-gray-200 py-2 px-4 rounded-full text-base font-medium mx-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600/20">
            ✔️ remote
          </span>{' '}
          <span className="inline-flex items-center bg-gray-200 py-2 px-4 rounded-full text-base font-medium mx-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600/20">
            ✔️ contract
          </span>
        </div>

        <div className="text-xl">
          Feel free to{' '}
          <Link
            href="/contact"
            className="font-semibold text-blue-600 no-underline relative pb-0.5 hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300"
          >
            contact me
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
