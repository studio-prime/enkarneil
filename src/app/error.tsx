"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 font-serif text-6xl font-light tracking-wide text-[#1a1a1a]">
        500
      </h1>
      <h2 className="mb-2 font-sans text-lg font-light text-[#3a3a3a]">
        Something went wrong
      </h2>
      <p className="mb-8 max-w-md font-sans text-sm font-light text-[#999]">
        An unexpected error occurred. We&apos;re working to fix it.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="border border-[#1a1a1a] px-10 py-3 font-sans text-[12px] font-light uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
        >
          Retry
        </button>
        <a
          href="/"
          className="border border-[#e0e0e0] px-10 py-3 font-sans text-[12px] font-light uppercase tracking-[0.2em] text-[#999] transition-all duration-300 hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
        >
          Home
        </a>
      </div>
    </div>
  );
}
