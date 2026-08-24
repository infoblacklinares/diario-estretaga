/**
 * DIARIO EL ESTRATEGA — FUENTE DE DATOS
 * =============================================================
 * Todo el contenido del diario vive aquí. El diseño (components/) no sabe
 * nada de noticias concretas: sólo consume estos tipos.
 *
 * SOBRE EL CONTENIDO
 * · Las notas marcadas como `real: true` son titulares publicados por
 *   elestratega.cl, transcritos para que la maqueta se vea con contenido
 *   propio del diario.
 * · Las demás son de relleno, con titulares genéricos, para completar la
 *   portada mientras no haya más material.
 * · Las fechas son de referencia salvo donde se indique. Las fotografías
 *   son de muestra: las reales están en el WordPress del diario.
 *
 * Al conectar un CMS, sólo hay que reemplazar las funciones del final por
 * llamadas al API. Los componentes no cambian.
 */

import { siteConfig } from "./site-config";

export type CategorySlug =
  | "actualidad"
  | "arqueologia"
  | "ciencias-y-tecnologia"
  | "comunal"
  | "cultura-y-espectaculos"
  | "deportes"
  | "economia"
  | "educacion"
  | "emprendimiento"
  | "nacional"
  | "regional";

export type Category = {
  slug: CategorySlug;
  name: string;
  /** Bajada corta que se muestra en la portada de la sección. */
  description: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  image: string;
  imageAlt: string;
  author: string;
  /** Fecha de publicación en formato ISO (AAAA-MM-DD). */
  publishedAt: string;
  readingMinutes: number;
  /** Titular efectivamente publicado por el diario. */
  real?: boolean;
  /** Nota principal de portada. Debe haber exactamente una. */
  featured?: boolean;
  /** Aparece en la franja "Historia Flash". */
  flash?: boolean;
  /** Aparece en el bloque "Tendencias", numerado. */
  trending?: boolean;
  body: string[];
};

/**
 * Secciones tomadas del menú de elestratega.cl. El listado del sitio
 * continuaba más abajo de lo que alcanzaba la captura, así que faltan
 * algunas: agregarlas aquí y aparecen solas en el menú y la cabecera.
 */
export const categories: Category[] = [
  { slug: "actualidad", name: "Actualidad", description: "Los temas que están marcando la conversación." },
  { slug: "regional", name: "Regional", description: "La Región del Maule, comuna por comuna." },
  { slug: "comunal", name: "Comunal", description: "Lo que pasa a la vuelta de la esquina." },
  { slug: "nacional", name: "Nacional", description: "Lo que pasa en Chile, contado sin rodeos." },
  { slug: "economia", name: "Economía", description: "Mercados, empleo y bolsillo." },
  { slug: "emprendimiento", name: "Emprendimiento", description: "Quienes están levantando algo propio." },
  { slug: "educacion", name: "Educación", description: "Colegios, liceos y educación superior." },
  { slug: "deportes", name: "Deportes", description: "El deporte regional y nacional." },
  { slug: "cultura-y-espectaculos", name: "Cultura y espectáculos", description: "Panoramas, escena local y agenda." },
  { slug: "ciencias-y-tecnologia", name: "Ciencias y tecnología", description: "Investigación, innovación y ciencia." },
  { slug: "arqueologia", name: "Arqueología", description: "Patrimonio y hallazgos del territorio." }
];

export const topics = [
  "Maule",
  "Linares",
  "Seguridad",
  "Emprendimiento",
  "Educación",
  "Agro",
  "Turismo"
];

/** Helper para construir URLs de imagen optimizadas. */
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Fotografías de muestra (Unsplash). Se reemplazan por las del diario
// apuntando a /public o al CDN del CMS.
const PHOTO = {
  ciudad: img("photo-1519681393784-d120267933ba"),
  calle: img("photo-1494522358652-f30e61a60313"),
  economia: img("photo-1526304640581-d334cdbbf45e"),
  institucional: img("photo-1529107386315-e1a2ed48a620"),
  deportes: img("photo-1461896836934-ffe607ba8211")
};

