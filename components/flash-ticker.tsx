import Link from "next/link";
import { getFlash } from "@/lib/data";

/**
 * Franja "Historia Flash" — el equivalente al último minuto del diario.
 * Lista las notas marcadas con `flash` y se desplaza sola cuando no caben.
 */
export function FlashTicker() {
  const items = getFlash();
  if (items.length === 0) return null;

  // Se duplica la lista para que el desplazamiento sea continuo
  const marquee = [...items, ...items];

  return (
    <div className="mb-4 flex items-stretch overflow-hidden rounded-lg bg-petrol text-white">
      <span className="flex shrink-0 items-center gap-2 px-3 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.5px]">
        <span className="h-[7px] w-[7px] rounded-full bg-accent-light shadow-[0_0_0_4px_rgba(63,182,206,.25)]" />
        Historia Flash
      </span>

      <div className="relative min-w-0 flex-1 overflow-hidden border-l border-white/10">
        <div className="flex w-max animate-ticker items-center gap-10 py-2.5 pl-4 hover:[animation-play-state:paused]">
          {marquee.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={`/nota/${item.slug}`}
              className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3px] text-white/85 hover:text-white"
              aria-hidden={i >= items.length}
              tabIndex={i >= items.length ? -1 : undefined}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
