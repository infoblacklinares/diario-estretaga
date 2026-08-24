"use client";

import { useState } from "react";
import { IconShare } from "./icons";

type Props = {
  title: string;
  /** Ruta relativa, p. ej. /nota/mi-nota */
  path: string;
};

/**
 * Usa el menú nativo de compartir del teléfono cuando existe
 * (Android/iOS) y cae a "copiar enlace" en escritorio.
 */
export function ShareButton({ title, path }: Props) {
  const [copied, setCopied] = useState(false);

  async function onShare() {
    const url = `${window.location.origin}${path}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // El usuario canceló el menú: no es un error que mostrar.
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={onShare}
      className="inline-flex items-center gap-2 rounded-lg p-1.5 text-muted transition-colors hover:text-ink"
    >
      <span className="h-[18px] w-[18px]">
        <IconShare />
      </span>
      <span className="text-[12px] font-bold">{copied ? "Enlace copiado" : "Compartir"}</span>
    </button>
  );
}
