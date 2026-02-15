export interface Project {
  slug: string;
  name: string;
  images: string[];
  videos?: string[];
  subprojects?: Project[];
}

export interface Category {
  slug: string;
  name: string;
  projects: Project[];
  images?: string[];
}

function imgs(base: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `${base}/${i + 1}.webp`);
}

function vids(base: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `https://pub-96b42e40569a4dd6b7d740252b9176d8.r2.dev${base}/${i + 1}.mp4`);
}

export const categories: Category[] = [
  {
    slug: "music",
    name: "Music",
    projects: [
      { slug: "inc", name: "INC", images: imgs("/portfolio/music/inc", 14) },
      { slug: "la-tribu-project", name: "La Tribu Project", images: imgs("/portfolio/music/la-tribu-project", 11) },
      { slug: "stereo-alicante", name: "Stereo Alicante", images: imgs("/portfolio/music/stereo-alicante", 19) },
    ],
  },
  {
    slug: "portrait",
    name: "Portrait",
    projects: [
      { slug: "gabri-rodenas", name: "Gabri Ródenas", images: imgs("/portfolio/portrait/gabri-rodenas", 5) },
      { slug: "carlos-tarque", name: "Carlos Tarque", images: imgs("/portfolio/portrait/carlos-tarque", 3) },
      { slug: "roble", name: "Roble", images: imgs("/portfolio/portrait/roble", 7) },
      { slug: "carlos", name: "Carlos", images: imgs("/portfolio/portrait/carlos", 9) },
      { slug: "alberto", name: "Alberto", images: imgs("/portfolio/portrait/alberto", 2) },
      { slug: "ester", name: "Ester", images: imgs("/portfolio/portrait/ester", 4) },
    ],
  },
  {
    slug: "jot-down",
    name: "Jot Down",
    projects: [
      { slug: "patricia-ramirez-loeffler", name: "Patricia Ramírez Loeffler", images: imgs("/portfolio/jot-down/patricia-ramirez-loeffler", 4) },
      { slug: "xavier-aldekoa", name: "Xavier Aldekoa", images: imgs("/portfolio/jot-down/xavier-aldekoa", 4) },
      { slug: "juli-pereto-francis-mojica-lluis-montoliu", name: "Juli Peretó, Francis Mojica y Lluis Montoliu", images: imgs("/portfolio/jot-down/juli-pereto-francis-mojica-lluis-montoliu", 10) },
      { slug: "rosa-porcel", name: "Rosa Porcel", images: imgs("/portfolio/jot-down/rosa-porcel", 8) },
      { slug: "enrique-f-borja", name: "Enrique F. Borja", images: imgs("/portfolio/jot-down/enrique-f-borja", 5) },
      { slug: "ines-paris", name: "Inés París", images: imgs("/portfolio/jot-down/ines-paris", 6) },
      { slug: "pilar-pedraza", name: "Pilar Pedraza", images: imgs("/portfolio/jot-down/pilar-pedraza", 8) },
      { slug: "javier-jimenez-marco", name: "Javier Jiménez Marco", images: imgs("/portfolio/jot-down/javier-jimenez-marco", 4) },
      { slug: "juan-jose-martinez-jambrina", name: "Juan José Martínez Jambrina", images: imgs("/portfolio/jot-down/juan-jose-martinez-jambrina", 4) },
      { slug: "laura-moran", name: "Laura Morán", images: imgs("/portfolio/jot-down/laura-moran", 6) },
    ],
  },
  {
    slug: "personal",
    name: "Personal",
    projects: [
      {
        slug: "quarantine",
        name: "Quarantine",
        images: imgs("/portfolio/personal/quarantine", 15),
      },
      {
        slug: "el-jabon-hace-llorar-a-los-astronomos",
        name: "El Jabón Hace Llorar a los Astrónomos",
        images: imgs("/portfolio/personal/el-jabon-hace-llorar-a-los-astronomos", 6),
        videos: vids("/el-jabon-hace-llorar-a-los-astronomos", 2),
      },
      {
        slug: "hijas-y-raices",
        name: "Hijas y Raíces",
        images: [],
        subprojects: [
          { slug: "text-by-maite-gallardo-alba", name: "Text by Maite Gallardo Alba", images: imgs("/portfolio/personal/hijas-y-raices/text-by-maite-gallardo-alba", 2) },
          { slug: "text-by-miriam-embara", name: "Text by Miriam Embara", images: imgs("/portfolio/personal/hijas-y-raices/text-by-miriam-embara", 2) },
        ],
      },
    ],
  },
  {
    slug: "film",
    name: "Film",
    projects: [],
    images: imgs("/portfolio/film", 2),
  },
  {
    slug: "video",
    name: "Video",
    projects: [
      { slug: "roble", name: "Roble", images: [], videos: vids("/video/roble", 3) },
      { slug: "nunatak", name: "Nunatak", images: ["/portfolio/video/nunatak/cover.webp"], videos: ["https://pub-96b42e40569a4dd6b7d740252b9176d8.r2.dev/video/nunatak/1.mp4"] },
      { slug: "landscape-that-are-made-up", name: "Landscape That Are Made Up", images: [], videos: vids("/video/landscape-that-are-made-up", 3) },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProject(categorySlug: string, projectSlug: string): { category: Category; project: Project } | undefined {
  const category = getCategory(categorySlug);
  if (!category) return undefined;
  const project = category.projects.find((p) => p.slug === projectSlug);
  if (!project) return undefined;
  return { category, project };
}
