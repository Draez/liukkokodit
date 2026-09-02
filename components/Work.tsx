import Image from "next/image";
import { site } from "@/content/site";
import { Todo, Value } from "./Todo";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="tyot">
      <div className="wrap">
        <div className="sec-head">
          <h2>{site.work.title}</h2>
          <p>{site.work.lede}</p>
        </div>
        <div className={styles.grid}>
          {site.work.items.map((item, i) => (
            <article className={styles.work} key={item.type}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
