import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { AlignJustify } from "lucide-react";
import { Menu } from "./Menu";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

  return (
    <header className="bg-neutral-900 w-full fixed top-0 z-50">
      <div className="max-w-[1600px] h-24 flex items-center justify-between px-5 md:px-10 xl:mx-auto">
        <Image
          alt="Hotel Logo"
          src={logo}
          width={1000}
          height={1000}
          className="w-44 cursor-pointer"
          onClick={() => router.push("/")}
          priority={false}
        />

        <AlignJustify
          className="w-8 h-8 text-orange-600 lg:hidden"
          onClick={() => setIsMenu(!isMenu)}
        />
        <Menu menuOpen={isMenu} />
        <Navbar />
      </div>
    </header>
  );
};
