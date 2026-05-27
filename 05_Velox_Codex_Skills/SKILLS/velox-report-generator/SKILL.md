---
name: velox-report-generator
description: Use this skill when creating, improving, formatting, or reviewing Velox creator intelligence reports, report preview pages, PDF-ready report layouts, recommendation sections, executive summaries, or campaign intelligence reports. Do not use this skill for database schema, deployment, or general UI unless report output is the main task.
---

# Velox Report Generator Skill

## Purpose

This skill helps Codex create professional, decision-focused reports for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

Velox reports should turn creator data into clear strategic insight that brands, agencies, funders, media teams, and creator managers can understand and act on.

---

## Core Reporting Principle

Reports must be understandable to non-technical users.

A Velox report should not only present data. It should explain what the data means, why it matters, what risks exist, and what action should be taken next.

Avoid jargon unless it is clearly explained.

---

## When to Use This Skill

Use this skill when asked to:

- Create report preview pages
- Build creator intelligence report templates
- Format report sections
- Create executive summaries
- Add recommendation sections
- Prepare print-friendly report layouts
- Improve report readability
- Create campaign intelligence reports
- Create PDF-ready report structures
- Review whether a report is clear enough for stakeholders
- Convert creator data into strategic recommendations

---

## Report Types

Velox may eventually support different report types.

Start with these:

1. Creator Intelligence Report
2. Campaign Simulation Report
3. Brand Match Report
4. Creator Opportunity Report
5. Portfolio or Shortlist Report

For Version 1, prioritize the Creator Intelligence Report and Campaign Simulation Report.

---

## Standard Creator Intelligence Report Structure

A creator intelligence report should include:

1. Report title
2. Executive summary
3. Creator overview
4. Platform and niche
5. Key metrics
6. Velox score
7. Score breakdown
8. Growth insight
9. Engagement insight
10. Brand fit analysis
11. Monetization readiness
12. Risks and watch items
13. Recommended next action
14. 30-day strategic recommendation

Each section should be short, clear, and useful.

---

## Campaign Simulation Report Structure

A campaign simulation report should include:

1. Report title
2. Campaign overview
3. Brand or campaign goal
4. Target audience
5. Selected creator or creator shortlist
6. Estimated reach
7. Estimated engagement
8. Estimated conversion potential
9. Brand fit rating
10. Risk level
11. Campaign recommendation
12. Suggested next action
13. Assumptions and limitations

Campaign simulation reports should clearly state when results are based on mock data or rule-based estimates.

---

## Executive Summary Guidance

The executive summary should answer:

- Who or what is being analyzed?
- Why does it matter?
- What is the main opportunity?
- What is the key risk?
- What should happen next?

The executive summary should be easy to understand within 30 seconds.

---

## Creator Overview Guidance

The creator overview should summarize:

- Creator name
- Platform
- Niche
- Country or market
- Audience type
- Current status
- Why the creator is worth tracking

Avoid long biographies in early reports. Focus on decision-useful context.

---

## Key Metrics Guidance

Key metrics may include:

- Followers
- Average views
- Average likes
- Average comments
- Engagement rate
- Growth rate
- Posting frequency
- Velox score

Metrics should be presented clearly and should not overwhelm the reader.

When possible, explain the meaning of the metric.

Example:

“Engagement rate indicates how strongly the audience responds compared to the creator’s audience size.”

---

## Velox Score Reporting Guidance

When reporting the Velox Score, include:

- Overall score
- Score label
- Score breakdown
- Plain-language explanation
- Recommended next action

Do not show the score without context.

A score should help the reader understand what to do next.

---

## Insight Writing Guidance

Insights should be specific and practical.

Good insight:

“This creator’s engagement is stronger than their follower count suggests, making them useful for niche campaigns where audience trust matters more than mass reach.”

Weak insight:

“This creator has good engagement.”

Make every insight answer: “So what?”

---

## Recommendation Guidance

Recommendations should be action-oriented.

Good recommendation:

“Position this creator for a 30-day beauty product awareness campaign focused on short-form TikTok tutorials and testimonial-style content.”

Weak recommendation:

“Work with this creator.”

Recommendations should include:

- What to do
- Why it matters
- Suggested timing where possible
- Any risk to review

---

## Risk Reporting Guidance

Report risks carefully and fairly.

Use cautious language.

Examples:

- “Potential risk to review”
- “Requires manual review before campaign use”
- “Data is incomplete and should be verified”
- “Brand safety notes should be checked before activation”
- “No major risk identified in the available mock data”

Avoid unsupported accusations or conclusions.

---

## 30-Day Strategic Recommendation Guidance

A 30-day recommendation should give the user a simple action plan.

It may include:

1. What to monitor
2. What content format to test
3. What brand category to explore
4. What performance signal to track
5. What decision to make after 30 days

Example:

“Track this creator for 30 days while testing short-form educational content. If engagement remains above the current level, prepare a small campaign pilot with a niche-aligned brand.”

---

## Report Tone

Use a tone that is:

- Clear
- Professional
- Strategic
- Practical
- Easy to understand
- Insight-driven
- Calm and confident

Avoid:

- Excessive jargon
- Long academic explanations
- Vague recommendations
- Overly technical scoring language
- Unsupported certainty
- Hype without evidence

---

## Print and PDF Readiness

When building report previews:

- Make the layout printable
- Hide navigation when printing if possible
- Use clear page sections
- Avoid clutter
- Keep report cards professional
- Use readable spacing
- Avoid tiny text
- Make the report useful even when exported to PDF

Reports should feel client-ready.

---

## Data Source Guidance

Reports may use:

- Mock creator data
- Creator scoring data
- Campaign simulation data
- Admin notes
- Future AI-generated analysis

For Version 1, use mock data and rule-based insights.

Do not pretend mock data is live data.

If a report uses mock data, label it clearly where appropriate.

---

## AI Reporting Guidance

AI can later help with:

- Executive summaries
- Score explanations
- Campaign recommendations
- Risk summaries
- Brand match reasoning
- Report drafting

Do not connect AI APIs unless specifically instructed.

When AI is added later:

- Keep outputs reviewable
- Avoid unsupported claims
- Include assumptions
- Let humans approve final reports
- Use Cloudflare AI Gateway or similar tooling when AI usage needs monitoring and cost control

---

## Report UI Guidance

When creating report preview pages, use:

- Report title header
- Executive summary card
- Metrics grid
- Score breakdown section
- Insight sections
- Risk section
- Recommendation section
- Print/export action placeholder

The report should read like a strategic brief, not a raw dashboard.

---

## Suggested Report Component Names

Useful component names may include:

- ReportHeader
- ExecutiveSummary
- MetricsGrid
- ScoreBreakdown
- InsightSection
- RiskPanel
- RecommendationPanel
- ReportCard
- PrintButton

Keep components reusable.

---

## Relationship With AGENTS.md

AGENTS.md remains the main Velox project brain.

This skill should support AGENTS.md, not replace it.

If there is a conflict between this skill and AGENTS.md, follow AGENTS.md and report the conflict.

---

## Output Format

When using this skill, report:

```markdown
## Report Generator Result

### What was created or changed
-

### Report sections included
-

### Data used
-

### Files created or edited
-

### Print/PDF readiness
-

### Suggested next step
-
```

---

## Final Guidance

A Velox report should make creator opportunity visible, understandable, and actionable.

The report is where Velox intelligence becomes shareable.

Simple first. Useful first. Scalable later.

