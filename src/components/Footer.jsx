"use client";

import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Acomodações", href: "/acomodacoes" },
  { label: "Contato", href: "/contato" },
  { label: "Galeria", href: "/galeria" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #161616 0%, #0d0d0d 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Rodapé do site"
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(234,88,12,0.5), rgba(212,169,70,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(234,88,12,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-16 pb-8 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <Link href="/" aria-label="Ir para página inicial">
              <Image
                src={logo}
                width={1000}
                height={1000}
                alt="Hotel Pousada Bambuzal"
                className="w-40 h-auto hover:opacity-85 transition-opacity duration-300"
                priority={false}
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Um paraíso em meio às montanhas do Sana, Macaé — RJ. Natureza,
              conforto e tranquilidade em um só lugar.
            </p>

            {/* Social icons */}
            <div className="flex gap-3" aria-label="Redes sociais">
              <a
                href="https://www.instagram.com/hotelbambuzal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaInstagram className="text-base" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/HotelPousadaBambuzal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
              >
                <FaFacebookF className="text-base" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5522988112400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-orange-500 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
              >
                <FaWhatsapp className="text-base" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-5">
              Navegação
            </h3>
            <nav
              className="flex flex-col gap-3"
              aria-label="Links de navegação"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-neutral-400 hover:text-orange-400 transition-colors duration-300 w-fit mx-auto md:mx-0"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-5">
              Localização
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin
                  className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Estrada do Sana, N° 2000
                  <br />
                  Sana, Macaé — RJ
                </p>
              </div>
              <a
                href="https://www.google.com/maps?q=-22.3349936+-42.1890027"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  mx-auto md:mx-0
                  px-4 py-1.5 rounded-full text-xs font-bold
                  border border-orange-500/30 text-orange-400
                  hover:bg-orange-500/10 hover:border-orange-400
                  transition-all duration-300 w-fit
                "
                aria-label="Ver localização no Google Maps"
              >
                Ver no mapa
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-5">
              Contatos
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+5522988112400"
                className="flex items-center gap-2 justify-center md:justify-start text-sm text-neutral-400 hover:text-orange-400 transition-colors duration-300 group"
                aria-label="Ligar para o hotel"
              >
                <Phone
                  className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                (22) 9 8811-2400
              </a>
              <a
                href="https://wa.me/5522988112400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-start text-sm text-neutral-400 hover:text-green-400 transition-colors duration-300 group"
                aria-label="Enviar mensagem pelo WhatsApp"
              >
                <FaWhatsapp
                  className="text-orange-500 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                WhatsApp
              </a>
              <a
                href="mailto:hotelpousadabambuzal@gmail.com"
                className="flex items-center gap-2 justify-center md:justify-start text-sm text-neutral-400 hover:text-orange-400 transition-colors duration-300 group"
                aria-label="Enviar email para o hotel"
              >
                <Mail
                  className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                />
                <span className="break-all">
                  hotelpousadabambuzal@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>
            &copy; {currentYear} Hotel Pousada Bambuzal. Todos os direitos
            reservados.
          </p>
          <p className="text-neutral-700">Sana, Macaé — RJ, Brasil</p>
        </div>
      </div>
    </footer>
  );
};
