import { describe, expect, it } from "vitest";
import { testimonialEntries } from "./testimonials";

describe("testimonials section data", () => {
  it("defines at least three institutional placeholder testimonials", () => {
    expect(testimonialEntries.length).toBeGreaterThanOrEqual(3);

    for (const entry of testimonialEntries) {
      expect(entry.initials).toMatch(/^[A-Z]{2}$/);
      expect(entry.name.length).toBeGreaterThan(4);
      expect(entry.role.length).toBeGreaterThan(6);
      expect(entry.company.length).toBeGreaterThan(6);
      expect(entry.reviewBody.length).toBeGreaterThan(40);
    }
  });
});
