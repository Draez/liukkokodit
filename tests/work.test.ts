import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { findWork, site } from "@/content/site";

describe("työnäytteet", () => {
  it("jokaisella kohteella on URL-kelpoinen, yksilöllinen id", () => {
    const ids = site.work.items.map((item) => item.id);

    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("findWork palauttaa kohteen id:llä ja undefined tuntemattomalle", () => {
    const first = site.work.items[0];

    expect(findWork(first.id)).toBe(first);
    expect(findWork("ei-ole")).toBeUndefined();
    expect(findWork("")).toBeUndefined();
  });

  it("jokainen kohteen ja etusivun kuva löytyy public-kansiosta", () => {
    const paths = [
      site.hero.image,
      ...site.work.items.flatMap((item) => [
        ...(item.image ? [item.image] : []),
        ...item.gallery.map((photo) => photo.src),
      ]),
    ];

    for (const path of paths) {
      expect(existsSync(join(process.cwd(), "public", path)), path).toBe(true);
    }
  });
});
