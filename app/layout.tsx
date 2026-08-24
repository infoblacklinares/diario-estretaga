import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SavedProvider } from "@/lib/saved-context";
import { Header } from "@/components/header";
import { BottomNav } from "@/components/bottom-nav";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

/**
 * Par tipográfico del diario:
 *  · Fraunces (serif con carácter) para titulares
 *  · Inter (sans de alta legibilidad) para cuerpo e interfaz
 * next/font las descarga en build y las sirve desde el propio dominio:
 * cero peticiones a Google en producción y sin salto de layout.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "El Estratega · El diario de negocios independiente",
    template: "%s · El Estratega"
  },
  description:
    "Noticias de Linares, la Región del Maule y Chile. Economía, política, actualidad y deportes con una mirada directa y cercana.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "El Estratega",
    title: "El Estratega · El diario de negocios independiente",
    description:
      "Noticias de Linares, la Región del Maule y Chile. Economía, política, actualidad y deportes."
  },
  // Mientras sea maqueta no queremos que Google la indexe.
  // Al salir a producción: { index: true, follow: true }
  robots: { index: false, follow: false }
};

export const viewport: Viewport = {
  themeColor: "#071A35",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "El Estratega",
  description: "El diario de negocios independiente de Linares y la Región del Maule.",
  url: siteUrl,
  areaServed: "Región del Maule, Chile"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SavedProvider>
          {/* En móvil el diario ocupa toda la pantalla; en escritorio se
              centra y respira. La barra inferior sólo existe en móvil. */}
          <div className="mx-auto min-h-screen w-full max-w-[430px] bg-bg pb-[82px] shadow-[0_0_45px_rgba(0,0,0,.15)] md:max-w-none md:pb-0 md:shadow-none">
            <Header />
            <main className="px-4 pt-3.5 md:mx-auto md:max-w-3xl md:px-6 md:pb-16">
              {children}
            </main>
            <BottomNav />
          </div>
        </SavedProvider>
      </body>
    </html>
  );
}
