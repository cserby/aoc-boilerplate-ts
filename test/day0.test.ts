import { describe, expect, test } from "vitest";
import { part1, part2 } from "../src/day0.ts";
import { readInput } from "../src/utils.ts";

describe("day0", () => {
  const example = readInput("day0.example.txt");

  test("part1 example", () => {
    expect(part1(example)).toBe(10);
  });

  test("part2 example", () => {
    expect(part2(example)).toBe(24);
  });
});
