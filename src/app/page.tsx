import Image from "next/image";
import Link from "next/link";

const portfolio = [
  { src: "/home-music.webp", label: "Music", href: "/music" },
  { src: "/home-portrait.webp", label: "Portrait", href: "/portrait" },
  { src: "/home-jotdown.webp", label: "Jot Down", href: "/jot-down" },
  { src: "/home-personal.avif", label: "Personal", href: "/personal" },
  { src: "/home-film.avif", label: "Film", href: "/film" },
  { src: "/home-video.avif", label: "Video", href: "/video" },
];

export default function Home() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
          {portfolio.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <p className="font-sans text-[12px] font-light tracking-[0.2em] uppercase text-center mt-5">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
