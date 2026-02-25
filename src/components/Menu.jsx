"use client";

import { useRouter, usePathname } from "next/navigation";

export const Menu = ({ menuOpen, setIsMenu }) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path ? "active" : "";
    }
    return pathname.startsWith(path) ? "active" : "";
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
      <h1
        className={`nav-item cursor-pointer ${isActive("/acomodacoes")}`}
        onClick={() => {
          router.push("/acomodacoes");
          setIsMenu(false);
        }}
      >
        ACOMODAÇÕES
      </h1>
      <h1 className="text-zinc-500">GALERIA</h1>
      <h1
        className={`nav-item cursor-pointer ${isActive("/contato")}`}
        onClick={() => {
          router.push("/contato");
          setIsMenu(false);
        }}
      >
        CONTATO
      </h1>
    </div>
  );
};
