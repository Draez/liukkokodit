import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Liukko Kodit Oy – rakennusliike Tuusulassa";

export default async function OpengraphImage() {
  // Satorin oletusfontti ei ole brändifontti, joten Bricolage ladataan
  // repoon talletetusta tiedostosta (OFL).
  const bricolage = await readFile(
    join(process.cwd(), "assets", "BricolageGrotesque-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1E3A2F",
          color: "#F3F1EA",
          padding: "72px 80px",
          fontFamily: "Bricolage Grotesque",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="40" height="40" viewBox="0 0 26 26">
            <path
              d="M3 13 13 4l10 9M6 11.5V22h14V11.5"
              fill="none"
              stroke="#F3F1EA"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 22v-6h6v6"
              fill="none"
              stroke="#D9B98A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            Liukko Kodit
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Talosi rakentaa sama mies alusta loppuun.
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#B9C8BF" }}>
          Omakotitalot, laajennukset ja piharakennukset · Tuusula ja
          Keski-Uusimaa
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: bricolage,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
