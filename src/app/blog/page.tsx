'use client';

import ToTopButton from '@/components/ToTopButton';
import blogPosts from '@/components/Posts';
import PageTitle from '@/components/PageTitle';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 relative sm:p-4">
      <div className="animate-fade-in-down">
        <PageTitle title="Latest posts" />
      </div>

      <div className="bg-white rounded-xl p-8 mb-12 shadow-sm animate-fade-in-down-delay-1 opacity-0">
        {blogPosts.map(({ year, metas }) => (
          <div key={year} className="[&:not(:last-child)]:mb-8">
            <h2 className="text-2xl font-semibold leading-tight text-blue-600 mb-4">{year}</h2>
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
        ))}
      </div>

      <div className="[&>div]:mb-12 animate-fade-in-down-delay-2 opacity-0">
        {blogPosts.map(({ year, posts }) =>
          posts.map((Post, i) => <Post key={`${year}-post-${i}`} />),
        )}
      </div>

      <ToTopButton />
    </div>
  );
}
