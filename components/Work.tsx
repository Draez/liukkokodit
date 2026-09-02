import Image from "next/image";
import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import { SecHead } from "./SecHead";
import { Todo, Value } from "./Todo";
import styles from "./Work.module.css";

export function Work() {
  return (
    <Reveal id="tyot">
      <div className="wrap">
        <SecHead title={site.work.title} lede={site.work.lede} />
        <div className={styles.grid}>
          {site.work.items.map((item, i) => (
            <Fade key={item.type} as="article" className={styles.work} i={i + 2}>
              {item.image ? (
                <div className={styles.photo}>
                  <Image
                    src={item.image}
                    alt={`${item.type}, ${item.place ?? site.city}`}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
              ) : (
                <div className={styles.ph}>
                  <Todo>kuva {i + 1}</Todo>
                </div>
              )}
              <div className={styles.body}>
                <h3>
                  {item.type}, <Value value={item.place} placeholder="paikka" />
                </h3>
                <p>
                  <Value
                    value={item.body}
                    placeholder="Lyhyt kuvaus: koko m², rakennusaika, erityispiirre."
                  />
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
