# Velox Skills Master Index

## Purpose

The Velox Skills Master Index is the central guide that explains how the Velox Codex skills work together.

This file tells Codex:

- Which Velox skill exists
- What each skill is responsible for
- When each skill should be used
- How the skills support the Velox build system
- How to avoid mixing responsibilities between skills

Velox discipline:

**Simple first. Useful first. Scalable later.**

---

# 1. Where This File Belongs

## Simple version

Place this file inside the folder called:

```text
05_Velox_Codex_Skills
```

It should sit next to:

```text
Velox_Codex_Skills_Pack.md
SKILLS
```

## Code/file-path version

```text
05_Velox_Codex_Skills/VELOX_SKILLS_INDEX.md
```

Plain meaning:

Open the `05_Velox_Codex_Skills` folder, then place this file directly inside that folder.

---

# 2. Final Folder Structure

## Simple version

Inside `05_Velox_Codex_Skills`, you should have:

```text
Velox_Codex_Skills_Pack.md
VELOX_SKILLS_INDEX.md
SKILLS
```

Inside the `SKILLS` folder, you should have six skill folders.

Inside each skill folder, there should be one file called:

```text
SKILL.md
```

## Code/file-path version

```text
05_Velox_Codex_Skills/
  Velox_Codex_Skills_Pack.md
  VELOX_SKILLS_INDEX.md

  SKILLS/
    velox-product-architect/
      SKILL.md

    velox-ui-designer/
      SKILL.md

    velox-database-engineer/
      SKILL.md

    velox-scoring-system/
      SKILL.md

    velox-report-generator/
      SKILL.md

    velox-cloudflare-deployment/
      SKILL.md
```

---

# 3. Velox Skills Overview

Velox currently has six Codex skills:

1. Velox Product Architect
2. Velox UI Designer
3. Velox Database Engineer
4. Velox Scoring System
5. Velox Report Generator
6. Velox Cloudflare Deployment

Each skill has a specific role.

Codex should not use all skills at the same time unless the task requires system-level coordination.

---

# 4. Skill 1: Velox Product Architect

## Folder

```text
SKILLS/velox-product-architect/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-product-architect` folder.

Inside it is the `SKILL.md` file for product strategy and system design.

## Main responsibility

This skill controls the product thinking behind Velox.

Use it when the task involves:

- Product vision
- Feature planning
- System modules
- User journeys
- Product roadmap
- MVP planning
- Strategic decisions
- Creator intelligence logic at product level
- Deciding what Velox should or should not build

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Plan the Velox product structure
Design the Velox MVP
Improve the Velox feature roadmap
Decide which module to build next
Explain how Velox should work as a product
Review whether a feature belongs in Velox
```

## Boundaries

This skill should not be the main skill for writing database tables, UI layouts, scoring formulas, reports, or deployment files.

It may guide those areas, but the specialist skills should handle the detailed work.

---

# 5. Skill 2: Velox UI Designer

## Folder

```text
SKILLS/velox-ui-designer/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-ui-designer` folder.

Inside it is the `SKILL.md` file for screens, layout, dashboards, and user experience.

## Main responsibility

This skill controls the visual and experience design of Velox.

Use it when the task involves:

- Dashboard design
- Page layout
- Navigation
- User interface structure
- Creator profile screens
- Report screens
- Campaign screens
- Admin screens
- Design systems
- Visual hierarchy
- User experience improvements

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Design the Velox dashboard
Create the creator profile screen
Improve the user interface
Design the report layout
Make the app easier to understand
Create a clean layout for the scoring page
```

## Boundaries

This skill should not decide database schema, scoring rules, or deployment logic.

It can recommend what information should appear on the screen, but database and scoring skills should define the underlying logic.

---

# 6. Skill 3: Velox Database Engineer

## Folder

```text
SKILLS/velox-database-engineer/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-database-engineer` folder.

Inside it is the `SKILL.md` file for database structure and data organization.

## Main responsibility

