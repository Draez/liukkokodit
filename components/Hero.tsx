import Image from "next/image";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    // on-load: hero häivähtää heti latauksessa, ei vieritykseen sidottuna.
    <header className={`${styles.hero} on-load`}>
      <div className="wrap">
        <Fade i={0} className={styles.photo}>
          <Image
            src={site.hero.image}
            alt={site.hero.imageAlt}
            fill
            sizes="(max-width: 1240px) 100vw, 1200px"
            priority
          />
        </Fade>

        <div className={styles.text}>
          <Fade as="h1" i={1}>
            {site.hero.title}
          </Fade>

          <Fade as="p" i={2} className={styles.lede}>
            {site.hero.lede}
          </Fade>

          <Fade i={3} className={styles.cta}>
            <a className="btn" href="#referenssit">
              {site.hero.primaryCta}
            </a>
            <a className="btn" href="#yhteys">
              {site.hero.secondaryCta}
            </a>
          </Fade>

          <Fade as="p" i={4} className={styles.area}>
            {site.hero.area} · {site.hero.areaStrong}
          </Fade>
        </div>
      </div>
    </header>
  );
}
