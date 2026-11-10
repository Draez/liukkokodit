import Image from "next/image";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import styles from "./Values.module.css";

export function Values() {
  return (
    <Reveal className={styles.values}>
      <div className={`wrap ${styles.grid}`}>
        <Fade i={0} className={styles.photo}>
          <Image src={site.values.image} alt={site.values.alt} fill sizes="(max-width: 760px) 100vw, 480px" />
        </Fade>
        <div>
          <Fade as="h2" i={1}>
            {site.values.title}
          </Fade>
          <dl className={styles.list}>
            {site.values.items.map((item, i) => (
              <Fade key={item.title} i={i + 2} className={styles.item}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </Fade>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  );
}
