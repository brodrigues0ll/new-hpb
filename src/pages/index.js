import { Carousel } from "@/components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />

      <div className="mt-5 bg-neutral-900 flex flex-col justify-center items-center px-10 py-14 md:px-20">
        <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:items-center xl:text-center xl:gap-5 xl:ml-12">
          <div className="xl:flex xl:flex-col xl:justify-start xl:w-[500px] xl:ml-10">
            <h1 className="text-center text-3xl font-bold md:text-6xl">
              A Pousada
            </h1>
            <p className="text-xl mt-8 mb-4 md:text-4xl xl:text-start">
              São mais de 16.000 m² da mais pura beleza natural da região.
            </p>
          </div>

          <div
            className="h-[150px] w-[300px] rounded-2xl bg-cover bg-bottom md:h-[340px] md:w-[700px] xl:h-[300px] xl:w-[600px]"
            style={{
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_13.jpg?alt=media&token=5523ed38-407e-4174-894b-1cddfec69ad0")`,
            }}
          />
        </div>

        <div className="xl:flex xl:justify-center xl:items-center xl:text-center xl:gap-5 xl:-ml-12 xl:-mt-10 mt-5">
          <div
            className="h-[150px] w-[300px] rounded-2xl bg-cover bg-bottom md:h-[340px] md:w-[700px] xl:h-[300px] xl:w-[600px]"
            style={{
              backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_3.jpg?alt=media&token=4cee57c2-0c37-4ee0-ac65-abf4a034cef6")`,
            }}
          />
          <div />
          <p className="text-xl mt-8 mb-4 md:text-4xl xl:text-start xl:w-[500px]">
            Perfeito para quem busca tranquilidade e contato com a natureza.
          </p>
        </div>
      </div>
    </>
  );
}
