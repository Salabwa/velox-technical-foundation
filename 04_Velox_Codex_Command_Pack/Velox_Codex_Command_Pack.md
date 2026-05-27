# Full Velox Codex Command Pack

## Purpose of This Command Pack

This command pack gives Cyrus a structured set of prompts to paste into Codex while building Velox.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The purpose of these commands is to help Codex build Velox step by step, without overcomplicating the first version.

Core build principle:

**Simple first. Useful first. Scalable later.**

---

## How to Use This Pack

Use these commands in order.

Do not ask Codex to build everything at once.

Each command should produce a clear, testable improvement to the project.

After each command, ask Codex to report:

1. What changed
2. Which files were created or edited
3. How to test it
4. Any assumptions made
5. Suggested next step

Before using this pack, the repository should already include:

- `README.md`
- `AGENTS.md`
- `.env.example`
- `/docs` folder
- `/skills` folder

---

## Recommended Repository Name

```text
velox-creator-intelligence
```

---

# Phase 0: Repository Preparation

## Command 0.1 — Review Existing Repository

```text
Review the current Velox repository structure. Read README.md and AGENTS.md first. Summarize what you understand about the project, the intended product, the preferred tech stack, and the next safest development step. Do not write code yet.
```

### Expected Result

Codex should confirm that it understands Velox and the project structure before making changes.

---

## Command 0.2 — Create Missing Foundation Files

```text
Check whether the repository contains README.md, AGENTS.md, .env.example, /docs, and /skills. If any are missing, create them using the Velox project direction. Do not overwrite existing files without asking. After completing, report what was created and what already existed.
```

### Expected Result

Codex prepares the repository foundation safely.

---

## Command 0.3 — Create Initial Documentation Files

```text
Inside the /docs folder, create the following Markdown files if they do not already exist:

1. product-vision.md
2. database-schema.md
3. scoring-system.md
4. deployment-roadmap.md
5. build-log.md

Use concise placeholder content based on Velox Creator Intelligence. Do not overfill them yet. These files will be expanded later.
```

### Expected Result

The repository gains a clean documentation structure.

---

# Phase 1: App Skeleton

## Command 1.1 — Create Next.js App Structure

```text
Create the initial Next.js app structure for Velox Creator Intelligence. Use Tailwind CSS. Create a clean dashboard layout with sidebar navigation for Dashboard, Creators, Scoring, Campaign Simulation, Reports, and Settings.

Use mock data only for now. Follow the AGENTS.md instructions. Keep the implementation simple, readable, and modular.

After completing, report:
1. What changed
2. Files created or edited
3. How to run and test the app
4. Any assumptions made
5. Suggested next step
```

### Expected Result

A basic app structure with layout and navigation.

---

## Command 1.2 — Create Layout Components

```text
Create reusable layout components for Velox:

1. AppShell
2. Sidebar
3. TopBar
4. PageHeader
5. MetricCard

The layout should feel premium, clean, strategic, and professional. Use Tailwind CSS. Keep the design simple and responsive. Do not add unnecessary dependencies.
```

### Expected Result

Velox gets reusable visual structure.

---

## Command 1.3 — Create Mock Data File

```text
Create a mock data file for Velox in /lib/mock-data.ts.

Include sample data for:

1. Creators
2. Creator scores
3. Campaigns
4. Campaign simulations
5. Reports
6. Admin notes

Use realistic creator intelligence fields, but do not use private or sensitive real personal data. Label the data clearly as mock data.
```

### Expected Result

Codex creates mock data needed for early screens.

---

# Phase 2: Dashboard

## Command 2.1 — Build Dashboard Homepage

```text
Create the Velox dashboard homepage.

The dashboard should show:

1. Total creators tracked
2. Average Velox score
3. Fastest growing creator
4. Top-performing niche
5. Number of campaign simulations
6. Recent reports
7. Top creator opportunities
8. Risk alerts or notes

Use clean metric cards, simple tables, and mock data from /lib/mock-data.ts. Keep the interface readable for a non-technical user.
```

### Expected Result

A working dashboard overview.

---

## Command 2.2 — Add Dashboard Intelligence Summary

```text
Add an Intelligence Summary section to the Velox dashboard.

This section should summarize what the system is seeing in plain language, using mock data. Include:

1. Key creator opportunity
2. Notable growth pattern
3. Campaign opportunity
4. Risk or watch item
5. Recommended next action

Use simple rule-based mock logic. Do not connect AI yet.
```

### Expected Result

Dashboard begins to feel like a decision-support system.

---

# Phase 3: Creator Database

