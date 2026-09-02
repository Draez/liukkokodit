import { beforeEach, describe, expect, it, vi } from "vitest";

const send = vi.fn();

// Tavallinen funktio, ei nuolifunktio: sendQuote kutsuu `new Resend(...)`,
// eikä nuolifunktiota voi käyttää konstruktorina.
vi.mock("resend", () => ({
  Resend: vi.fn(function Resend() {
    return { emails: { send } };
  }),
}));

const { sendQuote } = await import("@/app/actions/sendQuote");
const { initialQuoteState } = await import("@/app/actions/quoteState");

function form(fields: Record<string, string>) {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.set(k, v);
  return fd;
}

const valid = {
  nimi: "Matti Meikäläinen",
  puhelin: "040 123 4567",
  email: "matti@example.fi",
  kunta: "Tuusula",
  kuvaus: "120 m2 omakotitalo omalle tontille, aloitus ensi keväänä.",
};

function withEnv() {
  process.env.RESEND_API_KEY = "test-key";
  process.env.CONTACT_TO_EMAIL = "info@liukkokodit.fi";
  process.env.RESEND_FROM = "Liukko Kodit <lomake@liukkokodit.fi>";
}

beforeEach(() => {
  send.mockReset();
  send.mockResolvedValue({ data: { id: "1" }, error: null });
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_TO_EMAIL;
  delete process.env.RESEND_FROM;
});

describe("validointi", () => {
  it("hylkää tyhjän lomakkeen ja nimeää puuttuvat kentät", async () => {
    const state = await sendQuote(initialQuoteState, form({}));

    expect(state.status).toBe("error");
    expect(state.fieldErrors).toMatchObject({
      nimi: expect.any(String),
      puhelin: expect.any(String),
      kuvaus: expect.any(String),
    });
    expect(send).not.toHaveBeenCalled();
  });

  it("hylkää virheellisen sähköpostin", async () => {
    withEnv();
    const state = await sendQuote(
      initialQuoteState,
      form({ ...valid, email: "ei-sahkoposti" }),
    );

    expect(state.status).toBe("error");
    expect(state.fieldErrors?.email).toBeTruthy();
    expect(send).not.toHaveBeenCalled();
  });

  it("hyväksyy tyhjän sähköpostin, koska kenttä on vapaaehtoinen", async () => {
    withEnv();
    const state = await sendQuote(initialQuoteState, form({ ...valid, email: "" }));

    expect(state.status).toBe("ok");
    expect(send).toHaveBeenCalledTimes(1);
    expect(send.mock.calls[0][0].replyTo).toBeUndefined();
  });

  it("hylkää liian lyhyen kuvauksen", async () => {
    withEnv();
    const state = await sendQuote(initialQuoteState, form({ ...valid, kuvaus: "talo" }));

    expect(state.status).toBe("error");
    expect(state.fieldErrors?.kuvaus).toBeTruthy();
    expect(send).not.toHaveBeenCalled();
  });
});

describe("hunajapurkki", () => {
  it("näyttää onnistumisen mutta ei lähetä mitään", async () => {
    withEnv();
    const state = await sendQuote(
      initialQuoteState,
      form({ ...valid, yritys: "spam-bot" }),
    );

    expect(state.status).toBe("ok");
    expect(send).not.toHaveBeenCalled();
  });
});

describe("lähetys", () => {
  it("lähettää viestin ja asettaa vastausosoitteen", async () => {
    withEnv();
    const state = await sendQuote(initialQuoteState, form(valid));

    expect(state.status).toBe("ok");
    expect(send).toHaveBeenCalledTimes(1);

    const payload = send.mock.calls[0][0];
    expect(payload.to).toBe("info@liukkokodit.fi");
    expect(payload.replyTo).toBe("matti@example.fi");
    expect(payload.subject).toContain("Matti Meikäläinen");
    expect(payload.subject).toContain("Tuusula");
    expect(payload.text).toContain("040 123 4567");
    expect(payload.text).toContain("120 m2 omakotitalo");
  });

  it("epäonnistuu turvallisesti kun ympäristömuuttujat puuttuvat", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    const state = await sendQuote(initialQuoteState, form(valid));

    expect(state.status).toBe("error");
    expect(state.message).toMatch(/ei nyt onnistunut/);
    expect(send).not.toHaveBeenCalled();
  });

  it("epäonnistuu turvallisesti kun Resend palauttaa virheen", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    withEnv();
    send.mockResolvedValue({ data: null, error: { message: "boom" } });

    const state = await sendQuote(initialQuoteState, form(valid));

    expect(state.status).toBe("error");
    expect(state.message).toMatch(/ei nyt onnistunut/);
  });

  it("epäonnistuu turvallisesti kun lähetys heittää", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    withEnv();
    send.mockRejectedValue(new Error("network"));

    const state = await sendQuote(initialQuoteState, form(valid));

    expect(state.status).toBe("error");
    expect(state.message).toMatch(/ei nyt onnistunut/);
  });
});
