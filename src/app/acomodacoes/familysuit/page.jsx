import { TbAirConditioningDisabled } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { LuRefrigerator } from "react-icons/lu";
import { CalendarCheck, Car, Palmtree, Users } from "lucide-react";
import AccommodationCarousel from "@/components/AccommodationCarousel";

const IMAGES = [
  "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel1.jpg",
  "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel2.jpg",
  "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel3.jpg",
];

export const metadata = {
  title: "Chalé Família",
  description:
    "Chalé Família com dois quartos separados, garagem privativa e varanda com rede no Hotel Pousada Bambuzal em Sana, Macaé - RJ. A escolha perfeita para famílias que buscam conforto e privacidade na serra.",
  alternates: {
    canonical: "/acomodacoes/familysuit",
  },
  openGraph: {
    title: "Chalé Família — Hotel Pousada Bambuzal",
    description:
      "Chalé com dois quartos, garagem privativa e varanda com rede em Sana, Macaé - RJ. Perfeito para famílias.",
    url: "https://www.hotelpousadabambuzal.com/acomodacoes/familysuit",
    images: [
      {
        url: "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel1.jpg",
        width: 1200,
        height: 630,
        alt: "Chalé Família para toda a família — Hotel Pousada Bambuzal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel1.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.hotelpousadabambuzal.com/" },
        { "@type": "ListItem", position: 2, name: "Acomodações", item: "https://www.hotelpousadabambuzal.com/acomodacoes" },
        { "@type": "ListItem", position: 3, name: "Chalé Família", item: "https://www.hotelpousadabambuzal.com/acomodacoes/familysuit" },
      ],
    },
    {
      "@type": "HotelRoom",
      name: "Chalé Família",
      description: "Chalé com dois quartos separados, garagem privativa e varanda com rede. Ideal para famílias que querem conforto e privacidade na Serra de Macaé.",
      url: "https://www.hotelpousadabambuzal.com/acomodacoes/familysuit",
      image: "https://storage.googleapis.com/hp-bambuzal/acomod/chale-familia/page-carousel1.jpg",
      containedInPlace: { "@id": "https://www.hotelpousadabambuzal.com/#lodging" },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Ar Condicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "TV a Cabo", value: true },
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi Gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Frigobar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Dois Quartos Separados", value: true },
        { "@type": "LocationFeatureSpecification", name: "Garagem Privativa", value: true },
        { "@type": "LocationFeatureSpecification", name: "Varanda com Rede", value: true },
      ],
    },
  ],
};

const amenities = [
  { icon: TbAirConditioningDisabled, label: "Ar Condicionado" },
  { icon: PiTelevisionSimple, label: "TV a Cabo" },
  { icon: FaWifi, label: "Wi-Fi Gratuito" },
  { icon: LuRefrigerator, label: "Frigobar" },
];

const highlights = [
  { icon: Users, label: "Dois Quartos para a Família" },
  { icon: Car, label: "Garagem Privativa" },
  { icon: Palmtree, label: "Varanda com Rede" },
];

export default function FamilySuit() {
  return (
    <main className="min-h-screen bg-[#212121]">
      <AccommodationCarousel
        images={IMAGES}
        title="Chalé Família"
        badgeText="FAMÍLIA"
      />

      {/* Content */}
      <section className="px-4 sm:px-6 md:px-10 xl:px-20 py-10 sm:py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20">
            {/* Left: Description + Amenities */}
            <div className="flex flex-col gap-8 animate-fade-in-up delay-200">
              {/* Description */}
              <div>
                <div className="section-divider-left mb-5" />
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  O Chalé Família foi pensado para quem ama viajar junto e quer
                  que todos fiquem confortáveis sob o mesmo teto. Com dois
                  quartos espaçosos, garagem privativa e varanda com rede, toda
                  a família pode desfrutar da natureza incomparável do Sana com
                  todo o conforto e privacidade que vocês merecem. Uma memória
                  que a família vai guardar para sempre.
                </p>
                <div className="section-divider-left mt-5" />
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-4">
                  Destaques
                </h2>
                <div className="flex flex-col gap-3">
                  {highlights.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <Icon
                          className="w-4 h-4 text-orange-400"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm text-neutral-300">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-4">
                  Comodidades
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {amenities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/6 card-hover"
                    >
                      <Icon
                        className="h-5 w-5 text-orange-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-neutral-300">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Family tip */}
              <div
                className="rounded-2xl p-5 border border-orange-500/20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234,88,12,0.07) 0%, rgba(212,169,70,0.05) 100%)",
                }}
              >
                <div className="flex items-start gap-3">
                  <Users
                    className="w-5 h-5 text-orange-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    <span className="text-orange-400 font-semibold">
                      Ideal para famílias.
                    </span>{" "}
                    Com dois quartos separados, adultos e crianças têm conforto
                    e privacidade para aproveitar ao máximo cada momento juntos
                    no Bambuzal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Booking CTA card */}
            <div className="animate-fade-in-right delay-300">
              <div
                className="rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col gap-5 sm:gap-6 lg:sticky lg:top-32 border border-white/8"
                style={{
                  background:
                    "linear-gradient(135deg, #1e1e1e 0%, #161616 100%)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="h-0.5 w-16 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #ea580c, #d4a946)",
                  }}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Reserve para a Família
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Disponibilidade sujeita a confirmação
                  </p>
                </div>

                <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Check-in a partir das 14h
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Check-out até as 12h
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Café da manhã incluso
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Dois quartos separados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Garagem privativa inclusa
                  </li>
                </ul>

                <a
                  href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label="Verificar disponibilidade do Chalé Família"
                >
                  <button className="w-full py-4 px-6 rounded-full font-bold text-sm tracking-wider text-white btn-cta animate-pulse-glow flex items-center justify-center gap-2">
                    <span>VERIFICAR DISPONIBILIDADE</span>
                    <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                  </button>
                </a>

                <p className="text-xs text-neutral-600 text-center">
                  Melhor preço garantido ao reservar diretamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
