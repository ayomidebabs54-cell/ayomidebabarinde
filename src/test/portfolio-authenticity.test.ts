import { describe, expect, it } from "vitest";
import { projects, visualBacklog } from "@/data/projects";
import { canPublishTestimonial, illustrativeTestimonials, type Testimonial } from "@/data/testimonials";

const approved: Testimonial = { name: "Test fixture", service: "shopify", text: "Test fixture", permissionStatus: "granted", verificationStatus: "verified", publicationStatus: "published" };

describe("Testimonial publication rules", () => {
  it("requires permission to publish", () => {
    expect(canPublishTestimonial(approved)).toBe(true);
    expect(canPublishTestimonial({ ...approved, permissionStatus: "pending" })).toBe(false);
    expect(canPublishTestimonial({ ...approved, permissionStatus: "declined" })).toBe(false);
  });
  it("requires verification", () => {
    expect(canPublishTestimonial({ ...approved, verificationStatus: "unverified" })).toBe(false);
  });
  it("requires published status", () => {
    expect(canPublishTestimonial({ ...approved, publicationStatus: "draft" })).toBe(false);
  });
  it("never publishes illustrative samples as genuine reviews", () => {
    expect(canPublishTestimonial({ ...approved, illustrative: true })).toBe(false);
    expect(illustrativeTestimonials).toHaveLength(3);
    for (const sample of illustrativeTestimonials) {
      expect(canPublishTestimonial(sample)).toBe(false);
      expect(sample.name).toBe("");
      expect(sample.business).toBeUndefined();
      expect(sample.photo).toBeUndefined();
      expect(sample.rating).toBeUndefined();
    }
  });
});

describe("Project authenticity", () => {
  it("keeps all existing projects and excludes unfinished visuals from featured work", () => {
    expect(projects).toHaveLength(150);
    expect(projects.filter((p) => p.featured)).toHaveLength(5);
    expect(projects.filter((p) => p.featured).every((p) => p.visualReady)).toBe(true);
    expect(visualBacklog).toHaveLength(145);
  });
  it("uses distinct project-specific previews for all featured work", () => {
    const featured = projects.filter((p) => p.featured);
    expect(new Set(featured.map((p) => p.image)).size).toBe(5);
    expect(featured.every((p) => p.type === "Concept Project")).toBe(true);
    expect(featured.find((p) => p.category === "animation")?.visualCaption).toContain("Static AI-assisted style frame");
  });
});