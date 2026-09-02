"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/content/site";
import type { QuoteState } from "./quoteState";

const schema = z.object({
  nimi: z.string().trim().min(2, "Kerro nimesi."),
  puhelin: z.string().trim().min(5, "Tarvitsemme puhelinnumeron."),
  email: z.union([z.literal(""), z.email("Tarkista sähköpostiosoite.")]),
  kunta: z.string().trim().max(80).optional().default(""),
  kuvaus: z.string().trim().min(10, "Kerro lyhyesti, mitä olet rakentamassa."),
  // Hunajapurkki: piilokenttä, jonka vain botti täyttää.
  yritys: z.string().max(0).optional().default(""),
});

export async function sendQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    const fieldErrors: QuoteState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "yritys") {
        // Botti. Näytetään onnistuminen, mutta ei lähetetä mitään.
        return { status: "ok" };
      }
      if (
        (key === "nimi" || key === "puhelin" || key === "email" || key === "kuvaus") &&
        !fieldErrors[key]
      ) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Tarkista korostetut kentät.",
      fieldErrors,
    };
  }

  const { nimi, puhelin, email, kunta, kuvaus } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "sendQuote: puuttuva ympäristömuuttuja (RESEND_API_KEY / CONTACT_TO_EMAIL / RESEND_FROM)",
    );
    return { status: "error", message: fallbackMessage() };
  }

  const text = [
    `Nimi: ${nimi}`,
    `Puhelin: ${puhelin}`,
    `Sähköposti: ${email || "-"}`,
    `Kunta: ${kunta || "-"}`,
    "",
    kuvaus,
  ].join("\n");

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      subject: `Tarjouspyyntö – ${nimi}${kunta ? `, ${kunta}` : ""}`,
      replyTo: email || undefined,
      text,
    });

    if (error) {
      console.error("sendQuote: Resend palautti virheen", error);
      return { status: "error", message: fallbackMessage() };
    }
  } catch (err) {
    console.error("sendQuote: lähetys epäonnistui", err);
    return { status: "error", message: fallbackMessage() };
  }

  return { status: "ok" };
}

/** Lomake ei saa olla umpikuja: virheen sattuessa tarjotaan suora kanava. */
function fallbackMessage() {
  const suora = site.phone
    ? `soita ${site.phone}`
    : site.email
      ? `lähetä sähköpostia osoitteeseen ${site.email}`
      : "ota yhteyttä puhelimitse";
  return `Viestin lähetys ei nyt onnistunut. Pahoittelut – ${suora}, niin hoidetaan asia.`;
}
