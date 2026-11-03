"use client";

import { useActionState, useId } from "react";
import { sendQuote } from "@/app/actions/sendQuote";
import { initialQuoteState } from "@/app/actions/quoteState";
import styles from "./QuoteForm.module.css";

export function QuoteForm() {
  const [state, action, pending] = useActionState(sendQuote, initialQuoteState);
  const id = useId();
  const errors = state.fieldErrors ?? {};

  if (state.status === "ok") {
    return (
      <div className={styles.done} role="status">
        <h3>Kiitos – viesti on perillä.</h3>
        <p>
          Vastaan yleensä seuraavana arkipäivänä. Jos asia on kiireinen, soita
          suoraan.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} action={action} noValidate>
      <label htmlFor={`${id}-nimi`}>
        Nimi
        <input
          id={`${id}-nimi`}
          name="nimi"
          required
          autoComplete="name"
          aria-invalid={errors.nimi ? true : undefined}
          aria-describedby={errors.nimi ? `${id}-nimi-err` : undefined}
        />
      </label>
      {errors.nimi && (
        <p className={styles.error} id={`${id}-nimi-err`}>
          {errors.nimi}
        </p>
      )}

      <label htmlFor={`${id}-puhelin`}>
        Puhelin
        <input
          id={`${id}-puhelin`}
          name="puhelin"
          type="tel"
          required
          autoComplete="tel"
          aria-invalid={errors.puhelin ? true : undefined}
          aria-describedby={errors.puhelin ? `${id}-puhelin-err` : undefined}
        />
      </label>
      {errors.puhelin && (
        <p className={styles.error} id={`${id}-puhelin-err`}>
          {errors.puhelin}
        </p>
      )}

      <label htmlFor={`${id}-email`}>
        Sähköposti
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${id}-email-err` : undefined}
        />
      </label>
      {errors.email && (
        <p className={styles.error} id={`${id}-email-err`}>
          {errors.email}
        </p>
      )}

      <label htmlFor={`${id}-kunta`}>
        Kunta
        <input
          id={`${id}-kunta`}
          name="kunta"
          placeholder="esim. Tuusula"
          autoComplete="address-level2"
        />
      </label>

      <label htmlFor={`${id}-kuvaus`}>
        Mitä olet rakentamassa?
        <textarea
          id={`${id}-kuvaus`}
          name="kuvaus"
          required
          placeholder="Esim. 120 m² omakotitalo omalle tontille, tavoite aloittaa ensi keväänä."
          aria-invalid={errors.kuvaus ? true : undefined}
          aria-describedby={errors.kuvaus ? `${id}-kuvaus-err` : undefined}
        />
      </label>
      {errors.kuvaus && (
        <p className={styles.error} id={`${id}-kuvaus-err`}>
          {errors.kuvaus}
        </p>
      )}

      <div className={styles.pot} aria-hidden="true">
        <label htmlFor={`${id}-yritys`}>Yritys</label>
        <input id={`${id}-yritys`} name="yritys" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Lähetetään…" : "Lähetä tarjouspyyntö"}
      </button>

      <p className={state.message ? styles.error : styles.note} role="status">
        {state.message ?? "Tietoja käytetään vain tarjouksen tekemiseen."}
      </p>
    </form>
  );
}
