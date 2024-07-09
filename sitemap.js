// sitemap.js

const routes = [
  {
    url: "https://www.hotelpousadabambuzal.com/",
    lastModified: new Date().toISOString(), // Defina a data de modificação mais apropriada
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: "https://www.hotelpousadabambuzal.com/accommodation",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: "https://www.hotelpousadabambuzal.com/contact",
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
];

export default routes;
