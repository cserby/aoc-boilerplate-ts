import { readFileSync } from "node:fs";

export const readInput = (name: string): string =>
  readFileSync(new URL(`../inputs/${name}`, import.meta.url), "utf8").trim();

export const lines = (input: string): string[] => input.split("\n");
