import { Layout } from "@/components/Layout";
import Script from "next/script";
import "@/styles/globals.css";
import "@/styles/ProximaNova.css";

export const metadata = {
  title: "Hotel Pousada Bambuzal",
  description: "Hotel Pousada localizado no Sana, Macaé - RJ",
  openGraph: {
    title: "Hotel Pousada Bambuzal",
    description: "Hotel Pousada localizado no Sana, Macaé - RJ",
    url: "https://www.hotelpousadabambuzal.com/",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_13_11zon.webp?alt=media&token=1cf08554-ae0f-46cb-aeb3-1f656c5fa19f",
        width: 800,
        height: 600,
        alt: "Hotel Pousada Bambuzal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Pousada Bambuzal",
    description: "Hotel Pousada localizado no Sana, Macaé - RJ",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/hpbambuzal-6c4d1.appspot.com/o/About%2Fext_13_11zon.webp?alt=media&token=1cf08554-ae0f-46cb-aeb3-1f656c5fa19f",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
        <Script
          id="script-infochat"
          src="https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/pousada-bambuzal"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
