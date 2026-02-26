"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ── Individual gallery cell ──────────────────────────────── */
function GalleryItem({ src, index, onOpen }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-[#262626]"
      onClick={() => loaded && onOpen(index)}
    >
      {/* Skeleton shimmer — visible until image is ready */}
      {!loaded && <div className="absolute inset-0 skeleton rounded-xl" />}

      {/* Image — fades in on load */}
      <img
        src={src}
        alt={`Foto da galeria ${index + 1}`}
        loading={index < 16 ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Hover overlay — only when loaded */}
      {loaded && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
        </div>
      )}
    </div>
  );
}

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

  // Reset lightbox loaded state on slide change
  useEffect(() => {
    setLightboxLoaded(false);
  }, [lightbox]);

  // Keyboard navigation
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

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {/* Fixed grid — positions never shift regardless of load order */}
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
          <div
            className="relative max-w-[90vw] max-h-[88vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Skeleton while lightbox image loads */}
            {!lightboxLoaded && (
              <div className="w-[80vw] max-w-[900px] aspect-video skeleton rounded-xl" />
            )}
            <img
              key={lightbox}
              src={images[lightbox]}
              alt={`Foto ${lightbox + 1}`}
              loading="eager"
              decoding="sync"
              onLoad={() => setLightboxLoaded(true)}
              className={`object-contain max-h-[88vh] max-w-[90vw] w-auto rounded-xl shadow-2xl transition-opacity duration-300 ${
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
        </div>
      )}
    </>
  );
}
