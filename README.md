# aoc-boilerplate-ts

Typescript boilerplate project for Advent of Code

## ⚠️ AI-Free Coding Zone

**This repository is designated as an AI-free coding zone.** All AI coding assistants are explicitly disabled and must refuse to provide coding assistance. See [AGENTS.md](./AGENTS.md) for the complete policy.

This is intentional - Advent of Code is about learning and problem-solving, not having AI write the solutions for you.

# Features
 * Node 26 (`.nvmrc`), runs `.ts` files natively — no build step
 * `pnpm`
 * `typescript` 6 (strict, type-check only)
 * `eslint` with [typescript-eslint](https://typescript-eslint.io) (strict, type-checked) and [Stylistic](https://eslint.style)
 * `vitest`
 * GitHub Actions CI and Dependabot
 * Configuration for VSCode
    * **No AI Assistants** (`chat.disableAIFeatures`, Copilot, Claude, Gemini, Codeium, TabNine, etc.)
    * Use `eslint` for formatting
    * See [AGENTS.md](./AGENTS.md) for complete AI policy
 * Configuration for IntelliJ IDEA
    * **JetBrains AI Assistant disabled** via [`.noai`](./.noai)
    * See [.idea/INTELLIJ_AI_SETUP.md](./.idea/INTELLIJ_AI_SETUP.md) for disabling third-party AI plugins
    * See [AGENTS.md](./AGENTS.md) for complete AI policy

# Usage

```sh
nvm use
pnpm install
pnpm check                         # typecheck + lint + test
pnpm test:watch                    # vitest in watch mode
node src/day0.ts day0.input.txt    # run a day against inputs/day0.input.txt
```

One module per day under `src/` exporting `part1`/`part2(input: string)`; puzzle files go in `inputs/`.
