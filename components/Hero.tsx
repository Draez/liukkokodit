import { site, telHref } from "@/content/site";
import { HouseDrawing } from "./HouseDrawing";
import { Fade } from "./Fade";
import { Todo } from "./Todo";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    // on-load: hero häivähtää heti latauksessa, ei vieritykseen sidottuna.
    <header className={`${styles.hero} on-load`}>
      <div className="wrap">
        <div>
          <Fade as="h1" i={0}>
            {site.hero.title}
          </Fade>

          <Fade as="p" i={1} className={styles.lede}>
            {site.hero.lede}
          </Fade>

          <Fade i={2} className={styles.cta}>
            <a className="btn btn-pine" href="#yhteys">
              Pyydä tarjous
            </a>
            {telHref ? (
              <a className="btn btn-ghost" href={telHref}>
                Soita {site.phone}
              </a>
            ) : (
              <span className="btn btn-ghost">
                Soita <Todo>puhelinnumero</Todo>
              </span>
            )}
          </Fade>

          <Fade as="p" i={3} className={styles.area}>
            {site.hero.area} · <strong>{site.hero.areaStrong}</strong>
          </Fade>
        </div>

        <Fade i={1} className={styles.figure}>
          <HouseDrawing />
        </Fade>
      </div>
    </header>
  );
}
