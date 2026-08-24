import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl bg-paper p-8 text-center shadow-[0_3px_15px_rgba(16,24,40,.05)]">
      <p className="font-serif text-[42px] font-extrabold leading-none text-navy">404</p>
      <p className="mt-2 font-serif text-[19px] font-bold text-ink">
        No encontramos esta página
      </p>
      <p className="mx-auto mt-1 max-w-[280px] text-[13px] leading-snug text-muted">
        Puede que la nota haya cambiado de dirección o que el enlace esté incompleto.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block rounded-lg bg-pink px-4 py-2.5 text-[12px] font-extrabold text-white transition-colors hover:bg-pink-light"
      >
        Volver a la portada
      </Link>
    </div>
  );
}
