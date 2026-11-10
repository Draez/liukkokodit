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
  // (/referenssit/[id]); etusivulla /#yritys vierittää aivan kuten #yritys.
  // Etusivu-linkkiä ei tarvita: logo vie sivun alkuun.
  nav: [
    { href: "/#yritys", label: "Yritys" },
    { href: "/#referenssit", label: "Referenssit" },
    { href: "/#yhteys", label: "Yhteys" },
  ],

  hero: {
    title: "Rakennamme enemmän kuin koteja.",
    lede: "Liukko Kodit suunnittelee ja rakentaa valmiita omakoti- ja paritaloja pääkaupunkiseudulle ja Keski-Uudellemaalle. Hoidamme kaiken tontin hankinnasta muuttovalmiiseen kotiin – sinä saat uuden kodin ilman rakentamisen vaivaa.",
    primaryCta: "Katso referenssit",
    secondaryCta: "Kysy tulevista kohteista",
    area: "Omakoti- ja paritalot",
    areaStrong: "Pääkaupunkiseutu ja Keski-Uusimaa",
    image: "/hero-olohuone.jpg",
    imageAlt: "Valoisa olohuone ja keittiö valmiissa paritalossa",
  },

  about: {
    title: "Valmis koti – ja koko vastuu meillä",
    paragraphs: [
      "Liukko Kodit toteuttaa omia asuntohankkeitaan. Etsimme tontit hyviltä ja halutuilta sijainneilta ja suunnittelemme niihin yhdessä arkkitehdin kanssa kodit, joissa tontin mahdollisuudet on hyödynnetty parhaalla tavalla. Myymme kodit suoraan asukkaille – valmiina tai jo rakennusvaiheessa.",
      "Kannamme kokonaisvastuun hankkeesta tontin ostosta luovutukseen. Siksi voimme luvata, että kohde etenee sovitussa aikataulussa ja suunnitelmien mukaan.",
    ],
    /** Jokaisella kohdalla pystykuva; kuva ja teksti vuorottelevat puolta. */
    items: [
      {
        title: "Ilman rakentamisen vaivaa",
        body: "Sinun ei tarvitse kilpailuttaa urakoitsijoita, valvoa työmaata tai murehtia aikatauluista. Voit keskittyä omaan arkeesi – me hoidamme loput.",
        image: "/koti/makuuhuone.jpg",
        alt: "Rauhallinen makuuhuone, jossa puurimoitettu seinä",
      },
      {
        title: "Pääset vaikuttamaan",
        body: "Kun tulet mukaan hankkeeseen ajoissa, valitset kotisi pintamateriaalit, värit, keittiökalusteet, laatat ja lattiat omien toiveidesi mukaan.",
        image: "/koti/kylpyhuone.jpg",
        alt: "Kylpyhuone, jossa puinen allaskaappi ja kivinen pesuallas",
      },
      {
        title: "Tutut tekijät",
        body: "Rakennamme vuosia yhdessä toimineiden aliurakoitsijoiden, suunnittelijoiden, valvojien ja toimittajien kanssa. Työ etenee sujuvasti, jälki on laadukasta ja aikataulu pitää.",
        image: "/koti/keittio.jpg",
        alt: "Keittiö, jossa valkoiset ja puupintaiset kaapit",
      },
    ],
  },

  process: {
    title: "Näin hanke etenee",
    lede: "Tontin ostosta muuttopäivään kuluu keskimäärin noin vuosi.",
    steps: [
      {
        title: "Tontti",
        body: "Etsimme jatkuvasti tontteja hyviltä sijainneilta pääkaupunkiseudulla ja Keski-Uudellamaalla.",
      },
      {
        title: "Suunnittelu",
        body: "Suunnittelemme kohteen arkkitehdin kanssa niin, että tontista saadaan paras mahdollinen hyöty asumiseen.",
      },
      {
        title: "Lupa ja ennakkomarkkinointi",
        body: "Käynnistämme rakennuslupaprosessin ja usein myös ennakkomarkkinoinnin. Tässä vaiheessa ostaja voi tulla mukaan.",
      },
      {
        title: "Rakentaminen",
        body: "Työt alkavat luvan saavuttua. Ennakkoon ostanut asukas valitsee pinnat, värit ja kalusteet omien toiveidensa mukaan.",
      },
      {
        title: "Muuttovalmis koti",
        body: "Luovutamme kodin valmiina ja viimeisteltynä. Sinä muutat sisään.",
      },
    ],
  },

  /** Leveä tunnelmakuva ja teksti prosessin jälkeen. */
  ready: {
    image: "/referenssit/kerava-paritalo/05.jpg",
    alt: "Puupaneloitu sauna epäsuoralla valaistuksella",
    body: "Vaikka et ehtisi mukaan suunnitteluun, koti on mietitty valmiiksi: tilat, keittiöt ja kylpyhuoneet ovat toimivia, ja pinnoissa on ajattomia, maanläheisiä sävyjä. Kauniita, laadukkaita ja nykyaikaisia koteja mahdollisimman monen makuun.",
  },

  values: {
    title: "Pidämme kiinni siitä, mitä lupaamme",
    image: "/koti/takka.jpg",
    alt: "Seinään upotettu varaava takka ja halkoteline",
    items: [
      {
        title: "Vastuullisuus",
        body: "Vastaamme jokaisesta kohteesta itse, tontista viimeistelyyn.",
      },
      {
        title: "Luotettavuus ja laatu",
        body: "Hankkeemme valmistuvat ajallaan, eikä laadusta tingitä missään vaiheessa.",
      },
      {
        title: "Avoimuus ja rehellisyys",
        body: "Kerromme suoraan, miten hanke etenee, ja kuuntelemme asiakkaan toiveita ja ajatuksia.",
      },
    ],
  },

  work: {
    title: "Referenssit",
    lede: "Laadukkaasti toteutettuja koteja ja rakennushankkeita. Tutustu työnjälkeemme ja tapaamme rakentaa.",
    /** Linkkiteksti kortista kohteen omalle sivulle /referenssit/[id]. */
    more: "Katso kohde",
    back: "Takaisin referensseihin",
    /**
     * `id` on kohteen URL-osa (/referenssit/kerava-paritalo): pienet
     * kirjaimet, numerot ja viivat. `facts` on kortin ja kohdesivun
     * tietorivi, `details` kohdesivun kuvaus. `image` on etusivun kortin ja
     * kohdesivun pääkuva, `gallery` kohdesivun muut kuvat. Kuvat ovat
     * kansiossa /public/referenssit/[id]/.
     *
     * Katuosoitteita ei julkaista: kohteet ovat nyt asukkaiden koteja.
     */
    items: [
      {
        id: "jarvenpaa-omakotitalot",
        title: "Kaksi omakotitaloa",
        place: "Järvenpää",
        facts: "122,5 m² / asunto · 5h + kt",
        details:
          "Kahden omakotitalon kokonaisuus Järvenpäähän. Kohteessa on laadukkaat materiaalit sekä huolella suunnitellut tilat ja yksityiskohdat. Korkea huonekorkeus ja suuret ikkunat tuovat koteihin valoa, avaruutta ja tilan tuntua.",
        image: "/referenssit/jarvenpaa-omakotitalot/06.jpg",
        gallery: [
          { src: "/referenssit/jarvenpaa-omakotitalot/02.jpg", alt: "Vaalea talo ja terassi ylhäältä kuvattuna" },
          { src: "/referenssit/jarvenpaa-omakotitalot/03.jpg", alt: "Tummaksi verhottu talo pihan puolelta" },
          { src: "/referenssit/jarvenpaa-omakotitalot/04.jpg", alt: "Autotalli ja katos" },
          { src: "/referenssit/jarvenpaa-omakotitalot/05.jpg", alt: "Talo ja piha tien suunnasta" },
          { src: "/referenssit/jarvenpaa-omakotitalot/01.jpg", alt: "Vaalea talo, terassi ja lasiovet" },
        ],
      },
      {
        id: "kerava-paritalo",
        title: "Paritalo",
        place: "Kerava",
        facts: "103,5 m² · 4h + kt",
        details:
          "Paritalokohde Keravalle, toteutettu laadukkain materiaalein. Kodin erityispiirteitä ovat osittain seinään upotettu varaava takka, lakattu betonilattia sekä tilava ja näyttävä kylpyhuone- ja saunaosasto.",
        image: "/referenssit/kerava-paritalo/02.jpg",
        gallery: [
          { src: "/referenssit/kerava-paritalo/01.jpg", alt: "Talo ja pergolalla katettu terassi" },
          { src: "/referenssit/kerava-paritalo/03.jpg", alt: "Makuuhuone" },
          { src: "/referenssit/kerava-paritalo/04.jpg", alt: "Katettu terassi" },
          { src: "/referenssit/kerava-paritalo/05.jpg", alt: "Sauna" },
          { src: "/referenssit/kerava-paritalo/06.jpg", alt: "Kylpyhuone ja saunan lasiseinä" },
        ],
      },
      {
        id: "jarvenpaa-paritalot",
        title: "Kaksi paritaloa",
        place: "Järvenpää",
        facts: "77 m² / asunto",
        details:
          "Kahden paritalon hanke Järvenpäähän. Kompaktissakin kodissa kolmen metrin huonekorkeus tuo mukavasti tilan tuntua, ja jokaisella asunnolla on oma yksityinen piha-alue.",
        image: "/referenssit/jarvenpaa-paritalot/01.jpg",
        gallery: [
          { src: "/referenssit/jarvenpaa-paritalot/04.jpg", alt: "Olohuone ja keittiö" },
          { src: "/referenssit/jarvenpaa-paritalot/03.jpg", alt: "Keittiö ja ruokapöytä" },
          { src: "/referenssit/jarvenpaa-paritalot/02.jpg", alt: "Terassi ja nurmipiha" },
          { src: "/referenssit/jarvenpaa-paritalot/05.jpg", alt: "Sisäänkäynnit ja autokatos" },
          { src: "/referenssit/jarvenpaa-paritalot/06.jpg", alt: "Makuuhuone" },
        ],
      },
    ],
  },

  areas: {
    title: "Missä rakennamme",
    /** Alueet, joilta etsitään tontteja. */
    municipalities: [
      "Helsinki",
      "Espoo",
      "Kauniainen",
      "Vantaa",
      "Tuusula",
      "Järvenpää",
      "Kerava",
      "Sipoo",
      "Nurmijärvi",
      "Klaukkala",
    ],
    note: "Etsimme jatkuvasti uusia tontteja näiltä alueilta.",
    asideTitle: "Myytkö tonttia?",
    asideBody: "Kuulemme mielellämme tonteista, joille voisi rakentaa omakoti- tai paritaloja.",
    asideCta: "Ota yhteyttä",
  },

  contact: {
    title: "Ota yhteyttä",
    lede: "Kysy käynnissä olevista ja tulevista kohteistamme – kerromme mielellämme lisää. Myös ideoita ja ehdotuksia saa aina esittää.",
    /** TODO: yrittäjän kuva (pystykuva), esim. "/koti/yrittaja.jpg" */
    image: null as string | Todo,
  },
} as const;

export type WorkItem = (typeof site.work.items)[number];

/** Kohde URL-osan perusteella, tai undefined jos sellaista ei ole. */
export function findWork(id: string): WorkItem | undefined {
  return site.work.items.find((item) => item.id === id);
}

/** Puhelinnumero tel:-linkkiin, tai null jos numeroa ei ole vielä syötetty. */
export const telHref = site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : null;
