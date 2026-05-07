import type { MetadataRoute } from "next";

export const dynamic = "force-static";
const SITE_URL = "https://abbottsolicitors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "about",
    "team",
    "fees",
    "careers",
    "contact",
    "complaints",
    "practices",
    "legal-aid",
    "home-office-disbursements",
    "immigration",
    "family-law",
    "housing-law",
    "conveyancing",
    "personal-injury",
    "employment",
    "civil-litigation",
    "criminal-defence",
    "privacy-policy",
    "terms",
  ];

  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}/${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/") ? 0.6 : 0.8,
  }));
}
