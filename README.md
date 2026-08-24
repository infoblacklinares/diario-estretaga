# El Estratega

Diario de negocios independiente de Linares y la Región del Maule.
Versión web y móvil construida con **Next.js 14, React 18, TypeScript y Tailwind CSS**.

> **Estado: maqueta funcional.** Los titulares y fotografías son de muestra y no
> corresponden a noticias reales. Sirven para evaluar diseño y navegación.

---

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos: `npm run build` (compilar), `npm run start` (servir el build),
`npm run typecheck` (revisar tipos).

---

## Qué funciona

- **Portada** con nota principal, franja de última hora, listado y espacios publicitarios
- **7 secciones**: Nacional, Regional, Actualidad, Economía, Política, Deportes, Linares
- **Nota completa** con barra de progreso de lectura, compartir y notas relacionadas
- **Buscador** en vivo por titular, bajada o sección
- **Guardar notas** para leer después — queda en el dispositivo del lector, sin cuenta
- **Menú lateral** y **barra inferior** estilo aplicación, sólo en móvil
- **Newsletter** con validación de correo

En escritorio la barra inferior desaparece y la navegación pasa a la cabecera.

## Rendimiento

Las 28 páginas se generan estáticas en el build: llegan al lector desde el CDN
sin esperar a un servidor. La portada carga **101 kB de JavaScript** — los
sitios de noticias suelen estar entre 300 kB y 1 MB.

---

## Estructura

```
app/
  layout.tsx          # Tipografías, metadatos, cabecera y barra inferior
  page.tsx            # Portada
  nota/[slug]/        # Nota completa
  seccion/[slug]/     # Listado por sección
  secciones/          # Índice de secciones
  guardadas/          # Notas guardadas por el lector
  mas/                # Sobre el diario y contacto
components/           # Cabecera, tarjetas, iconos, newsletter...
lib/
  site-config.ts      # ← IDENTIDAD (nombre, logo, lema)
  brand-colors.ts     # ← PALETA
  data.ts             # ← TODO EL CONTENIDO
  saved-context.tsx   # Notas guardadas (localStorage)
  site-url.ts         # URL pública, tolerante a errores de tipeo
```

## Dónde se edita cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Nombre, logo, lema, ubicación, WhatsApp | `lib/site-config.ts` |
| Colores de marca | `lib/brand-colors.ts` |
| Titulares, bajadas, fotos, secciones | `lib/data.ts` |
| Tipografías | `app/layout.tsx` |
| Cabecera, menú y buscador | `components/header.tsx` |
| Barra inferior | `components/bottom-nav.tsx` |
| Espacios publicitarios | `components/ad-slot.tsx` |
| Título y descripción del sitio | `app/layout.tsx` |

La identidad del diario está centralizada: **`lib/site-config.ts`** (nombre,
logo, lema, ubicación) y **`lib/brand-colors.ts`** (paleta, que `tailwind.config.ts`
importa). Cambiar de marca no obliga a tocar los componentes.

`lib/data.ts` es la única fuente de contenido: los componentes no conocen
ninguna noticia concreta. Por eso conectar un CMS más adelante no obliga a
rehacer el diseño — sólo se reemplazan las funciones de consulta del final
del archivo.

---

## Lo que falta para salir a producción

1. **Panel de administración (CMS).** Hoy el contenido está en un archivo. Con
   Strapi, Sanity o WordPress headless el equipo publica sin tocar código.
2. **Fotografías propias.** Las actuales son de muestra (Unsplash).
3. **Publicidad.** Los espacios ya están maquetados con sus medidas; falta
   conectar Google Ad Manager o AdSense.
4. **Newsletter.** Falta el proveedor de envíos (Mailchimp, Brevo, Resend) en
   un endpoint `/api/newsletter`.
5. **Dominio y analítica.** Publicar en Vercel, apuntar `elestratega.cl` y
   sumar Google Analytics o Plausible.
6. **Quitar el `noindex`.** En `app/layout.tsx`, `robots` está en
   `{ index: false }` para que Google no indexe la maqueta.

## Variables de entorno

Copia `.env.example` a `.env.local`. Sólo hay una y tiene valor por defecto,
así que el proyecto compila sin configurar nada:

```
NEXT_PUBLIC_SITE_URL=https://elestratega.cl
```

## Desplegar

Vercel detecta Next.js automáticamente: importar el repositorio y darle Deploy.
No requiere configuración adicional.
