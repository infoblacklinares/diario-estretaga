import Image from "next/image";
import Link from "next/link";
import { formatRelative, type Article } from "@/lib/data";
import { CategoryPill } from "./category-pill";
import { SaveButton } from "./save-button";

/** Tarjeta de listado: texto a la izquierda, miniatura a la derecha. */
export function StoryCard({ article }: { article: Article }) {
  return (
    <article className="relative mb-2.5 grid grid-cols-[1fr_105px] gap-3 rounded-2xl bg-paper p-3 shadow-[0_3px_15px_rgba(16,24,40,.05)] transition-shadow hover:shadow-[0_6px_22px_rgba(16,24,40,.10)] sm:grid-cols-[1fr_140px] sm:gap-4 sm:p-4">
      <div className="flex min-w-0 flex-col">
        <CategoryPill category={article.category} variant="text" />

        <h3 className="my-1.5 font-serif text-[17px] font-bold leading-[1.15] tracking-[-0.2px] text-ink sm:text-[19px]">
          <Link href={`/nota/${article.slug}`} className="hover:text-pink">
            {/* Cubre toda la tarjeta para que el toque en móvil sea cómodo */}
            <span className="absolute inset-0 z-0" aria-hidden="true" />
            {article.title}
          </Link>
        </h3>

        <p className="hidden text-[13px] leading-snug text-muted line-clamp-2 sm:block">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center gap-1 pt-1.5">
          <span className="text-[10px] text-muted">
            {formatRelative(article.minutesAgo)} · {article.readingMinutes} min
          </span>
          <span className="relative z-10">
            <SaveButton slug={article.slug} />
          </span>
        </div>
      </div>

      <div className="relative h-[86px] w-full overflow-hidden rounded-xl bg-line sm:h-[104px]">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 640px) 140px, 105px"
          className="object-cover"
        />
      </div>
    </article>
  );
}