## Command 3.1 — Build Creator Database Page

```text
Create a Creators page with a searchable and filterable creator database table.

Include these columns:

1. Creator name
2. Platform
3. Niche
4. Country
5. Followers
6. Average views
7. Engagement rate
8. Growth rate
9. Velox score
10. Status
11. View profile action

Use mock data. Make the table clean, readable, and responsive.
```

### Expected Result

A core creator database screen.

---

## Command 3.2 — Add Creator Filters

```text
Add filters to the Creators page.

Filters should include:

1. Platform
2. Niche
3. Country
4. Minimum Velox score
5. Monetization status
6. Brand readiness status

Keep filtering simple and client-side for now using mock data.
```

### Expected Result

Users can explore creators by category.

---

## Command 3.3 — Add Creator Form UI

```text
Create an Add Creator form UI.

Fields should include:

1. Full name
2. Creator name
3. Platform
4. Profile URL
5. Country
6. City
7. Niche
8. Follower count
9. Average views
10. Average likes
11. Average comments
12. Posting frequency
13. Audience type
14. Brand safety notes
15. Monetization status

For now, the form can save to local state or show a success message. Do not connect Supabase yet.
```

### Expected Result

Velox can visually demonstrate how creators will be added.

---

# Phase 4: Creator Profile

## Command 4.1 — Build Creator Profile Page

```text
Create a dynamic creator profile page using mock data.

The page should show:

1. Creator name
2. Platform and profile link
3. Niche
4. Location
5. Follower count
6. Average views
7. Engagement rate
8. Growth rate
9. Velox score
10. Score breakdown
11. Growth insight
12. Engagement insight
13. Brand fit notes
14. Monetization readiness
15. Recommended next action

Use a professional intelligence-report style layout.
```

### Expected Result

Each creator has a full intelligence profile.

---

## Command 4.2 — Add Creator Opportunity Section

```text
Add a Creator Opportunity section to the creator profile page.

This section should include:

1. Why this creator matters
2. Best-fit brand categories
3. Recommended content formats
4. Monetization opportunities
5. Growth risks
6. Next 30-day action plan

Use simple mock logic based on the creator's niche, score, and engagement rate.
```

### Expected Result

The creator profile becomes more strategic.

---

# Phase 5: Scoring System

## Command 5.1 — Create Scoring Utility

```text
Create a reusable creator scoring utility in /lib/scoring.ts.

The scoring system should calculate:

1. Growth Velocity score
2. Engagement Quality score
3. Consistency score
4. Niche Authority score
5. Brand Fit score
6. Monetization Readiness score
7. Overall Velox score

Use this weighting:

- Growth Velocity: 20%
- Engagement Quality: 20%
- Consistency: 15%
- Niche Authority: 15%
- Brand Fit: 15%
- Monetization Readiness: 15%

Return both numeric scores and a simple explanation for each score.
```

### Expected Result

A reusable scoring engine exists.

---

## Command 5.2 — Build Scoring Page

```text
Create a Scoring page that explains the Velox scoring system.

The page should include:

1. Overview of the Velox Score
2. Six scoring dimensions
3. Weighting table
4. Example creator score breakdown
5. Explanation of how the score should be interpreted
6. Note that early scoring is rule-based and will improve with real data

Use mock data and clean visual cards.
```

### Expected Result

Users can understand the scoring logic.

---

## Command 5.3 — Add Score Badge Component

```text
Create a reusable ScoreBadge component.

The component should display different labels based on score ranges:

- 85–100: High Potential
- 70–84: Strong Opportunity
- 55–69: Developing
- 40–54: Needs Support
- Below 40: Watch Carefully

Use clean styling. Avoid too many colors. Make it reusable across dashboard, creator table, and creator profile.
```

### Expected Result

Scores become easier to interpret visually.

---

# Phase 6: Campaign Simulation

## Command 6.1 — Build Campaign Simulation Page

```text
Create a Campaign Simulation page.

The page should include a form with:

1. Brand name
2. Campaign goal
3. Target audience
4. Budget range
5. Preferred platform
6. Required niche
7. Selected creator
8. Campaign duration

After submission, show a mock simulation result with:

1. Estimated reach
2. Estimated engagement
3. Estimated conversion potential
4. Risk level
5. Brand fit rating
6. Recommendation

Use simple rule-based mock logic. Do not connect AI yet.
```

### Expected Result

Velox demonstrates campaign decision support.

---

## Command 6.2 — Add Campaign Recommendation Logic

