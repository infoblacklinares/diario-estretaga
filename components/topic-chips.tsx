import Link from "next/link";
import { categories, topics } from "@/lib/data";

/** Fila de temas con scroll horizontal. */
export function TopicChips() {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4">
      {topics.map((topic) => {
        // Si el tema coincide con una sección, enlaza a ella
        const match = categories.find((c) =>
          topic.toLowerCase().includes(c.name.toLowerCase())
        );
        const href = match ? `/seccion/${match.slug}` : "/secciones";

        return (
          <Link
            key={topic}
            href={href}
            className="whitespace-nowrap rounded-full border border-line bg-paper px-3.5 py-2.5 text-[11px] font-bold text-ink transition-colors hover:border-pink hover:text-pink"
          >
            {topic}
          </Link>
        );
      })}
    </div>
  );
}
