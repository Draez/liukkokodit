import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Liukko Kodit Oy – rakennusliike Tuusulassa",
  description:
    "Liukko Kodit Oy rakentaa omakotitaloja, laajennuksia ja piharakennuksia Tuusulassa ja Keski-Uudellamaalla. Saman rakentajan käsissä suunnittelusta luovutukseen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fi" className={`${bricolage.variable} ${instrument.variable}`}>
      <body>
        <a className="skip-link" href="#sisalto">
          Siirry sisältöön
        </a>
        {children}
      </body>
    </html>
  );
}