```text
Create a campaign recommendation utility in /lib/campaign-simulation.ts.

The utility should take campaign inputs and creator data, then return:

1. Estimated reach
2. Estimated engagement
3. Conversion potential
4. Risk level
5. Brand fit rating
6. Recommendation summary
7. Suggested next action

Use simple mock logic that is easy to understand and modify later.
```

### Expected Result

Simulation logic becomes reusable.

---

# Phase 7: Reports

## Command 7.1 — Build Report Preview Page

```text
Create a Reports page that lists available mock reports and allows a user to open a report preview.

Each report card should show:

1. Report title
2. Report type
3. Related creator or campaign
4. Date created
5. Key insight
6. View report action

Use mock data.
```

### Expected Result

Basic report listing page exists.

---

## Command 7.2 — Create Creator Intelligence Report Template

```text
Create a Creator Intelligence Report preview template.

The report should include:

1. Report title
2. Creator overview
3. Platform and niche
4. Key metrics
5. Velox score
6. Score breakdown
7. Growth insight
8. Engagement insight
9. Brand fit analysis
10. Monetization readiness
11. Risks
12. Recommended next action
13. 30-day strategic recommendation

Make it professional and easy to read. Use mock data.
```

### Expected Result

Velox can show premium report output.

---

## Command 7.3 — Add Print-Friendly Report Style

```text
Add a print-friendly style to the Creator Intelligence Report preview.

The report should be readable when exported or printed as PDF from the browser. Hide navigation elements when printing. Keep the report clean, professional, and client-ready.
```

### Expected Result

Reports become ready for PDF export later.

---

# Phase 8: Admin Notes and Settings

## Command 8.1 — Build Admin Notes Section

```text
Create an Admin Notes section for creator profiles.

The section should allow a user to add internal notes about:

1. Creator opportunity
2. Brand safety
3. Campaign fit
4. Follow-up actions
5. Data quality issues

For now, notes can be mock/local state only. Do not connect the database yet.
```

### Expected Result

Velox supports human intelligence notes.

---

## Command 8.2 — Build Settings Page

```text
Create a Settings page for Velox.

Include sections for:

1. Project status
2. Data source settings placeholder
3. Scoring settings placeholder
4. AI settings placeholder
5. Supabase settings placeholder
6. Cloudflare settings placeholder

Do not connect real services yet. This page should show what will be configured later.
```

### Expected Result

Velox has a clear place for future configuration.

---

# Phase 9: Supabase Preparation

## Command 9.1 — Prepare Supabase Integration Files

```text
Prepare the Velox app for future Supabase integration.

Create:

1. /lib/supabase.ts
2. .env.example placeholders
3. /docs/database-schema.md update
4. TypeScript interfaces for creators, scores, campaigns, simulations, reports, and notes

Do not connect live Supabase yet unless environment variables already exist. Keep mock data working.
```

### Expected Result

Velox is ready for database integration without breaking the prototype.

---

## Command 9.2 — Write Supabase Schema Documentation

```text
Expand /docs/database-schema.md with the planned Supabase database schema.

Include tables for:

1. creators
2. creator_scores
3. campaigns
4. campaign_simulations
5. reports
6. notes

For each table, include field names, field purpose, suggested type, and notes. Keep it practical and easy to implement later.
```

### Expected Result

Database planning becomes implementation-ready.

---

# Phase 10: Cloudflare Preparation

## Command 10.1 — Create Cloudflare Deployment Roadmap

```text
Expand /docs/deployment-roadmap.md with a practical Cloudflare roadmap for Velox.

Include:

1. When to use Cloudflare Pages
2. When to use Cloudflare Workers
3. When to use Cloudflare R2
4. When to use Cloudflare AI Gateway
5. When to use Cloudflare Vectorize
6. What should not be added until the prototype is stable

Keep the roadmap simple and staged.
```

### Expected Result

Cloudflare is planned without adding premature complexity.

---

## Command 10.2 — Add Deployment Notes Placeholder

```text
Create a deployment notes section in /docs/deployment-roadmap.md for Vercel and Cloudflare Pages.

Include placeholder steps for:

1. Connecting GitHub
2. Setting environment variables
3. Running build checks
4. Preview deployment
5. Production deployment

Do not configure deployment automatically yet.
```

### Expected Result

Deployment planning is documented.

---

# Phase 11: Codex Skills Preparation

## Command 11.1 — Create Skills Folder Structure

```text
Inside the /skills folder, create folders for the first five Velox Codex skills:

1. velox-product-architect
2. velox-ui-designer
3. velox-database-engineer
4. velox-scoring-system
5. velox-report-generator

Inside each folder, create a SKILL.md file with a short purpose, responsibilities, and when to use the skill.

Do not overcomplicate the skill files yet.
```

