---
name: velox-scoring-system
description: Use this skill when creating, reviewing, explaining, or improving Velox creator scoring logic, score weights, score badges, score explanations, campaign fit scoring, monetization readiness, or creator potential ratings. Do not use this skill for general UI, database schema, deployment, or report writing unless scoring is the main task.
---

# Velox Scoring System Skill

## Purpose

This skill helps Codex build and improve the Velox creator scoring system.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The scoring system exists to help users quickly understand creator potential, growth quality, brand readiness, and monetization opportunity.

---

## Core Scoring Principle

Never create a black-box score.

Every Velox score must include a plain-language explanation that a non-technical user can understand.

The score should not only rank creators. It should help users know what action to take next.

---

## When to Use This Skill

Use this skill when asked to:

- Create scoring utilities
- Review scoring formulas
- Add score explanations
- Build score badges
- Improve score categories
- Explain creator potential
- Create campaign fit logic
- Build monetization readiness logic
- Display score breakdowns
- Create score labels
- Review whether scores are understandable
- Connect scoring to creator recommendations

---

## Core Scoring Dimensions

Velox begins with six dimensions:

1. Growth Velocity
2. Engagement Quality
3. Consistency
4. Niche Authority
5. Brand Fit
6. Monetization Readiness

These dimensions should be easy to explain and useful for creator decision-making.

---

## Initial Weighting

Use this starting weighting:

- Growth Velocity: 20%
- Engagement Quality: 20%
- Consistency: 15%
- Niche Authority: 15%
- Brand Fit: 15%
- Monetization Readiness: 15%

The total must equal 100%.

If weights are changed later, document the reason clearly.

---

## Dimension 1: Growth Velocity

### Meaning

Measures whether a creator is growing quickly or showing strong momentum.

### Signals

May include:

- Follower growth
- View growth
- Recent traction
- Viral content patterns
- Increase in engagement over time
- Sudden rise in visibility

### Plain-Language Explanation Example

“This creator is gaining attention quickly, with growth patterns that suggest they may be entering an upward visibility phase.”

---

## Dimension 2: Engagement Quality

### Meaning

Measures whether the creator’s audience responds meaningfully.

### Signals

May include:

- Comments
- Saves
- Shares
- Like-to-view ratio
- Comment quality
- Repeat audience interaction
- Audience trust signals

### Plain-Language Explanation Example

“This creator’s audience is not only watching but also responding, which suggests stronger influence than follower count alone would show.”

---

## Dimension 3: Consistency

### Meaning

Measures whether the creator posts regularly and maintains a reliable content rhythm.

### Signals

May include:

- Weekly posting frequency
- Content rhythm
- Gaps in posting
- Repeated formats
- Predictability of publishing

### Plain-Language Explanation Example

“This creator posts consistently enough to maintain audience attention, but there is room to improve rhythm and planning.”

---

## Dimension 4: Niche Authority

### Meaning

Measures whether the creator owns a clear space or topic category.

### Signals

May include:

- Topic clarity
- Audience association
- Repeated content themes
- Expertise perception
- Clear creator identity
- Category relevance

### Plain-Language Explanation Example

“This creator has a clear niche, making it easier for brands and audiences to understand what they stand for.”

---

## Dimension 5: Brand Fit

### Meaning

Measures whether the creator can work with brands safely and effectively.

### Signals

May include:

- Tone
- Public image
- Content quality
- Audience alignment
- Brand safety factors
- Professional presentation
- Suitability for campaign messaging

### Plain-Language Explanation Example

“This creator appears suitable for brand work because the content tone, audience, and presentation align with campaign needs.”

---

## Dimension 6: Monetization Readiness

### Meaning

Measures whether the creator is ready to generate income from their audience and content.

### Signals

May include:

- Professionalism
- Audience trust
- Existing brand mentions
- Content packaging
- Conversion potential
- Call-to-action ability
- Product or service alignment

### Plain-Language Explanation Example

“This creator has influence, but monetization readiness is still developing because the content needs clearer packaging for brand or product opportunities.”

---

## Overall Velox Score

The overall Velox Score combines the six dimensions into one score out of 100.

The score should help users understand creator potential quickly.

It should always be paired with:

- Score label
- Score breakdown
- Plain-language explanation
- Recommended next action

---

## Score Labels

Use these labels:

