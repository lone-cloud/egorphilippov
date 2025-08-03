'use client';

import { ToTopButton } from '@/components/ToTopButton';
import { TableOfContents } from '@/components/Posts/TableOfContents';
import { useBlogPosts } from '@/hooks/useBlogPosts';

export default function BlogPage() {
  const { visiblePosts, hasMorePosts, isLoading, observerRef, handlePostNavigation } =
    useBlogPosts();

  return (
    <>
      <TableOfContents handlePostNavigation={handlePostNavigation} />

      <div className="[&>div]:mb-8 animate-fade-in-down">
        {visiblePosts.map(({ Post, key }) => (
          <Post key={key} />
        ))}
      </div>

      {hasMorePosts && (
        <div ref={observerRef} className="h-4 flex justify-center items-center">
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
              <span>Loading more posts...</span>
            </div>
          )}
        </div>
      )}

      <ToTopButton />
    </>
  );
}
