import PropTypes from "prop-types";
import { Layout } from "@/components/Layout";
import Script from "next/script";
import "@/styles/globals.css";
import "@/styles/ProximaNova.css";

const OG_IMAGE = "https://storage.googleapis.com/hp-bambuzal/about/1.jpg";
const SITE_URL = "https://www.hotelpousadabambuzal.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hotel Pousada Bambuzal — Sana, Macaé - RJ",
    template: "%s | Hotel Pousada Bambuzal",
  },
  description:
    "Hotel Pousada Bambuzal em Sana, Macaé - RJ. Chalés e suítes à beira do Rio Sana, em meio a 16.000 m² de natureza preservada na Serra de Macaé. Café da manhã incluso. Reserve agora!",
  keywords: [
    "hotel",
    "pousada",
    "Sana",
    "Macaé",
    "RJ",
    "chalé",
    "suíte",
    "Rio Sana",
    "Serra de Macaé",
    "natureza",
    "ecoturismo",
    "hospedagem",
    "hotel Sana",
    "pousada Sana",
    "hotel Macaé",
  ],
  authors: [{ name: "Hotel Pousada Bambuzal" }],
  creator: "Hotel Pousada Bambuzal",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hotel Pousada Bambuzal — Sana, Macaé - RJ",
    description:
      "Chalés e suítes à beira do Rio Sana em meio a 16.000 m² de natureza preservada na Serra de Macaé. Café da manhã incluso. Reserve agora!",
    url: SITE_URL,
    siteName: "Hotel Pousada Bambuzal",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hotel Pousada Bambuzal — Vista externa em Sana, Macaé - RJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Pousada Bambuzal — Sana, Macaé - RJ",
    description:
      "Chalés e suítes à beira do Rio Sana em meio a 16.000 m² de natureza preservada na Serra de Macaé.",
    images: [OG_IMAGE],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const SCHEMA_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    // LodgingBusiness — main entity
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#lodging`,
      name: "Hotel Pousada Bambuzal",
      description:
        "Hotel Pousada com chalés e suítes à beira do Rio Sana, em meio a 16.000 m² de natureza preservada na Serra de Macaé - RJ.",
      url: SITE_URL,
      telephone: "+5522988112400",
      email: "hotelpousadabambuzal@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Estrada do Sana, 2000",
        addressLocality: "Sana",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.3349936,
        longitude: -42.1890027,
      },
      hasMap: "https://www.google.com/maps?q=-22.3349936+-42.1890027",
      image: [OG_IMAGE, "https://storage.googleapis.com/hp-bambuzal/about/2.jpg"],
      sameAs: [
        "https://www.instagram.com/hotelbambuzal",
        "https://www.facebook.com/HotelPousadaBambuzal",
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi Gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Café da Manhã", value: true },
        { "@type": "LocationFeatureSpecification", name: "Estacionamento Gratuito", value: true },
        { "@type": "LocationFeatureSpecification", name: "Ar Condicionado", value: true },
        { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
        { "@type": "LocationFeatureSpecification", name: "Acesso ao Rio Sana", value: true },
        { "@type": "LocationFeatureSpecification", name: "Energia Solar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Frigobar", value: true },
        { "@type": "LocationFeatureSpecification", name: "TV a Cabo", value: true },
      ],
      checkinTime: "T14:00",
      checkoutTime: "T12:00",
      petsAllowed: false,
      numberOfRooms: 5,
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Cash, Credit Card",
    },
    // Organization — brand entity
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Hotel Pousada Bambuzal",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+5522988112400",
        contactType: "reservations",
        availableLanguage: "Portuguese",
      },
      sameAs: [
        "https://www.instagram.com/hotelbambuzal",
        "https://www.facebook.com/HotelPousadaBambuzal",
      ],
    },
    // WebSite — enables Sitelinks Search Box
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hotel Pousada Bambuzal",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_GRAPH) }}
        />
      </head>
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

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