- 85–100: High Potential
- 70–84: Strong Opportunity
- 55–69: Developing
- 40–54: Needs Support
- Below 40: Watch Carefully

Do not rely only on color. Always include a text label.

---

## Recommended Scoring Output

A scoring function should return:

- growthScore
- engagementScore
- consistencyScore
- nicheAuthorityScore
- brandFitScore
- monetizationReadinessScore
- overallVeloxScore
- scoreLabel
- scoreExplanation
- recommendedNextAction

Recommended file:

```text
/lib/scoring.ts
```

---

## Example Output

```ts
{
  growthScore: 82,
  engagementScore: 76,
  consistencyScore: 68,
  nicheAuthorityScore: 74,
  brandFitScore: 79,
  monetizationReadinessScore: 65,
  overallVeloxScore: 75,
  scoreLabel: "Strong Opportunity",
  scoreExplanation: "This creator shows strong growth and audience engagement, but monetization readiness still needs improvement through clearer packaging and brand-ready content formats.",
  recommendedNextAction: "Prepare this creator for a focused 30-day brand positioning plan and monitor engagement consistency."
}
```

---

## Explanation Rules

Good explanation:

“This creator has strong engagement and consistent posting, but monetization readiness is still developing because brand packaging and campaign history are limited.”

Weak explanation:

“Score calculated using weighted variables.”

Always make the score useful for decision-making.

---

## Recommended Next Action Logic

The scoring system should suggest practical next steps.

Examples:

### High Potential

“Prioritize this creator for campaign testing or brand partnership development.”

### Strong Opportunity

“Monitor closely and prepare a small campaign or brand positioning test.”

### Developing

“Support this creator with content consistency, niche sharpening, and audience engagement tracking.”

### Needs Support

“Improve creator fundamentals before campaign investment.”

### Watch Carefully

“Track this creator for future potential, but do not prioritize for immediate campaign activity.”

---

## Campaign Fit Scoring

Campaign fit can be added after the core Velox Score works.

Campaign fit may consider:

- Creator niche vs campaign niche
- Audience alignment
- Platform fit
- Brand safety
- Budget fit
- Engagement quality
- Content format suitability

Do not overcomplicate campaign fit in Version 1.

Use simple rule-based logic first.

---

## Monetization Readiness Guidance

Monetization readiness should not only measure audience size.

It should consider:

- Can the creator influence action?
- Is the content professional enough?
- Is the niche commercially useful?
- Does the creator show trust with the audience?
- Can the creator package offers, products, or campaigns?

A creator with fewer followers can still have strong monetization readiness if their audience is focused and responsive.

---

## Brand Safety Guidance

Brand fit and brand safety should be handled carefully.

Do not make extreme claims without evidence.

Use cautious language such as:

- “Potential risk to review”
- “Requires manual review”
- “Brand safety notes should be checked before campaign use”
- “No major risk identified in mock data”

Avoid unsupported accusations.

---

## Data Quality Guidance

If data is incomplete, the scoring system should say so.

Examples:

- “Score confidence is limited because engagement data is incomplete.”
- “Growth score is based on available mock data and should be reviewed with updated metrics.”
- “Manual verification is recommended before final campaign decisions.”

Do not pretend uncertain data is fully reliable.

---

## Mock Data Rules

For Version 1, scoring can use mock data and rule-based logic.

Mock scoring should be realistic enough to demonstrate Velox’s value.

Do not connect live APIs or AI models unless specifically instructed.

Do not scrape platforms unless specifically approved and legally/technically reviewed.

---

## UI Display Rules

When displaying scores:

- Show overall score clearly
- Show score label
- Show score breakdown
- Show explanation
- Show recommended next action
- Avoid hiding the reasoning

The score should feel useful, not mysterious.

---

## Relationship With AGENTS.md

AGENTS.md remains the main Velox project brain.

This skill should support AGENTS.md, not replace it.

If there is a conflict between this skill and AGENTS.md, follow AGENTS.md and report the conflict.

---

## Output Format

When using this skill, report:

```markdown
## Scoring Result

### What was created or changed
-

### Scoring dimensions used
-

### Weighting used
-

### Explanation logic
-

### Files created or edited
-

### How to test
-

### Suggested next step
-
```

---

## Final Guidance

The Velox Score should feel strategic, explainable, and practical.

It should help users make better decisions about creators.

Simple first. Useful first. Scalable later.

