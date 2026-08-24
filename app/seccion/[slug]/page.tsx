import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ad-slot";
import { HeroStory } from "@/components/hero-story";
import { StoryCard } from "@/components/story-card";
import {
  categories,
  getByCategory,
  getCategory,
  type CategorySlug
} from "@/lib/data";

type Params = { params: { slug: string } };

/** Pre-genera una página estática por sección: cargan al instante. */
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) return { title: "Sección no encontrada" };
  return { title: category.name, description: category.description };
}

export default function SeccionPage({ params }: Params) {
  const exists = categories.some((c) => c.slug === params.slug);
  if (!exists) notFound();

  const slug = params.slug as CategorySlug;
  const category = getCategory(slug);
  const articles = getByCategory(slug);
  const [lead, ...rest] = articles;

  return (
    <>
      <header className="mb-4 mt-2">
        <h1 className="font-serif text-[28px] font-bold tracking-[-0.6px] text-ink">
          {category.name}
        </h1>
        <p className="mt-1 text-[13px] text-muted">{category.description}</p>
      </header>

      {lead ? (
        <>
          <HeroStory article={lead} />
          <div className="mt-4">
            {rest.slice(0, 3).map((a) => (
              <StoryCard key={a.slug} article={a} />
            ))}
          </div>
          {rest.length > 3 && (
            <>
              <AdSlot />
              {rest.slice(3).map((a) => (
                <StoryCard key={a.slug} article={a} />
              ))}
            </>
          )}
        </>
      ) : (
        <p className="rounded-2xl bg-paper p-6 text-center text-[13px] text-muted">
          Todavía no hay notas publicadas en esta sección.
        </p>
      )}
    </>
  );
}
