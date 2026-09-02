import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import styles from "./Areas.module.css";

export function Areas() {
  return (
    <Reveal className={styles.areas} id="alue">
      <div className="wrap">
        <div>
          <Fade as="h2" i={0}>
            {site.areas.title}
          </Fade>
          <Fade as="ul" i={1} className={styles.chips}>
            {site.areas.municipalities.map((name) => (
              <li key={name} className={name === site.city ? styles.home : undefined}>
                {name}
              </li>
            ))}
          </Fade>
          <Fade as="p" i={2} className={styles.note}>
            {site.areas.note}
          </Fade>
        </div>
        <div>
          <Fade as="h3" i={1}>
            {site.areas.asideTitle}
          </Fade>
          <Fade as="p" i={2} className={styles.asideNote}>
            {site.areas.asideBody}
          </Fade>
          <Fade as="p" i={3} className={styles.asideCta}>
            <a className="btn btn-spruce" href="#yhteys">
              {site.areas.asideCta}
            </a>
          </Fade>
        </div>
      </div>
    </Reveal>
  );
}
