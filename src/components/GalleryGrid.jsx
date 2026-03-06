"use client";

import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/*
  Optimization strategy for 5MB+ source images:
  - Grid thumbnails:  next/image with fill + sizes → Next.js serves ~50-150 KB per thumb
  - Lightbox:         next/image at larger size     → Next.js serves ~400-800 KB
  - minimumCacheTTL=1yr in next.config.js caches every processed variant server-side
  - loading="lazy" → browser only downloads images as they enter the viewport
  - Only the first 8 cells use loading="eager" (above the fold on any device)
*/

/* ── Individual thumbnail cell ───────────────────────────── */
function GalleryItem({ src, index, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      className="relative block w-full aspect-square overflow-hidden rounded-xl cursor-pointer group bg-[#262626]"
      onClick={() => onOpen(index)}
      aria-label={`Abrir foto ${index + 1}`}
    >
      {/* Skeleton shimmer until the optimized thumbnail arrives */}
      {!loaded && <div className="absolute inset-0 skeleton rounded-xl" />}

      <Image
        src={src}
        alt={`Foto ${index + 1} do Hotel Pousada Bambuzal em Sana, Macaé - RJ`}
        fill
        /*
          sizes tells the browser (and Next.js optimizer) the actual rendered width:
          mobile ≈ 50vw, tablet ≈ 33vw, desktop ≈ 25vw
          → Next.js picks the closest breakpoint from imageSizes/deviceSizes
          → 5 MB original becomes ~50-150 KB optimized thumbnail
        */
        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        quality={72}
        loading={index < 8 ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Hover overlay */}
      {loaded && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
        </div>
      )}
    </button>
  );
}

GalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

/* ── Main grid + lightbox ─────────────────────────────────── */
export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i + 1) % images.length),
    [images.length]
  );
  const close = () => setLightbox(null);

  // Reset load state on each slide change
  useEffect(() => setLightboxLoaded(false), [lightbox]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    globalThis.addEventListener("keydown", onKey);
    return () => globalThis.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = lightbox === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* Fixed grid — no layout shift because every cell is aspect-square */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
        {images.map((src, index) => (
          <GalleryItem
            key={src}
            src={src}
            index={index}
            onOpen={setLightbox}
          />
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-[9999] flex items-center justify-center m-0 p-0 max-w-none max-h-none w-full h-full"
          style={{ background: "rgba(5,5,5,0.96)", border: "none" }}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          aria-label="Galeria de fotos"
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass border border-white/15 text-white hover:text-orange-400 flex items-center justify-center transition-all"
            onClick={close}
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-neutral-400 tracking-widest select-none">
            {lightbox + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-8 z-10 w-11 h-11 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image area */}
          <div className="relative max-w-[92vw] max-h-[90vh] flex items-center justify-center">
            {/* Skeleton while the high-res version loads */}
            {!lightboxLoaded && (
              <div className="w-[80vw] max-w-[960px] aspect-video skeleton rounded-xl" />
            )}

            {/*
              Lightbox image: next/image at quality=88, sizes=90vw
              → 5 MB original becomes ~400-800 KB at screen resolution
              → Served from Next.js cache after first view
            */}
            <Image
              key={lightbox}
              src={images[lightbox]}
              alt={`Foto ${lightbox + 1} do Hotel Pousada Bambuzal em Sana, Macaé - RJ`}
              width={1920}
              height={1280}
              sizes="92vw"
              quality={88}
              loading="eager"
              priority
              onLoad={() => setLightboxLoaded(true)}
              className={`object-contain max-h-[90vh] max-w-[92vw] w-auto rounded-xl shadow-2xl transition-opacity duration-400 ${
                lightboxLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-8 z-10 w-11 h-11 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </dialog>
      )}
    </>
  );
}

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
