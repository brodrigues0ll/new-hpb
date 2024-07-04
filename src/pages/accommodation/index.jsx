import { AccommodCard } from "@/components/AccommodCard";
import React from "react";

const index = () => {
  return (
    <div className="grid grid-cols-1 gap-16 pt-5 justify-items-center md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
      <AccommodCard
        title="Suíte Simples"
        desc="Suítes com Vista para o rio, uma ótima opção para se ouvir as águas do rio Sana."
        href="/accommodation/simplesuit"
        srcImg="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/SuiteSimples%2Fsuite_simples_7.jpg?alt=media&token=8e3d66bc-514d-407c-b321-e10a0beccece"
      />

      <AccommodCard
        title="Chalé Duplo"
        desc="Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante das montanhas, piscinas e do Rio Sana."
        href="/accommodation/doublesuit"
        srcImg="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg?quality=75&auto=webp"
      />

      <AccommodCard
        title="Chalé Triplo"
        desc="Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante. Além de um amplo espaço interno."
        href="/accommodation/triplesuit"
        srcImg="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg?quality=75&auto=webp"
      />

      <AccommodCard
        title="Chalé Família"
        desc="Temos opções para quem ama viajar em família e que querem ficar juntinhos. Com dois quartos, nossos chalés família são perfeitos para acomodar todos com conforto."
        href="/accommodation/familysuit"
        srcImg="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg?quality=75&auto=webp"
      />
    </div>
  );
};

export default index;
