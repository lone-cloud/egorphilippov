'use client';

export default function Resume() {
  return (
    <object
      data="/EgorPhilippovResume.pdf"
      width="100%"
      type="application/pdf"
      className="lg:h-[80vh] h-[60vh] min-h-20 animate-fade-in-down"
    >
      <iframe
        title="Resumé PDF"
        width="100%"
        src="https://docs.google.com/viewer?url=https://egor.philippov.ca/EgorPhilippovResume.pdf&embedded=true"
      >
        <p className="text-center py-8 text-gray-900 dark:text-gray-100">
          Unable to display PDF.
          <a
            href="/EgorPhilippovResume.pdf"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline ml-1"
            download
          >
            Download Resume
          </a>
        </p>
      </iframe>
    </object>
  );
}
