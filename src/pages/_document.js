// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";
import { metadata } from "./index"; // Importando o objeto de metadados da sua página index

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={metadata.description} />
          {/* Meta tags para Open Graph */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta
            property="og:image"
            content={metadata.openGraph.images[0].url}
          />
          <meta
            property="og:image:width"
            content={metadata.openGraph.images[0].width}
          />
          <meta
            property="og:image:height"
            content={metadata.openGraph.images[0].height}
          />
          <meta property="og:url" content="https://seu-site.com" />{" "}
          {/* Substitua pelo URL do seu site */}
          <meta property="og:type" content="website" />
          {/* Meta tags para Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta
            name="twitter:image"
            content={metadata.openGraph.images[0].url}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
