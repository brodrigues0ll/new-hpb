"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const AccommodCard = ({ title, desc, href, srcImg }) => {
  const router = useRouter();
  return (
    <div className="bg-neutral-900 w-[350px] rounded-3xl flex-col gap-5 justify-start items-start shadow-sm">
      <div className="relative h-52 w-full mb-8 overflow-hidden rounded-t-3xl">
        <Image
          src={srcImg}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="350px"
        />
      </div>
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
