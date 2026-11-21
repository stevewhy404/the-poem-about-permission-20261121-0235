import * as fs from "node:fs";
import * as path from "node:path";

// The poem about permission — written in this session, original, no network,
// no randomness. Deterministic: the same bytes on every run.
const POEM = `I never owned the key.
The asking was the key —
may I? — and the door,
which had outlasted kings,
opened like it had been listening.
`;

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), POEM, "utf8");
