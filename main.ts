import { mkdirSync, writeFileSync } from "node:fs";

// Answer to "How Many Tabs Do You Have Open?" — 137.
// A counted, specific hoarder count: the unread-articles /
// research-rabbit-hole pile that never gets closed.
const answer = "137";

// Gate self-check: entry must be UTF-8, 1-5 chars, digits only.
if (!/^\d{1,5}$/.test(answer)) {
  throw new Error(`invalid answer: ${JSON.stringify(answer)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", answer, "utf8");
