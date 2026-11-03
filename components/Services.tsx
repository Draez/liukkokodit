import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import { SecHead } from "./SecHead";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Reveal className={styles.services} id="palvelut">
      <div className="wrap">
        <SecHead title={site.services.title} lede={site.services.lede} />
        <div className={styles.list}>
          {site.services.items.map((item, i) => (
            <Fade key={item.title} className={styles.row} i={i + 2}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
