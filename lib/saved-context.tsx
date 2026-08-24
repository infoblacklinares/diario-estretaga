"use client";

/**
 * Notas guardadas — persistidas en el navegador del lector (localStorage).
 * No requiere cuenta ni backend. Si más adelante se agrega login, este
 * mismo contexto pasa a sincronizar contra el servidor.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

const STORAGE_KEY = "estratega:guardadas";

type SavedContextValue = {
  saved: string[];
  /** false hasta que se lee localStorage, para evitar parpadeo en SSR. */
  ready: boolean;
  isSaved: (slug: string) => boolean;
  toggle: (slug: string) => void;
};

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setSaved(parsed.filter((s): s is string => typeof s === "string"));
        }
      }
    } catch {
      // Modo incógnito o almacenamiento bloqueado: seguimos sin persistencia.
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: string[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Silencioso a propósito: guardar es una comodidad, no un requisito.
    }
  }, []);

  const toggle = useCallback(
    (slug: string) => {
      setSaved((prev) => {
        const next = prev.includes(slug)
          ? prev.filter((s) => s !== slug)
          : [slug, ...prev];
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const value = useMemo<SavedContextValue>(
    () => ({
      saved,
      ready,
      isSaved: (slug: string) => saved.includes(slug),
      toggle
    }),
    [saved, ready, toggle]
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved(): SavedContextValue {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved debe usarse dentro de <SavedProvider>");
  return ctx;
}
