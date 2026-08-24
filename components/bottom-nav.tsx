"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSaved } from "@/lib/saved-context";
import { IconBookmark, IconDots, IconGrid, IconHome, IconPin } from "./icons";

const items = [
  { href: "/", label: "Inicio", Icon: IconHome },
  { href: "/secciones", label: "Secciones", Icon: IconGrid },
  { href: "/seccion/linares", label: "Linares", Icon: IconPin },
  { href: "/guardadas", label: "Guardadas", Icon: IconBookmark },
  { href: "/mas", label: "Más", Icon: IconDots }
];

/**
 * Barra inferior estilo app. Sólo en móvil: en escritorio la navegación
 * vive en la cabecera y esta barra sobraría.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { saved, ready } = useSaved();

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-30 grid h-[68px] grid-cols-5 border-t border-white/10 bg-navy/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map(({ href, label, Icon }) => {
        const active = pathname === href;
        const showBadge = href === "/guardadas" && ready && saved.length > 0;

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex flex-col items-center justify-center gap-1.5 text-[10px] transition-colors ${
              active ? "font-extrabold text-pink-light" : "text-[#aebbd0] hover:text-white"
            }`}
          >
            <span className="relative h-[21px] w-[21px]">
              <Icon filled={active} />
              {showBadge && (
                <span className="absolute -right-1.5 -top-1 min-w-[15px] rounded-full bg-pink px-1 text-[9px] font-extrabold leading-[15px] text-white">
                  {saved.length}
                </span>
              )}
            </span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
