import { useRouter } from "next/router";
import React from "react";

export const Menu = ({ menuOpen, setIsMenu }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } bg-neutral-900 px-7 py-4 text-orange-500 text-lg font-medium absolute top-20 right-5 rounded border-[1px] flex flex-col gap-3`}
    >
      <h1
        className="cursor-pointer"
        onClick={() => {
          router.push("/");
          setIsMenu(false);
        }}
      >
        INÍCIO
      </h1>
      <h1>A POUSADA</h1>
      <h1
        className="cursor-pointer"
        onClick={() => {
          router.push("/accommodation");
          setIsMenu(false);
        }}
      >
        ACOMODAÇÕES
      </h1>
      <h1
        className="cursor-pointer"
        onClick={() => {
          router.push("/gallery");
          setIsMenu(false);
        }}
      >
        GALERIA
      </h1>
      <h1
        className="cursor-pointer"
        onClick={() => {
          router.push("/contact");
          setIsMenu(false);
        }}
      >
        CONTATO
      </h1>
    </div>
  );
};
