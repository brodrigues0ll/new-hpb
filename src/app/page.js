"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import { AccommodCard } from "@/components/AccommodCard";
import {
  TreePine,
  Waves,
  Star,
  MapPin,
  CalendarDays,
  ArrowRight,
  BadgeCheck,
  Users,
  Sunset,
} from "lucide-react";

const BOOKING_URL =
  "https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br";

const ACCOMMODATIONS = [
  {
    title: "Suíte Simples",
    desc: "Suítes com Vista para o rio, uma ótima opção para se ouvir as águas do rio Sana.",
    href: "/acomodacoes/simplesuit",
    srcImg:
      "https://storage.googleapis.com/hp-bambuzal/acomod/suite-simples/home-cover.jpg",
  },
  {
    title: "Chalé Duplo",
    desc: "Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante das montanhas.",
    href: "/acomodacoes/doublesuit",
    srcImg:
      "https://storage.googleapis.com/hp-bambuzal/acomod/chale-duplo/home-cover.jpg",
  },
  {
    title: "Chalé Família",
    desc: "Com dois quartos, nossos chalés família são perfeitos para acomodar todos com conforto e elegância.",
    href: "/acomodacoes/familysuit",
    srcImg:
      "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/home-cover.jpg",
  },
];

const FEATURES = [
  {
    icon: TreePine,
    title: "Natureza Exuberante",
    desc: "Mais de 16.000 m² de natureza preservada, trilhas e paisagens serenas da Serra de Macaé.",
  },
  {
    icon: Waves,
    title: "Rio Sana",
    desc: "Localizado às margens do cristalino Rio Sana, perfeito para banhos refrescantes e momentos inesquecíveis.",
  },
  {
    icon: Star,
    title: "Conforto Premium",
    desc: "Acomodações equipadas com todo o conforto que você merece, sem abrir mão da autenticidade.",
  },
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    desc: "No coração do Sana, a poucos minutos das principais atrações da região serrana de Macaé - RJ.",
  },
];

const STATS = [
  { value: "16.000", unit: "m²", label: "de natureza preservada" },
  { value: "4", unit: "+", label: "tipos de acomodação" },
  { value: "Rio Sana", unit: "", label: "às suas portas" },
  { value: "100%", unit: "", label: "experiência autêntica" },
];

