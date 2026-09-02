import { site } from "@/content/site";

/**
 * LocalBusiness-rakenteinen data. Tämä on se osa, jonka varassa yritys
 * löytyy hauilla kuten "rakennusliike Tuusula" — areaServed kattaa koko
 * toiminta-alueen, ei pelkkää kotipaikkaa.
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
      "Yhden rakentajan rakennusliike Tuusulassa. Omakotitalot, laajennukset, peruskorjaukset ja piharakennukset suunnittelusta luovutukseen.",
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
    makesOffer: site.services.items.map((item) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: item.title },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
