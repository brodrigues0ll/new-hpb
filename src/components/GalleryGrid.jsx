"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null); // index or null

  const open = (index) => setLightbox(index);
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-3 space-y-3">
        {images.map((src, index) => (
          <div
            key={src}
            className="break-inside-avoid relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => open(index)}
          >
            {/* Plain <img> so the exact GCS URL is requested — matches what GalleryPrefetcher cached */}
            <img
              src={src}
              alt={`Foto da galeria ${index + 1}`}
              loading={index < 12 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(5,5,5,0.96)" }}
          onClick={close}
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
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-neutral-400 tracking-widest">
            {lightbox + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[88vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightbox}
              src={images[lightbox]}
              alt={`Foto ${lightbox + 1}`}
              loading="eager"
              decoding="sync"
              className="object-contain max-h-[88vh] w-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full glass border border-white/15 text-white hover:text-orange-400 hover:border-orange-400/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
