'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  // Don't render until mounted to prevent hydration mismatches
  if (!mounted) {
    return <div className="p-2 w-9 h-9 bg-transparent rounded-lg opacity-0"></div>;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
    </button>
  );
}
