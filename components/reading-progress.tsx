"use client";

import { useEffect, useState } from "react";

/** Barra fina bajo la cabecera que indica cuánto queda de la nota. */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.body.scrollHeight - window.innerHeight;
      setProgress(scrollable <= 0 ? 0 : Math.min(100, (window.scrollY / scrollable) * 100));
    };

    // requestAnimationFrame evita recalcular en cada píxel de scroll
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    // Fija en el borde superior de la pantalla: siempre visible, por encima
    // de la cabecera pegajosa
    <div className="fixed inset-x-0 top-0 z-40 h-[3px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
