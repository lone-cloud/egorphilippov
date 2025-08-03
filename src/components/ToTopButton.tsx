import { useEffect, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';

export function ToTopButton() {
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 300;

      if (shouldShow && !isArrowVisible) {
        setIsArrowVisible(true);
        setIsAnimatingOut(false);
      } else if (!shouldShow && isArrowVisible) {
        setIsAnimatingOut(true);

        window.setTimeout(() => {
          setIsArrowVisible(false);
          setIsAnimatingOut(false);
        }, 200);
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [isArrowVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isArrowVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-blue-600 dark:bg-blue-600 text-white border-none rounded-full p-3 cursor-pointer shadow-md transition-all duration-200 hover:bg-gray-900 dark:hover:bg-gray-700 hover:scale-110 active:scale-90 sm:bottom-6 sm:right-6 ${
            isAnimatingOut ? 'animate-scale-out' : 'animate-scale-in opacity-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <IoArrowUp size={20} aria-label="Scroll to top" />
          </div>
        </button>
      )}
    </>
  );
}
