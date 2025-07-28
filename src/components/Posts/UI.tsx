interface ComponentProps {
  children: React.ReactNode;
}

interface BlogEntryProps extends ComponentProps {
  id?: string;
}

export const Italic = ({ children }: ComponentProps) => <span className="italic">{children}</span>;

export const Spacer = () => <div className="h-4" />;

export const EntryBody = ({ children }: ComponentProps) => (
  <div className="pt-20 -mt-20 blog-content max-w-none">{children}</div>
);

export const EntryTitle = ({ children }: ComponentProps) => (
  <h2 className="text-blue-600 text-3xl font-bold leading-tight transition-colors duration-200">
    {children}
  </h2>
);

export const SubTitle = ({ children }: ComponentProps) => (
  <h3 className="mt-1 text-2xl font-semibold leading-tight text-gray-900">{children}</h3>
);

export const EntryDate = ({ children }: ComponentProps) => (
  <p className="mt-4 mb-2 text-sm text-gray-500">{children}</p>
);

export const BlogEntry = ({ children, id }: BlogEntryProps) => (
  <div
    id={id}
    className="scroll-mt-20 p-8 my-8 rounded-lg bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
  >
    {children}
  </div>
);
