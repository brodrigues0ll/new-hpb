import { Images, MapPin } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import gallery from "@/app/galeria/gallery.json";

export const metadata = {
  title: "Galeria de Fotos",
  description:
    "Galeria de fotos do Hotel Pousada Bambuzal em Sana, Macaé - RJ. Veja imagens das acomodações, área natural, Rio Sana, piscinas e os momentos inesquecíveis que esperamos para você.",
  alternates: {
    canonical: "/galeria",
  },
  openGraph: {
    title: "Galeria de Fotos — Hotel Pousada Bambuzal",
    description:
      "Fotos dos chalés, suítes, natureza e Rio Sana do Hotel Pousada Bambuzal em Sana, Macaé - RJ.",
    url: "https://www.hotelpousadabambuzal.com/galeria",
    images: [
      {
        url: "https://storage.googleapis.com/hp-bambuzal/about/2.jpg",
        width: 1200,
        height: 630,
        alt: "Área natural do Hotel Pousada Bambuzal em Sana, Macaé - RJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://storage.googleapis.com/hp-bambuzal/about/2.jpg"],
  },
};

export default function Galeria() {
  return (
    <main className="min-h-screen bg-[#212121]">
      {/* Hero header */}
      <section className="px-4 sm:px-6 md:px-10 xl:px-20 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-bold tracking-widest glass">
              <Images className="w-3.5 h-3.5" aria-hidden="true" />
              GALERIA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Momentos do
            <span className="gradient-text"> Bambuzal</span>
          </h1>

          <div className="flex items-center gap-2 text-neutral-400">
            <MapPin className="w-4 h-4 text-orange-500" aria-hidden="true" />
            <span className="text-sm">Sana, Macaé — RJ</span>
            <span className="text-neutral-600 mx-2">·</span>
            <span className="text-sm text-neutral-500">{gallery.length} fotos</span>
          </div>

          <div className="section-divider-left mt-8" />
        </div>
      </section>

      {/* Gallery grid */}
      <section className="px-3 sm:px-4 md:px-6 xl:px-10 pb-16 sm:pb-24">
        <div className="max-w-[1600px] mx-auto">
          <GalleryGrid images={gallery} />
        </div>
      </section>
    </main>
  );
}
