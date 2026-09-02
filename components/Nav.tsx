import { site, telHref } from "@/content/site";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Päävalikko">
      <div className="wrap">
        <a className={styles.brand} href="#">
          <svg viewBox="0 0 26 26" aria-hidden="true">
            <path
              d="M3 13 13 4l10 9M6 11.5V22h14V11.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 22v-6h6v6"
              fill="none"
              stroke="#D9B98A"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          {site.brand}
        </a>

        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {telHref && (
            <a className={`btn btn-ghost ${styles.call}`} href={telHref}>
              Soita
            </a>
          )}
          <a className="btn btn-pine" href="#yhteys">
            Pyydä tarjous
          </a>
        </div>
      </div>
    </nav>
  );
}
