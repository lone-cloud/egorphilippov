export const HighlightedWord = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-600 dark:text-blue-400 relative whitespace-nowrap font-semibold hover:after:scale-x-100 after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 after:transition-transform after:duration-300">
    {children}
  </span>
);
