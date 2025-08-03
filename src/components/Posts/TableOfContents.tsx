import { IoChevronDown } from 'react-icons/io5';
import { useState, MouseEvent } from 'react';

import blogPosts from '@/components/Posts';

interface TableOfContentsProps {
  handlePostNavigation: (e: MouseEvent, postId: string) => void;
}

export function TableOfContents({ handlePostNavigation }: TableOfContentsProps) {
  const currentYear = new Date().getFullYear();
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set([currentYear]));

  const toggleYear = (year: number) => {
    setExpandedYears((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }

      return newSet;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-8 shadow-sm animate-fade-in-down border border-gray-200 dark:border-gray-700">
      {blogPosts.map(({ year, metas }) => (
        <div key={year} className="[&:not(:last-child)]:mb-6">
          <button
            onClick={() => toggleYear(year)}
            className="w-full flex items-center justify-between text-2xl font-semibold leading-tight text-blue-600 dark:text-blue-400 mb-4 bg-transparent border-none cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <span>{year}</span>
            <IoChevronDown
              className={`transform transition-transform duration-200 ${expandedYears.has(year) ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${expandedYears.has(year) ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <ul className="list-none p-0">
              {metas.map(({ id, title }) => (
                <li key={id} className="flex items-center justify-between py-2 group">
                  <a
                    href={`#${id}`}
                    onClick={(e) => handlePostNavigation(e, id)}
                    className="flex-grow text-gray-900 dark:text-gray-100 text-lg font-medium leading-normal no-underline transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer py-1 pl-3 -ml-3 border-l-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400"
                  >
                    {title}
                  </a>
                  <a
                    href={`/blog/${id}`}
                    className="ml-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title={`Read full post: ${title}`}
                  >
                    →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
