import { useRouter } from "next/router";
import React from "react";

export const Menu = ({ menuOpen, setIsMenu }) => {
  const router = useRouter();

  const isActive = (path) => {
    if (path === "/") {
      return router.pathname === path ? "active" : "";
    }
    return router.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } bg-neutral-900 px-7 py-4 text-orange-500 text-lg font-medium absolute top-20 right-5 rounded border-[1px] flex flex-col gap-3`}
    >
      <h1
        className={`nav-item cursor-pointer ${isActive("/")}`}
        onClick={() => {
          router.push("/");
          setIsMenu(false);
        }}
      >
        INÍCIO
      </h1>
      {/* <h1 className={`nav-item ${isActive("/pousada")}`}>A POUSADA</h1> */}
      <h1
        className={`nav-item cursor-pointer ${isActive("/acomodacoes")}`}
        onClick={() => {
          router.push("/acomodacoes");
          setIsMenu(false);
        }}
      >
        ACOMODAÇÕES
      </h1>
      <h1
        // className={`nav-item cursor-pointer ${isActive("/gallery")}`}
        className="text-zinc-500"
        // onClick={() => {
        //   router.push("/gallery");
        //   setIsMenu(false);
        // }}
      >
        GALERIA
      </h1>
      <h1
        className={`nav-item cursor-pointer ${isActive("/contact")}`}
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
