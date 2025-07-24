'use client';

export default function Resume() {
  return (
    <object
      data="/EgorPhilippovResume.pdf"
      width="100%"
      type="application/pdf"
      className="lg:h-[80vh] h-[50vh] animate-fade-in-down"
    >
      <iframe
        title="Resumé PDF"
        width="100%"
        src="https://docs.google.com/viewer?url=https://egor.philippov.ca/EgorPhilippovResume.pdf&embedded=true"
      />
    </object>
  );
}
