import { site } from "@/content/site";
import styles from "./Areas.module.css";

export function Areas() {
  return (
    <section className={styles.areas} id="alue">
      <div className="wrap">
        <div>
          <h2>{site.areas.title}</h2>
          <ul className={styles.chips}>
            {site.areas.municipalities.map((name) => (
              <li key={name} className={name === site.city ? styles.home : undefined}>
                {name}
              </li>
            ))}
          </ul>
          <p className={styles.note}>{site.areas.note}</p>
        </div>
        <div>
          <h3>{site.areas.asideTitle}</h3>
          <p className={styles.asideNote}>{site.areas.asideBody}</p>
          <p className={styles.asideCta}>
            <a className="btn btn-spruce" href="#yhteys">
              {site.areas.asideCta}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
