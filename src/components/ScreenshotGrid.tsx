import Image from 'next/image';

interface ScreenshotGridProps {
  screenshots: Array<{
    src: string;
    alt: string;
  }>;
}

export const ScreenshotGrid = ({ screenshots }: ScreenshotGridProps) => (
  <div className="grid md:grid-cols-3 gap-4">
    {screenshots.map((screenshot, index) => (
      <div key={index} className="group">
        <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 aspect-[9/16] transition-transform duration-200 group-hover:scale-105">
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          />
        </div>
      </div>
    ))}
  </div>
);
