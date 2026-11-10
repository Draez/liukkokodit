import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import { SecHead } from "./SecHead";
import styles from "./Work.module.css";

export function Work() {
  return (
    <Reveal id="referenssit">
      <div className="wrap">
        <SecHead title={site.work.title} lede={site.work.lede} />
        <div className={styles.grid}>
          {site.work.items.map((item) => (
            <Fade key={item.id} as="article" className={styles.work} i={2}>
              <div className={styles.photo}>
                <Image
                  src={item.image}
                  alt={`${item.title}, ${item.place}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
              <div className={styles.body}>
                <p className={styles.place}>{item.place}</p>
                <h3>
                  {/* Koko kortti on klikattava (::after peittää artiklan). */}
                  <Link className={styles.link} href={`/referenssit/${item.id}`}>
                    {item.title}
                  </Link>
                </h3>
                <p>{item.facts}</p>
                <span className={styles.more} aria-hidden="true">
                  {site.work.more} →
                </span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
