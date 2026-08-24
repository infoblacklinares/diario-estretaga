/**
 * Iconos en SVG. El mockup usaba caracteres tipográficos (☰ ⌕ ◈) que se
 * dibujan distinto en cada teléfono; en SVG el diario se ve idéntico en
 * Android, iPhone y escritorio.
 */

type IconProps = {
  className?: string;
  /** Rellena la figura — se usa para "guardada" activa. */
  filled?: boolean;
};

const base = "h-full w-full";

export function IconMenu({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function IconSearch({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function IconClose({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconArrowLeft({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
    </svg>
  );
}

export function IconHome({ className = "", filled = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth={1.9} strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}

export function IconGrid({ className = "", filled = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth={1.9} strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
    </svg>
  );
}

export function IconPin({ className = "", filled = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth={1.9} strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" fill={filled ? "#071A35" : "none"} />
    </svg>
  );
}

export function IconBookmark({ className = "", filled = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth={1.9} strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4.2L6 21z" />
    </svg>
  );
}

export function IconDots({ className = "", filled = false }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="5" cy="12" r={filled ? 2.2 : 1.9} />
      <circle cx="12" cy="12" r={filled ? 2.2 : 1.9} />
      <circle cx="19" cy="12" r={filled ? 2.2 : 1.9} />
    </svg>
  );
}

export function IconShare({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}
      strokeLinecap="round" strokeLinejoin="round" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 15V3m0 0L8 7m4-4 4 4" />
      <path d="M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
    </svg>
  );
}

export function IconWhatsapp({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.35-1.4a9.8 9.8 0 0 0 4.59 1.17h.01c5.43 0 9.84-4.4 9.84-9.84A9.78 9.78 0 0 0 12.04 2m5.76 13.9c-.24.68-1.4 1.3-1.95 1.34-.5.05-.98.22-3.34-.7-2.81-1.1-4.6-3.96-4.74-4.15-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35s.36 0 .52.01c.17.01.4-.06.62.48.24.55.8 1.92.87 2.06.07.14.12.3.02.49-.09.19-.14.3-.28.47-.14.16-.3.36-.42.48-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.94 1.95 1.23 2.23 1.37.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.25.09 1.61.76 1.89.9.28.14.46.21.53.32.07.12.07.66-.17 1.3" />
    </svg>
  );
}
