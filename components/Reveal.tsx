"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Osion juuri, joka lisää itselleen .is-in kun osio tulee näkyviin.
 * Lapsien häivytys hoidetaan CSS:llä (globals.css), joten lapset voivat
 * pysyä palvelinkomponentteina.
 */
export function Reveal({ children, className, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ei tarvetta IntersectionObserver-varmistukselle: piilotus on CSS:ssä
    // "scripting: enabled" -ehdon takana, ja se mediaehto on uudempi kuin
    // IntersectionObserver. Selain joka piilottaa sisällön osaa myös
    // havainnoida sen.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", shown && "is-in", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section ref={ref} id={id} className={classes}>
      {children}
    </section>
  );
}
