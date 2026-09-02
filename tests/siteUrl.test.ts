import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Tyhjä ympäristömuuttuja on eri asia kuin puuttuva: .env-rivi
 * "NEXT_PUBLIC_SITE_URL=" antaa tyhjän merkkijonon, jolloin ?? ei putoa
 * oletukseen ja new URL("") kaataa koko sivun.
 */
async function loadSiteUrl() {
  vi.resetModules();
  return (await import("@/lib/site-url")).siteUrl;
}

const saved = { ...process.env };

beforeEach(() => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
});

afterEach(() => {
  process.env = { ...saved };
});

describe("siteUrl", () => {
  it("käyttää NEXT_PUBLIC_SITE_URL:ia kun se on asetettu", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://liukkokodit.fi";
    await expect(loadSiteUrl()).resolves.toBe("https://liukkokodit.fi");
  });

  it("ohittaa tyhjän NEXT_PUBLIC_SITE_URL:n", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "liukko-kodit.vercel.app";
    await expect(loadSiteUrl()).resolves.toBe("https://liukko-kodit.vercel.app");
  });

  it("ohittaa pelkkää tyhjää sisältävän arvon", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "   ";
    await expect(loadSiteUrl()).resolves.toBe("http://localhost:3000");
  });

  it("ohittaa tyhjän Vercel-osoitteen", async () => {
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "";
    await expect(loadSiteUrl()).resolves.toBe("http://localhost:3000");
  });

  it("tuottaa aina kelvollisen URL:n", async () => {
    process.env.NEXT_PUBLIC_SITE_URL = "";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "";
    expect(() => new URL(process.env.NEXT_PUBLIC_SITE_URL as string)).toThrow();
    await expect(
      loadSiteUrl().then((u) => new URL(u).origin),
    ).resolves.toBe("http://localhost:3000");
  });
});
