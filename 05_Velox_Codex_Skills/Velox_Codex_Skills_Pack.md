# Velox Codex Skills Pack

## Purpose of This Skills Pack

This pack creates the first specialist Codex skills for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The purpose of these skills is to help Codex behave less like a generic coding assistant and more like a Velox-trained technical build partner.

Each skill is designed as a folder containing a `SKILL.md` file.

For the first version, these skills are instruction-only. Scripts, references, and assets can be added later if needed.

---

## Recommended Skills Folder Structure

Place the skills inside the Velox repository like this:

```text
velox-creator-intelligence/
  /skills
    /velox-product-architect
      SKILL.md
    /velox-ui-designer
      SKILL.md
    /velox-database-engineer
      SKILL.md
    /velox-scoring-system
      SKILL.md
    /velox-report-generator
      SKILL.md
    /velox-cloudflare-deployment
      SKILL.md
```

The first five are the core skills. The sixth, Cloudflare Deployment, is included because Cloudflare is part of the Velox scale roadmap.

---

# Skill 1: Velox Product Architect

## Folder Name

```text
skills/velox-product-architect/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-product-architect
description: Use this skill when planning Velox product features, breaking down large ideas into simple build tasks, defining product logic, reviewing feature scope, or deciding what should be built next. Do not use this skill for visual UI styling, database schema details, deployment setup, or report writing unless product strategy is the main task.
---

# Velox Product Architect Skill

## Purpose

This skill helps Codex think like a product architect for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The purpose of this skill is to keep Velox focused, practical, and aligned with the product vision.

## Core Product Principle

Simple first. Useful first. Scalable later.

Do not overbuild. Do not add complexity unless the current product stage clearly requires it.

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

## Version 1 Priority

Version 1 should prove the creator intelligence flow using mock data.

The flow is:

1. View creator data
2. Understand creator metrics
3. Calculate a Velox Score
4. Simulate a campaign
5. Generate a recommendation
6. Preview a report

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

## Product Decision Rules

Before suggesting or building a feature, ask:

1. Does this help discover creators?
2. Does this help analyze creator growth?
3. Does this help score potential?
4. Does this help simulate campaign outcomes?
5. Does this help recommend monetization or scaling actions?
6. Does this help generate better reports?

If the answer is no, the feature is probably not needed yet.

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

### Suggested next command
-
```

## Final Guidance

Keep Velox disciplined. The first product must be clear, useful, and demo-ready before it becomes advanced.
```

---

# Skill 2: Velox UI Designer

## Folder Name

```text
skills/velox-ui-designer/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-ui-designer
description: Use this skill when designing or improving Velox user interfaces, dashboards, layout components, creator tables, score cards, creator profiles, campaign simulation screens, report previews, or responsive Tailwind/React UI. Do not use this skill for database schema, backend logic, deployment, or scoring formula design unless UI presentation is the main task.
---

# Velox UI Designer Skill

## Purpose

This skill helps Codex design clean, premium, strategic, and practical user interfaces for Velox Creator Intelligence.

Velox should feel like an intelligence dashboard, not a social media feed.

## Design Personality

Velox UI should feel:

- Premium
- Intelligent
- Clean
- Modern
- Strategic
- Professional
- Easy to understand

The interface should help users make decisions quickly.

## Core UI Principle

Clarity beats decoration.

Do not overdesign. Do not add visual effects that make the system harder to understand.

## When to Use This Skill

Use this skill when asked to create or improve:

- Dashboard layouts
- Sidebar navigation
- Metric cards
- Creator database tables
- Creator profile pages
- Score badges
- Campaign simulation pages
- Report preview layouts
- Settings pages
- Reusable React components
- Tailwind styling
- Responsive layouts

## Preferred UI Patterns

Use:

- Sidebar navigation
- Clean cards
- Metric panels
- Tables
- Score badges
- Section headers
- Insight summary blocks
- Report-style layouts
- Simple charts where useful
- Responsive grids

Avoid:

- Too many colors
- Heavy gradients
- Random animations
- Overloaded pages
- Confusing navigation
- Decorative elements with no purpose
- Complicated interactions in Version 1

## Recommended Navigation

Start with:

- Dashboard
- Creators
- Scoring
- Campaign Simulation
- Reports
- Settings

Optional later:

