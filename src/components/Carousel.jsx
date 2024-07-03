import React, { useState, useEffect } from "react";

const imagesPack = {
  img1: "https://wallpapers.com/images/featured-full/landscape-293chzhp3r67ag4a.jpg",
  img2: "https://wallpapers.com/images/high/rocky-mountains-and-hills-p054gugzhz73an8y.webp",
  img3: "https://wallpapers.com/images/high/hoover-dam-during-golden-hour-qdtdqtc7lxs2iqq4.webp",
  img4: "https://wallpapers.com/images/high/4k-ultra-hd-landscape-wallpaper-e04zdr8jvs58c4ap.webp",
};

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesArray = Object.values(imagesPack);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  return (
    <>
      <div className="h-[95vh] relative -mt-24">
        <div className="bg-black absolute w-full h-full z-20 opacity-50"></div>

        {imagesArray.map((imageUrl, index) => (
          <div
            key={index}
            className={`z-10 absolute top-0 left-0 w-[100vw] h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${imageUrl})`, zIndex: index }}
          />
        ))}
        <div className="h-full w-full relative z-30 top-10 px-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">Lugar de Paz</h1>
          <p className="text-2xl my-10">
            Um paraíso em meio às montanhas da região serrana de Macaé para você
            desfrutar da natureza com requinte e qualidade.
          </p>

          <div className="flex justify-center mt-5">
            <button className="rounded-full h-10 w-72 text-white shadow-xl bg-orange-600 bg-opacity-70 hover:bg-orange-500">
              VERIFICAR DISPONIBILIDADE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