### Expected Result

The skills system is prepared.

---

## Command 11.2 — Expand Velox UI Designer Skill

```text
Expand /skills/velox-ui-designer/SKILL.md.

The skill should instruct Codex how to design Velox screens:

1. Clean dashboard layout
2. Sidebar navigation
3. Premium but simple visual style
4. Metric cards
5. Score badges
6. Tables
7. Creator profile layouts
8. Report preview layouts
9. Mobile responsiveness
10. Avoiding clutter

Keep the instructions practical and specific.
```

### Expected Result

Codex has UI-specific Velox guidance.

---

## Command 11.3 — Expand Velox Scoring Skill

```text
Expand /skills/velox-scoring-system/SKILL.md.

The skill should explain the six Velox scoring dimensions:

1. Growth Velocity
2. Engagement Quality
3. Consistency
4. Niche Authority
5. Brand Fit
6. Monetization Readiness

Include the starting weights and explain that every score must include a plain-language explanation.
```

### Expected Result

Codex has scoring-specific guidance.

---

# Phase 12: Quality Review and Refactor

## Command 12.1 — Review App for Simplicity

```text
Review the current Velox prototype for simplicity, maintainability, and alignment with AGENTS.md.

Identify:

1. Any unnecessary complexity
2. Repeated components that should be reusable
3. Confusing file names
4. UI sections that feel cluttered
5. Missing documentation
6. Potential bugs

Do not change code yet. Provide a review report first.
```

### Expected Result

Codex audits the project before refactoring.

---

## Command 12.2 — Refactor Reusable Components

```text
Based on the review, refactor repeated UI patterns into reusable components.

Prioritize:

1. Metric cards
2. Score badges
3. Section headers
4. Creator summary cards
5. Report cards
6. Tables

Do not change the product behavior unless needed. Keep mock data working.
```

### Expected Result

Code becomes cleaner and easier to extend.

---

## Command 12.3 — Update Build Log

```text
Update /docs/build-log.md with a concise record of the current build progress.

Include:

1. Date
2. Features completed
3. Files or modules created
4. Known limitations
5. Suggested next build task

Keep it short and practical.
```

### Expected Result

Velox keeps a clear development history.

---

# Phase 13: First Demo Preparation

## Command 13.1 — Prepare First Demo Flow

```text
Create a first-demo walkthrough document in /docs/demo-flow.md.

The demo flow should explain how to present Velox Version 1 using mock data:

1. Start at the dashboard
2. Open the creator database
3. View a creator profile
4. Explain the Velox Score
5. Run a campaign simulation
6. Open a report preview
7. Explain the recommended next action

Write it so a non-technical person can understand the value of Velox.
```

### Expected Result

Velox becomes demo-ready.

---

## Command 13.2 — Add Demo Data Consistency

```text
Review the mock data and make it consistent for a strong demo.

Ensure:

1. At least six sample creators
2. Different niches
3. Different platforms
4. Different score levels
5. At least two campaign simulations
6. At least two report examples
7. Clear opportunity and risk notes

Do not use private or sensitive real personal data.
```

### Expected Result

The demo feels realistic and coherent.

---

# Phase 14: Future AI Integration Planning

## Command 14.1 — Create AI Integration Plan

```text
Create /docs/ai-integration-plan.md.

Explain how AI should be added to Velox later.

Include:

1. AI-assisted creator analysis
2. Score explanation generation
3. Campaign recommendation generation
4. Brand match reasoning
5. Report writing support
6. Risk detection
7. AI cost control using Cloudflare AI Gateway
8. Human review before final outputs

Do not implement AI yet. This is planning only.
```

### Expected Result

AI is planned responsibly before implementation.

---

## Command 14.2 — Create Prompt Library Placeholder

```text
Create /docs/prompt-library.md.

Add placeholder sections for future Velox prompts:

1. Creator analysis prompt
2. Score explanation prompt
3. Campaign simulation prompt
4. Brand match prompt
5. Report generation prompt
6. Risk detection prompt

Do not add final prompts yet. Create the structure only.
```

### Expected Result

Velox prepares for future prompt engineering.

---

# Phase 15: Final Prototype Readiness Review

## Command 15.1 — Full Prototype Review

```text
Review the Velox prototype as if preparing it for a first stakeholder demo.

Check:

1. Does the dashboard communicate value quickly?
2. Is the creator database understandable?
3. Are creator profiles useful?
4. Is the scoring system clear?
5. Does campaign simulation feel valuable?
6. Do reports look professional?
7. Is the app still simple enough to maintain?
8. What should be improved before demo?

Do not change code yet. Provide a clear review report.
```