- Brands
- Opportunities
- Data Sources
- AI Insights
- Admin

## Component Guidelines

Create reusable components where possible:

- AppShell
- Sidebar
- TopBar
- PageHeader
- MetricCard
- ScoreBadge
- CreatorTable
- CreatorCard
- InsightPanel
- ReportCard
- EmptyState

Keep components readable and easy to modify.

## Dashboard Layout Guidance

The dashboard should show:

1. Total creators tracked
2. Average Velox score
3. Fastest growing creator
4. Top-performing niche
5. Campaign simulations
6. Recent reports
7. Top opportunities
8. Watch items or risks

Use cards and simple tables.

## Creator Table Guidance

Creator tables should include:

- Creator name
- Platform
- Niche
- Country
- Followers
- Average views
- Engagement rate
- Growth rate
- Velox score
- Status
- View profile action

Make the table searchable and filterable when requested.

## Creator Profile Layout Guidance

Creator profiles should include:

- Creator overview
- Metrics
- Velox score
- Score breakdown
- Growth insight
- Engagement insight
- Brand fit notes
- Monetization readiness
- Recommended next action
- Admin notes

## Report Layout Guidance

Reports should feel client-ready.

Use:

- Clear title
- Executive summary
- Metrics
- Score breakdown
- Insights
- Risks
- Recommendations
- Next action

Make report previews readable in print/PDF mode where possible.

## Tailwind CSS Guidance

Use Tailwind CSS for layout and styling.

Prefer:

- Consistent spacing
- Responsive grids
- Rounded cards
- Subtle shadows
- Clear typography hierarchy
- Good contrast

Do not introduce a design library unless instructed.

## Output Format

When using this skill, report:

```markdown
## UI Design Result

### What was designed
-

### Key components
-

### Design choices
-

### Files created or edited
-

### How to test visually
-

### Suggested next step
-
```

## Final Guidance

Every screen should help users understand creator opportunity faster.
```

---

# Skill 3: Velox Database Engineer

## Folder Name

```text
skills/velox-database-engineer/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-database-engineer
description: Use this skill when designing, documenting, preparing, or implementing Velox database structures, Supabase tables, TypeScript data types, relationships, mock-data alignment, data validation, or migration planning. Do not use this skill for UI styling, product strategy, deployment, or report writing unless database structure is the main task.
---

# Velox Database Engineer Skill

## Purpose

This skill helps Codex design and prepare clean database structures for Velox Creator Intelligence.

The database should support creator discovery, scoring, campaign simulations, reports, and admin notes.

## Core Database Principle

Start simple. Keep the schema understandable. Avoid complex relationships until the product requires them.

Do not connect live Supabase until the mock-data prototype works unless specifically instructed.

## When to Use This Skill

Use this skill when asked to:

- Design Supabase tables
- Document database schema
- Create TypeScript interfaces
- Align mock data with database fields
- Prepare `.env.example` variables
- Create schema documentation
- Plan relationships between tables
- Review database structure for simplicity
- Prepare future migrations

## Core Tables

Start with these tables:

1. creators
2. creator_scores
3. campaigns
4. campaign_simulations
5. reports
6. notes

## Table: creators

Suggested fields:

- id
- full_name
- creator_name
- platform
- profile_url
- country
- city
- niche
- follower_count
- average_views
- average_likes
- average_comments
- engagement_rate
- growth_rate
- content_frequency
- audience_type
- brand_safety_notes
- monetization_status
- created_at
- updated_at

## Table: creator_scores

Suggested fields:

- id
- creator_id
- growth_score
- engagement_score
- consistency_score
- niche_authority_score
- brand_fit_score
- monetization_readiness_score
- overall_velox_score
- score_notes
- created_at

## Table: campaigns

Suggested fields:

- id
- brand_name
- campaign_name
- campaign_goal
- target_audience
- budget_range
- preferred_platforms
- required_niche
- start_date
- end_date
- created_at

## Table: campaign_simulations

Suggested fields:

- id
- campaign_id
- creator_id
- estimated_reach
- estimated_engagement
- estimated_conversion_potential
- risk_level
- recommendation
- created_at

## Table: reports

Suggested fields:

- id
- report_title
- report_type
- creator_id
- campaign_id
- summary
- findings
- recommendations
- created_at

## Table: notes

Suggested fields:

