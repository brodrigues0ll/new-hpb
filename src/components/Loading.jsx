import React from "react";
import Image from "next/image";
import logob from "../images/logoB_11zon.png";

const Loading = () => (
  <div className="absolute h-screen w-screen bg-neutral-900 z-50 top-0 left-0 flex justify-center items-center">
    <div className="relative flex justify-center items-center">
      <div className="w-48 h-48 rounded-full border-4 border-orange-500 border-t-white animate-spin absolute z-50"></div>
      <Image
        src={logob}
        alt="Logo"
        width={100}
        height={100}
        priority={true}
        className="relative z-30"
      />
    </div>
  </div>
);

export default Loading;
