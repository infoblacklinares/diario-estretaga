"use client";

import Link from "next/link";
import { StoryCard } from "@/components/story-card";
import { IconBookmark } from "@/components/icons";
import { useSaved } from "@/lib/saved-context";
import { getBySlug } from "@/lib/data";

/**
 * Página cliente: la lista vive en el navegador del lector, así que se
 * renderiza después de leer localStorage (por eso el estado `ready`).
 */
export default function GuardadasPage() {
  const { saved, ready } = useSaved();
  const articles = saved.map(getBySlug).filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <h1 className="mb-1 mt-2 font-serif text-[28px] font-bold tracking-[-0.6px] text-ink">
        Mis guardadas
      </h1>
      <p className="mb-5 text-[13px] text-muted">
        Las notas que marcaste para leer después. Quedan en este dispositivo.
      </p>

      {!ready ? (
        // Esqueleto mientras se lee el almacenamiento: evita el parpadeo
        <div className="space-y-2.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-[110px] animate-pulse rounded-2xl bg-paper" />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="rounded-2xl bg-paper p-8 text-center shadow-[0_3px_15px_rgba(16,24,40,.05)]">
          <span className="mx-auto mb-3 block h-8 w-8 text-line">
            <IconBookmark />
          </span>
          <p className="font-serif text-[18px] font-bold text-ink">
            Todavía no guardas ninguna nota
          </p>
          <p className="mx-auto mt-1 max-w-[280px] text-[13px] leading-snug text-muted">
            Toca el marcador en cualquier titular y la encontrarás aquí.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-pink px-4 py-2.5 text-[12px] font-extrabold text-white transition-colors hover:bg-pink-light"
          >
            Ir a la portada
          </Link>
        </div>
      ) : (
        articles.map((article) => <StoryCard key={article.slug} article={article} />)
      )}
    </>
  );
}
