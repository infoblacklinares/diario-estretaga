/**
 * PALETA DE MARCA — único lugar donde se definen los colores del diario.
 * `tailwind.config.ts` los importa desde acá, así que cambiar un valor
 * aquí lo cambia en todo el sitio.
 */
export const brandColors = {
  navy: {
    DEFAULT: "#071A35", // Cabecera, menú y barra inferior
    light: "#0D294E",   // Degradado de la cabecera
    lighter: "#123763"  // Degradado del bloque de newsletter
  },
  pink: {
    DEFAULT: "#E90069", // Acento: secciones, enlaces, marcadores
    light: "#FF2B87"    // Acento sobre fondo oscuro
  },
  bg: "#F4F5F7",     // Fondo de las páginas
  paper: "#FFFFFF",  // Tarjetas
  ink: "#101828",    // Texto principal
  muted: "#667085",  // Texto secundario y fechas
  line: "#E5E7EB"    // Bordes y separadores
};
