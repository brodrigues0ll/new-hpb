import React, { useState, useEffect } from "react";
import { storage } from "@/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const Test = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, "Carrossel/");
      try {
        const res = await listAll(listRef);
        const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
        const urls = await Promise.all(urlPromises);
        setImageUrls(urls);
      } catch (error) {
        console.error("Erro ao buscar imagens do Firebase Storage:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Imagem ${index}`} />
      ))}
    </div>
  );
};

export default Test;
