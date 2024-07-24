import { Carousel } from "@/components/Carousel";
import Image from "next/image";

export const metadata = {
  title: "Hotel Pousada Bambuzal",
  description: "Hotel Pousada localizado no Sana, Macaé - RJ",
  openGraph: {
    title: "Hotel Pousada Bambuzal",
    description: "Hotel Pousada localizado no Sana, Macaé - RJ",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_13_11zon.webp?alt=media&token=1cf08554-ae0f-46cb-aeb3-1f656c5fa19f",
        width: 800,
        height: 600,
        alt: "Imagem do Carrossel",
      },
    ],
  },
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Carousel />

      {/* About */}
      <div className="mt-5 bg-neutral-900 flex flex-col justify-center items-center px-10 py-14 md:px-20">
        <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:items-center xl:text-center xl:gap-5 xl:ml-12">
          <div className="xl:flex xl:flex-col xl:justify-start xl:w-[500px] xl:ml-10">
            <h1 className="text-center text-3xl font-bold md:text-6xl">
              Hotel Pousada Bambuzal
            </h1>
            <p className="text-xl mt-8 mb-4 md:text-4xl xl:text-start">
              São mais de 16.000 m² da mais pura beleza natural da região.
            </p>
          </div>
          <div className="relative h-[150px] w-[300px] md:h-[340px] md:w-[700px] xl:h-[300px] xl:w-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_13_11zon.webp?alt=media&token=c0945aa2-d8cd-4543-a70c-e4be145b323e"
              alt="Imagem do Hotel Pousada Bambuzal"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="xl:flex xl:justify-center xl:items-center xl:text-center xl:gap-5 xl:-ml-12 xl:-mt-10 mt-5">
          <div className="relative h-[150px] w-[300px] md:h-[340px] md:w-[700px] xl:h-[300px] xl:w-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_3_11zon.webp?alt=media&token=1c5cbdec-289e-4a1f-a09a-518a9e8820b0"
              alt="Imagem do Hotel Pousada Bambuzal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <p className="text-xl mt-8 mb-4 md:text-4xl xl:text-start xl:w-[500px]">
              Perfeito para quem busca tranquilidade e contato com a natureza.
            </p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="mt-5 bg-neutral-900 flex flex-col justify-center px-10 py-14 md:px-20">
        <h1 className="text-5xl md:text-6xl">Eventos</h1>
        <p className="mt-5 text-2xl">
          Aqui se econtra o quadro de todos os eventos que acontecem durante o
          ano no nosso lugarzinho! 💝
        </p>
      </div>

      {/* Packs */}
      <div className="mt-5 bg-neutral-900 flex flex-col justify-center px-10 py-14 md:px-20">
        <h1 className="text-5xl md:text-6xl">Pacotes para {currentYear}</h1>
        <p className="mt-5 text-2xl">
          Aqui se econtra o quadro de pacotes que oferecemos durante o ano no
          nosso lugarzinho! 💝
        </p>
      </div>
    </>
  );
}