This skill controls how Velox stores and organizes data.

Use it when the task involves:

- Database tables
- Fields and columns
- Data relationships
- Creator records
- Campaign records
- Report records
- Scoring data
- Brand data
- User accounts
- Data validation
- Supabase structure
- SQL planning

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Create the Velox database schema
Add a creator table
Design the scoring data structure
Connect campaigns to creators
Create Supabase tables
Fix database relationships
Prepare database migration files
```

## Boundaries

This skill should not design screens, create marketing reports, or make strategic product decisions by itself.

It supports the product by making sure the data foundation is strong.

---

# 7. Skill 4: Velox Scoring System

## Folder

```text
SKILLS/velox-scoring-system/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-scoring-system` folder.

Inside it is the `SKILL.md` file for scoring creators and campaign fit.

## Main responsibility

This skill controls the intelligence layer of Velox.

Use it when the task involves:

- Creator scoring
- Growth scoring
- Influence scoring
- Brand fit scoring
- Monetization potential
- Campaign match scoring
- Risk flags
- Ranking creators
- Recommendation logic
- Scoring formulas
- Decision rules

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Build the Velox scoring engine
Score creators
Create creator ranking logic
Improve campaign fit analysis
Add risk flags
Calculate monetization potential
Create the Velox recommendation system
```

## Boundaries

This skill should not own the full product roadmap, UI layout, database schema, or deployment setup.

It defines scoring logic and works with the database and report generator skills.

---

# 8. Skill 5: Velox Report Generator

## Folder

```text
SKILLS/velox-report-generator/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-report-generator` folder.

Inside it is the `SKILL.md` file for turning Velox intelligence into useful reports.

## Main responsibility

This skill controls how Velox creates readable intelligence outputs.

Use it when the task involves:

- Creator intelligence reports
- Campaign reports
- Brand reports
- Executive summaries
- PDF report structure
- Insight writing
- Recommendation sections
- Report templates
- Score explanations
- Non-technical summaries

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Generate a creator report
Create a campaign intelligence report
Summarize scoring results
Create a brand-ready report
Turn creator data into insights
Build report templates
Create PDF-ready report content
```

## Boundaries

This skill should not create the scoring formula itself unless it is explaining existing scores.

It should turn Velox data into clear insights.

---

# 9. Skill 6: Velox Cloudflare Deployment

## Folder

```text
SKILLS/velox-cloudflare-deployment/SKILL.md
```

## Simple meaning

Open the `SKILLS` folder.

Then open the `velox-cloudflare-deployment` folder.

Inside it is the `SKILL.md` file for deployment and production setup.

## Main responsibility

This skill controls deployment preparation for Velox.

Use it when the task involves:

- Cloudflare Pages
- Cloudflare Workers
- Environment variables
- Production setup
- Hosting
- Routing
- Deployment checks
- Build commands
- API deployment
- Domain setup
- Security basics

## When Codex should use this skill

Codex should use this skill when the user asks for:

```text
Deploy Velox to Cloudflare
Prepare Cloudflare Pages
Create deployment instructions
Set environment variables
Fix production deployment
Create Worker routes
Prepare Velox for live hosting
```

## Boundaries

This skill should not decide the product roadmap, UI design, database model, or scoring strategy.

It focuses on making Velox run safely online.

---

# 10. How Codex Should Choose a Skill

Codex should choose the skill based on the task.

## Product planning task

Use:

```text
velox-product-architect
```

## Screen or dashboard task

Use:

```text
velox-ui-designer
```

## Data or database task

Use:

```text
velox-database-engineer
```

## Scoring or ranking task

Use:

```text
velox-scoring-system
```

## Report or insight task

Use:

```text
velox-report-generator
```

## Deployment or hosting task

Use:

```text
velox-cloudflare-deployment
```

---

# 11. How Skills Work Together

Some Velox tasks require more than one skill.

## Example 1: Creator Profile Page

Use:

```text
velox-product-architect
velox-ui-designer
velox-database-engineer
velox-scoring-system
```

Why:

- Product Architect defines what the page is for
- UI Designer defines how it looks
- Database Engineer defines the data needed
- Scoring System defines the score shown on the profile

---

## Example 2: Creator Intelligence Report

Use:

```text
velox-scoring-system
velox-report-generator
velox-product-architect
```

Why:

- Scoring System calculates intelligence
- Report Generator explains it clearly
- Product Architect checks that the report supports the Velox product strategy

---

## Example 3: Campaign Match Engine

Use:

```text
velox-product-architect
velox-database-engineer
velox-scoring-system
velox-report-generator
```

Why:

- Product Architect defines the campaign logic
- Database Engineer stores creator and brand data
- Scoring System calculates fit
- Report Generator explains the recommendation

---

## Example 4: Deploying Velox

Use:

```text
velox-cloudflare-deployment
```

If deployment needs app structure review, also use:

```text
velox-product-architect
```

---

# 12. General Codex Rules for Velox Skills

Codex should follow these rules:

```text
Do not mix responsibilities unnecessarily.
Do not change many files at once unless clearly required.
Do not overwrite SKILL.md files without permission.
Do not rename folders unless instructed.
Do not create new skills unless there is a clear need.
Always explain what was changed.
Always verify structure after changes.
Keep Velox simple before making it complex.
```

---

# 13. Verification Prompt for Codex

Use this prompt inside Codex after uploading the skills:

```text
Codex, verify the Velox skills system.

