"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site, telHref } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Nav.module.css";

export function Nav() {
  const [open, setOpen] = useState(false);

  // Esc sulkee mobiilivalikon.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav className={styles.nav} aria-label="Päävalikko">
      <div className="wrap">
        <Link className={styles.brand} href="/" onClick={close}>
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
          <Link className={`btn ${styles.contact}`} href="/#yhteys" onClick={close}>
            Ota yhteyttä
          </Link>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobiilivalikko"
            aria-label={open ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.bars} data-open={open} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul id="mobiilivalikko" className={styles.panel} data-open={open} hidden={!open}>
        {site.nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={close}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className={styles.panelCta}>
          <Link className="btn" href="/#yhteys" onClick={close}>
            Ota yhteyttä
          </Link>
        </li>
      </ul>
    </nav>
  );
}
