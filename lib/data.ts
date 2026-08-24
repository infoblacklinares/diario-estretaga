/**
 * EL ESTRATEGA — FUENTE DE DATOS
 * =============================================================
 * Todo el contenido del diario vive aquí. El diseño (components/)
 * no sabe nada de noticias concretas: sólo consume estos tipos.
 *
 * ⚠️  CONTENIDO DE DEMOSTRACIÓN. Los titulares y textos son genéricos, de
 *     muestra, para evaluar el diseño. No son noticias reales.
 *
 * Al conectar un CMS (Strapi / Sanity / WordPress headless), sólo hay que
 * reemplazar las funciones de abajo por llamadas al API. Los componentes
 * no cambian.
 */

export type CategorySlug =
  | "nacional"
  | "regional"
  | "actualidad"
  | "economia"
  | "politica"
  | "deportes"
  | "linares";

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
  /** Minutos transcurridos desde la publicación.
   *  En producción esto sale de `published_at` del CMS y se calcula con
   *  `formatRelative(Date.now() - published_at)`. Aquí es un número fijo
   *  para que la demo se vea igual en cualquier momento. */
  minutesAgo: number;
  readingMinutes: number;
  /** Nota principal de portada. Debe haber exactamente una. */
  featured?: boolean;
  /** Aparece en la franja de "Última hora". */
  breaking?: boolean;
  body: string[];
};

export const categories: Category[] = [
  { slug: "nacional", name: "Nacional", description: "Lo que pasa en Chile, contado sin rodeos." },
  { slug: "regional", name: "Regional", description: "La Región del Maule, comuna por comuna." },
  { slug: "actualidad", name: "Actualidad", description: "Los temas que están marcando la conversación." },
  { slug: "economia", name: "Economía", description: "Mercados, empleo y bolsillo." },
  { slug: "politica", name: "Política", description: "Poder, decisiones y sus consecuencias." },
  { slug: "deportes", name: "Deportes", description: "El deporte regional y nacional." },
  { slug: "linares", name: "Linares", description: "Nuestra casa. Lo que pasa a la vuelta de la esquina." }
];

export const topics = [
  "Noticias de Linares",
  "Maule",
  "Economía",
  "Seguridad",
  "Turismo",
  "Municipalidad",
  "Agro"
];

/** Helper para construir URLs de imagen optimizadas. */
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Fotografías de muestra (Unsplash). Se reemplazan por las fotos propias
// del diario apuntando a /public o al CDN del CMS.
const PHOTO = {
  ciudad: img("photo-1519681393784-d120267933ba"),
  calle: img("photo-1494522358652-f30e61a60313"),
  economia: img("photo-1526304640581-d334cdbbf45e"),
  politica: img("photo-1529107386315-e1a2ed48a620"),
  deportes: img("photo-1461896836934-ffe607ba8211")
};

const CUERPO_DEMO = [
  "Este es un texto de demostración que ocupa el lugar del cuerpo de la nota. Sirve para evaluar cómo se lee el diario en un teléfono: el largo de línea, el interlineado y el contraste del texto sobre el fondo.",
  "En la versión final, este contenido viene directamente desde el panel de administración. El equipo periodístico escribe la nota, sube las fotografías y elige la sección; el sitio se actualiza solo, sin tocar código.",
  "El diseño está pensado para lectura móvil: tipografía serif en los titulares para darle peso editorial, y una tipografía sans de alta legibilidad para el cuerpo. El ancho de columna se mantiene cómodo incluso en pantallas grandes.",
  "Cada nota admite fotografías, destacados, enlaces relacionados y espacios publicitarios entre párrafos, que es donde el diario monetiza sin romper la experiencia de lectura."
];

