/**
 * Julkinen osoite. Vercel asettaa VERCEL_PROJECT_PRODUCTION_URL:n
 * automaattisesti, joten oma domain riittää asettaa NEXT_PUBLIC_SITE_URL:iin
 * vasta kun se on olemassa.
 *
 * Tyhjä arvo käsitellään puuttuvana: ".env"-rivi "NEXT_PUBLIC_SITE_URL="
 * antaa tyhjän merkkijonon, jolloin ?? ei putoaisi oletukseen ja
 * metadataBasen new URL("") kaataisi koko sivun.
 */
function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

const vercelUrl = env("VERCEL_PROJECT_PRODUCTION_URL");

export const siteUrl =
  env("NEXT_PUBLIC_SITE_URL") ??
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");
