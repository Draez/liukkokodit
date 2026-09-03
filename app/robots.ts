import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  // Testiosoitteessa sivusto pidetään piilossa hakukoneilta, ks. lib/site-url.ts.
  if (!isIndexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
