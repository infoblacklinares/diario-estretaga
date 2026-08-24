"use client";

import { useState } from "react";

/**
 * Suscripción al newsletter.
 * DEMO: hoy sólo valida el correo y confirma en pantalla. Para dejarlo
 * operativo hay que conectar el proveedor de envíos (Mailchimp, Brevo,
 * Resend...) en un route handler `/api/newsletter`.
 */
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(valid ? "ok" : "error");
  }

  return (
    <section className="mt-6 rounded-[18px] bg-gradient-to-br from-petrol to-petrol-lighter p-5 text-white shadow-[0_12px_35px_rgba(7,26,53,.10)]">
      <p className="text-[11px] font-extrabold tracking-[1px] text-accent-light">NEWSLETTER</p>
      <h3 className="my-2 font-display text-[22px] font-bold leading-tight">
        Las noticias importantes, directo a tu correo.
      </h3>
      <p className="text-[12px] leading-[1.4] text-slate-300">
        Un resumen rápido con las noticias que están moviendo Linares, el Maule y Chile.
      </p>

      {status === "ok" ? (
        <p className="mt-4 rounded-lg bg-white/10 px-3.5 py-3 text-[12px] font-semibold">
          ¡Listo! Te escribiremos a <span className="text-accent-light">{email}</span>.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="tu@correo.cl"
            className="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3.5 py-3 text-[13px] text-white placeholder:text-slate-400 outline-none focus:border-accent-light"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-4 py-3 text-[11px] font-extrabold text-white transition-colors hover:bg-accent-light"
          >
            Quiero suscribirme →
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-2 text-[11px] font-semibold text-accent-light">
          Revisa el correo, parece que tiene un error.
        </p>
      )}
    </section>
  );
}
