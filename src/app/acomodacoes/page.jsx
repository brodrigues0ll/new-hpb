"use client";

import { useEffect, useRef } from "react";
import { AccommodCard } from "@/components/AccommodCard";
import { BedDouble, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Acomodacoes() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const reveals = el.querySelectorAll(".reveal, .reveal-scale");
    reveals.forEach((r) => observer.observe(r));

    return () => observer.disconnect();
  }, []);

  const accommodations = [
    {
      title: "Suíte Simples",
      desc: "Suítes com Vista para o rio, uma ótima opção para se ouvir as águas do rio Sana. Ambiente aconchegante com decoração rústica e modernidade.",
      href: "/acomodacoes/simplesuit",
      srcImg:
        "https://storage.googleapis.com/hp-bambuzal/acomod/suite-simples/home-cover.jpg",
    },
    {
      title: "Chalé Duplo",
      desc: "Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante das montanhas, piscinas e do Rio Sana.",
      href: "/acomodacoes/doublesuit",
      srcImg:
        "https://storage.googleapis.com/hp-bambuzal/acomod/chale-duplo/home-cover.jpg",
    },
    {
      title: "Chalé Triplo",
      desc: "Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante. Além de um amplo espaço interno.",
      href: "/acomodacoes/triplesuit",
      srcImg:
        "https://storage.googleapis.com/hp-bambuzal/acomod/chale-triplo/home-cover.jpg",
    },
    {
      title: "Chalé Família",
      desc: "Temos opções para quem ama viajar em família e que querem ficar juntinhos. Com dois quartos, nossos chalés família são perfeitos para acomodar todos com conforto.",
      href: "/acomodacoes/familysuit",
      srcImg:
        "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/home-cover.jpg",
    },
    {
      title: "Suíte Premium",
      desc: "Suíte com hidromassagem, varanda privativa com rede e vista para o rio. O ambiente perfeito para relaxar e desfrutar da natureza ao máximo.",
      href: "/acomodacoes/premiumsuite",
      srcImg:
        "https://storage.googleapis.com/hp-bambuzal/acomod/suite-premium/page-carousel1.jpg",
    },
  ];

  return (
    <main>
      {/* Hero section */}
      <section
        className="relative pt-36 pb-20 px-5 md:px-10 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #161616 0%, #1a1a1a 60%, #212121 100%)",
        }}
        aria-label="Cabeçalho da página de acomodações"
      >
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 60% 0%, rgba(234,88,12,0.07) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold tracking-[0.2em] glass mb-6 animate-fade-in-down">
            <BedDouble className="w-3.5 h-3.5" aria-hidden="true" />
            ACOMODAÇÕES
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-5 animate-fade-in-up delay-100">
            Nossos <span className="gradient-text">Chalés & Suítes</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Cada acomodação foi cuidadosamente projetada para proporcionar
            conforto máximo em meio à beleza natural do Sana, Macaé.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section
        ref={sectionRef}
        className="bg-[#212121] py-16 md:py-24 px-5 md:px-10 xl:px-20"
        aria-label="Lista de acomodações"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            {accommodations.map(({ title, desc, href, srcImg }, i) => (
              <div
                key={title}
                className={`reveal-scale w-full max-w-[360px]`}
                style={{ transitionDelay: `${i * 100}ms` }}
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

          {/* Booking CTA below cards */}
          <div className="mt-16 text-center reveal">
            <p className="text-neutral-400 text-sm mb-5">
              Pronto para reservar sua estadia?
            </p>
            <a
              href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 rounded-full font-bold text-base tracking-wider text-white btn-cta animate-pulse-glow">
                <span>VERIFICAR DISPONIBILIDADE</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
