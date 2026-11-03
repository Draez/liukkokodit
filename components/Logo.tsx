import { inline, mark, markViewBox, stacked, wordmark } from "./logo-paths";

type LogoProps = {
  /** inline = merkki + teksti vierekkäin (navi), stacked = alkuperäinen
      pystylogo, mark = pelkkä talo. */
  variant?: "inline" | "stacked" | "mark";
  /** Väri; oletuksena perii tekstin värin, joten sama logo toimii
      beigellä ja mustalla pohjalla. */
  color?: string;
  className?: string;
  title?: string;
};

export function Logo({
  variant = "inline",
  color = "currentColor",
  className,
  title = "Liukko Kodit",
}: LogoProps) {
  const layout = variant === "mark" ? null : variant === "stacked" ? stacked : inline;

  return (
    <svg
      className={className}
      viewBox={layout?.viewBox ?? markViewBox}
      role="img"
      aria-label={title}
    >
      <path
        d={mark.house}
        fill="none"
        stroke={color}
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d={mark.stem} fill="none" stroke={color} strokeWidth="20" strokeLinecap="round" />
      <path d={mark.leaves} fill={color} fillRule="evenodd" />
      {layout && (
        <>
          <path transform={layout.liukko} d={wordmark.liukko} fill={color} />
          <path transform={layout.kodit} d={wordmark.kodit} fill={color} />
        </>
      )}
    </svg>
  );
}

/**
 * Sama logo SVG-merkkijonona data-URI:na. ImageResponse (favicon, OG-kuva)
 * ei piirrä sisäkkäisiä SVG-komponentteja luotettavasti, mutta <img> toimii.
 */
export function logoDataUri(variant: "inline" | "stacked" | "mark", color: string) {
  const layout = variant === "mark" ? null : variant === "stacked" ? stacked : inline;
  const words = layout
    ? `<path transform="${layout.liukko}" d="${wordmark.liukko}" fill="${color}"/>` +
      `<path transform="${layout.kodit}" d="${wordmark.kodit}" fill="${color}"/>`
    : "";
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${layout?.viewBox ?? markViewBox}">` +
    `<path d="${mark.house}" fill="none" stroke="${color}" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="${mark.stem}" fill="none" stroke="${color}" stroke-width="20" stroke-linecap="round"/>` +
    `<path d="${mark.leaves}" fill="${color}" fill-rule="evenodd"/>` +
    words +
    `</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
