'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import { cn } from '@/lib/utils';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/resume', label: 'Resumé' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-2xl flex mx-auto justify-between sm:px-6 h-16 bg-transparent px-4">
          <Link href="/" onClick={closeMobileMenu}>
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

          <div className="hidden md:flex items-center space-x-4">
            <ul className="my-auto flex">
              {navItems.map(({ href, label }) => (
                <li key={href} className="list-none m-0">
                  <Link href={href} className="no-underline border-b-0">
                    <div
                      className={cn(
                        'flex px-3 md:px-6 text-base font-medium leading-normal hover:text-gray-700 dark:hover:text-gray-300 transition-colors',
                        pathname === href
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400',
                      )}
                    >
                      {label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <DarkModeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu} />
          <div className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="block no-underline border-b-0"
                >
                  <div
                    className={cn(
                      'block px-3 py-2 text-lg font-medium rounded-lg transition-colors',
                      pathname === href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800',
                    )}
                  >
                    {label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
