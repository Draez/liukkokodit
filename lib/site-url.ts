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

const publicUrl = env("NEXT_PUBLIC_SITE_URL");
const vercelUrl = env("VERCEL_PROJECT_PRODUCTION_URL");

export const siteUrl =
  publicUrl ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

/**
 * Saako hakukone indeksoida sivuston. Testiosoitteessa (vercel.app,
 * localhost) ei: robots.txt kieltää kaiken ja joka sivu saa noindex-tagin.
 * Sivusto avautuu hakukoneille automaattisesti, kun oma domain otetaan
 * käyttöön ja NEXT_PUBLIC_SITE_URL asetetaan – erillistä lippua, joka pitäisi
 * muistaa poistaa julkaisussa, ei ole.
 */
export const isIndexable = publicUrl !== undefined;
