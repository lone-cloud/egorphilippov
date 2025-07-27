'use client';

export default function Resume() {
  return (
    <div className="bg-white rounded-xl p-8 mb-12 shadow-sm">
      <object
        data="/EgorPhilippovResume.pdf"
        width="100%"
        type="application/pdf"
        className="lg:h-[80vh] h-[50vh] animate-fade-in-down"
      >
        <iframe
          title="Resumé PDF"
          width="100%"
          className="lg:h-[80vh] h-[50vh]"
          src="https://docs.google.com/viewer?url=https://egor.philippov.ca/EgorPhilippovResume.pdf&embedded=true"
        >
          <p className="text-center py-8">
            Unable to display PDF.
            <a
              href="/EgorPhilippovResume.pdf"
              className="text-blue-600 hover:text-blue-700 underline ml-1"
              download
            >
              Download Resume
            </a>
          </p>
        </iframe>
      </object>
    </div>
  );
}
