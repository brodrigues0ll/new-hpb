import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path) => {
    if (path === "/") {
      return router.pathname === path ? "active" : "";
    }
    return router.pathname.startsWith(path) ? "active" : "";
  };

  return (
    <div className="text-orange-500 text-lg hidden lg:flex gap-10">
      <h1
        className={`nav-item cursor-pointer ${isActive("/")}`}
        onClick={() => router.push("/")}
      >
        INÍCIO
      </h1>
      {/* <h1 className={`nav-item ${isActive("/pousada")}`}>A POUSADA</h1> */}
      <h1
        className={`nav-item cursor-pointer ${isActive("/accommodation")}`}
        onClick={() => router.push("/accommodation")}
      >
        ACOMODAÇÕES
      </h1>
      <h1
        className="text-zinc-500"
        // className={`nav-item cursor-pointer ${isActive("/gallery")}`}
        // onClick={() => router.push("/gallery")}
      >
        GALERIA
      </h1>
      <h1
        className={`nav-item cursor-pointer ${isActive("/contact")}`}
        onClick={() => router.push("/contact")}
      >
        CONTATO
      </h1>
    </div>
  );
};

export default Navbar;
