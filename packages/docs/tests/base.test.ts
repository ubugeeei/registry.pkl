import { describe, expect, it } from "vitest";

import { normalizeBase } from "../src/base";

describe("normalizeBase", () => {
  it("keeps the root base stable", () => {
    expect(normalizeBase("/")).toBe("/");
    expect(normalizeBase("")).toBe("/");
    expect(normalizeBase("   ")).toBe("/");
  });

  it("wraps non-root bases with one leading and trailing slash", () => {
    expect(normalizeBase("registry.pkl")).toBe("/registry.pkl/");
    expect(normalizeBase("/registry.pkl/")).toBe("/registry.pkl/");
    expect(normalizeBase("nested/path/")).toBe("/nested/path/");
  });
});
