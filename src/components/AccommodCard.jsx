"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORY_LABELS = {
  simplesuit: "Suíte",
  doublesuit: "Chalé",
  triplesuit: "Chalé",
  familysuit: "Família",
  premiumsuite: "Premium",
};

export const AccommodCard = ({ title, desc, href, srcImg }) => {
  const slug = href ? href.split("/").pop() : "";
  const category = CATEGORY_LABELS[slug] || "Suíte";

  return (
    <article className="group relative bg-neutral-900 rounded-2xl overflow-hidden card-hover shadow-card w-full max-w-[360px]">
      {/* Image container with zoom */}
      <div className="relative h-56 w-full overflow-hidden img-zoom">
        <Image
          src={srcImg}
          alt={`${title} — Hotel Pousada Bambuzal, Sana - Macaé RJ`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 360px"
          className="transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.2) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Category badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-white glass border border-white/15 uppercase">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
          {desc}
        </p>

        {/* CTA link */}
        <Link
          href={href}
          className="
            inline-flex items-center gap-2 mt-2
            text-sm font-bold text-orange-500
            hover:text-orange-400
            transition-all duration-300
            group/link
          "
          aria-label={`Ver detalhes de ${title}`}
        >
          <span className="relative">
            Ver Detalhes
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-orange-500 group-hover/link:w-full transition-all duration-300 rounded" />
          </span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Bottom accent border */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </article>
  );
};

AccommodCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  srcImg: PropTypes.string.isRequired,
};