- id
- related_creator_id
- note_type
- note_content
- created_by
- created_at

## TypeScript Guidance

Create clear TypeScript types or interfaces for:

- Creator
- CreatorScore
- Campaign
- CampaignSimulation
- Report
- Note

Keep names simple and predictable.

## Mock Data Alignment

Mock data should match the future database structure as much as possible.

If mock data and schema drift apart, update documentation or mock data to stay aligned.

## Supabase Guidance

When preparing Supabase:

- Create `/lib/supabase.ts`
- Add `.env.example` placeholders
- Do not hardcode credentials
- Do not commit real API keys
- Keep mock data working during transition
- Document schema before implementation

## Security Guidance

Do not expose service role keys in frontend code.
Do not commit secrets.
Use environment variables.
Plan row-level security before handling real user or creator data.

## Output Format

When using this skill, report:

```markdown
## Database Result

### What was designed or changed
-

### Tables or types affected
-

### Files created or edited
-

### Mock data impact
-

### Security notes
-

### Suggested next step
-
```

## Final Guidance

The database should make Velox easier to reason about, not harder.
```

---

# Skill 4: Velox Scoring System

## Folder Name

```text
skills/velox-scoring-system/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-scoring-system
description: Use this skill when creating, reviewing, explaining, or improving Velox creator scoring logic, score weights, score badges, score explanations, campaign fit scoring, monetization readiness, or creator potential ratings. Do not use this skill for general UI, database schema, deployment, or report writing unless scoring is the main task.
---

# Velox Scoring System Skill

## Purpose

This skill helps Codex build and improve the Velox creator scoring system.

Velox scores creators so users can quickly understand creator potential, growth quality, brand readiness, and monetization opportunity.

## Core Scoring Principle

Never create a black-box score.

Every score must include a plain-language explanation that a non-technical user can understand.

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

## Core Scoring Dimensions

Velox begins with six dimensions:

1. Growth Velocity
2. Engagement Quality
3. Consistency
4. Niche Authority
5. Brand Fit
6. Monetization Readiness

## Initial Weighting

Use this starting weighting:

- Growth Velocity: 20%
- Engagement Quality: 20%
- Consistency: 15%
- Niche Authority: 15%
- Brand Fit: 15%
- Monetization Readiness: 15%

The total must equal 100%.

## Dimension Meaning

### Growth Velocity

Measures whether a creator is growing quickly.

Signals may include:

- Follower growth
- View growth
- Recent traction
- Viral content patterns

### Engagement Quality

Measures whether the audience responds meaningfully.

Signals may include:

- Comments
- Saves
- Shares
- Like-to-view ratio
- Comment quality

### Consistency

Measures whether the creator posts regularly.

Signals may include:

- Weekly posting frequency
- Content rhythm
- Gaps in posting
- Format consistency

### Niche Authority

Measures whether the creator owns a clear space.

Signals may include:

- Topic clarity
- Audience association
- Repeated content themes
- Expertise perception

### Brand Fit

Measures whether the creator can work with brands safely and effectively.

Signals may include:

- Tone
- Public image
- Content quality
- Audience alignment
- Risk factors

### Monetization Readiness

Measures whether the creator is ready to generate income.

Signals may include:

- Professionalism
- Audience trust
- Existing brand mentions
- Content packaging
- Conversion potential

## Score Labels

Use these labels:

- 85–100: High Potential
- 70–84: Strong Opportunity
- 55–69: Developing
- 40–54: Needs Support
- Below 40: Watch Carefully

## Scoring Utility Guidance

Create scoring logic in `/lib/scoring.ts` where possible.

The scoring utility should return:

- Individual dimension scores
- Overall Velox score
- Score label
- Plain-language explanation
- Recommended next action where useful

## Explanation Guidance

Good explanation:

“This creator has strong engagement and consistent posting, but monetization readiness is still developing because brand packaging and campaign history are limited.”

Weak explanation:

“Score calculated using weighted variables.”

Always make the score useful for decision-making.

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

## Final Guidance

The Velox Score should feel strategic, explainable, and practical.
```

---

# Skill 5: Velox Report Generator

## Folder Name

```text
skills/velox-report-generator/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-report-generator
description: Use this skill when creating, improving, formatting, or reviewing Velox creator intelligence reports, report preview pages, PDF-ready report layouts, recommendation sections, executive summaries, or campaign intelligence reports. Do not use this skill for database schema, deployment, or general UI unless report output is the main task.
---

