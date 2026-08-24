/**
 * URL pública del sitio, tolerante a cómo se escriba la variable de entorno.
 *
 * Un dominio mal escrito no debe voltear el build: antes, un valor como
 * "elestratega.cl" (sin https://) lanzaba `TypeError: Invalid URL` al construir
 * los metadatos y Vercel fallaba con "Failed to collect page data".
 */

const RESPALDO = "https://elestratega.cl";

export function getSiteUrl(): string {
  const definida = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (definida) {
    // Acepta "elestratega.cl" igual que "https://elestratega.cl"
    const candidata = /^https?:\/\//i.test(definida) ? definida : `https://${definida}`;
    try {
      return new URL(candidata).origin;
    } catch {
      // Valor irrecuperable: seguimos con el respaldo en vez de romper el build
    }
  }

  // En Vercel, si nadie configuró nada, usamos el dominio del propio proyecto
  // para que las vistas previas en WhatsApp y redes apunten a alguna parte.
  const enVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (enVercel) return `https://${enVercel}`;

  return RESPALDO;
}