### Expected Result

The first prototype receives a serious readiness check.

---

## Command 15.2 — Apply Critical Demo Fixes

```text
Apply only the most important fixes needed to make the Velox prototype demo-ready.

Prioritize:

1. Broken navigation
2. Confusing labels
3. Missing mock data
4. Layout issues
5. Score explanation clarity
6. Report readability

Avoid major new features. Keep changes focused.
```

### Expected Result

The prototype becomes presentable.

---

# Emergency Repair Commands

## Repair Command 1 — Fix Broken Build

```text
The Velox app build is currently failing. Diagnose the error, explain the cause in simple language, and apply the smallest safe fix. Do not refactor unrelated files. After fixing, explain how to test the build again.
```

---

## Repair Command 2 — Restore Mock Data Flow

```text
The mock data flow is not working correctly. Review /lib/mock-data.ts and all pages that depend on it. Fix the issue with the smallest safe change. Do not connect Supabase or external APIs.
```

---

## Repair Command 3 — Fix Navigation

```text
The Velox navigation is not working correctly. Review the layout, sidebar links, and app routes. Fix broken links and make sure Dashboard, Creators, Scoring, Campaign Simulation, Reports, and Settings are reachable.
```

---

## Repair Command 4 — Simplify Overbuilt Code

```text
The current implementation feels overcomplicated. Review the code and identify what can be simplified. Do not change code yet. Provide a simplification plan first, then wait for approval.
```

---

## Repair Command 5 — Re-align With AGENTS.md

```text
Review the current implementation against AGENTS.md. Identify where the project has drifted from the intended Velox direction. Provide a short correction plan. Do not change files yet.
```

---

# Best Practice Commands

## Ask Codex to Explain Before Building

```text
Before writing code, explain how you understand this task, which files you expect to modify, and the simplest implementation plan. Then wait for approval before making changes.
```

---

## Ask Codex to Build Safely

```text
Make the smallest safe change needed to complete this task. Do not refactor unrelated files. Do not introduce new dependencies unless necessary. Keep the app working with mock data.
```

---

## Ask Codex to Document Changes

```text
After completing the task, update the relevant documentation if needed and summarize the change using this format:

## Completed

### What changed
-

### Files created or edited
-

### How to test
-

### Assumptions made
-

### Suggested next step
-
```

---

## Ask Codex to Avoid Overbuilding

```text
Keep this implementation simple. Do not add authentication, database integration, AI APIs, payment systems, or Cloudflare infrastructure unless this task specifically asks for it.
```

---

# Recommended First Build Order

Use this order for the first working prototype:

1. Command 0.1 — Review Existing Repository
2. Command 0.2 — Create Missing Foundation Files
3. Command 0.3 — Create Initial Documentation Files
4. Command 1.1 — Create Next.js App Structure
5. Command 1.2 — Create Layout Components
6. Command 1.3 — Create Mock Data File
7. Command 2.1 — Build Dashboard Homepage
8. Command 3.1 — Build Creator Database Page
9. Command 4.1 — Build Creator Profile Page
10. Command 5.1 — Create Scoring Utility
11. Command 5.2 — Build Scoring Page
12. Command 6.1 — Build Campaign Simulation Page
13. Command 7.1 — Build Report Preview Page
14. Command 7.2 — Create Creator Intelligence Report Template
15. Command 8.1 — Build Admin Notes Section
16. Command 8.2 — Build Settings Page
17. Command 12.1 — Review App for Simplicity
18. Command 13.1 — Prepare First Demo Flow
19. Command 15.1 — Full Prototype Review
20. Command 15.2 — Apply Critical Demo Fixes

---

# What Not to Do Yet

Do not rush into:

- Live APIs
- TikTok scraping
- Complex AI agents
- Payment systems
- Advanced authentication
- Enterprise dashboards
- Full Cloudflare Workers architecture
- Mobile app development
- Multi-tenant SaaS complexity

Those can come later.

The first mission is to prove the Velox intelligence flow.

---

# Final Astra Guidance

Velox should be built like a serious intelligence product, not a random dashboard.

The early prototype must prove one thing clearly:

**Velox can take creator information and turn it into strategic creator intelligence.**

That means the first version should demonstrate:

1. Creator discovery
2. Creator analysis
3. Creator scoring
4. Campaign simulation
5. Recommendation
6. Report generation

Once that works, then we connect Supabase, add AI, and bring in Cloudflare as the scale layer.

Build with discipline.

Simple first. Useful first. Scalable later.

