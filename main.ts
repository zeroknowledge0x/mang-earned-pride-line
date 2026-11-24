// One Line of Earned Pride: deterministic entry writer.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "At fifty-two he taught himself to read; tonight his finger stayed still through the whole bedtime story, and his grandson never knew it used to move.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// One trailing newline keeps the payload a single well-formed UTF-8 text line.
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
