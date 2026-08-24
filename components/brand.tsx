import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Logotipo tipográfico del diario. */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="block text-center leading-none">
      <span
        className={`font-serif font-extrabold tracking-[-0.04em] text-white ${
          compact ? "text-[19px]" : "text-[25px]"
        }`}
      >
        {siteConfig.logo.lead}
        <span className="text-pink-light">{siteConfig.logo.accent}</span>
      </span>
      {!compact && (
        <span className="mt-1 block text-[8px] uppercase tracking-[1.8px] text-white/75">
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
