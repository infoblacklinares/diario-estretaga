import Link from "next/link";
import type { CategorySlug } from "@/lib/data";
import { categoryName } from "@/lib/data";

type Props = {
  category: CategorySlug;
  /** "solid" para fondo magenta (sobre foto), "text" para listados. */
  variant?: "solid" | "text";
};

export function CategoryPill({ category, variant = "solid" }: Props) {
  const label = categoryName(category);

  if (variant === "text") {
    return (
      <span className="text-[10px] font-extrabold uppercase tracking-[0.4px] text-accent">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={`/seccion/${category}`}
      className="inline-block rounded-md bg-accent px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.4px] text-white transition-colors hover:bg-accent-light"
    >
      {label}
    </Link>
  );
}
