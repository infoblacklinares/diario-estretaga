import Link from "next/link";
import type { Metadata } from "next";
import { categories, getByCategory } from "@/lib/data";

export const metadata: Metadata = { title: "Secciones" };

export default function SeccionesPage() {
  return (
    <>
      <h1 className="mb-1 mt-2 font-display text-[28px] font-bold tracking-[-0.6px] text-ink">
        Secciones
      </h1>
      <p className="mb-5 text-[13px] text-muted">Todo el diario, ordenado por tema.</p>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {categories.map((c) => {
          const count = getByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/seccion/${c.slug}`}
              className="rounded-2xl bg-paper p-4 shadow-[0_3px_15px_rgba(16,24,40,.05)] transition-shadow hover:shadow-[0_6px_22px_rgba(16,24,40,.10)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-[19px] font-bold text-ink">{c.name}</h2>
                <span className="shrink-0 rounded-full bg-bg px-2.5 py-1 text-[10px] font-extrabold text-muted">
                  {count} {count === 1 ? "nota" : "notas"}
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-muted">{c.description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
