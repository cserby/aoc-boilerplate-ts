import { add, multiply, greet } from "../src/index";

describe("Math functions", () => {
  test("add should sum two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("multiply should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });
});

describe("String functions", () => {
  test("greet should return greeting message", () => {
    expect(greet("World")).toBe("Hello, World!");
    expect(greet("TypeScript")).toBe("Hello, TypeScript!");
  });
});
