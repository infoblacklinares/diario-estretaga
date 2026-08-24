"use client";

import { useSaved } from "@/lib/saved-context";
import { IconBookmark } from "./icons";

type Props = {
  slug: string;
  /** "light" sobre fondo claro, "dark" sobre foto o cabecera. */
  tone?: "light" | "dark";
  withLabel?: boolean;
};

export function SaveButton({ slug, tone = "light", withLabel = false }: Props) {
  const { isSaved, toggle } = useSaved();
  const active = isSaved(slug);

  const color = active
    ? "text-pink"
    : tone === "dark"
      ? "text-white/80 hover:text-white"
      : "text-muted hover:text-ink";

  return (
    <button
      type="button"
      onClick={() => toggle(slug)}
      aria-pressed={active}
      aria-label={active ? "Quitar de guardadas" : "Guardar nota"}
      className={`inline-flex items-center gap-2 rounded-lg p-1.5 transition-colors ${color}`}
    >
      <span className="h-[18px] w-[18px]">
        <IconBookmark filled={active} />
      </span>
      {withLabel && (
        <span className="text-[12px] font-bold">{active ? "Guardada" : "Guardar"}</span>
      )}
    </button>
  );
}
