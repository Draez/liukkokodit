import { site } from "@/content/site";
import styles from "./Services.module.css";

export function Services() {
  return (
    <section id="palvelut">
      <div className="wrap">
        <div className="sec-head">
          <h2>{site.services.title}</h2>
          <p>{site.services.lede}</p>
        </div>
        <div className={styles.list}>
          {site.services.items.map((item) => (
            <div className={styles.row} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
