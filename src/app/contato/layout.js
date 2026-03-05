export const metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Hotel Pousada Bambuzal em Sana, Macaé - RJ. WhatsApp (22) 9 8811-2400, e-mail, localização e redes sociais. Estamos prontos para ajudar você a planejar sua estadia.",
  keywords: [
    "contato hotel Sana",
    "reserva pousada Macaé",
    "WhatsApp Hotel Bambuzal",
    "telefone pousada Sana",
  ],
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato — Hotel Pousada Bambuzal",
    description:
      "Fale com o Hotel Pousada Bambuzal. WhatsApp, telefone, e-mail e redes sociais. Sana, Macaé - RJ.",
    url: "https://www.hotelpousadabambuzal.com/contato",
    images: [
      {
        url: "https://storage.googleapis.com/hp-bambuzal/about/1.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel Pousada Bambuzal — Contato",
      },
    ],
  },
};

export default function ContatoLayout({ children }) {
  return children;
}
