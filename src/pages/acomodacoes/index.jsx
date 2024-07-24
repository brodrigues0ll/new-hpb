import { AccommodCard } from "@/components/AccommodCard";
import React from "react";

const index = () => {
  return (
    <div className="grid grid-cols-1 gap-16 pt-5 justify-items-center md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
      <AccommodCard
        title="Suíte Simples"
        desc="Suítes com Vista para o rio, uma ótima opção para se ouvir as águas do rio Sana."
        href="/acomodacoes/simplesuit"
        srcImg="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/SuiteSimples%2Fsuite_simples_7_11zon.webp?alt=media&token=c43eb63c-d335-401f-bc1b-d73c791d368c"
      />

      <AccommodCard
        title="Chalé Duplo"
        desc="Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante das montanhas, piscinas e do Rio Sana."
        href="/acomodacoes/doublesuit"
        srcImg="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/ChaleDuplo%2F1_11zon.webp?alt=media&token=bc9ea4f1-78dd-4576-a814-f81ad1e3008d"
      />

      <AccommodCard
        title="Chalé Triplo"
        desc="Chalé composto por garagem privativa, varanda com rede onde se pode desfrutar de uma paisagem deslumbrante. Além de um amplo espaço interno."
        href="/acomodacoes/triplesuit"
        srcImg="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/ChaleTriplo%2Fchale_triplo_11zon.webp?alt=media&token=2dc0e332-d048-4fcc-8e1e-c447fef02107"
      />

      <AccommodCard
        title="Chalé Família"
        desc="Temos opções para quem ama viajar em família e que querem ficar juntinhos. Com dois quartos, nossos chalés família são perfeitos para acomodar todos com conforto."
        href="/acomodacoes/familysuit"
        srcImg="https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/ChaleFamilia%2Fchale_familia_4_11zon.webp?alt=media&token=261c1bd9-36d1-46ae-b02a-e7bd0eac98c6"
      />
    </div>
  );
};

export default index;
