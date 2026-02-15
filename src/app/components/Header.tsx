import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-10 py-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Enkarneil"
            width={36}
            height={44}
            priority
          />
        </Link>

        <nav className="flex items-center gap-10">
          <Link
            href="/about"
            className="font-sans text-[13px] font-light tracking-[0.15em] uppercase text-[#1a1a1a] hover:opacity-50 transition-opacity duration-300"
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="font-sans text-[13px] font-light tracking-[0.15em] uppercase text-[#1a1a1a] hover:opacity-50 transition-opacity duration-300"
          >
            Testimonials
          </Link>
          <a
            href="https://www.instagram.com/enkarneil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-opacity duration-300"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </nav>
      </div>
      <div className="w-full h-px bg-[#e8e8e8]" />
    </header>
  );
}
