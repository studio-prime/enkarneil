import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 font-serif text-8xl font-light tracking-wide text-[#1a1a1a] sm:text-9xl">
        404
      </h1>
      <p className="mb-8 font-sans text-base font-light text-[#999]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="border border-[#1a1a1a] px-10 py-3 font-sans text-[12px] font-light uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
