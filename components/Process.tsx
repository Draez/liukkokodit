import { site } from "@/content/site";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.process} id="prosessi">
      <div className="wrap">
        <div className="sec-head">
          <h2>{site.process.title}</h2>
          <p>{site.process.lede}</p>
        </div>
        <div className={styles.steps}>
          {site.process.steps.map((step) => (
            <div className={styles.step} key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
