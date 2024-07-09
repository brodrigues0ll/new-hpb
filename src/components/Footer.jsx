import React from "react";
import logo from "../images/logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-neutral-900 mt-10">
      <div className="mx-auto max-w-[1600px] p-5 py-10 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-orange-500 text-lg flex flex-col justify-center items-center gap-5">
          <Image
            src={logo}
            width={1000}
            height={1000}
            alt="Hotel Logo"
            className="w-44 cursor-pointer"
            onClick={() => router.push("/")}
            priority={false}
          />

          <div className="flex flex-wrap gap-4 w-48 justify-center">
            <h1 className="cursor-pointer nav-item">INÍCIO</h1>
            {/* <h1 className="cursor-pointer nav-item">A POUSADA</h1> */}
            <h1 className="cursor-pointer nav-item">ACOMODAÇÕES</h1>
            <h1
              // className="cursor-pointer nav-item"
              className="text-zinc-500"
            >
              GALERIA
            </h1>
            <h1 className="cursor-pointer nav-item">CONTATO</h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-orange-600 font-semibold text-4xl">
            Localização
          </h1>
          <p className="text-center tracking-wider">
            Estrada do Sana, <br /> Nº 2000 <br /> Sana Macaé - RJ
          </p>

          <a href="https://www.google.com/maps?q=-22.3349936+-42.1890027">
            <button className="bg-orange-600 rounded-full px-4 py-2 mt-5 hover:bg-orange-500">
              VER NO MAPA
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-orange-600 font-semibold text-4xl">Contatos</h1>
          <p>{"(22) 9 8811-2400"}</p>
          <p>hotelpousadabambuzal@gmail.com</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 text-orange-600 ">
          <h1 className=" font-semibold text-4xl">Redes Sociais</h1>

          <div className="flex gap-10 lg:flex-col lg:gap-2">
            <a
              href="https://www.facebook.com/HotelPousadaBambuzal"
              target="_blank"
            >
              <div className="flex gap-2 items-center hover:text-orange-500">
                <FaFacebookF className="text-3xl" />
                <p className="text-xl">Facebook</p>
              </div>
            </a>

            <a href="https://www.instagram.com/hotelbambuzal" target="_blank">
              <div className="flex gap-2 items-center hover:text-orange-500">
                <FaInstagram className="text-3xl" />
                <p className="text-xl">Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
