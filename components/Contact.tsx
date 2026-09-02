import { site, telHref } from "@/content/site";
import { QuoteForm } from "./QuoteForm";
import { Todo } from "./Todo";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contact} id="yhteys">
      <div className="wrap">
        <div>
          <h2>{site.contact.title}</h2>
          <p className={styles.lede}>{site.contact.lede}</p>

          <dl className={styles.details}>
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
          </dl>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