const CUERPO_DEMO = [
  "Este es un texto de demostración que ocupa el lugar del cuerpo de la nota. Sirve para evaluar cómo se lee el diario en un teléfono: el largo de línea, el interlineado y el contraste del texto sobre el fondo.",
  "En la versión final, este contenido viene directamente desde el panel de administración. El equipo periodístico escribe la nota, sube las fotografías y elige la sección; el sitio se actualiza solo, sin tocar código.",
  "El diseño está pensado para lectura móvil: titulares en una tipografía de peso, y un cuerpo de alta legibilidad. El ancho de columna se mantiene cómodo incluso en pantallas grandes.",
  "Cada nota admite fotografías, destacados, enlaces relacionados y espacios publicitarios entre párrafos, que es donde el diario monetiza sin romper la experiencia de lectura."
];

export const articles: Article[] = [
  // ---------- Titulares publicados por el diario ----------
  {
    slug: "carabineros-edad-ingreso-planteles",
    title:
      "Carabineros modifica edad de ingreso a sus planteles educacionales: ahora será a partir de los 17 años",
    excerpt:
      "La institución ajusta los requisitos de postulación a sus escuelas de formación.",
    category: "nacional",
    image: PHOTO.institucional,
    imageAlt: "Escuela de formación de Carabineros de Chile",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-22",
    readingMinutes: 3,
    real: true,
    featured: true,
    flash: true,
    body: CUERPO_DEMO
  },
  {
    slug: "crdp-maule-convenio-camara-comercio-talca",
    title:
      "Para visibilizar emprendimientos: CRDP Maule firma convenio con Cámara de Comercio Talca",
    excerpt:
      "El acuerdo busca dar mayor visibilidad a los emprendedores de la región.",
    category: "emprendimiento",
    image: PHOTO.institucional,
    imageAlt: "Firma de convenio entre autoridades regionales",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-12", // fecha publicada en elestratega.cl
    readingMinutes: 3,
    real: true,
    flash: true,
    trending: true,
    body: CUERPO_DEMO
  },
  {
    slug: "subcomisaria-maule-norte",
    title:
      "Gobierno del Maule inicia construcción de la Subcomisaría Maule Norte con histórica inversión en seguridad",
    excerpt:
      "La obra es presentada como la mayor inversión en seguridad para la zona.",
    category: "actualidad",
    image: PHOTO.institucional,
    imageAlt: "Autoridades regionales en ceremonia oficial",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-20",
    readingMinutes: 4,
    real: true,
    trending: true,
    body: CUERPO_DEMO
  },
  {
    slug: "rauco-mecanicos-turismologos-instalaciones",
    title:
      "Futuros mecánicos y turismólogos de Rauco ya tienen nuevas instalaciones",
    excerpt:
      "Los estudiantes de la comuna estrenan dependencias para sus especialidades.",
    category: "regional",
    image: PHOTO.calle,
    imageAlt: "Estudiantes y autoridades en las nuevas instalaciones",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-19",
    readingMinutes: 3,
    real: true,
    trending: true,
    body: CUERPO_DEMO
  },

  // ---------- Relleno de maqueta ----------
  {
    slug: "jornada-region-del-maule",
    title: "Las noticias que están marcando la jornada en la Región del Maule",
    excerpt:
      "Información local, economía, política y actualidad con una mirada directa y cercana.",
    category: "actualidad",
    image: PHOTO.ciudad,
    imageAlt: "Vista de la ciudad al atardecer",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-21",
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "mercados-y-economia-nacional",
    title: "Mercados y economía nacional: las claves que debes conocer hoy",
    excerpt: "Cómo se movieron los indicadores y qué significan para el bolsillo de las familias.",
    category: "economia",
    image: PHOTO.economia,
    imageAlt: "Gráficos financieros en una pantalla",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-21",
    readingMinutes: 5,
    body: CUERPO_DEMO
  },
  {
    slug: "jornada-deportiva-regional",
    title: "Todo lo que dejó la jornada deportiva regional",
    excerpt: "Resultados, rendimientos y lo que viene para los clubes de la zona.",
    category: "deportes",
    image: PHOTO.deportes,
    imageAlt: "Estadio de fútbol",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-20",
    readingMinutes: 3,
    body: CUERPO_DEMO
  },
  {
    slug: "obras-y-servicios-comunales",
    title: "Obras y servicios: el estado de los proyectos que afectan a los vecinos",
    excerpt: "Plazos, avances y los puntos que generan más consultas en la comuna.",
    category: "comunal",
    image: PHOTO.calle,
    imageAlt: "Trabajos en la vía pública",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-18",
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "matricula-y-educacion-superior",
    title: "Matrícula y educación superior: lo que deben saber las familias de la región",
    excerpt: "Fechas, requisitos y los cambios que afectan a los postulantes.",
    category: "educacion",
    image: PHOTO.institucional,
    imageAlt: "Sala de clases",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-17",
    readingMinutes: 5,
    body: CUERPO_DEMO
  },
  {
    slug: "agenda-cultural-del-maule",
    title: "La agenda cultural del Maule: panoramas para los próximos días",
    excerpt: "Escena local, ferias y espectáculos en la región.",
    category: "cultura-y-espectaculos",
    image: PHOTO.ciudad,
    imageAlt: "Público en un espectáculo al aire libre",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-16",
    readingMinutes: 3,
    body: CUERPO_DEMO
  },
  {
    slug: "innovacion-y-tecnologia-regional",
    title: "Innovación y tecnología: los proyectos que se están desarrollando en la zona",
    excerpt: "Investigación aplicada y nuevas iniciativas del ecosistema regional.",
    category: "ciencias-y-tecnologia",
    image: PHOTO.economia,
    imageAlt: "Laboratorio de investigación",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-15",
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "patrimonio-y-hallazgos-del-valle",
    title: "Patrimonio y hallazgos: lo que el valle sigue revelando",
    excerpt: "El trabajo de investigación sobre el patrimonio del territorio.",
    category: "arqueologia",
    image: PHOTO.calle,
    imageAlt: "Sitio de excavación",
    author: siteConfig.newsroom,
    publishedAt: "2026-08-14",
    readingMinutes: 6,
    body: CUERPO_DEMO
  }
];

