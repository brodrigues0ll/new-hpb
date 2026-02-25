"use client";

import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path ? "active" : "";
    }
    return pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className="text-orange-500 text-lg hidden lg:flex gap-10">
      <h1
        className={`nav-item cursor-pointer ${isActive("/")}`}
        onClick={() => router.push("/")}
      >
        INÍCIO
      </h1>
      <h1
        className={`nav-item cursor-pointer ${isActive("/acomodacoes")}`}
        onClick={() => router.push("/acomodacoes")}
      >
        ACOMODAÇÕES
      </h1>
      <h1 className="text-zinc-500">GALERIA</h1>
      <h1
        className={`nav-item cursor-pointer ${isActive("/contato")}`}
        onClick={() => router.push("/contato")}
      >
        CONTATO
      </h1>
    </div>
  );
};

export default Navbar;
