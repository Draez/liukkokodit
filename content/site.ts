/**
 * Single source of truth for every string and every piece of business data on
 * the site. Fields typed `Todo` are placeholders that still need the real
 * value from the client; they render as a highlighted [chip] via <Todo>, so an
 * unfilled field is impossible to miss instead of silently shipping a dead
 * tel: link.
 */
export type Todo = null;

export const site = {
  company: "Liukko Kodit Oy",
  brand: "Liukko Kodit",
  city: "Tuusula",

  /** TODO: yrittäjän koko nimi */
  owner: null as string | Todo,
  /** TODO: oikea puhelinnumero, kansainvälisessä muodossa esim. +358401234567 */
  phone: null as string | Todo,
  /** TODO: vahvista oikea osoite */
  email: null as string | Todo,
  /** TODO: Y-tunnus muodossa 0000000-0 */
  businessId: null as string | Todo,

  // Ankkurit ovat /-alkuisia, jotta ne toimivat myös alasivuilta
  // (/tyonaytteet/[id]); etusivulla /#palvelut vierittää aivan kuten #palvelut.
  nav: [
    { href: "/#palvelut", label: "Palvelut" },
    { href: "/#prosessi", label: "Näin työ etenee" },
    { href: "/#tyot", label: "Työnäytteet" },
    { href: "/#alue", label: "Toiminta-alue" },
  ],

  hero: {
    title: "Talosi rakentaa sama mies alusta loppuun.",
    lede: "Liukko Kodit on yhden rakentajan rakennusliike Tuusulassa. Sovit työstä suoraan tekijän kanssa – ja hän on se, joka seisoo tontillasi joka aamu.",
    area: "Omakotitalot, laajennukset ja piharakennukset",
    areaStrong: "Tuusula ja Keski-Uusimaa",
    image: "/hero-olohuone.jpg",
    imageAlt: "Valoisa olohuone ja keittiö valmiissa paritalossa",
  },

  why: {
    title: "Miksi yhden miehen rakennusliike?",
    lede: "Suuressa firmassa myyjä myy, työnjohtaja johtaa ja kirvesmies rakentaa. Täällä kaikki kolme ovat sama henkilö.",
    items: [
      {
        title: "Sama tekijä joka päivä",
        body: "Tontilla ei vaihdu porukka viikoittain. Rakentaja tuntee talosi jokaisen liitoksen, koska hän on tehnyt ne itse.",
      },
      {
        title: "Suora keskustelu",
        body: 'Kysymys tai muutostoive hoituu yhdellä puhelulla. Ei välikäsiä, ei vastausta "kysyn työmaalta".',
      },
      {
        title: "Vastuu yhdessä nimessä",
        body: "Tarjous, aikataulu ja laatu ovat yhden ihmisen lupauksia. Se näkyy siinä, miten työ tehdään.",
      },
    ],
  },

  services: {
    title: "Palvelut",
    lede: "Pientalorakentamista suunnittelusta luovutukseen. Tarvittaessa luotettavat aliurakoitsijat LVI- ja sähkötöihin.",
    items: [
      {
        title: "Omakotitalot",
        body: "Puurunkoiset omakotitalot omalle tontille valmiiden tai räätälöityjen suunnitelmien pohjalta. Perustuksista vesikattoon ja sisävalmiiksi tai sovittuun valmiusasteeseen.",
      },
      {
        title: "Laajennukset ja peruskorjaukset",
        body: "Lisähuone, toinen kerros tai koko talon remontti. Vanhaan rakenteeseen liittyminen vaatii tarkkuutta – siitä sovitaan tarkasti ennen kuin ensimmäistä seinää avataan.",
      },
      {
        title: "Autotallit, saunat ja piharakennukset",
        body: "Autotallit, varastot, pihasaunat ja grillikatokset. Usein sellaisia töitä, joihin isot firmat eivät ehdi – tänne ne mahtuvat.",
      },
      {
        title: "Terassit ja julkisivut",
        body: "Terassit, julkisivuverhoukset ja ikkunoiden vaihdot. Työt, jotka näkyvät päivittäin ja joissa siisti jälki ratkaisee.",
      },
    ],
  },

  process: {
    title: "Näin työ etenee",
    lede: "Neljä vaihetta, ei yllätyksiä. Aikataulu ja hinta lyödään lukkoon ennen kuin työ alkaa.",
    steps: [
      {
        title: "Tapaaminen tontilla",
        body: "Käydään paikan päällä läpi, mitä haluat ja mitä tontti sallii. Maksuton, ei sitoumuksia.",
      },
      {
        title: "Suunnitelma ja tarjous",
        body: "Saat kirjallisen tarjouksen, jossa on eritelty työt, materiaalit ja aikataulu. Rakennuslupa-asioissa autetaan.",
      },
      {
        title: "Rakentaminen",
        body: "Työ etenee sovitussa järjestyksessä ja kuulet, mitä tapahtuu seuraavaksi. Muutokset sovitaan kirjallisesti.",
      },
      {
        title: "Luovutus ja takuu",
        body: "Käydään valmis työ yhdessä läpi. Takuu ja vastuuvakuutus kuuluvat jokaiseen urakkaan.",
      },
    ],
  },

  work: {
    title: "Työnäytteitä",
    lede: "Valmiita kohteita Tuusulasta ja lähikunnista.",
    /** Linkkiteksti kortista kohteen omalle sivulle /tyonaytteet/[id]. */
    more: "Katso kohde",
    back: "Takaisin työnäytteisiin",
    /**
     * TODO: tarkista otsikot (`type`) ja täytä paikka ja tekstit.
     *
     * `id` on kohteen URL-osa (/tyonaytteet/omakotitalo-tuusula): pienet
     * kirjaimet, numerot ja viivat. `body` on kortin lyhyt teksti, `details`
     * kohdesivun pidempi kuvaus. `image` on etusivun kortin ja kohdesivun
     * pääkuva, `gallery` kohdesivun muut kuvat. Kuvat ovat kansiossa
     * /public/tyonaytteet/[id]/.
     */
    items: [
      {
        id: "omakotitalo-1",
        type: "Omakotitalo",
        place: null as string | Todo,
        body: null as string | Todo,
        details: null as string | Todo,
        image: "/tyonaytteet/omakotitalo-1/01.jpg" as string | Todo,
        gallery: [
          { src: "/tyonaytteet/omakotitalo-1/02.jpg", alt: "Talo ja terassi ylhäältä kuvattuna" },
          { src: "/tyonaytteet/omakotitalo-1/03.jpg", alt: "Tummaksi verhottu talo pihan puolelta" },
          { src: "/tyonaytteet/omakotitalo-1/04.jpg", alt: "Autotalli ja katos" },
          { src: "/tyonaytteet/omakotitalo-1/05.jpg", alt: "Talo ja piha tien suunnasta" },
          { src: "/tyonaytteet/omakotitalo-1/06.jpg", alt: "Talon julkisivu ja terassi" },
        ],
      },
      {
        id: "omakotitalo-2",
        type: "Omakotitalo",
        place: null as string | Todo,
        body: null as string | Todo,
        details: null as string | Todo,
        image: "/tyonaytteet/omakotitalo-2/01.jpg" as string | Todo,
        gallery: [
          { src: "/tyonaytteet/omakotitalo-2/02.jpg", alt: "Avoin keittiö ja olohuone" },
          { src: "/tyonaytteet/omakotitalo-2/03.jpg", alt: "Makuuhuone" },
          { src: "/tyonaytteet/omakotitalo-2/04.jpg", alt: "Katettu terassi" },
          { src: "/tyonaytteet/omakotitalo-2/05.jpg", alt: "Sauna" },
          { src: "/tyonaytteet/omakotitalo-2/06.jpg", alt: "Kylpyhuone ja saunan lasiseinä" },
        ],
      },
      {
        id: "paritalo",
        type: "Paritalo",
        place: null as string | Todo,
        body: null as string | Todo,
        details: null as string | Todo,
        image: "/tyonaytteet/paritalo/01.jpg" as string | Todo,
        gallery: [
          { src: "/tyonaytteet/paritalo/02.jpg", alt: "Terassi ja nurmipiha" },
          { src: "/tyonaytteet/paritalo/03.jpg", alt: "Keittiö ja ruokapöytä" },
          { src: "/tyonaytteet/paritalo/04.jpg", alt: "Olohuone ja keittiö" },
          { src: "/tyonaytteet/paritalo/05.jpg", alt: "Sisäänkäynnit ja autokatos" },
          { src: "/tyonaytteet/paritalo/06.jpg", alt: "Makuuhuone" },
        ],
      },
    ],
  },

  areas: {
    title: "Toiminta-alue",
    /** Ensimmäinen on kotipaikka ja korostetaan. */
    municipalities: [
      "Tuusula",
      "Järvenpää",
      "Kerava",
      "Nurmijärvi",
      "Hyvinkää",
      "Mäntsälä",
      "Sipoo",
      "Vantaa",
    ],
    note: "Kotipaikka Tuusula. Työmaat noin 40 kilometrin säteellä – tarpeeksi lähellä, että tontilla ollaan joka aamu ajoissa.",
    asideTitle: "Ota yhteyttä ajoissa",
    asideBody:
      "Yhden rakentajan kalenteri täyttyy kausi kerrallaan. Keväällä alkava rakennus kannattaa sopia jo syksyllä, niin lupa-asiat ehditään hoitaa rauhassa.",
    asideCta: "Kysy vapaita aikoja",
  },

  contact: {
    title: "Pyydä tarjous",
    lede: "Kerro lyhyesti, mitä olet rakentamassa ja missä. Vastaus yleensä seuraavana arkipäivänä.",
  },
} as const;

export type WorkItem = (typeof site.work.items)[number];

/** Kohde URL-osan perusteella, tai undefined jos sellaista ei ole. */
export function findWork(id: string): WorkItem | undefined {
  return site.work.items.find((item) => item.id === id);
}

/** Puhelinnumero tel:-linkkiin, tai null jos numeroa ei ole vielä syötetty. */
export const telHref = site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : null;
