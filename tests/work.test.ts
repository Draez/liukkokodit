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
});
