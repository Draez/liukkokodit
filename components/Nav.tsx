import Link from "next/link";
import { site, telHref } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Päävalikko">
      <div className="wrap">
        <Link className={styles.brand} href="/">
          <Logo className={styles.logo} />
        </Link>

        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {telHref && (
            <a className={`btn ${styles.call}`} href={telHref}>
              Soita
            </a>
          )}
          <a className="btn" href="#yhteys">
            Pyydä tarjous
          </a>
        </div>
      </div>
    </nav>
  );
}
