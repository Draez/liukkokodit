/**
 * Lomakkeen tilatyypit omassa moduulissaan: "use server" -tiedosto saa
 * viedä vain async-funktioita, joten vakioita ei voi pitää sendQuote.ts:ssä.
 */
export type QuoteState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"nimi" | "puhelin" | "email" | "kuvaus", string>>;
};

export const initialQuoteState: QuoteState = { status: "idle" };
