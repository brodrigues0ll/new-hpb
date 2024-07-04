import React from "react";

const doublesuit = () => {
  return (
    <div>
      <div
        className="h-72 bg-center bg-cover mb-5 md:h-[150px]"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/SuiteSimples%2Fsuite_simples_4.jpg?alt=media&token=be43a931-c8bb-4b60-a03c-99138847d40d)`,
        }}
      />

      <div className="px-5">
        <div>
          <h1 className="text-4xl font-bold">Suíte Simples</h1>
          <p className="text-zinc-400">Sana, Macaé</p>
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

export default doublesuit;
