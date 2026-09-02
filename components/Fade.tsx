import type { CSSProperties, ElementType, ReactNode } from "react";

type FadeProps = {
  children: ReactNode;
  /** Porrastuksen järjestysluku osion sisällä; viive on i × 70 ms. */
  i?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Merkitsee elementin häivytettäväksi. Ei omaa logiikkaa eikä omaa
 * elementtiä — korvaa sen elementin, joka olisi muutenkin kirjoitettu,
 * joten grid-asettelut pysyvät ennallaan.
 */
export function Fade({ children, i = 0, as: Tag = "div", className }: FadeProps) {
  return (
    <Tag className={className} data-reveal="" style={{ "--i": i } as CSSProperties}>
      {children}
    </Tag>
  );
}
