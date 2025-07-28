'use client';

import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

import ToTopButton from '@/components/ToTopButton';
import blogPosts from '@/components/Posts';

export default function BlogPage() {
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
    <>
      <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
        {blogPosts.map(({ year, metas }) => (
          <div key={year} className="[&:not(:last-child)]:mb-8">
            <button
              onClick={() => toggleYear(year)}
              className="w-full flex items-center justify-between text-2xl font-semibold leading-tight text-blue-600 mb-4 bg-transparent border-none cursor-pointer hover:text-blue-700 transition-colors duration-200"
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
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="inline-block text-gray-900 text-lg font-medium leading-normal no-underline py-2 transition-all duration-200 border-b-2 border-transparent hover:text-blue-600 hover:border-current"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="[&>div]:mb-8">
        {blogPosts.map(({ year, posts }) =>
          posts.map((Post, i) => <Post key={`${year}-post-${i}`} />),
        )}
      </div>

      <ToTopButton />
    </>
  );
}
