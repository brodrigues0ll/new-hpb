"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";
import { AlignJustify, X } from "lucide-react";
import { Menu } from "./Menu";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] h-20 md:h-24 flex items-center justify-between px-5 md:px-10 xl:mx-auto">
        {/* Logo */}
        <div
          className="cursor-pointer transition-all duration-300 hover:opacity-85 hover:scale-[1.02] flex items-center"
          onClick={() => router.push("/")}
          role="link"
          aria-label="Ir para página inicial"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && router.push("/")}
        >
          <Image
            alt="Hotel Pousada Bambuzal"
            src={logo}
            width={1000}
            height={1000}
            className="w-36 md:w-44 h-auto"
            priority={true}
          />
        </div>

        {/* Desktop Nav */}
        <Navbar />

        {/* Mobile CTA + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-all duration-300 hover:shadow-orange-glow"
          >
            Reservar
          </a>
          <button
            aria-label={isMenu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenu}
            className="p-2 rounded-lg text-orange-500 hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
            onClick={() => setIsMenu(!isMenu)}
          >
            {isMenu ? (
              <X className="w-7 h-7" />
            ) : (
              <AlignJustify className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Desktop CTA */}
        <a
          href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white btn-cta animate-pulse-glow"
        >
          <span>Reserve Agora</span>
        </a>
      </div>

      {/* Mobile Menu */}
      <Menu menuOpen={isMenu} setIsMenu={setIsMenu} />
    </header>
  );
};
