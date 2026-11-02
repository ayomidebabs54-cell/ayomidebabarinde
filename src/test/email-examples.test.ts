import { describe, expect, it } from "vitest";
import {
  EMAIL_BRANDS,
  EMAIL_CATEGORIES,
  emailExamples,
} from "@/data/email-examples";

describe("Email examples data", () => {
  it("contains exactly the 26 supplied emails, each once", () => {
    expect(emailExamples).toHaveLength(26);
    expect(new Set(emailExamples.map((e) => e.sourceUrl)).size).toBe(26);
    expect(new Set(emailExamples.map((e) => e.slug)).size).toBe(26);
  });

  it("covers all five brand collections with the supplied counts", () => {
    const counts = Object.fromEntries(
      EMAIL_BRANDS.map((b) => [b, emailExamples.filter((e) => e.brand === b).length]),
    );
    expect(counts).toEqual({
      "Love Wellness": 4,
      "Bed Bath & Beyond": 5,
      "Alex and Ani": 5,
      Casper: 7,
      "DICK'S Sporting Goods": 5,
    });
  });

  it("uses only defined categories and milled.com source URLs", () => {
    for (const e of emailExamples) {
      expect(EMAIL_CATEGORIES).toContain(e.category);
      expect(e.sourceUrl.startsWith("https://milled.com/")).toBe(true);
    }
  });

  it("never presents an unavailable preview as ready", () => {
    for (const e of emailExamples) {
      if (e.previewStatus === "ready") expect(e.preview).toBeTruthy();
      else expect(e.preview).toBeUndefined();
    }
  });

  it("has captured screenshots for exactly the 12 publicly archived emails", () => {
    const ready = emailExamples.filter((e) => e.previewStatus === "ready");
    expect(ready).toHaveLength(12);
    for (const e of ready) {
      expect(e.preview).toMatch(/^\/__l5e\/assets-v1\/.+\.webp$/);
    }
    const readyBrands = ready.reduce<Record<string, number>>((acc, e) => {
      acc[e.brand] = (acc[e.brand] ?? 0) + 1;
      return acc;
    }, {});
    expect(readyBrands).toEqual({
      "Love Wellness": 4,
      "Bed Bath & Beyond": 4,
      Casper: 4,
    });
  });
});
