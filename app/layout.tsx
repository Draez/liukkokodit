import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const title = "Liukko Kodit Oy – rakennusliike Tuusulassa";
const description =
  "Yhden rakentajan rakennusliike Tuusulassa. Omakotitalot, laajennukset ja piharakennukset suunnittelusta luovutukseen – Tuusula, Järvenpää, Kerava ja muu Keski-Uusimaa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    siteName: "Liukko Kodit Oy",
    url: "/",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: Next 16 ei enää ohita CSS:n scroll-behavior: smooth
    // -asetusta reittisiirtymissä. Ilman tätä "vieritys ylös" animoituu, ja
    // reititin ehtii tarkistaa sijainnin ennen animaatiota ja vierittää sivun
    // ensimmäisen elementin (ei sivun yläreunan) näkyviin.
    <html
      lang="fi"
      className={`${bricolage.variable} ${instrument.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#sisalto">
          Siirry sisältöön
        </a>
        {children}
        <JsonLd baseUrl={siteUrl} />
      </body>
    </html>
  );
}
