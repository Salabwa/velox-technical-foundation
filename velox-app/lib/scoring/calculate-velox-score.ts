import { clampScore } from "../utils";

export function calculateVeloxScore() {
  return {
    overallVeloxScore: clampScore(0),
    scoreLabel: "Not Scored",
    scoreNotes: "Scoring logic will be implemented after the MVP structure is approved."
  };
}

