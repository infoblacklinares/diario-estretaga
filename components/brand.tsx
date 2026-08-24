import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * Logotipo de la cabecera. Sigue al del diario: el nombre completo en
 * blanco, sin dos tonos. El lema va debajo, en versalitas.
 */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="block min-w-0 text-center leading-none">
      <span
        className={`block truncate font-display font-extrabold tracking-[-0.02em] text-white ${
          compact ? "text-[17px]" : "text-[20px]"
        }`}
      >
        {siteConfig.name}
      </span>
      {!compact && (
        <span className="mt-1 block text-[8px] uppercase tracking-[1.6px] text-white/70">
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
