import { site, telHref } from "@/content/site";
import { HouseDrawing } from "./HouseDrawing";
import { Todo } from "./Todo";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header className={styles.hero}>
      <div className="wrap">
        <div>
          <h1>{site.hero.title}</h1>
          <p className={styles.lede}>{site.hero.lede}</p>

          <div className={styles.cta}>
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
          </div>

          <p className={styles.area}>
            {site.hero.area} · <strong>{site.hero.areaStrong}</strong>
          </p>
        </div>

        <div className={styles.figure}>
          <HouseDrawing />
        </div>
      </div>
    </header>
  );
}
