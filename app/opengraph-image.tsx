import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { logoDataUri } from "@/components/Logo";
import { stacked } from "@/components/logo-paths";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Liukko Kodit – valmiit omakoti- ja paritalot";

// Pystylogon kuvasuhde viewBoxista, jotta kuva ei veny.
const [, , vbW, vbH] = stacked.viewBox.split(" ").map(Number);
const STACKED_H = Math.round((260 * vbH) / vbW);

export default async function OpengraphImage() {
  // Satorin oletusfontti ei ole brändifontti, joten otsikkofontti ladataan
  // repoon talletetusta tiedostosta (Fraunces Light, OFL).
  const fraunces = await readFile(join(process.cwd(), "assets", "Fraunces-Light.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 80,
          background: "#EFEAE1",
          color: "#161513",
          padding: "72px 96px",
          fontFamily: "Fraunces",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse, ei DOM */}
        <img src={logoDataUri("stacked", "#161513")} width={260} height={STACKED_H} alt="" />

        <div style={{ display: "flex", flexDirection: "column", gap: 36, width: 660 }}>
          <div style={{ display: "flex", fontSize: 76, lineHeight: 1.08, letterSpacing: -1.5 }}>
            {site.hero.title}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#6B645A" }}>
            {site.hero.areaStrong}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Fraunces", data: fraunces, weight: 300, style: "normal" }],
    },
  );
}