export const articles: Article[] = [
  {
    slug: "jornada-region-del-maule",
    title: "Las noticias que están marcando la jornada en la Región del Maule",
    excerpt:
      "Información local, economía, política y actualidad con una mirada directa y cercana.",
    category: "actualidad",
    image: PHOTO.ciudad,
    imageAlt: "Vista de la ciudad al atardecer",
    author: "Redacción El Estratega",
    minutesAgo: 18,
    readingMinutes: 4,
    featured: true,
    breaking: true,
    body: CUERPO_DEMO
  },
  {
    slug: "linares-y-el-maule-jornada",
    title: "Nuevas noticias marcan la jornada en Linares y el Maule",
    excerpt: "Un repaso por los hechos que movieron la agenda regional durante las últimas horas.",
    category: "regional",
    image: PHOTO.calle,
    imageAlt: "Calle céntrica con transeúntes",
    author: "Redacción El Estratega",
    minutesAgo: 32,
    readingMinutes: 3,
    breaking: true,
    body: CUERPO_DEMO
  },
  {
    slug: "mercados-y-economia-nacional",
    title: "Mercados y economía nacional: las claves que debes conocer hoy",
    excerpt: "Cómo se movieron los indicadores y qué significan para el bolsillo de las familias.",
    category: "economia",
    image: PHOTO.economia,
    imageAlt: "Gráficos financieros en una pantalla",
    author: "Redacción El Estratega",
    minutesAgo: 60,
    readingMinutes: 5,
    body: CUERPO_DEMO
  },
  {
    slug: "agenda-politica-de-la-semana",
    title: "Las decisiones que podrían marcar la agenda política esta semana",
    excerpt: "Los temas que se discuten y los actores que empujan cada posición.",
    category: "politica",
    image: PHOTO.politica,
    imageAlt: "Fachada de un edificio institucional",
    author: "Redacción El Estratega",
    minutesAgo: 120,
    readingMinutes: 6,
    body: CUERPO_DEMO
  },
  {
    slug: "jornada-deportiva-regional",
    title: "Todo lo que dejó la jornada deportiva regional",
    excerpt: "Resultados, rendimientos y lo que viene para los clubes de la zona.",
    category: "deportes",
    image: PHOTO.deportes,
    imageAlt: "Estadio de fútbol",
    author: "Redacción El Estratega",
    minutesAgo: 180,
    readingMinutes: 3,
    body: CUERPO_DEMO
  },
  {
    slug: "obras-y-servicios-en-linares",
    title: "Obras y servicios: el estado de los proyectos que afectan a los vecinos",
    excerpt: "Plazos, avances y los puntos que generan más consultas en la comuna.",
    category: "linares",
    image: PHOTO.calle,
    imageAlt: "Trabajos en la vía pública",
    author: "Redacción El Estratega",
    minutesAgo: 240,
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "empleo-y-comercio-local",
    title: "Empleo y comercio local: cómo se está moviendo la actividad en la zona",
    excerpt: "Una radiografía a los sectores que contratan y a los que están más apretados.",
    category: "economia",
    image: PHOTO.economia,
    imageAlt: "Local comercial abierto",
    author: "Redacción El Estratega",
    minutesAgo: 300,
    readingMinutes: 5,
    body: CUERPO_DEMO
  },
  {
    slug: "panorama-nacional-del-dia",
    title: "El panorama nacional del día, resumido en cinco puntos",
    excerpt: "Lo esencial de la jornada en Chile, para leer en menos de tres minutos.",
    category: "nacional",
    image: PHOTO.ciudad,
    imageAlt: "Panorámica urbana",
    author: "Redacción El Estratega",
    minutesAgo: 360,
    readingMinutes: 3,
    body: CUERPO_DEMO
  },
  {
    slug: "seguridad-y-convivencia",
    title: "Seguridad y convivencia: las cifras que están sobre la mesa",
    excerpt: "Qué dicen los datos y qué medidas se están evaluando en la región.",
    category: "regional",
    image: PHOTO.politica,
    imageAlt: "Patrulla en la vía pública",
    author: "Redacción El Estratega",
    minutesAgo: 420,
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "turismo-en-el-maule",
    title: "Turismo en el Maule: los destinos que están recibiendo más visitantes",
    excerpt: "Rutas, precios y la temporada que se viene para el sector.",
    category: "actualidad",
    image: PHOTO.ciudad,
    imageAlt: "Paisaje natural del valle",
    author: "Redacción El Estratega",
    minutesAgo: 480,
    readingMinutes: 4,
    body: CUERPO_DEMO
  },
  {
    slug: "concejo-municipal-linares",
    title: "Lo que se discutió en la última sesión del concejo municipal",
    excerpt: "Los acuerdos, las diferencias y los temas que quedaron pendientes.",
    category: "linares",
    image: PHOTO.politica,
    imageAlt: "Sala de sesiones",
    author: "Redacción El Estratega",
    minutesAgo: 540,
    readingMinutes: 6,
    body: CUERPO_DEMO
  },
  {
    slug: "clubes-regionales-temporada",
    title: "Los clubes regionales ya preparan lo que viene en la temporada",
    excerpt: "Refuerzos, calendario y las expectativas de los hinchas.",
    category: "deportes",
    image: PHOTO.deportes,
    imageAlt: "Entrenamiento en cancha",
    author: "Redacción El Estratega",
    minutesAgo: 600,
    readingMinutes: 3,
    body: CUERPO_DEMO
  },
  {
    slug: "congreso-y-tramitacion",
    title: "Tramitación en el Congreso: en qué está cada proyecto relevante",
    excerpt: "El estado real de las iniciativas que más impactan a las regiones.",
    category: "nacional",
    image: PHOTO.politica,
    imageAlt: "Edificio del Congreso",
    author: "Redacción El Estratega",
    minutesAgo: 720,
    readingMinutes: 7,
    body: CUERPO_DEMO
  },
  {
    slug: "agro-y-temporada-de-cosecha",
    title: "Agro y temporada de cosecha: el pulso de los productores del valle",
    excerpt: "Costos, mano de obra y precios que definen el año agrícola.",
    category: "regional",
    image: PHOTO.calle,
    imageAlt: "Campos de cultivo",
    author: "Redacción El Estratega",
    minutesAgo: 840,
    readingMinutes: 5,
    body: CUERPO_DEMO
  }
];

/* =============================================================
   CONSULTAS — reemplazar por llamadas al CMS cuando corresponda
   ============================================================= */

export function getFeatured(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getLatest(limit?: number): Article[] {
  const rest = articles.filter((a) => !a.featured).sort((a, b) => a.minutesAgo - b.minutesAgo);
  return typeof limit === "number" ? rest.slice(0, limit) : rest;
}

export function getByCategory(slug: CategorySlug): Article[] {
  return articles.filter((a) => a.category === slug).sort((a, b) => a.minutesAgo - b.minutesAgo);
}

export function getBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getBreaking(): Article[] {
  return articles.filter((a) => a.breaking);
}

export function getRelated(article: Article, limit = 3): Article[] {
  const sameCategory = articles.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  );
  const fill = articles.filter(
    (a) => a.category !== article.category && a.slug !== article.slug
  );
  return [...sameCategory, ...fill].slice(0, limit);
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

/** "Hace 18 min" · "Hace 2 horas" · "Hace 3 días" */
export function formatRelative(minutesAgo: number): string {
  if (minutesAgo < 1) return "Recién";
  if (minutesAgo < 60) return `Hace ${minutesAgo} min`;
  const hours = Math.round(minutesAgo / 60);
  if (hours < 24) return `Hace ${hours} ${hours === 1 ? "hora" : "horas"}`;
  const days = Math.round(hours / 24);
  return `Hace ${days} ${days === 1 ? "día" : "días"}`;
}
