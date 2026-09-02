import { site } from "@/content/site";
import styles from "./Why.module.css";

export function Why() {
  return (
    <section className={styles.why}>
      <div className="wrap">
        <div className="sec-head">
          <h2>{site.why.title}</h2>
          <p>{site.why.lede}</p>
        </div>
        <div className={styles.grid}>
          {site.why.items.map((item) => (
            <div key={item.title}>
              <div className={styles.mark} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