# Velox Report Generator Skill

## Purpose

This skill helps Codex create professional, decision-focused reports for Velox Creator Intelligence.

Velox reports should turn creator data into clear strategic insight.

## Core Reporting Principle

Reports must be understandable to non-technical users.

Avoid jargon unless it is explained.

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

## Report Tone

Use a tone that is:

- Clear
- Professional
- Strategic
- Practical
- Easy to understand
- Insight-driven

Avoid:

- Excessive jargon
- Long academic explanations
- Vague recommendations
- Overly technical scoring language

## Executive Summary Guidance

The executive summary should answer:

- Who is this creator?
- Why do they matter?
- What is the opportunity?
- What is the risk?
- What should be done next?

## Recommendation Guidance

Recommendations should be specific.

Good recommendation:

“Position this creator for a 30-day beauty product awareness campaign focused on short-form TikTok tutorials and testimonial-style content.”

Weak recommendation:

“Work with this creator.”

## Print/PDF Guidance

When building report previews:

- Make the layout printable
- Hide navigation when printing if possible
- Use clear page sections
- Avoid clutter
- Keep report cards professional
- Make the report useful even when exported to PDF

## Data Source Guidance

Reports may use:

- Mock creator data
- Creator scoring data
- Campaign simulation data
- Admin notes
- Future AI-generated analysis

For Version 1, use mock data and rule-based insights.

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

## Final Guidance

A Velox report should make creator opportunity visible, understandable, and actionable.
```

---

# Skill 6: Velox Cloudflare Deployment

## Folder Name

```text
skills/velox-cloudflare-deployment/
```

## File Name

```text
SKILL.md
```

## SKILL.md Content

```markdown
---
name: velox-cloudflare-deployment
description: Use this skill when planning or preparing Velox deployment, Cloudflare Pages hosting, Workers backend logic, R2 storage, AI Gateway cost control, Vectorize semantic search, Workers AI, environment variables, or staged infrastructure decisions. Do not use this skill for UI design, scoring formulas, report writing, or database schema unless Cloudflare deployment is the main task.
---

# Velox Cloudflare Deployment Skill

## Purpose

This skill helps Codex plan and prepare Cloudflare infrastructure for Velox Creator Intelligence.

Cloudflare is the future scale layer for Velox, but it should be introduced gradually.

## Core Cloudflare Principle

Do not add Cloudflare complexity before the Velox prototype is working.

Use Cloudflare only when it solves a clear hosting, storage, backend, AI-control, security, or scaling need.

## When to Use This Skill

Use this skill when asked to:

- Prepare Cloudflare Pages deployment
- Plan Cloudflare Workers usage
- Plan Cloudflare R2 storage
- Plan Cloudflare AI Gateway usage
- Plan Cloudflare Vectorize usage
- Plan Workers AI usage
- Create deployment documentation
- Prepare environment variables
- Review infrastructure choices

## Cloudflare Roadmap for Velox

### Stage 1: Hosting

Use Cloudflare Pages for frontend deployment when appropriate.

Good for:

- Hosting the Next.js frontend
- Connecting GitHub
- Preview deployments
- Production deployment

### Stage 2: Backend Logic

Use Cloudflare Workers for lightweight backend logic.

Good for:

- API endpoints
- Secure server-side processing
- Small data utilities
- Request handling

### Stage 3: File Storage

Use Cloudflare R2 for files.

Good for:

- PDF reports
- Creator media
- Screenshots
- CSV uploads
- Dataset archives

### Stage 4: AI Monitoring and Control

Use Cloudflare AI Gateway when Velox begins making frequent AI calls.

Good for:

- AI cost tracking
- Rate limiting
- Caching
- Retries
- Model fallback
- Observability

### Stage 5: Semantic Search and Memory

Use Cloudflare Vectorize when Velox needs semantic creator search or AI memory.

Good for:

- Similar creator search
- Brand-to-creator matching
- Retrieval-based reports
- Creator intelligence memory

### Stage 6: Serverless AI

Use Workers AI for selected AI tasks when useful.

Good for:

- Lightweight inference
- Classification
- Embeddings
- Experiments at the edge

