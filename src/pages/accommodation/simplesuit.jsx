import React from "react";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa6";
import { LuRefrigerator } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";

const simplesuit = () => {
  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center lg:flex-row-reverse max-w-[1600px]">
      <div
        className="h-72 bg-center bg-cover mb-5 md:h-[450px] md:mb-10 md:w-[700px] lg:mt-10"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/SuiteSimples%2Fsuite_simples_4_11zon.webp?alt=media&token=b740b720-cd53-4415-a608-690c6c24b376)`,
        }}
      />

      <div className="px-5 md:px-32 lg:w-[400px] lg:px-10 2xl:w-[600px]">
        <div>
          <h1 className="text-4xl font-bold">Suíte Simples</h1>
          <div className="text-zinc-400 flex items-center gap-1">
            <MdLocationPin />
            <p>Sana, Macaé</p>
          </div>
        </div>

        <div>
          <div className="h-[2px] bg-zinc-800 my-5" />
          <p>
            Nossos chalés têm garagem privativa, varanda com rede e vista para
            montanhas, piscinas e Rio Sana, além de chuveiro com água de
            nascentes aquecida por energia solar, contribuindo para a
            sustentabilidade.
          </p>
          <div className="h-[2px] bg-zinc-800 my-5" />
        </div>

        <div>
          <h1 className="text-3xl mb-5">Comodidades</h1>
          <div className="grid grid-cols-2 gap-5 justify-items-start">
            <div className="flex gap-4 items-center">
              <TbAirConditioningDisabled className="h-8 w-8" />
              <h1>Ar Condicionado</h1>
            </div>
            <div className="flex gap-4 items-center">
              <PiTelevisionSimple className="h-8 w-8" />
              <h1>TV a Cabo</h1>
            </div>
            <div className="flex gap-4 items-center">
              <FaWifi className="h-6 w-8" />
              <h1>Wifi</h1>
            </div>
            <div className="flex gap-4 items-center">
              <LuRefrigerator className="h-8 w-8" />
              <h1>Frigobar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default simplesuit;
