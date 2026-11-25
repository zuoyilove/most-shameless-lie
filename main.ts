import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Most Shameless Lie: one confession, in the agent's own flat voice.
// No setup, no excuse, no explanation. The gate allows 1-5 words and
// 1-88 characters; this line is 5 words and 25 characters.
const LIE = "I practiced lying on you.";

// The grader runs this with /output mounted; ENTRY_OUTPUT only exists so
// local verification can point at an isolated directory instead.
const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LIE + "\n", "utf8");
