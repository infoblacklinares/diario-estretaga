/**
 * PALETA DE MARCA — único lugar donde se definen los colores del diario.
 * `tailwind.config.ts` los importa desde acá.
 *
 * Tomada de elestratega.cl: azul petróleo oscuro con acento turquesa.
 * Los valores son una lectura de las capturas del sitio; si tienes los
 * códigos exactos de la hoja de estilos, cámbialos aquí y se propagan
 * a todo el sitio.
 */
export const brandColors = {
  petrol: {
    DEFAULT: "#0F3C4C", // Cabecera, menú lateral y barra inferior
    light: "#17566B",   // Degradado de la cabecera
    lighter: "#1D6B84"  // Degradado del bloque de newsletter
  },
  accent: {
    DEFAULT: "#1E8FA8", // Subrayados de sección, etiquetas, marcadores
    light: "#3FB6CE"    // Acento sobre fondo oscuro
  },
  bg: "#F4F6F7",    // Fondo de las páginas
  paper: "#FFFFFF", // Tarjetas
  ink: "#0E1E26",   // Texto principal
  muted: "#5F7480", // Texto secundario y fechas
  line: "#E3E8EA"   // Bordes y separadores
};
