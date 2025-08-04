'use client';

import { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi';

type Theme = 'light' | 'dark' | 'system';

export function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = (window.localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);

    applyTheme(savedTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (savedTheme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDarkMode =
      newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const cycleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';

    setTheme(nextTheme);
    applyTheme(nextTheme);

    if (nextTheme === 'system') {
      window.localStorage.removeItem('theme');
    } else {
      window.localStorage.setItem('theme', nextTheme);
    }
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <HiSun className="w-5 h-5" />;
      case 'dark':
        return <HiMoon className="w-5 h-5" />;
      case 'system':
        return <HiDesktopComputer className="w-5 h-5" />;
    }
  };

  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system theme';
      case 'system':
        return 'Switch to light mode';
    }
  };

  // Don't render until mounted to prevent hydration mismatches
  if (!mounted) {
    return <div className="p-2 w-9 h-9 bg-transparent rounded-lg opacity-0"></div>;
  }

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
    >
      {getThemeIcon()}
    </button>
  );
}
