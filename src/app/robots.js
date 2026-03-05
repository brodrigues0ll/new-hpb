export default function robots() {
  return {
    rules: [
      // All regular crawlers — allow everything
      {
        userAgent: "*",
        allow: "/",
      },
      // Allow beneficial AI search crawlers for GEO/AI visibility
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Block training-only crawlers (don't contribute to AI search results)
      {
        userAgent: ["CCBot", "Bytespider", "anthropic-ai", "cohere-ai"],
        disallow: "/",
      },
    ],
    sitemap: "https://www.hotelpousadabambuzal.com/sitemap.xml",
    host: "https://www.hotelpousadabambuzal.com",
  };
}