## What Not to Do Too Early

Do not add:

- Full Workers architecture before prototype stability
- R2 storage before file workflows exist
- AI Gateway before AI calls exist
- Vectorize before semantic search is needed
- Workers AI before use cases are clear

## Environment Variable Guidance

Use `.env.example` for placeholders.

Never commit real credentials.

Possible placeholders:

```bash
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_R2_BUCKET=
CLOUDFLARE_VECTORIZE_INDEX=
CLOUDFLARE_AI_GATEWAY_ID=
```

## Deployment Documentation Guidance

When preparing deployment documentation, include:

1. Deployment platform
2. GitHub connection
3. Build command
4. Output directory
5. Environment variables
6. Preview deployment process
7. Production deployment process
8. Rollback notes

## Output Format

When using this skill, report:

```markdown
## Cloudflare Deployment Result

### What was planned or changed
-

### Cloudflare services involved
-

### Files created or edited
-

### Environment variables needed
-

### What should wait until later
-

### Suggested next step
-
```

## Final Guidance

Cloudflare should make Velox stronger, faster, safer, and more cost-aware — not more complicated too early.
```

---

# Recommended Installation Into Repository

After creating these files, the repository should look like this:

```text
velox-creator-intelligence/
  AGENTS.md
  README.md
  /skills
    /velox-product-architect
      SKILL.md
    /velox-ui-designer
      SKILL.md
    /velox-database-engineer
      SKILL.md
    /velox-scoring-system
      SKILL.md
    /velox-report-generator
      SKILL.md
    /velox-cloudflare-deployment
      SKILL.md
```

---

# Codex Command to Create the Skills

Paste this into Codex when ready:

```text
Inside the /skills folder, create the following Velox Codex skill folders:

1. velox-product-architect
2. velox-ui-designer
3. velox-database-engineer
4. velox-scoring-system
5. velox-report-generator
6. velox-cloudflare-deployment

Inside each folder, create a SKILL.md file using the full skill instructions provided in the Velox Codex Skills Pack.

Each SKILL.md file must include front matter with name and description, followed by practical instructions. Keep the skills instruction-only for now. Do not add scripts, references, assets, or extra dependencies yet.

After creating the files, report:

1. What folders were created
2. What files were created
3. Any assumptions made
4. How to verify the structure
5. Suggested next step
```

---

# How to Use Skills With Codex

Use skills in two ways:

## 1. Explicit Use

Ask Codex directly:

```text
Use the velox-ui-designer skill to improve the creator profile layout.
```

Or:

```text
Use the velox-scoring-system skill to review the scoring utility and make sure every score includes a plain-language explanation.
```

## 2. Implicit Use

When the skill descriptions are clear, Codex may select the right skill based on the task.

Example:

```text
Create a report preview page for a creator intelligence report.
```

Codex should recognize that the report generator skill is relevant.

---

# Recommended Skill Growth Path

Start instruction-only.

Later, add:

## references/

Use for longer documents such as:

- Full database schema
- Scoring documentation
- Product roadmap
- Report format examples
- Cloudflare deployment notes

## scripts/

Use for repeatable technical tasks such as:

- Report export scripts
- Data cleaning scripts
- Scoring test scripts
- Schema validation scripts

## assets/

Use for reusable output resources such as:

- Report templates
- UI templates
- Logo files
- Export templates

Do not add these until the skill needs them.

---

# Skill Safety Notes

Skills shape how Codex behaves, so keep them clean and trusted.

Use only Velox-approved skills in the repository.

Avoid downloading random third-party skills into the Velox project unless they are reviewed first.

Do not include secrets, passwords, API keys, tokens, or private credentials in SKILL.md files.

Do not let skills override the core project direction in AGENTS.md.

AGENTS.md remains the main Velox project brain. Skills are specialists.

---

# Final Astra Guidance

This Skills Pack gives Velox six specialist build modes:

1. Product thinking
2. UI design
3. Database structure
4. Scoring logic
5. Report generation
6. Cloudflare deployment

This is enough for the first serious build stage.

Do not create too many skills too early.

The right approach is:

**AGENTS.md = project brain**

**Skills = specialist operators**

**Codex = technical builder**

**Astra = strategic navigator**

Together, these create the first operating system for building Velox with discipline.

Simple first. Useful first. Scalable later.

