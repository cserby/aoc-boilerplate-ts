import { lines, readInput } from "./utils.ts";

const parse = (input: string): number[] => lines(input).map(Number);

export const part1 = (input: string): number =>
  parse(input).reduce((acc, n) => acc + n, 0);

export const part2 = (input: string): number =>
  parse(input).reduce((acc, n) => acc * n, 1);

if (import.meta.main) {
  const input = readInput(process.argv[2] ?? "day0.example.txt");
  console.log("part1:", part1(input));
  console.log("part2:", part2(input));
}
