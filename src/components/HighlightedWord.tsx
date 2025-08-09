export const HighlightedWord = ({ children }: { children: React.ReactNode }) => (
  <span className="text-blue-700 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md border border-blue-200 dark:border-blue-700/50 transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-800/30 hover:border-blue-300 dark:hover:border-blue-600">
    {children}
  </span>
);
