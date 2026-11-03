import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import { SecHead } from "./SecHead";
import styles from "./Why.module.css";

export function Why() {
  return (
    <Reveal className={styles.why}>
      <div className="wrap">
        <SecHead title={site.why.title} lede={site.why.lede} />
        <div className={styles.grid}>
          {site.why.items.map((item, i) => (
            <Fade key={item.title} className={styles.item} i={i + 2}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
