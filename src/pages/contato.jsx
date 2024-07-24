import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuMapPin, LuMail } from "react-icons/lu";
import { BsTelephoneFill } from "react-icons/bs";
import { ContactCard } from "@/components/ContactCard";

const contato = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-10 gap-5">
        <h1 className="text-4xl text-center">Nos siga nas redes sociais!!</h1>
        <div className="flex gap-8 md:gap-20">
          <a
            href="https://www.facebook.com/HotelPousadaBambuzal"
            target="_blank"
          >
            <div className="bg-neutral-950 rounded-full h-14 w-14 flex justify-center items-center">
              <FaFacebookF className="h-8 w-8 text-orange-600" />
            </div>
          </a>

          <a href="https://www.instagram.com/hotelbambuzal" target="_blank">
            <div className="bg-neutral-950 rounded-full h-14 w-14 flex justify-center items-center">
              <FaInstagram className="h-8 w-8 text-orange-600" />
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-col px-5 text-center flex-wrap justify-center items-center gap-10 md:flex-row max-w-[800px] mx-auto">
        <ContactCard>
          <LuMapPin className="h-14 w-14 text-orange-600" />
          <h1 className="text-2xl font-medium">
            Nossa <br />
            Localização
          </h1>
          <p className="font-thin">ESTRADA DO SANA Nº 2000 SANA, MACAÉ - RJ</p>
        </ContactCard>

        <ContactCard>
          <BsTelephoneFill className="h-14 w-14 text-orange-600" />
          <h1 className="text-2xl font-medium">Número de Telefone</h1>
          <p className="font-thin">{`(22) 9 8811-2400`}</p>
        </ContactCard>

        <ContactCard>
          <FaWhatsapp className="h-14 w-14 text-orange-600" />
          <h1 className="text-2xl font-medium">Chame no Whatsapp</h1>
          <p className="font-thin">{`(22) 9 8811-2400`}</p>
        </ContactCard>

        <ContactCard>
          <LuMail className="h-14 w-14 text-orange-600" />
          <h1 className="text-2xl font-medium">Envie um Email</h1>
          <p className="font-thin">
            hotelpousadabambuzal
            <br />
            @gmail.com
          </p>
        </ContactCard>
      </div>
    </div>
  );
};

export default contato;
