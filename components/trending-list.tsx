import Image from "next/image";
import Link from "next/link";
import { categoryName, getTrending } from "@/lib/data";

/**
 * Bloque "Tendencias": las notas más leídas, numeradas sobre la miniatura,
 * igual que en elestratega.cl.
 */
export function TrendingList() {
  const items = getTrending();
  if (items.length === 0) return null;

  return (
    <ol className="space-y-2.5">
      {items.map((article, i) => (
        <li key={article.slug}>
          <article className="relative flex items-center gap-3 rounded-2xl bg-paper p-3 shadow-[0_3px_15px_rgba(14,30,38,.05)] transition-shadow hover:shadow-[0_6px_22px_rgba(14,30,38,.10)]">
            <div className="relative h-[74px] w-[92px] shrink-0 overflow-hidden rounded-xl bg-line">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="92px"
                className="object-cover"
              />
              <span className="absolute bottom-0 left-0 bg-accent px-2 py-0.5 text-[12px] font-extrabold leading-tight text-white">
                {i + 1}
              </span>
            </div>

            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.4px] text-muted">
                {categoryName(article.category)}
              </span>
              <h3 className="mt-1 text-[14px] font-bold leading-[1.25] text-ink line-clamp-3">
                <Link href={`/nota/${article.slug}`} className="hover:text-accent">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {article.title}
                </Link>
              </h3>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
