import { useState, useMemo, useCallback, useRef, useEffect, MouseEvent } from 'react';

import blogPosts from '@/components/Posts';

const POSTS_PER_PAGE = 5;

export function useBlogPosts() {
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const allPosts = useMemo(
    () =>
      blogPosts.flatMap(({ year, posts }) =>
        posts.map((Post, i) => ({ Post, key: `${year}-post-${i}`, year })),
      ),
    [],
  );
  const postIdToIndex = useMemo(() => {
    const map = new Map<string, number>();
    let globalIndex = 0;

    blogPosts.forEach(({ metas, posts }) => {
      posts.forEach((_, postIndex) => {
        const meta = metas[postIndex];
        if (meta) {
          map.set(meta.id, globalIndex);
        }
        globalIndex++;
      });
    });

    return map;
  }, []);

  const visiblePosts = allPosts.slice(0, visiblePostsCount);
  const hasMorePosts = visiblePostsCount < allPosts.length;

  const loadMorePosts = useCallback(async () => {
    if (isLoading || !hasMorePosts) return;

    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 300));
    setVisiblePostsCount((prev) => Math.min(prev + POSTS_PER_PAGE, allPosts.length));
    setIsLoading(false);
  }, [isLoading, hasMorePosts, allPosts.length]);

  const handlePostNavigation = useCallback(
    (e: MouseEvent, postId: string) => {
      const postIndex = postIdToIndex.get(postId);

      if (postIndex !== undefined && postIndex >= visiblePostsCount) {
        e.preventDefault();
        const requiredCount = Math.ceil((postIndex + 1) / POSTS_PER_PAGE) * POSTS_PER_PAGE;
        setVisiblePostsCount(Math.min(requiredCount, allPosts.length));

        window.setTimeout(() => {
          const element = document.getElementById(postId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    },
    [postIdToIndex, visiblePostsCount, allPosts.length],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMorePosts && !isLoading) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 },
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMorePosts, isLoading, loadMorePosts]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (hash) {
      const postIndex = postIdToIndex.get(hash);
      if (postIndex !== undefined && postIndex >= visiblePostsCount) {
        const requiredCount = Math.ceil((postIndex + 1) / POSTS_PER_PAGE) * POSTS_PER_PAGE;
        setVisiblePostsCount(Math.min(requiredCount, allPosts.length));
      }
    }
  }, [postIdToIndex, visiblePostsCount, allPosts.length]);

  return {
    visiblePosts,
    hasMorePosts,
    isLoading,
    observerRef,
    handlePostNavigation,
  };
}
