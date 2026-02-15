import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "../data/portfolio";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  // Film has no projects, show images directly
  if (category.images && category.images.length > 0 && category.projects.length === 0) {
    return (
      <main>
        <section className="max-w-6xl mx-auto px-10 pt-28 pb-28">
          <h2 className="font-serif text-4xl font-light tracking-wide mb-20">
            {category.name}
          </h2>
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {category.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${category.name} ${i + 1}`}
                width={800}
                height={600}
                className="w-full"
              />
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Show project grid
  return (
    <main>
      <section className="max-w-6xl mx-auto px-10 pt-28 pb-28">
        <h2 className="font-serif text-4xl font-light tracking-wide mb-20">
          {category.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
          {category.projects.map((project) => {
            const thumb = project.images[0] || project.subprojects?.[0]?.images[0];
            return (
              <Link
                key={project.slug}
                href={`/${category.slug}/${project.slug}`}
              >
                <div className="aspect-square overflow-hidden">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={project.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center">
                      <span className="font-sans text-sm text-[#999]">Video</span>
                    </div>
                  )}
                </div>
                <p className="font-sans text-[12px] font-light tracking-[0.2em] uppercase text-center mt-5">
                  {project.name}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
