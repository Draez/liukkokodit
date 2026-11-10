import Image from "next/image";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import styles from "./About.module.css";

export function About() {
  return (
    <Reveal className={styles.about} id="yritys">
      <div className="wrap">
        <div className={styles.statement}>
          <Fade as="h2" i={0}>
            {site.about.title}
          </Fade>
          {site.about.paragraphs.map((text, i) => (
            <Fade key={i} as="p" i={i + 1}>
              {text}
            </Fade>
          ))}
        </div>

        {/* Kapea pystykuva ja teksti vierekkäin, puoli vaihtuu riveittäin:
            vierittäessä lukee tekstiä ja näkee samalla työn jälkeä. */}
        <div className={styles.rows}>
          {site.about.items.map((item, i) => (
            <Fade key={item.title} className={styles.row} i={i + 3}>
              <div className={styles.photo}>
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 420px" />
              </div>
              <div className={styles.text}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
