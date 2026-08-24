import Link from "next/link";

/** Logotipo tipográfico del diario. */
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="block text-center leading-none">
      <span
        className={`font-serif font-extrabold tracking-[-0.04em] text-white ${
          compact ? "text-[19px]" : "text-[25px]"
        }`}
      >
        EL ESTRATE<span className="text-pink-light">GA</span>
      </span>
      {!compact && (
        <span className="mt-1 block text-[8px] uppercase tracking-[1.8px] text-white/75">
          El diario de negocios independiente
        </span>
      )}
    </Link>
  );
}