Check that this file exists:

05_Velox_Codex_Skills/VELOX_SKILLS_INDEX.md

Check that this overview file exists:

05_Velox_Codex_Skills/Velox_Codex_Skills_Pack.md

Check that the SKILLS folder exists.

Inside the SKILLS folder, confirm that these six folders exist:

1. velox-product-architect
2. velox-ui-designer
3. velox-database-engineer
4. velox-scoring-system
5. velox-report-generator
6. velox-cloudflare-deployment

Inside each folder, confirm that there is one file named exactly:

SKILL.md

Do not modify anything yet.

Only inspect the structure and report whether the Velox skills system is ready.
```

---

# 14. Expected Codex Verification Response

Codex should return something like:

```text
Velox Skills System Verification

Found:
- VELOX_SKILLS_INDEX.md
- Velox_Codex_Skills_Pack.md
- SKILLS folder

Skill folders found:
- velox-product-architect
- velox-ui-designer
- velox-database-engineer
- velox-scoring-system
- velox-report-generator
- velox-cloudflare-deployment

SKILL.md files found:
- SKILLS/velox-product-architect/SKILL.md
- SKILLS/velox-ui-designer/SKILL.md
- SKILLS/velox-database-engineer/SKILL.md
- SKILLS/velox-scoring-system/SKILL.md
- SKILLS/velox-report-generator/SKILL.md
- SKILLS/velox-cloudflare-deployment/SKILL.md

Status:
The Velox skills system is correctly installed and ready for the next Velox build step.
```

---

# 15. Recommended Commit Message

Use this GitHub commit message:

```text
Add Velox Skills Master Index
```

Optional longer commit description:

```text
Added the Velox Skills Master Index to explain how each Codex skill should be used, when each skill applies, how the skills work together, and how Codex should verify the Velox skills structure.
```

---

# 16. Next Recommended Step

After this file is added and verified, the next recommended step is:

```text
Create the Velox Repository Upload Checklist
```

This checklist will confirm:

- Which folders are ready
- Which files are ready
- Which files should be renamed
- Which files should go to the root level later
- What should be uploaded first
- How to verify the GitHub repository after upload

This prevents confusion before the first clean GitHub commit.

---

# 17. Export Recommendation

Best working format:

```text
.md
```

Recommended file name:

```text
VELOX_SKILLS_INDEX.md
```

Why:

Markdown is best for GitHub, Codex, and AI agent instructions.

PDF can be created later for reading or sharing, but the main working file should remain Markdown.
