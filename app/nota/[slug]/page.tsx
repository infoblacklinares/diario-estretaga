import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ad-slot";
import { CategoryPill } from "@/components/category-pill";
import { ReadingProgress } from "@/components/reading-progress";
import { SaveButton } from "@/components/save-button";
import { SectionHead } from "@/components/section-head";
import { ShareButton } from "@/components/share-button";
import { StoryCard } from "@/components/story-card";
import { IconArrowLeft } from "@/components/icons";
import {
  articles,
  categoryName,
  formatRelative,
  getBySlug,
  getRelated
} from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

type Params = { params: { slug: string } };

/** Una página estática por nota. */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getBySlug(params.slug);
  if (!article) return { title: "Nota no encontrada" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [article.image]
    }
  };
}

export default function NotaPage({ params }: Params) {
  const article = getBySlug(params.slug);
  if (!article) notFound();

  const related = getRelated(article);
  const path = `/nota/${article.slug}`;

  // Datos estructurados: así Google muestra la nota como artículo de noticias
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    articleSection: categoryName(article.category),
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "NewsMediaOrganization", name: siteConfig.name }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <Link
        href={`/seccion/${article.category}`}
        className="mb-3 mt-1 inline-flex items-center gap-2 text-[12px] font-bold text-muted transition-colors hover:text-ink"
      >
        <span className="h-4 w-4">
          <IconArrowLeft />
        </span>
        Volver a {categoryName(article.category)}
      </Link>

      <article>
        <CategoryPill category={article.category} />

        <h1 className="my-3 font-serif text-[30px] font-bold leading-[1.08] tracking-[-0.7px] text-ink sm:text-[38px]">
          {article.title}
        </h1>

        <p className="text-[15px] leading-relaxed text-muted">{article.excerpt}</p>

        <div className="my-4 flex flex-col items-start gap-1 border-y border-line py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span className="text-[11px] text-muted">
            {article.author} · {formatRelative(article.minutesAgo)} · {article.readingMinutes} min
          </span>
          <span className="-ml-1.5 flex items-center gap-1">
            <ShareButton title={article.title} path={path} />
            <SaveButton slug={article.slug} withLabel />
          </span>
        </div>

        <figure className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-line">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </figure>

        <div className="space-y-4 text-[16px] leading-[1.7] text-ink">
          {article.body.map((paragraph, i) => (
            <div key={i}>
              <p>{paragraph}</p>
              {/* Publicidad intercalada tras el segundo párrafo */}
              {i === 1 && <AdSlot label="Espacio publicitario · dentro de la nota" />}
            </div>
          ))}
        </div>
      </article>

      <SectionHead title="Sigue leyendo" href="/" linkLabel="Ir a portada" />
      {related.map((a) => (
        <StoryCard key={a.slug} article={a} />
      ))}
    </>
  );
}
