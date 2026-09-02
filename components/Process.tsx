import { site } from "@/content/site";
import { Fade } from "./Fade";
import { Reveal } from "./Reveal";
import { SecHead } from "./SecHead";
import styles from "./Process.module.css";

export function Process() {
  return (
    <Reveal className={styles.process} id="prosessi">
      <div className="wrap">
        <SecHead title={site.process.title} lede={site.process.lede} />
        <div className={styles.steps}>
          {site.process.steps.map((step, i) => (
            <Fade key={step.title} className={styles.step} i={i + 2}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Fade>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
