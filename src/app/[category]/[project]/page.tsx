import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getProject } from "../../data/portfolio";

export function generateStaticParams() {
  const params: { category: string; project: string }[] = [];
  for (const cat of categories) {
    for (const proj of cat.projects) {
      params.push({ category: cat.slug, project: proj.slug });
    }
  }
  return params;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; project: string }>;
}) {
  const { category: catSlug, project: projSlug } = await params;
  const result = getProject(catSlug, projSlug);
  if (!result) notFound();

  const { category, project } = result;

  return (
    <main>
      <section className="max-w-6xl mx-auto px-10 pt-28 pb-28">
        <Link
          href={`/${category.slug}`}
          className="font-sans text-[12px] font-light tracking-[0.15em] uppercase text-[#999] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          {category.name}
        </Link>
        <h2 className="font-serif text-4xl font-light tracking-wide mt-4 mb-20">
          {project.name}
        </h2>

        {/* Subprojects (e.g., Hijas y Raíces) */}
        {project.subprojects && project.subprojects.length > 0 && (
          <div className="space-y-20">
            {project.subprojects.map((sub) => (
              <div key={sub.slug}>
                <h3 className="font-sans text-[13px] font-medium tracking-[0.15em] uppercase mb-10">
                  {sub.name}
                </h3>
                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                  {sub.images.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={`${sub.name} ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Images */}
        {project.images.length > 0 && (
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {project.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${project.name} ${i + 1}`}
                width={800}
                height={600}
                className="w-full"
              />
            ))}
          </div>
        )}

        {/* Videos */}
        {project.videos && project.videos.length > 0 && (
          <div className={project.images.length > 0 ? "mt-16 space-y-10" : "space-y-10"}>
            {project.videos.map((src, i) => (
              <video
                key={i}
                className="w-full"
                controls
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
