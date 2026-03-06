"use client";

import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin, ArrowLeft } from "lucide-react";

export default function AccommodationCarousel({ images = [], title, badgeText }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || images.length <= 1) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((index + images.length) % images.length);
        setIsTransitioning(false);
      }, 400);
    },
    [isTransitioning, images.length]
  );

  const next = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prev = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  useEffect(() => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [images.length, next]);

  return (
    <section className="relative h-[48vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] w-full overflow-hidden">
      {/* Images */}
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === currentIndex ? 1 : 0 }}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={src}
            alt={`${title} - imagem ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            quality={90}
            style={{
              objectFit: "cover",
              transform: index === currentIndex ? "scale(1.05)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Breadcrumb */}
      <div className="absolute top-8 left-5 md:left-10 z-20">
        <Link
          href="/acomodacoes"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-neutral-300 hover:text-orange-400 text-sm font-medium transition-all duration-300 hover:border-orange-500/30"
          aria-label="Voltar para acomodações"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Acomodações
        </Link>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 xl:px-20 pb-10 z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-bold tracking-widest glass mb-3 animate-fade-in-down">
            {badgeText}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-neutral-400 mt-2 animate-fade-in-up delay-100">
            <MapPin className="w-4 h-4 text-orange-500" aria-hidden="true" />
            <span className="text-sm">Sana, Macaé — RJ</span>
          </div>
        </div>
      </div>

      {/* Arrows — only when multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Imagem anterior"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima imagem"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots — only when multiple images */}
      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2"
          role="tablist"
          aria-label="Indicadores de slide"
        >
          {images.map((src, index) => (
            <button
              key={src}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para imagem ${index + 1}`}
              onClick={() => goToSlide(index)}
              className="p-3 flex items-center justify-center"
            >
              <span
                className={`rounded-full transition-all duration-300 block ${
                  index === currentIndex
                    ? "w-7 h-2 bg-orange-500"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

AccommodationCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired,
};
