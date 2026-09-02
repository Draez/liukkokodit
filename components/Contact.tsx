import { site, telHref } from "@/content/site";
import { Fade } from "./Fade";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";
import { Todo } from "./Todo";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <Reveal className={styles.contact} id="yhteys">
      <div className="wrap">
        <div>
          <Fade as="h2" i={0}>
            {site.contact.title}
          </Fade>

          <Fade as="p" i={1} className={styles.lede}>
            {site.contact.lede}
          </Fade>

          <Fade as="dl" i={2} className={styles.details}>
            <dt>Puhelin</dt>
            <dd>
              {telHref ? (
                <a href={telHref}>{site.phone}</a>
              ) : (
                <Todo>puhelinnumero</Todo>
              )}
            </dd>

            <dt>Sähköposti</dt>
            <dd>
              {site.email ? (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              ) : (
                <Todo>sähköposti</Todo>
              )}
            </dd>

            <dt>Yrittäjä</dt>
            <dd>{site.owner ?? <Todo>etunimi sukunimi</Todo>}</dd>

            <dt>Osoite</dt>
            <dd>{site.city}</dd>

            <dt>Y-tunnus</dt>
            <dd>{site.businessId ?? <Todo>0000000-0</Todo>}</dd>
          </Fade>
        </div>

        <Fade i={3}>
          <QuoteForm />
        </Fade>
      </div>
    </Reveal>
  );
}
