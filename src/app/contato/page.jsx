"use client";

import { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuMapPin, LuMail } from "react-icons/lu";
import { BsTelephoneFill } from "react-icons/bs";
import { ContactCard } from "@/components/ContactCard";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Contato() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const reveals = el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    reveals.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      handle: "@hotelbambuzal",
      href: "https://www.instagram.com/hotelbambuzal",
      color: "hover:text-pink-400",
    },
    {
      icon: FaFacebookF,
      label: "Facebook",
      handle: "HotelPousadaBambuzal",
      href: "https://www.facebook.com/HotelPousadaBambuzal",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <main>
      {/* Hero section */}
      <section
        className="relative pt-36 pb-16 px-5 md:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #161616 0%, #1a1a1a 60%, #212121 100%)",
        }}
        aria-label="Cabeçalho da página de contato"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 40% 0%, rgba(234,88,12,0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold tracking-[0.2em] glass mb-6 animate-fade-in-down">
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            CONTATO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5 animate-fade-in-up delay-100">
            Fale <span className="gradient-text">Conosco</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-xl max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Estamos prontos para ajudar você a planejar a experiência perfeita
            no Hotel Pousada Bambuzal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        ref={sectionRef}
        className="bg-[#212121] py-16 md:py-24 px-5 md:px-10 xl:px-20"
        aria-label="Informações de contato"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* WhatsApp CTA – top priority */}
          <div className="reveal mb-14">
            <div
              className="
                relative overflow-hidden rounded-3xl p-8 md:p-12
                flex flex-col md:flex-row items-center justify-between gap-8
              "
              style={{
                background:
                  "linear-gradient(135deg, #1a3d20 0%, #0d2414 50%, #1a3d20 100%)",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.06) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <FaWhatsapp className="text-green-400 text-3xl" aria-hidden="true" />
                  <span className="text-xs font-bold tracking-widest text-green-400 uppercase">
                    Atendimento Rápido
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Chame no WhatsApp
                </h2>
                <p className="text-neutral-400 text-sm md:text-base">
                  Resposta rápida e atendimento personalizado para sua reserva.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <a
                  href="https://wa.me/5522988112400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3 px-8 py-4 rounded-full
                    font-bold text-base text-white
                    bg-green-600 hover:bg-green-500
                    transition-all duration-300
                    hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]
                  "
                  aria-label="Iniciar conversa no WhatsApp com o Hotel Pousada Bambuzal"
                >
                  <FaWhatsapp className="text-xl" aria-hidden="true" />
                  (22) 9 8811-2400
                </a>
              </div>
            </div>
          </div>

          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center mb-16">
            <div className="reveal delay-100 w-full flex justify-center">
              <ContactCard
                href="https://www.google.com/maps?q=-22.3349936+-42.1890027"
                ariaLabel="Ver localização no Google Maps"
              >
                <LuMapPin className="h-10 w-10 text-orange-500" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">Localização</h2>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  Estrada do Sana, N° 2000<br />Sana, Macaé — RJ
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-semibold mt-1">
                  Ver no mapa <ArrowRight className="w-3 h-3" />
                </span>
              </ContactCard>
            </div>

            <div className="reveal delay-200 w-full flex justify-center">
              <ContactCard
                href="tel:+5522988112400"
                ariaLabel="Ligar para o Hotel Pousada Bambuzal"
              >
                <BsTelephoneFill className="h-10 w-10 text-orange-500" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">Telefone</h2>
                <p className="text-sm text-neutral-300 font-light">
                  (22) 9 8811-2400
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-semibold mt-1">
                  Ligar agora <ArrowRight className="w-3 h-3" />
                </span>
              </ContactCard>
            </div>

            <div className="reveal delay-300 w-full flex justify-center">
              <ContactCard
                href="https://wa.me/5522988112400"
                ariaLabel="Enviar mensagem pelo WhatsApp"
              >
                <FaWhatsapp className="h-10 w-10 text-orange-500" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">WhatsApp</h2>
                <p className="text-sm text-neutral-300 font-light">
                  (22) 9 8811-2400
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-semibold mt-1">
                  Enviar mensagem <ArrowRight className="w-3 h-3" />
                </span>
              </ContactCard>
            </div>

            <div className="reveal delay-400 w-full flex justify-center">
              <ContactCard
                href="mailto:hotelpousadabambuzal@gmail.com"
                ariaLabel="Enviar email para o Hotel Pousada Bambuzal"
              >
                <LuMail className="h-10 w-10 text-orange-500" aria-hidden="true" />
                <h2 className="text-lg font-bold text-white">E-mail</h2>
                <p className="text-xs text-neutral-400 font-light text-center">
                  hotelpousadabambuzal@gmail.com
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-orange-400 font-semibold mt-1">
                  Enviar e-mail <ArrowRight className="w-3 h-3" />
                </span>
              </ContactCard>
            </div>
          </div>

          {/* Social media section */}
          <div className="reveal">
            <div className="rounded-3xl border border-white/8 p-8 md:p-12 bg-neutral-900/40">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Nos siga nas redes sociais
                </h2>
                <p className="text-neutral-400 text-sm">
                  Acompanhe novidades, fotos incríveis e promoções exclusivas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acessar ${label} do Hotel Pousada Bambuzal`}
                    className={`
                      group flex items-center gap-4 px-8 py-4 rounded-2xl
                      glass border border-white/8
                      text-neutral-300 ${color}
                      transition-all duration-300
                      hover:border-orange-500/30
                      hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                      card-hover
                    `}
                  >
                    <Icon className="text-3xl text-orange-500 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <div>
                      <div className="font-bold text-sm text-white">{label}</div>
                      <div className="text-xs text-neutral-500">{handle}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-2" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
