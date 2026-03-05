export const metadata = {
  title: "Acomodações",
  description:
    "Conheça os chalés e suítes do Hotel Pousada Bambuzal em Sana, Macaé - RJ. Chalé Duplo, Triplo, Família, Suíte Simples e Suíte Premium com vista para o Rio Sana e as montanhas da Serra de Macaé.",
  keywords: [
    "chalé Sana",
    "suíte Macaé",
    "hospedagem Sana",
    "chalé com garagem",
    "suíte Rio Sana",
    "acomodações Bambuzal",
  ],
  alternates: {
    canonical: "/acomodacoes",
  },
  openGraph: {
    title: "Acomodações — Hotel Pousada Bambuzal",
    description:
      "Chalés e suítes à beira do Rio Sana em Sana, Macaé - RJ. Opções para casais, famílias e grupos em meio à natureza da Serra de Macaé.",
    url: "https://www.hotelpousadabambuzal.com/acomodacoes",
    images: [
      {
        url: "https://storage.googleapis.com/hp-bambuzal/acomod/chale-duplo/home-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Chalés e suítes do Hotel Pousada Bambuzal em Sana, Macaé",
      },
    ],
  },
};

export default function AcomodacoesLayout({ children }) {
  return children;
}
