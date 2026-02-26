"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const BOOKING_URL =
  "https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br";

const CAROUSEL_IMAGES = [
  "https://storage.googleapis.com/hp-bambuzal/carousel/1.jpg",
  "https://storage.googleapis.com/hp-bambuzal/carousel/2.jpg",
  "https://storage.googleapis.com/hp-bambuzal/carousel/3.jpg",
  "https://storage.googleapis.com/hp-bambuzal/carousel/4.jpg",
];

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesArray = CAROUSEL_IMAGES;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [titleVisible, setTitleVisible] = useState(true);
  const intervalRef = useRef(null);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || imagesArray.length === 0) return;
      setIsTransitioning(true);
      setTitleVisible(false);

      setTimeout(() => {
        setCurrentImageIndex(
          (index + imagesArray.length) % imagesArray.length
        );
        setIsTransitioning(false);
        setTimeout(() => setTitleVisible(true), 100);
      }, 400);
    },
    [isTransitioning, imagesArray.length]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentImageIndex + 1);
  }, [currentImageIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentImageIndex - 1);
  }, [currentImageIndex, goToSlide]);

  // Auto advance
  useEffect(() => {
    if (imagesArray.length === 0) return;
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(intervalRef.current);
  }, [imagesArray.length, nextSlide]);

  // Ripple effect handler
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.classList.add("ripple-effect");
    const existing = btn.querySelector(".ripple-effect");
    if (existing) existing.remove();
    btn.appendChild(circle);
  };

  return (
    <section
      className="h-screen min-h-[580px] relative -mt-20 md:-mt-24 overflow-hidden"
      aria-label="Galeria de imagens do hotel"
    >
        {/* Images */}
        {imagesArray.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
            aria-hidden={index !== currentImageIndex}
          >
            <Image
              src={imageUrl}
              alt={`Vista do Hotel Pousada Bambuzal - imagem ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                transform:
                  index === currentImageIndex ? "scale(1.06)" : "scale(1)",
                transition: "transform 8s ease-out, opacity 1s ease-in-out",
              }}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 hero-overlay" aria-hidden="true" />

        {/* Side gradient overlays */}
        <div
          className="absolute inset-y-0 left-0 w-1/4 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.5), transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/4 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(10,10,10,0.5), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-20 sm:pb-28 md:pb-36 px-5 sm:px-8 md:px-12 xl:px-24">
          {/* Location badge */}
          <div
            className={`flex items-center gap-2 mb-5 transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-orange-400 text-xs font-semibold tracking-widest border border-orange-500/30">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              SANA, MACAÉ — RJ
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight mb-4 max-w-3xl transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Lugar de
            <span className="gradient-text block">Paz</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm sm:text-base md:text-xl text-neutral-300 max-w-xs sm:max-w-sm md:max-w-xl leading-relaxed mb-6 sm:mb-8 transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            Um paraíso em meio às montanhas da região serrana de Macaé para
            você desfrutar da natureza com requinte e qualidade.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "340ms" }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                onClick={handleRipple}
                className="
                  relative overflow-hidden
                  px-6 py-3.5 sm:px-8 sm:py-4 md:px-12 md:py-5
                  rounded-full
                  text-xs sm:text-sm md:text-base font-bold tracking-widest text-white
                  bg-orange-600
                  hover:bg-orange-500
                  transition-all duration-300
                  animate-pulse-glow
                  focus-visible:outline-2 focus-visible:outline-orange-400
                "
                aria-label="Verificar disponibilidade de acomodações"
              >
                <span className="relative z-10">VERIFICAR DISPONIBILIDADE</span>
              </button>
            </a>
          </div>
        </div>

        {/* Prev / Next arrows */}
        {imagesArray.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Imagem anterior"
              className="
                absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
                w-11 h-11 md:w-13 md:h-13 rounded-full
                glass border border-white/15
                text-white hover:text-orange-400 hover:border-orange-400/40
                flex items-center justify-center
                transition-all duration-300 hover:scale-110
              "
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próxima imagem"
              className="
                absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
                w-11 h-11 md:w-13 md:h-13 rounded-full
                glass border border-white/15
                text-white hover:text-orange-400 hover:border-orange-400/40
                flex items-center justify-center
                transition-all duration-300 hover:scale-110
              "
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {imagesArray.length > 1 && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2"
            role="tablist"
            aria-label="Indicadores de slide"
          >
            {imagesArray.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentImageIndex}
                aria-label={`Ir para imagem ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-400 ${
                  index === currentImageIndex
                    ? "w-8 h-2 bg-orange-500"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
    </section>
  );
};
