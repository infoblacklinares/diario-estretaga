import Image from "next/image";
import Link from "next/link";
import { formatDateShort, type Article } from "@/lib/data";
import { CategoryPill } from "./category-pill";
import { SaveButton } from "./save-button";

/** Nota principal de portada: foto a sangre con degradado y texto encima. */
export function HeroStory({ article }: { article: Article }) {
  return (
    <article className="relative min-h-[355px] overflow-hidden rounded-[22px] text-white shadow-[0_12px_35px_rgba(7,26,53,.10)] sm:min-h-[440px]">
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        priority
        sizes="(min-width: 1024px) 700px, 100vw"
        className="object-cover"
      />

      {/* Degradado: legibilidad del titular sin tapar la fotografía */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,10,22,.94)] via-[rgba(2,10,22,.45)] to-[rgba(2,10,22,.12)]" />

      <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
        <div className="flex items-start justify-between gap-3">
          <CategoryPill category={article.category} />
          <SaveButton slug={article.slug} tone="dark" />
        </div>

        <h1 className="my-2.5 font-display text-[24px] font-extrabold leading-[1.12] tracking-[-0.5px] line-clamp-4 sm:text-[32px]">
          <Link href={`/nota/${article.slug}`}>{article.title}</Link>
        </h1>

        <p className="mb-3 text-[13px] leading-[1.45] text-gray-200 line-clamp-2 sm:text-[15px]">
          {article.excerpt}
        </p>

        <div className="text-[10px] text-gray-300 sm:text-[11px]">
          {formatDateShort(article.publishedAt)} · {article.readingMinutes} min de lectura
        </div>
      </div>
    </article>
  );
}
