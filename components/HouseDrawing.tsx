import styles from "./HouseDrawing.module.css";

/** Julkisivupiirros, joka piirtyy auki hitaasti hero-osiossa. */
export function HouseDrawing() {
  return (
    <svg
      className={styles.drawing}
      viewBox="0 0 520 380"
      role="img"
      aria-label="Piirros puurunkoisen omakotitalon julkisivusta"
    >
      {/* maanpinta */}
      <path className={styles.l} d="M20 330H500" />

      {/* seinät ja katto */}
      <path className={`${styles.l} ${styles.d2}`} d="M90 330V190L260 80l170 110v140" />
      <path className={`${styles.l} ${styles.d2}`} d="M70 203 260 68l190 135" />

      {/* runkotolpat */}
      <g className={`${styles.l} ${styles.thin} ${styles.d3}`}>
        <path d="M120 330V210M150 330V190M180 330V170M210 330V151M240 330V132M270 330V132M300 330V151M330 330V170M360 330V190M390 330V210" />
        <path d="M90 250H430M90 300H430" />
      </g>

      {/* kattotuolit */}
      <g className={`${styles.l} ${styles.thin} ${styles.d3}`}>
        <path d="M120 200V172M150 181V151M180 161V130M210 142V110M240 123V88M290 123V88M320 142V110M350 161V130M380 181V151M410 200V172" />
      </g>

      {/* ovi ja ikkunat */}
      <g className={`${styles.l} ${styles.d4}`}>
        <path d="M228 330V262h64v68" />
        <path d="M120 296v-42h58v42zM342 296v-42h58v42z" />
        <path d="M149 254v42M371 254v42" />
        <path d="M232 175l28-20 28 20v25h-56z" />
      </g>

      {/* piippu */}
      <path className={`${styles.l} ${styles.d4}`} d="M340 112V64h26v63" />

      {/* mittaviivat */}
      <g className={styles.dim}>
        <path d="M90 352V344M430 352V344M90 348H430" />
        <path d="M470 330h8M470 80h8M474 330V80" />
        <path d="M255 348v-4M262 348v-4" />
      </g>

      <text x="260" y="366" textAnchor="middle">
        11 400
      </text>
      <text x="492" y="210" textAnchor="middle" transform="rotate(90 492 210)">
        7 800
      </text>
      <text x="40" y="326">
        ±0.000
      </text>
    </svg>
  );
}
