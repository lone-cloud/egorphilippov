import { MetadataRoute } from 'next';
import blogPosts from '@/components/Posts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://egor.philippov.ca';
  const blogPostEntries: MetadataRoute.Sitemap = [];

  blogPosts.forEach(({ metas }) => {
    metas.forEach(({ id, date }) => {
      blogPostEntries.push({
        url: `${baseUrl}/blog/${id}`,
        lastModified: new Date(date),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPostEntries,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
