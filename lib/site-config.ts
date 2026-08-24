/**
 * IDENTIDAD DEL DIARIO — nombre, lema y datos de la publicación.
 * Editar aquí cambia la cabecera, los metadatos, el pie y el buscador.
 *
 * Los colores viven en `lib/brand-colors.ts` y el contenido en `lib/data.ts`.
 */
export const siteConfig = {
  name: "El Estratega",

  /** El logotipo se dibuja en dos tonos: la primera parte en blanco y la
   *  segunda en el color de acento. */
  logo: {
    lead: "EL ESTRATE",
    accent: "GA"
  },

  tagline: "El diario de negocios independiente",

  description:
    "Noticias de Linares, la Región del Maule y Chile. Economía, política, actualidad y deportes con una mirada directa y cercana.",

  /** Firma por defecto de las notas. */
  newsroom: "Redacción El Estratega",

  location: {
    city: "Linares",
    region: "Región del Maule",
    country: "Chile"
  },

  contact: {
    // Reemplazar por el WhatsApp real del diario
    whatsapp: "56900000000"
  }
} as const;

/** "El Estratega · El diario de negocios independiente" */
export const siteTitle = `${siteConfig.name} · ${siteConfig.tagline}`;

/** "El diario de negocios independiente de Linares y la Región del Maule." */
export const siteBlurb = `${siteConfig.tagline} de ${siteConfig.location.city} y la ${siteConfig.location.region}.`;

/** "Linares · Región del Maule · Chile" */
export const siteLocationLine = [
  siteConfig.location.city,
  siteConfig.location.region,
  siteConfig.location.country
].join(" · ");
