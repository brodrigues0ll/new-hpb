"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import events from "./events.json";

/* Retorna { days, period } para exibição destacada */
function formatDateParts(startStr, endStr) {
  const s = new Date(startStr + "T12:00:00");
  const e = new Date(endStr + "T12:00:00");
  const day1 = s.getDate();
  const day2 = e.getDate();

  if (s.getMonth() === e.getMonth()) {
    const month = e.toLocaleDateString("pt-BR", { month: "long" });
    return {
      days: day1 === day2 ? `${day1}` : `${day1} — ${day2}`,
      period: `de ${month}`,
    };
  }

  const m1 = s.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
  const m2 = e.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
  return { days: `${day1} ${m1} — ${day2} ${m2}`, period: "" };
}

/* Filtra eventos cujo endDate já passou */
function getUpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events.filter(
    (event) => new Date(event.endDate + "T23:59:59") >= today,
  );
}

export const EventsSection = () => {
  const sectionRef = useRef(null);
  const upcomingEvents = getUpcomingEvents();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    el.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    ).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  /* Nenhum evento futuro — oculta a seção */
  if (upcomingEvents.length === 0) return null;

  const eventsJsonLd = {
    "@context": "https://schema.org",
    "@graph": upcomingEvents.map((event) => ({
      "@type": "Event",
      name: `${event.title} — Hotel Pousada Bambuzal`,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Hotel Pousada Bambuzal",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Estrada do Sana, 2000",
          addressLocality: "Sana",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
      },
      organizer: { "@id": "https://www.hotelpousadabambuzal.com/#organization" },
      url: "https://www.hotelpousadabambuzal.com/contato",
    })),
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden bg-[#212121]"
      aria-labelledby="events-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(234,88,12,0.06) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="section-divider-left section-divider" />
            <span className="text-xs font-bold tracking-[0.25em] text-orange-500 uppercase">
              Agenda {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="events-heading"
              className="reveal text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl"
            >
              Celebre momentos <span className="gradient-text">especiais</span>{" "}
              aqui
            </h2>
            <div className="reveal delay-100 shrink-0">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm tracking-wide text-white btn-cta"
              >
                <span>Consultar disponibilidade</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {upcomingEvents.map((event, i) => {
            const { days, period } = formatDateParts(
              event.startDate,
              event.endDate,
            );
            const revealClass = i % 2 === 1 ? "reveal-right" : "reveal";
            const delayClass = `delay-${Math.min((i % 3) * 100, 300)}`;

            return (
              <div
                key={`${event.title}-${event.startDate}`}
                className={`${revealClass} ${delayClass}`}
              >
                <div
                  className="h-full rounded-2xl border border-white/8 overflow-hidden flex flex-col group hover:border-orange-500/25 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(160deg, #1e1e1e 0%, #181818 100%)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Date hero area */}
                  <div
                    className="px-6 pt-6 pb-5 relative"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(234,88,12,0.02) 100%)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-widest">
                        {event.month.toUpperCase()}
                      </span>
                      {event.subtitle && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs">
                          {event.subtitle}
                        </span>
                      )}
                    </div>

                    {/* Date — hero text */}
                    <p
                      className="font-bold text-white leading-none"
                      style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)" }}
                    >
                      {days}
                    </p>
                    {period && (
                      <p className="text-neutral-400 text-sm mt-1">{period}</p>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="px-6 py-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-base font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {event.highlights.length > 0 && (
                      <ul className="flex flex-col gap-1.5 mt-1">
                        {event.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-xs text-neutral-300"
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bottom accent line on hover */}
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
