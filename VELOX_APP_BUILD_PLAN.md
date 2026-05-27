# Velox App Build Plan

## Purpose

This document explains how Velox should move from a technical foundation repository into a real working application.

The goal is to guide Codex and the development process clearly before any app code is created.

Velox discipline:

**Simple first. Useful first. Scalable later.**

---

# 1. What Velox Is

Velox is an AI-powered creator intelligence system.

It helps users:

- Discover emerging creators
- Analyze creator growth
- Evaluate engagement quality
- Score brand readiness
- Simulate campaign potential
- Recommend monetization and scaling opportunities
- Generate creator intelligence reports

Velox is not just a dashboard.

Velox is a decision engine for the creator economy.

---

# 2. Current Stage

Velox is currently at the foundation stage.

The following foundation work has already been completed:

- Technical foundation pack
- README.md
- AGENTS.md
- Codex command pack
- Codex skills pack
- Skills Master Index
- Six Codex skills
- GitHub repository upload
- Codex repository verification

The repository is structurally ready.

The next stage is to define the first working version of the Velox application.

---

# 3. Main Objective of the First App Version

The first version of the Velox app should be simple.

It should not try to build everything at once.

The first version should allow a user to:

1. Add a creator profile
2. Enter basic creator metrics
3. Generate a simple creator score
4. View a creator intelligence summary
5. Produce a basic report-style output

This is the first useful loop.

Simple app flow:

```text
Add creator
Enter data
Score creator
View insight
Generate report
```

This first loop proves the core idea of Velox.

---

# 4. First Version Name

Recommended internal name:

```text
Velox MVP 1
```

Simple meaning:

MVP means Minimum Viable Product.

That means the simplest useful version of Velox that can work and prove the system.

---

# 5. What Velox MVP 1 Should Include

Velox MVP 1 should include these main parts:

```text
Creator database
Creator profile page
Creator scoring logic
Creator intelligence summary
Basic report generator
Simple dashboard
```

These are the first building blocks.

---

# 6. What Velox MVP 1 Should Not Include Yet

To keep the project manageable, Velox MVP 1 should not include advanced features yet.

Do not build these first:

```text
Automated TikTok scraping
Advanced AI agents
Payment system
Full campaign marketplace
Complex brand simulation engine
Full investor dashboard
Mobile app
Advanced authentication roles
Large-scale data pipeline
Automated social listening engine
```

These can come later.

The first goal is to build the core decision loop.

---

# 7. Recommended Technology Stack

## Frontend

Recommended:

```text
Next.js
React
Tailwind CSS
```

Simple meaning:

This is what controls the visible web app screens.

## Backend and Database

Recommended:

```text
Supabase
PostgreSQL
```

Simple meaning:

This is where creator data, scores, reports, and user records can be stored.

## AI Layer

Recommended later:

```text
OpenAI API
Codex-assisted workflows
Prompt-based report generation
```

Simple meaning:

This is what will help Velox generate insights and reports.

## Hosting

Recommended:

```text
Cloudflare Pages
Cloudflare Workers later if needed
```

Simple meaning:

This is where the Velox web app can be published online.

---

# 8. Core App Pages for MVP 1

Velox MVP 1 should start with these pages:

```text
Dashboard
Creators
Add Creator
Creator Profile
Scoring
Reports
Settings
```

---

# 9. Page 1: Dashboard

## Purpose

The dashboard gives the user a quick overview of the creator intelligence system.

## It should show:

- Total creators added
- Highest scoring creators
- Fastest growing creators
- Creators needing review
- Recent reports
- Quick action button to add creator

## Simple user question answered

```text
What is happening across my creator intelligence system?
```

---

# 10. Page 2: Creators

## Purpose

This page lists all creators added to Velox.

## It should show:

- Creator name
- Platform
- Niche/category
- Follower count
- Engagement rate
- Growth score
- Velox score
- Status

## Simple user question answered

```text
Which creators are in my system?
```

---

# 11. Page 3: Add Creator

## Purpose

This page allows a user to manually add a creator.

## First fields should include:

```text
Creator name
Platform
Profile URL
Country
City or region
Niche/category
Follower count
Average views
Average likes
Average comments
Average shares
Posting frequency
Notes
```

## Simple user question answered

```text
How do I add a creator into Velox?
```

---

# 12. Page 4: Creator Profile

## Purpose

This page shows the full profile of one creator.

## It should show:

- Creator name
- Platform
- Profile link
- Location
- Niche/category
- Audience notes
- Key metrics
- Velox score
- Strengths
- Risks
- Recommended opportunities
- Report button

## Simple user question answered

```text
What do we know about this creator?
```

---

# 13. Page 5: Scoring

## Purpose

This page explains how a creator is scored.

## First scoring categories:

```text
Growth Score
Engagement Quality Score
Consistency Score
Brand Fit Score
Monetization Potential Score
Risk Score
Overall Velox Score
```

## Simple user question answered

```text
How strong is this creator and why?
```

---

# 14. Page 6: Reports

## Purpose

This page generates readable creator intelligence reports.

## First report sections:

```text
Creator Overview
Key Metrics
Velox Score
Growth Analysis
Engagement Analysis
Brand Readiness
Monetization Opportunities
Risk Notes
Strategic Recommendation
```

## Simple user question answered

```text
What does Velox recommend about this creator?
```

---

# 15. Page 7: Settings

## Purpose

This page stores basic application settings.

## First settings:

```text
Project name
Default country
Default scoring weights
Report branding
Export preferences
```

## Simple user question answered

```text
How do I configure Velox for my work?
```

---

# 16. First Database Tables

Velox MVP 1 should start with a small database.

Recommended first tables:

```text
creators
creator_metrics
creator_scores
creator_reports
```

---

# 17. Table 1: creators

## Purpose

Stores the main creator profile.

Recommended fields:

```text
id
creator_name
platform
profile_url
country
city
niche
status
notes
created_at
updated_at
```

---

# 18. Table 2: creator_metrics

## Purpose

Stores creator performance numbers.

Recommended fields:

```text
id
creator_id
follower_count
average_views
average_likes
average_comments
average_shares
posting_frequency
engagement_rate
growth_rate
recorded_at
created_at
```

---

# 19. Table 3: creator_scores

## Purpose

Stores scoring results.

Recommended fields:

```text
id
creator_id
growth_score
engagement_quality_score
consistency_score
brand_fit_score
monetization_potential_score
risk_score
overall_velox_score
score_notes
created_at
```

---

# 20. Table 4: creator_reports

## Purpose

Stores generated report outputs.

Recommended fields:

```text
id
creator_id
report_title
report_summary
growth_analysis
engagement_analysis
brand_readiness
monetization_opportunities
risk_notes
strategic_recommendation
created_at
```

---

# 21. First Scoring Logic

Velox MVP 1 should start with simple scoring.

Each category can be scored from:

```text
0 to 100
```

Recommended overall Velox score formula:

```text
Overall Velox Score =
Growth Score
+ Engagement Quality Score
+ Consistency Score
+ Brand Fit Score
+ Monetization Potential Score
- Risk Score
```

Then normalize the final score to stay between:

```text
0 and 100
```

Simple meaning:

Strong creators score higher.

Creators with high risk are reduced.

---

# 22. First Creator Status Labels

Velox should classify creators using simple labels:

```text
Watchlist
Emerging
High Potential
Brand Ready
Needs Review
High Risk
```

These labels help non-technical users understand what to do.

---

# 23. First Report Output

The first report does not need to be a complex PDF.

It can start as a clean on-screen report.

Then later it can export as:

```text
PDF
Markdown
DOCX
```

Recommended first report format:

```text
Markdown
```

Why:

Markdown is easy for GitHub, Codex, AI agents, and later PDF conversion.

---

# 24. First Codex Build Sequence

Codex should build Velox MVP 1 in this order:

```text
1. Create app structure
2. Create page structure
3. Create database schema draft
4. Create creator data model
5. Create manual creator entry form
6. Create simple scoring function
7. Create creator profile page
8. Create report template
9. Create dashboard overview
10. Verify the app structure
```

---

# 25. What Codex Should Not Do First

Codex should not start with:

```text
Complex AI automation
External API integration
Social media scraping
Payment features
Multi-user permissions
Advanced deployment
Large data pipelines
```

Those features can come later.

First, Codex must build the simple working loop.

---

# 26. Recommended First Codex Prompt

Use this prompt when ready to start the app build:

```text
Codex, using the Velox technical foundation repository, create a build plan for Velox MVP 1.

Do not write application code yet.

First inspect:

- README.md
- AGENTS.md
- VELOX_REPOSITORY_UPLOAD_CHECKLIST.md
- 01_Velox_Technical_Foundation_Pack
- 04_Velox_Codex_Command_Pack
- 05_Velox_Codex_Skills
- VELOX_APP_BUILD_PLAN.md

Then propose the simplest app structure for Velox MVP 1.

The app should support:

1. Adding a creator
2. Entering creator metrics
3. Generating a simple Velox score
4. Viewing a creator profile
5. Creating a basic creator intelligence report

Do not modify files yet.

Only propose the app structure, folder structure, first database tables, and first build sequence.
```

---

# 27. Recommended GitHub Commit Message

When this file is added to the repository, use:

```text
Add Velox app build plan
```

Optional longer description:

```text
Added the Velox App Build Plan to define the MVP 1 scope, recommended app pages, first database tables, scoring logic, report structure, and Codex build sequence.
```

---

# 28. Where This File Should Go

## Simple version

Place this file directly inside the main repository.

That means it should sit next to:

```text
README.md
AGENTS.md
VELOX_REPOSITORY_UPLOAD_CHECKLIST.md
```

## Code/file-path version

```text
VELOX_APP_BUILD_PLAN.md
```

Plain meaning:

When you open the GitHub repository, this file should be visible at the main level.

---

# 29. Export Recommendation

Best working format:

```text
.md
```

Recommended file name:

```text
VELOX_APP_BUILD_PLAN.md
```

Why:

Markdown is best for GitHub, Codex, and AI agent workflows.

PDF can be created later for reading or sharing, but the main working version should remain Markdown.
