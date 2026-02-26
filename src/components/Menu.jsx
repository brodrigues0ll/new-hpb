"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

const NAV_LINKS = [
  { label: "INÍCIO", href: "/" },
  { label: "ACOMODAÇÕES", href: "/acomodacoes" },
  { label: "GALERIA", href: "/galeria" },
  { label: "CONTATO", href: "/contato" },
];

export const Menu = ({ menuOpen, setIsMenu }) => {
  const pathname = usePathname();
  const menuRef = useRef(null);

  const isActive = (href) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenu(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, setIsMenu]);

  // Close on route change
  useEffect(() => {
    setIsMenu(false);
  }, [pathname, setIsMenu]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        aria-hidden="true"
        onClick={() => setIsMenu(false)}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="
          fixed top-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-xs
          glass-dark rounded-2xl p-6 lg:hidden
          animate-slide-menu
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
        "
      >
        {/* Nav links */}
        <nav className="flex flex-col gap-1 mb-6" aria-label="Menu mobile">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            const disabled = !href;

            if (disabled) {
              return (
                <span
                  key={label}
                  className="px-4 py-3 text-neutral-500 text-sm font-bold tracking-widest cursor-not-allowed"
                >
                  {label}
                </span>
              );
            }

            return (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenu(false)}
                className={`
                  px-4 py-3 rounded-xl text-sm font-bold tracking-widest
                  transition-all duration-200
                  ${
                    active
                      ? "text-orange-500 bg-orange-500/10 border-l-2 border-orange-500"
                      : "text-neutral-300 hover:text-orange-400 hover:bg-white/5"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-5" />

        {/* CTA Button */}
        <a
          href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenu(false)}
          className="
            block w-full text-center py-3.5 px-6 rounded-full
            font-bold text-sm tracking-wider text-white
            bg-gradient-orange hover:shadow-orange-glow
            transition-all duration-300 btn-cta mb-5
          "
        >
          <span>RESERVE AGORA</span>
        </a>

        {/* Quick contact */}
        <div className="flex flex-col gap-2.5 text-neutral-400 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <span>Estrada do Sana, N° 2000, Sana - Macaé/RJ</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
            <a
              href="tel:+5522988112400"
              className="hover:text-orange-400 transition-colors"
            >
              (22) 9 8811-2400
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 mt-4">
          <a
            href="https://www.instagram.com/hotelbambuzal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-lg bg-white/5 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/HotelPousadaBambuzal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-lg bg-white/5 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-200"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
