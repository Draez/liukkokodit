import Image from "next/image";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import styles from "./Ready.module.css";

/** Leveä tunnelmakuva, teksti kuvan alla. */
export function Ready() {
  return (
    <Reveal>
      <div className="wrap">
        <Fade i={0} className={styles.photo}>
          <Image
            src={site.ready.image}
            alt={site.ready.alt}
            fill
            sizes="(max-width: 1240px) 100vw, 1200px"
          />
        </Fade>
        <Fade as="p" i={1} className={styles.body}>
          {site.ready.body}
        </Fade>
      </div>
    </Reveal>
  );
}
