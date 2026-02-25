import Image from "next/image";
import Link from "next/link";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { LuRefrigerator } from "react-icons/lu";
import { MapPin, ArrowLeft, CalendarCheck, Car, Palmtree, Mountain } from "lucide-react";

export const metadata = {
  title: "Chalé Triplo | Hotel Pousada Bambuzal",
  description: "Chalé Triplo espaçoso com vista deslumbrante no Hotel Pousada Bambuzal",
};

const amenities = [
  { icon: TbAirConditioningDisabled, label: "Ar Condicionado" },
  { icon: PiTelevisionSimple, label: "TV a Cabo" },
  { icon: FaWifi, label: "Wi-Fi Gratuito" },
  { icon: LuRefrigerator, label: "Frigobar" },
];

const highlights = [
  { icon: Car, label: "Garagem Privativa" },
  { icon: Palmtree, label: "Varanda com Rede" },
  { icon: Mountain, label: "Vista Deslumbrante das Montanhas" },
];

export default function TripleSuit() {
  return (
    <main className="min-h-screen bg-[#212121]">
      {/* Hero Image */}
      <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/ChaleTriplo%2Fchale_triplo_5_11zon.webp?alt=media&token=6c5427f3-354d-4567-b109-99a14d6ae7b1"
          alt="Chalé Triplo"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
          className="scale-105"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.2) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-5 md:left-10 z-10">
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
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 xl:px-20 pb-10 z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/40 text-orange-400 text-xs font-bold tracking-widest glass mb-3 animate-fade-in-down">
              CHALÉ
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Chalé Triplo
            </h1>
            <div className="flex items-center gap-2 text-neutral-400 mt-2 animate-fade-in-up delay-100">
              <MapPin className="w-4 h-4 text-orange-500" aria-hidden="true" />
              <span className="text-sm">Sana, Macaé — RJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 md:px-10 xl:px-20 py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20">

            {/* Left: Description + Amenities */}
            <div className="flex flex-col gap-8 animate-fade-in-up delay-200">
              {/* Description */}
              <div>
                <div className="section-divider-left mb-5" />
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                  O Chalé Triplo foi projetado para quem deseja mais espaço sem abrir mão
                  do conforto e da beleza natural do Sana. Com amplo espaço interno,
                  garagem privativa e varanda equipada com rede, é o cenário perfeito para
                  desfrutar de vistas deslumbrantes das montanhas e da natureza exuberante.
                  Uma escolha ideal para grupos de três pessoas em busca de tranquilidade.
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
                        <Icon className="w-4 h-4 text-orange-400" aria-hidden="true" />
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
                      <Icon className="h-5 w-5 text-orange-400 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-neutral-300">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Booking CTA card */}
            <div className="animate-fade-in-right delay-300">
              <div
                className="rounded-3xl p-8 md:p-10 flex flex-col gap-6 sticky top-32 border border-white/8"
                style={{
                  background: "linear-gradient(135deg, #1e1e1e 0%, #161616 100%)",
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
                    Reserve seu Chalé
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
                    Garagem privativa inclusa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    Amplo espaço interno
                  </li>
                </ul>

                <a
                  href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label="Verificar disponibilidade do Chalé Triplo"
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
