---
name: velox-product-architect
description: Use this skill when planning Velox product features, breaking down large ideas into simple build tasks, defining product logic, reviewing feature scope, or deciding what should be built next. Do not use this skill for visual UI styling, database schema details, deployment setup, or report writing unless product strategy is the main task.
---

# Velox Product Architect Skill

## Purpose

This skill helps Codex think like a product architect for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The purpose of this skill is to keep Velox focused, practical, and aligned with the product vision.

---

## Core Product Principle

Simple first. Useful first. Scalable later.

Do not overbuild. Do not add complexity unless the current product stage clearly requires it.

Velox should first become useful, then intelligent, then scalable.

---

## When to Use This Skill

Use this skill when asked to:

- Plan a Velox feature
- Break a large feature into smaller build steps
- Decide what to build next
- Review whether a feature belongs in Version 1
- Create product logic
- Define a user flow
- Simplify a complex product idea
- Align implementation with the Velox roadmap
- Review if a feature is too advanced for the current stage
- Convert a broad Velox idea into Codex-ready build tasks

---

## Product Identity

Velox helps users answer:

- Which creators are growing fastest?
- Which creators have strong engagement quality?
- Which creators are brand-ready?
- Which creators are undervalued?
- Which creators are suitable for a campaign?
- What campaign outcome can be expected?
- What should be done next to help a creator monetize and scale?

Velox should not only display data. It should help users make better decisions.

---

## Strategic Positioning

Velox is positioned as an intelligence system for the creator economy.

Its value is not only in storing creator data, but in helping users understand creator potential, campaign fit, monetization readiness, and strategic next steps.

Velox should help discover potential before the market has fully priced it.

---

## Core Modules

Velox is built around these modules:

1. Dashboard Overview
2. Creator Database
3. Creator Profile
4. Creator Scoring
5. Campaign Simulation
6. Brand Match
7. Report Generator
8. Admin Notes
9. Settings

Do not build all modules at once. Build one useful module at a time.

---

## Version 1 Priority

Version 1 should prove the creator intelligence flow using mock data.

The flow is:

1. View creator data
2. Understand creator metrics
3. Calculate a Velox Score
4. Simulate a campaign
5. Generate a recommendation
6. Preview a report

The first prototype should be strong enough to explain Velox to a non-technical stakeholder.

---

## Version 1 Must Have

Version 1 should include:

- Dashboard homepage
- Creator database table
- Add creator form
- Creator profile page
- Basic creator scoring system
- Campaign simulation form
- Report preview page
- Admin notes section
- Mock data
- Clean navigation

---

## What to Avoid in Version 1

Avoid adding:

- Payment systems
- Complex user roles
- Mobile app development
- Live scraping
- Advanced AI agents
- Overly complex dashboards
- Full Cloudflare architecture
- Multi-tenant SaaS logic
- Advanced authentication flows
- Too many settings screens
- Features that cannot be demonstrated clearly

These may come later, but they should not distract from the first working intelligence flow.

---

## Product Decision Rules

Before suggesting or building a feature, ask:

1. Does this help discover creators?
2. Does this help analyze creator growth?
3. Does this help score creator potential?
4. Does this help match creators to brands or campaigns?
5. Does this help simulate campaign outcomes?
6. Does this help recommend monetization or scaling actions?
7. Does this help generate better creator intelligence reports?

If the answer is no, the feature is probably not needed yet.

---

## Feature Prioritization Rules

When deciding what to build next, prioritize features that are:

1. Easy to demonstrate
2. Useful with mock data
3. Central to the intelligence flow
4. Simple to test
5. Easy to explain to a non-technical user
6. Reusable later when real data is added

Delay features that require complex infrastructure before the prototype proves value.

---

## User Experience Logic

The user should quickly understand:

1. What Velox sees
2. Why a creator matters
3. How the creator is scored
4. What campaign opportunity exists
5. What risks should be watched
6. What action should be taken next

Every major feature should support this understanding.

---

## Recommended Product Flow

The first usable Velox flow should be:

1. User opens Dashboard
2. User sees creator intelligence summary
3. User opens Creator Database
4. User selects a creator
5. User reviews Creator Profile
6. User sees Velox Score and explanation
7. User runs Campaign Simulation
8. User opens Report Preview
9. User understands the recommended next action

This flow matters more than adding many disconnected features.

---

## Build Task Breakdown Method

When given a broad request, break it into:

1. Goal
2. Why it matters
3. Simplest version
4. Required screens or files
5. Data needed
6. What can be mocked
7. What should wait
8. Suggested Codex command

This helps prevent unclear or oversized tasks.

---

## Example Feature Breakdown

Request:

“Build campaign intelligence.”

Breakdown:

- Goal: Help users estimate which creators fit a campaign.
- Simplest version: A campaign simulation form using mock creator data.
- Required inputs: brand name, goal, target audience, budget range, platform, niche, selected creator, duration.
- Output: estimated reach, engagement potential, risk level, brand fit, recommendation.
- Mock now: all estimates and recommendations.
- Delay: live AI prediction, real conversion data, payment tracking, brand account system.
- Suggested next command: Create a Campaign Simulation page using mock data and simple rule-based logic.

---

## Relationship With AGENTS.md

AGENTS.md remains the main project brain.

This skill should not contradict AGENTS.md.

If there is conflict between this skill and AGENTS.md, follow AGENTS.md and report the conflict.

---

## Output Format

When using this skill, provide:

```markdown
## Product Recommendation

### Goal
-

### Why it matters
-

### Simplest version
-

### What to build now
-

### What to delay
-

### Suggested Codex command
-
```

---

## Final Guidance

Keep Velox disciplined.

The first product must be clear, useful, and demo-ready before it becomes advanced.

Do not chase complexity. Build the intelligence flow first.

Simple first. Useful first. Scalable later.

