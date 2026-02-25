"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "INÍCIO", href: "/" },
  { label: "ACOMODAÇÕES", href: "/acomodacoes" },
  { label: "GALERIA", href: null },
  { label: "CONTATO", href: "/contato" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
      {NAV_LINKS.map(({ label, href }) => {
        const active = isActive(href);
        const disabled = !href;

        if (disabled) {
          return (
            <span
              key={label}
              className="text-neutral-500 text-sm font-semibold tracking-widest cursor-not-allowed select-none"
              aria-disabled="true"
            >
              {label}
            </span>
          );
        }

        return (
          <Link
            key={label}
            href={href}
            className={`nav-item text-sm font-semibold tracking-widest transition-colors duration-300 pb-1 ${
              active
                ? "text-orange-500 active"
                : "text-neutral-300 hover:text-orange-400"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
