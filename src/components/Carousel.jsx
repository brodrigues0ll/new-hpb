import React, { useState, useEffect } from "react";
import { storage } from "@/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, "Carrossel/");
        const res = await listAll(listRef);
        const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(urlPromises);
        setImagesArray(urls);
      } catch (error) {
        console.error("Erro ao buscar imagens do Firebase Storage:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  return (
    <>
      <div className="h-[95vh] relative -mt-24">
        <div className="bg-black absolute w-full h-full z-20 opacity-60"></div>

        {imagesArray.map((imageUrl, index) => (
          <div
            key={index}
            className={`z-10 absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${imageUrl})`, zIndex: index }}
          />
        ))}
        <div className="h-full w-full relative z-30 top-10 px-8 flex flex-col justify-center">
          <div className="xl:pl-32">
            <h1 className="text-5xl font-bold md:text-8xl">Lugar de Paz</h1>
            <p className="text-2xl my-16 md:text-5xl lg:w-[80%] xl:w-[70%]">
              Um paraíso em meio às montanhas da região serrana de Macaé para
              você desfrutar da natureza com requinte e qualidade.
            </p>
          </div>

          <div className="flex justify-center mt-5">
            <a
              href="https://book.securebookings.net/roomrate?id=c4dd3ad1-0057-1672770166-46f7-a98b-44ec5a1f6793&lang=br"
              target="_blank"
            >
              <button className="rounded-full h-12 w-72 text-white shadow-xl bg-orange-600 bg-opacity-70 hover:bg-orange-500 md:h-16 md:w-96 md:text-2xl">
                VERIFICAR DISPONIBILIDADE
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
