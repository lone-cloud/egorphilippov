import { ReactNode } from 'react';

interface ComponentProps {
  children: ReactNode;
}

interface EntryProps extends ComponentProps {
  id?: string;
}

interface FigureProps extends ComponentProps {
  caption?: string;
}

export const Italic = ({ children }: ComponentProps) => <span className="italic">{children}</span>;

export const Spacer = () => <div className="h-4" />;

export const EntryBody = ({ children }: ComponentProps) => (
  <div className="pt-20 -mt-20 blog-content max-w-none">{children}</div>
);

export const EntryTitle = ({ children }: ComponentProps) => (
  <h2 className="text-blue-600 dark:text-blue-400 text-3xl font-bold leading-tight transition-colors duration-200">
    {children}
  </h2>
);

export const SubTitle = ({ children }: ComponentProps) => (
  <h3 className="mt-1 text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
    {children}
  </h3>
);

export const EntryDate = ({ children }: ComponentProps) => (
  <p className="mt-4 mb-2 text-sm text-gray-500 dark:text-gray-400">{children}</p>
);

export const Entry = ({ children, id }: EntryProps) => (
  <div
    id={id}
    className="scroll-mt-20 p-8 my-8 rounded-lg bg-white dark:bg-gray-800 shadow-sm transition-shadow duration-200 hover:shadow-md border border-gray-200 dark:border-gray-700"
  >
    {children}
  </div>
);

export const Figure = ({ children, caption }: FigureProps) => (
  <figure className="my-8 flex flex-col items-center">
    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl shadow-lg border border-amber-100 dark:border-amber-800">
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
        {children}
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-gray-700 dark:text-gray-300 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </div>
  </figure>
);