/* =============================================================
   CONSULTAS — reemplazar por llamadas al CMS cuando corresponda
   ============================================================= */

const porFecha = (a: Article, b: Article) => b.publishedAt.localeCompare(a.publishedAt);

export function getFeatured(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getLatest(limit?: number): Article[] {
  const rest = articles.filter((a) => !a.featured).sort(porFecha);
  return typeof limit === "number" ? rest.slice(0, limit) : rest;
}

export function getByCategory(slug: CategorySlug): Article[] {
  return articles.filter((a) => a.category === slug).sort(porFecha);
}

export function getBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Notas de la franja "Historia Flash". */
export function getFlash(): Article[] {
  return articles.filter((a) => a.flash).sort(porFecha);
}

/** Notas del bloque "Tendencias", en el orden en que se muestran numeradas. */
export function getTrending(limit = 4): Article[] {
  return articles.filter((a) => a.trending).sort(porFecha).slice(0, limit);
}

export function getRelated(article: Article, limit = 3): Article[] {
  const misma = articles.filter((a) => a.category === article.category && a.slug !== article.slug);
  const resto = articles.filter((a) => a.category !== article.category && a.slug !== article.slug);
  return [...misma, ...resto].slice(0, limit);
}

export function getCategory(slug: CategorySlug): Category {
  return categories.find((c) => c.slug === slug) ?? categories[0];
}

export function categoryName(slug: CategorySlug): string {
  return getCategory(slug).name;
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      categoryName(a.category).toLowerCase().includes(q)
  );
}

/**
 * Fechas absolutas, como en elestratega.cl. Se evita el "hace 2 horas"
 * a propósito: las páginas se generan estáticas en el build y un cálculo
 * relativo daría un valor distinto en el servidor y en el navegador.
 */
const CORTO = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "short", year: "numeric" });
const LARGO = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" });

/** "22 ago 2026" — para tarjetas y listados. */
export function formatDateShort(iso: string): string {
  return CORTO.format(new Date(`${iso}T12:00:00`)).replace(".", "");
}

/** "22 de agosto de 2026" — para la cabecera de la nota. */
export function formatDateLong(iso: string): string {
  return LARGO.format(new Date(`${iso}T12:00:00`));
}
