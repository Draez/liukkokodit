# Liukko Kodit Oy — landing page

Yksisivuinen laskeutumissivu Liukko Kodit Oy:lle (rakennusliike, Tuusula).
Next.js 16 (App Router) + React 19, ei CSS-kehystä — tyylit on portattu
suunnittelumallista design tokeneina ja CSS-moduuleina.

## Kehitys

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm test       # vitest
pnpm lint
pnpm build
```

## Puuttuvat tiedot

Kaikki sivun tekstit ja yritystiedot ovat yhdessä tiedostossa:
**`content/site.ts`**. Kentät joiden arvo on `null` renderöityvät sivulle
korostettuna `[placeholderina]`, joten täyttämätön tieto ei mene huomaamatta
julkaisuun.

Ennen julkaisua tarvitaan:

| Kenttä | Missä näkyy |
|---|---|
| `owner` | Yhteystiedot, JSON-LD |
| `phone` | Hero, navi (mobiili), yhteystiedot, JSON-LD |
| `email` | Yhteystiedot, JSON-LD |
| `businessId` | Yhteystiedot, footer, JSON-LD |
| `work.items[].image` + `place` + `body` | Työnäytteet |

Kun `work.items[].image` osoittaa kuvaan (esim. `/tyot/omakotitalo-tuusula.jpg`
kansiossa `public/`), viivoitettu paikanvaraaja vaihtuu automaattisesti
`next/image`-komponenttiin.

Kun `phone` on täytetty, naviin ilmestyy kapealla näytöllä soittopainike ja
heron "Soita"-painike muuttuu toimivaksi `tel:`-linkiksi.

## Ympäristömuuttujat

Katso `.env.example`. Lomake tarvitsee:

- `RESEND_API_KEY` — https://resend.com/api-keys
- `CONTACT_TO_EMAIL` — osoite johon tarjouspyynnöt ohjataan
- `RESEND_FROM` — lähettäjä, vaatii Resendissä varmennetun domainin.
  Ennen `liukkokodit.fi`-domainin varmennusta testaukseen käy
  `onboarding@resend.dev`, joka lähettää vain Resend-tilin omaan
  sähköpostiin.
- `NEXT_PUBLIC_SITE_URL` — vasta kun oma domain on käytössä. Vercelillä
  osoite päätellään muuten automaattisesti. **Niin kauan kuin tämä on
  asettamatta, sivusto on piilossa hakukoneilta**: robots.txt kieltää
  indeksoinnin ja joka sivulla on `noindex`-tagi. Testiosoite ei siis päädy
  Googleen, ja sivusto avautuu hakukoneille samalla kun domain otetaan
  käyttöön.

Lomake epäonnistuu turvallisesti: jos avaimet puuttuvat tai Resend palauttaa
virheen, käyttäjälle näytetään puhelinnumero eikä lomake jää umpikujaan.

## Julkaisu Vercelille

1. Pushaa repo GitHubiin ja tuo projekti Verceliin (framework tunnistuu
   automaattisesti, buildkomento `pnpm build`).
2. Lisää ympäristömuuttujat projektin asetuksiin (Production + Preview).
3. Liitä domain `liukkokodit.fi` ja aseta `NEXT_PUBLIC_SITE_URL`.

## Rakenne

```
app/
  layout.tsx           fontit, metadata, JSON-LD
  page.tsx             osioiden kokoonpano
  globals.css          design tokenit, teema, jaetut apuluokat
  actions/sendQuote.ts lomakkeen server action (zod + Resend)
  icon.tsx             favicon
  opengraph-image.tsx  jakokuva
  robots.ts sitemap.ts
components/            yksi komponentti + CSS-moduuli per osio
content/site.ts        kaikki tekstit ja yritystiedot
lib/site-url.ts        julkisen osoitteen päättely
assets/                OG-kuvan fontti (Fraunces Light, OFL)
tests/                 vitest
```

## Teema

Beige ja musta, ei tummaa tilaa: brändi näyttää aina samalta käyttöjärjestelmän
asetuksista riippumatta. Värit ovat `app/globals.css`:n `:root`-muuttujissa.

Logo on piirretty SVG:ksi asiakkaan logokuvan pohjalta: `components/Logo.tsx`
(polut `components/logo-paths.ts`). Valmiit tiedostot asiakkaan käyttöön
ovat kansiossa `public/logo/`.

## Liike

Tekstit tulevat esiin pehmeästi: 600 ms häivytys ja 10 pikselin nousu
(`cubic-bezier(.16,1,.3,1)`), 70 ms porrastus osion sisällä.

Hero käyttää pelkkää CSS-animaatiota, joka käynnistyy heti ensimmäisessä
maalauksessa. Se on tarkoituksellista: jos hero odottaisi JS:ää, teksti olisi
läpinäkyvä hydraation ajan ja LCP siirtyisi sen taakse.

Muut osiot paljastuvat vasta kun ne tulevat ruudulle
(`components/Reveal.tsx`, IntersectionObserver, kerran per osio). Piilotus on
CSS:ssä `@media (scripting: enabled)` -ehdon takana, joten ilman JS:ää mitään
ei piiloteta. Koko efekti on `prefers-reduced-motion: no-preference` -ehdon
sisällä.

Porrastus säädetään `<Fade i={n}>` -propilla; viive on `n × 70 ms`.
