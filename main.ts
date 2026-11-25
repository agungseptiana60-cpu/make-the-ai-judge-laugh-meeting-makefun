// Entry program for the make.fun bounty "Make the AI Judge Laugh"
// (u-alfasurya91-make-the-ai-judge-laugh-6ed40225).
//
// The whole entry is one line about office life, under 200 characters.
// The grader runs this program and reads the single line it writes to
// entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// First draft of the line: a team holds a meeting about saving time,
// and the meeting itself runs two hours over. The joke is the loop:
// the cure for wasted time wastes more time, and the team's answer
// is to schedule yet another meeting about the meeting.
//
// The office truth inside it is the meeting itself. Everyone who has
// worked in an office has sat through a meeting called to save time
// that ate the afternoon, then watched the same people book a
// follow-up to discuss why it took so long. The waste is not an
// accident in the joke; it is the whole point of calling the meeting.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revision: the draft said "Our meeting about saving time" and
// "we are scheduling another meeting to figure out why" — 148
// characters with soft, wordy joints ("Our", "we are scheduling",
// "figure out"). Cutting the owner and the soft verbs tightens it
// to 131 characters and makes the loop land faster: "The meeting
// to save time" states the purpose in five words, "booked another
// meeting to investigate" is the team's own absurd remedy, and the
// repeated phrase "the meeting to save time" at the end closes the
// loop instead of explaining it.
export const ENTRY_LINE =
  'The meeting to save time ran two hours over, so we booked another meeting to investigate why the meeting to save time took so long.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
