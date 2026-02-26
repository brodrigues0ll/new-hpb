"use client";

import { useEffect } from "react";
import gallery from "@/app/galeria/gallery.json";

const STORAGE_KEY = "gallery_prefetch_ts";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 horas
const BATCH_SIZE = 8;
const BATCH_DELAY_MS = 100;

function prefetchBatch(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // resolve mesmo em erro (404 etc.)
          img.src = src;
        })
    )
  );
}

export default function GalleryPrefetcher() {
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // Se já foi feito nas últimas 24h, pula
      try {
        const last = localStorage.getItem(STORAGE_KEY);
        if (last && Date.now() - parseInt(last, 10) < CACHE_TTL_MS) return;
      } catch (_) {}

      // Aguarda o browser ficar ocioso para não competir com o conteúdo da página
      await new Promise((resolve) => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(resolve, { timeout: 4000 });
        } else {
          setTimeout(resolve, 2500);
        }
      });

      if (cancelled) return;

      // Prefetch em batches
      for (let i = 0; i < gallery.length; i += BATCH_SIZE) {
        if (cancelled) return;
        const batch = gallery.slice(i, i + BATCH_SIZE);
        await prefetchBatch(batch);
        // Pequena pausa entre batches para não saturar a conexão
        if (i + BATCH_SIZE < gallery.length) {
          await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
        }
      }

      // Marca como concluído
      try {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
      } catch (_) {}
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