// Custom hook for scroll reveal
function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options },
    );

    const children = el.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );
    if (children.length > 0) {
      children.forEach((child) => observer.observe(child));
    } else {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const currentYear = new Date().getFullYear();
  const aboutRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const accommodRef = useScrollReveal();
  const eventsRef = useScrollReveal();
  const packsRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <main>
      {/* ─── Hero Carousel ─── */}
      <Carousel />

      {/* ─── About Section ─── */}
      <section
        ref={aboutRef}
        id="sobre"
        className="bg-[#1a1a1a] py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden"
        aria-labelledby="about-heading"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Label */}
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="section-divider-left section-divider" />
            <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">
              Sobre Nós
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Text column */}
            <div className="order-2 xl:order-1">
              <h2
                id="about-heading"
                className="reveal text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              >
                Hotel Pousada <span className="gradient-text">Bambuzal</span>
              </h2>
              <p className="reveal delay-100 text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
                São mais de{" "}
                <strong className="text-orange-400">16.000 m²</strong> da mais
                pura beleza natural da região serrana de Macaé. Um paraíso
                criado para quem busca tranquilidade, contato genuíno com a
                natureza e o conforto que você merece.
              </p>
              <p className="reveal delay-200 text-base text-neutral-400 leading-relaxed mb-8">
                Localizado no encantador vilarejo do Sana, o Hotel Pousada
                Bambuzal oferece uma experiência única onde as montanhas, o rio
                cristalino e a exuberante vegetação se tornam parte da sua
                estadia.
              </p>

              {/* Stats grid */}
              <div className="reveal delay-300 grid grid-cols-2 gap-4 mb-8">
                {STATS.map(({ value, unit, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl bg-neutral-900/80 border border-white/5"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400">
                      {value}
                      <span className="text-orange-500/70">{unit}</span>
                    </div>
                    <div className="text-xs text-neutral-500 mt-1 leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal delay-400">
                <Link
                  href="/contato"
                  className="
                    inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                    font-bold text-sm tracking-wide text-white
                    btn-cta
                  "
                >
                  <span>Conheça Mais</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Images column */}
            <div className="order-1 xl:order-2 grid grid-cols-2 gap-4 h-full">
              <div className="reveal-left delay-100 relative rounded-2xl overflow-hidden h-44 sm:h-56 md:h-80 xl:h-[420px] img-zoom shadow-card">
                <Image
                  src="https://storage.googleapis.com/hp-bambuzal/about/1.jpg"
                  alt="Vista externa do Hotel Pousada Bambuzal"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 45vw, 600px"
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="reveal-right delay-200 relative rounded-2xl overflow-hidden h-44 sm:h-56 md:h-80 xl:h-[420px] mt-6 sm:mt-8 img-zoom shadow-card">
                <Image
                  src="https://storage.googleapis.com/hp-bambuzal/about/2.jpg"
                  alt="Área verde do Hotel Pousada Bambuzal"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 45vw, 600px"
                />
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features / Highlights ─── */}
      <section
        ref={featuresRef}
        className="bg-[#212121] py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden"
        aria-labelledby="features-heading"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="reveal flex justify-center mb-4">
            <div className="section-divider" />
          </div>
          <h2
            id="features-heading"
            className="reveal text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Por que escolher o <span className="gradient-text">Bambuzal?</span>
          </h2>
          <p className="reveal delay-100 text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-14">
            Uma experiência que combina a riqueza da natureza com o conforto que
            você merece.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal delay-${(i + 1) * 100} p-6 rounded-2xl bg-neutral-900/60 border border-white/5 card-hover group text-left`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-orange-400"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Accommodations Preview ─── */}
      <section
        ref={accommodRef}
        className="bg-[#1a1a1a] py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden"
        aria-labelledby="accommodations-heading"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="section-divider-left section-divider" />
                <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">
                  Acomodações
                </span>
              </div>
              <h2
                id="accommodations-heading"
                className="reveal text-3xl md:text-5xl font-bold text-white leading-tight"
              >
                Nossos <span className="gradient-text">Chalés & Suítes</span>
              </h2>
            </div>
            <div className="reveal delay-200 shrink-0">
              <Link
                href="/acomodacoes"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-full
                  border border-orange-500/40 text-orange-400
                  text-sm font-bold tracking-wide
                  hover:bg-orange-500/10 hover:border-orange-400
                  transition-all duration-300
                "
              >
                Ver Todas
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            {ACCOMMODATIONS.map(({ title, desc, href, srcImg }, i) => (
              <div
                key={title}
                className={`reveal delay-${(i + 1) * 100} w-full max-w-[360px]`}
              >
                <AccommodCard
                  title={title}
                  desc={desc}
                  href={href}
                  srcImg={srcImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Events Section ─── */}
      <section
        ref={eventsRef}
        className="relative py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden bg-[#212121]"
        aria-labelledby="events-heading"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(234,88,12,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal flex items-center gap-3 mb-4">
                <div className="section-divider-left section-divider" />
                <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">
                  Eventos
                </span>
              </div>
              <h2
                id="events-heading"
                className="reveal text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
              >
                Celebre momentos{" "}
                <span className="gradient-text">especiais</span> aqui
              </h2>
              <p className="reveal delay-100 text-neutral-400 text-base md:text-lg leading-relaxed mb-8">
                Aqui se encontra o quadro de todos os eventos que acontecem
                durante o ano no nosso lugarzinho. Desde festivais de natureza a
                celebrações íntimas, cada evento é planejado para criar memórias
                únicas.
              </p>

              <div className="reveal delay-200 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: CalendarDays, text: "Festivais sazonais" },
                  { icon: Users, text: "Eventos corporativos" },
                  { icon: Star, text: "Celebrações privadas" },
                  { icon: Sunset, text: "Retiros de bem-estar" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-white/5"
                  >
                    <Icon
                      className="w-5 h-5 text-orange-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-neutral-300">{text}</span>
                  </div>
                ))}
              </div>

              <div className="reveal delay-300">
                <Link
                  href="/contato"
                  className="
                    inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                    font-bold text-sm tracking-wide text-white btn-cta
                  "
                >
                  <span>Consultar Disponibilidade</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Decorative card */}
            <div className="reveal-right delay-200">
              <div className="relative rounded-3xl overflow-hidden bg-neutral-900/60 border border-white/8 p-8 md:p-10">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 70%, rgba(234,88,12,0.08) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                    <CalendarDays
                      className="w-8 h-8 text-orange-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Agenda {currentYear}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Nosso calendário de eventos está sendo preparado com
                    experiências únicas para você e sua família. Entre em
                    contato para saber mais sobre as próximas atrações.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-bold">
                    <BadgeCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Eventos exclusivos para hóspedes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Packages Section ─── */}
      <section
        ref={packsRef}
        className="bg-[#1a1a1a] py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden"
        aria-labelledby="packages-heading"
      >
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="reveal flex justify-center mb-4">
            <div className="section-divider" />
          </div>
          <h2
            id="packages-heading"
            className="reveal text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Pacotes para <span className="gradient-text">{currentYear}</span>
          </h2>
          <p className="reveal delay-100 text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mb-14">
            Aqui se encontra o quadro de pacotes exclusivos que oferecemos
            durante o ano. Experiências pensadas para cada tipo de viajante.
          </p>

          <div className="reveal delay-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Fuga Romântica",
                desc: "Para casais que buscam intimidade e conforto em meio à natureza.",
                highlight: "2 noites",
                icon: "✦",
              },
              {
                name: "Família na Serra",
                desc: "Chalé família com programação especial para crianças e adultos.",
                highlight: "Mais Popular",
                featured: true,
                icon: "★",
              },
              {
                name: "Retiro Aventura",
                desc: "Trilhas, banho de rio e experiências únicas na natureza serrana.",
                highlight: "3 noites",
                icon: "◈",
              },
            ].map(({ name, desc, highlight, featured, icon }) => (
              <div
                key={name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 card-hover ${
                  featured
                    ? "bg-orange-600/10 border-orange-500/40"
                    : "bg-neutral-900/60 border-white/5"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-xs font-bold tracking-widest">
                    MAIS POPULAR
                  </div>
                )}
                <div
                  className={`text-3xl mb-4 ${
                    featured ? "text-orange-400" : "text-neutral-500"
                  }`}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div
                  className={`text-xs font-bold tracking-widest mb-2 ${
                    featured ? "text-orange-400" : "text-neutral-500"
                  }`}
                >
                  {highlight.toUpperCase()}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    featured ? "text-white" : "text-neutral-200"
                  }`}
                >
                  {name}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {desc}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 ${
                    featured
                      ? "text-orange-400 hover:text-orange-300"
                      : "text-neutral-400 hover:text-orange-400"
                  }`}
                >
                  Consultar valores
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA Banner ─── */}
      <section
        ref={ctaRef}
        className="relative py-16 sm:py-24 md:py-32 px-5 md:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0a00 0%, #2d1200 30%, #1a0a00 70%, #000 100%)",
        }}
        aria-labelledby="cta-heading"
      >
        {/* Glow effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(234,88,12,0.2) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <div className="reveal flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest glass">
              <Star className="w-3 h-3" aria-hidden="true" />
              RESERVE AGORA
            </span>
          </div>
          <h2
            id="cta-heading"
            className="reveal text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
          >
            Sua próxima <span className="shimmer-text">escapada</span> começa
            aqui
          </h2>
          <p className="reveal delay-100 text-neutral-400 text-base md:text-lg max-w-xl mx-auto mb-10">
            Não espere mais para viver a experiência única do Bambuzal.
            Verifique a disponibilidade e faça sua reserva hoje mesmo.
          </p>
          <div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <button className="px-10 py-4 rounded-full font-bold text-base tracking-wider text-white btn-cta animate-pulse-glow">
                <span>VERIFICAR DISPONIBILIDADE</span>
              </button>
            </a>
            <a
              href="https://wa.me/5522988112400"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-full
                border border-white/20 text-white text-sm font-bold tracking-wide
                hover:bg-white/5 hover:border-white/40
                transition-all duration-300
              "
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
