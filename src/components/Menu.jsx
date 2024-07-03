import React from "react";

export const Menu = ({ menuOpen }) => {
  return (
    <div
      className={`${
        menuOpen ? "block" : "hidden"
      } bg-neutral-900 px-7 py-4 text-orange-500 text-lg font-medium absolute top-20 right-5 rounded border-[1px] flex flex-col gap-3`}
    >
      <h1>Início</h1>
      <h1>A Pousada</h1>
      <h1>Acomodações</h1>
      <h1>Galeria</h1>
      <h1>Contato</h1>
    </div>
  );
};
