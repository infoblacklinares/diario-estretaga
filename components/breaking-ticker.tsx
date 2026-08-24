import Link from "next/link";
import { getBreaking } from "@/lib/data";

/**
 * Franja de última hora. En el mockup era un texto fijo; aquí lista las
 * notas marcadas como `breaking` y se desplaza sola cuando no caben.
 */
export function BreakingTicker() {
  const items = getBreaking();
  if (items.length === 0) return null;

  const marquee = [...items, ...items];

  return (
    <div className="mb-3 flex items-center gap-2.5 px-0.5">
      <span className="flex shrink-0 items-center gap-2 text-[11px] font-extrabold uppercase text-pink">
        <span className="h-[7px] w-[7px] rounded-full bg-pink shadow-[0_0_0_5px_rgba(233,0,105,.10)]" />
        Última hora
      </span>

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div className="flex w-max animate-ticker gap-8 hover:[animation-play-state:paused]">
          {marquee.map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={`/nota/${item.slug}`}
              className="whitespace-nowrap text-[11px] font-semibold text-muted hover:text-ink"
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
