import { site } from "@/content/site";

/**
 * LocalBusiness-rakenteinen data. areaServed kattaa kaikki alueet, joilta
 * tontteja etsitään, ei pelkkää kotipaikkaa.
 */
export function JsonLd({ baseUrl }: { baseUrl: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${baseUrl}#business`,
    name: site.company,
    alternateName: site.brand,
    url: baseUrl,
    description:
      "Liukko Kodit suunnittelee ja rakentaa valmiita omakoti- ja paritaloja pääkaupunkiseudulle ja Keski-Uudellemaalle tontin hankinnasta muuttovalmiiseen kotiin.",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: "Uusimaa",
      addressCountry: "FI",
    },
    areaServed: site.areas.municipalities.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsLanguage: "fi",
    ...(site.phone ? { telephone: site.phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.businessId ? { vatID: site.businessId } : {}),
    ...(site.owner
      ? { founder: { "@type": "Person", name: site.owner } }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
