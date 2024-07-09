// pages/sitemap.xml

export default function Sitemap() {
  return null; // Este componente não renderiza nada diretamente
}

export async function getServerSideProps({ res }) {
  // Função para gerar o sitemap
  const sitemap = await generateSitemap();

  // Configuração do cabeçalho para o sitemap XML
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  // Retorna um objeto vazio pois não precisa passar props para o componente
  return { props: {} };
}

async function generateSitemap() {
  const urls = [
    {
      url: "https://www.hotelpousadabambuzal.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.hotelpousadabambuzal.com/accommodation",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://www.hotelpousadabambuzal.com/contact",
      lastModified: new Date().toISOString(),
    },
    // Adicione outras URLs conforme necessário
  ];

  // Construir o XML do sitemap
  const xml = buildSitemapXML(urls);
  return xml;
}

function buildSitemapXML(urls) {
  const xmlItems = urls.map((url) => {
    return `
      <url>
        <loc>${url.url}</loc>
        <lastmod>${url.lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const xmlString = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${xmlItems.join("")}
    </urlset>
  `;

  return xmlString.trim(); // Use trim() para garantir que não haja espaço em branco no início ou no fim
}
