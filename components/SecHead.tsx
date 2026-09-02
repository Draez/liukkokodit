import { Fade } from "./Fade";

/** Osion otsikko ja ingressi. Vie porrastuksen paikat 0 ja 1. */
export function SecHead({ title, lede }: { title: string; lede: string }) {
  return (
    <div className="sec-head">
      <Fade as="h2" i={0}>
        {title}
      </Fade>
      <Fade as="p" i={1}>
        {lede}
      </Fade>
    </div>
  );
}
