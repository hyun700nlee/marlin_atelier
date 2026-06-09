import { getSiteUrl } from "@/lib/site";

export function GET() {
  const siteUrl = getSiteUrl();

  return new Response(
    [`User-agent: *`, `Allow: /`, `Disallow: /admin`, `Sitemap: ${siteUrl}/sitemap.xml`, ""].join(
      "\n"
    ),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
