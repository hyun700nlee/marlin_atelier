import { getArtworks } from "@/lib/artworks";
import { getSiteUrl } from "@/lib/site";

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(location: string, priority: string, lastmod: string) {
  return [
    "  <url>",
    `    <loc>${xmlEscape(location)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const artworks = await getArtworks();
  const today = new Date().toISOString();
  const entries = [
    urlEntry(siteUrl, "1.0", today),
    ...artworks.map((artwork) =>
      urlEntry(
        `${siteUrl}/artworks/${artwork.slug}`,
        "0.8",
        artwork.updatedAt || artwork.createdAt || today
      )
    )
  ];

  return new Response(
    [`<?xml version="1.0" encoding="UTF-8"?>`, `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`, ...entries, `</urlset>`].join(
      "\n"
    ),
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
