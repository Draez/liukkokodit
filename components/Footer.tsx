import { site } from "@/content/site";
import { Todo } from "./Todo";
import styles from "./Footer.module.css";

export function Footer() {
  // Vuosi ratkeaa buildissa; se päivittyy seuraavassa julkaisussa.
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <span>
          © {year} {site.company} · {site.city}
        </span>
        <span>
          <a href="#yhteys">Yhteystiedot</a> · Y-tunnus{" "}
          {site.businessId ?? <Todo>0000000-0</Todo>}
        </span>
      </div>
    </footer>
  );
}
