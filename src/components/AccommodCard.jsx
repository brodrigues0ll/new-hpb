import { useRouter } from "next/router";
import React from "react";

export const AccommodCard = ({ title, desc, href, srcImg }) => {
  const router = useRouter();
  return (
    <div className="bg-neutral-900 w-[350px] rounded-xl flex flex-col gap-5 justify-start items-start shadow-sm">
      <div
        className="h-40 w-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${srcImg})`,
        }}
      />
      <div className="px-5 pb-10 flex flex-col gap-5 items-start">
        <h1 className="text-3xl">{title}</h1>
        <p>{desc}</p>
        <button
          className="text-orange-600 font-bold relative"
          onClick={() => router.push(href)}
        >
          Ver Mais
        </button>
      </div>
    </div>
  );
};
