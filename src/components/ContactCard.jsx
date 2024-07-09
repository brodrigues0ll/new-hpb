import React from "react";

export const ContactCard = ({ children }) => {
  return (
    <div className="bg-neutral-900 flex flex-col items-center justify-center p-5 border-2 border-black shadow-lg gap-3 w-[240px] h-[240px]">
      {children}
    </div>
  );
};
