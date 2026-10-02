import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seudominio.com.br",
      lastModified: new Date(),
    },
  ];
}