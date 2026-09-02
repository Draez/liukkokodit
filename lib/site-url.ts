/**
 * Julkinen osoite. Vercel asettaa VERCEL_PROJECT_PRODUCTION_URL:n
 * automaattisesti, joten oma domain riittää asettaa NEXT_PUBLIC_SITE_URL:iin
 * vasta kun se on olemassa.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
