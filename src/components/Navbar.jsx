import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="text-orange-500 text-lg hidden lg:flex gap-10 ">
      <h1 className="cursor-pointer" onClick={() => router.push("/")}>
        INÍCIO
      </h1>
      <h1>A POUSADA</h1>
      <h1
        className="cursor-pointer"
        onClick={() => router.push("/accommodation")}
      >
        ACOMODAÇÕES
      </h1>
      <h1 onClick={() => router.push("/gallery")}>GALERIA</h1>
      <h1 onClick={() => router.push("/contact")}>CONTATO</h1>
    </div>
  );
};

export default Navbar;
