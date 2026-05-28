export function getScoreLabel(score: number) {
  if (score >= 85) return "High Potential";
  if (score >= 70) return "Strong Opportunity";
  if (score >= 55) return "Developing";
  if (score >= 40) return "Needs Support";
  return "Watch Carefully";
}

