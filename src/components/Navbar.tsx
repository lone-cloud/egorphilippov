'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-white shadow-sm">
      <div className="max-w-screen-2xl flex mx-auto justify-between sm:px-6 h-16 bg-transparent px-4">
        <Link href="/">
          <div
            className="w-12 h-12 mt-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
            aria-label="Site cloud logo"
          >
            <Image
              src="/images/logo.jpg"
              alt="Site cloud logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
          </div>
        </Link>

        <ul className="my-auto flex">
          <li className="list-none m-0">
            <Link href="/" className="no-underline border-b-0">
              <div
                className={cn(
                  'flex px-3 md:px-6 text-base font-medium leading-normal hover:text-gray-700 transition-colors',
                  pathname === '/' ? 'text-blue-600' : 'text-gray-500',
                )}
              >
                Home
              </div>
            </Link>
          </li>
          <li className="list-none m-0">
            <Link href="/blog" className="no-underline border-b-0">
              <div
                className={cn(
                  'flex px-3 md:px-6 text-base font-medium leading-normal hover:text-gray-700 transition-colors',
                  pathname === '/blog' ? 'text-blue-600' : 'text-gray-500',
                )}
              >
                Blog
              </div>
            </Link>
          </li>
          <li className="list-none m-0">
            <Link href="/resume" className="no-underline border-b-0">
              <div
                className={cn(
                  'flex px-3 md:px-6 text-base font-medium leading-normal hover:text-gray-700 transition-colors',
                  pathname === '/resume' ? 'text-blue-600' : 'text-gray-500',
                )}
              >
                Resumé
              </div>
            </Link>
          </li>
          <li className="list-none m-0">
            <Link href="/contact" className="no-underline border-b-0">
              <div
                className={cn(
                  'flex px-3 md:px-6 text-base font-medium leading-normal hover:text-gray-700 transition-colors',
                  pathname === '/contact' ? 'text-blue-600' : 'text-gray-500',
                )}
              >
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
