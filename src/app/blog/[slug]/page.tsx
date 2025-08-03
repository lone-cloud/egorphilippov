import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import blogPosts from '@/components/Posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs: string[] = [];

  blogPosts.forEach(({ metas }) => {
    metas.forEach(({ id }) => {
      slugs.push(id);
    });
  });

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  let postMeta = null;
  for (const { metas } of blogPosts) {
    postMeta = metas.find((meta) => meta.id === slug);
    if (postMeta) break;
  }

  if (!postMeta) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${postMeta.title} | Egor Philippov`,
    description: `Read "${postMeta.title}" by Egor Philippov, published on ${postMeta.date}.`,
    openGraph: {
      title: postMeta.title,
      description: `Read "${postMeta.title}" by Egor Philippov`,
      type: 'article',
      publishedTime: postMeta.date,
      authors: ['Egor Philippov'],
    },
    twitter: {
      card: 'summary_large_image',
      title: postMeta.title,
      description: `Read "${postMeta.title}" by Egor Philippov`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let PostComponent;

  for (const { posts, metas } of blogPosts) {
    const metaIndex = metas.findIndex((meta) => meta.id === slug);

    if (metaIndex !== -1) {
      PostComponent = posts[metaIndex];
      break;
    }
  }

  if (!PostComponent) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PostComponent />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}
