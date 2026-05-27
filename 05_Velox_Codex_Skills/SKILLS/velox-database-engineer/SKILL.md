---
name: velox-database-engineer
description: Use this skill when designing, documenting, preparing, or implementing Velox database structures, Supabase tables, TypeScript data types, relationships, mock-data alignment, data validation, or migration planning. Do not use this skill for UI styling, product strategy, deployment, or report writing unless database structure is the main task.
---

# Velox Database Engineer Skill

## Purpose

This skill helps Codex design and prepare clean database structures for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

The database should support creator discovery, scoring, campaign simulations, reports, admin notes, and future AI-powered intelligence workflows.

---

## Core Database Principle

Start simple. Keep the schema understandable. Avoid complex relationships until the product requires them.

Do not connect live Supabase until the mock-data prototype works unless specifically instructed.

The first Velox prototype should work with mock data before moving into live database integration.

---

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
- Create seed data
- Review data quality needs
- Plan row-level security
- Prepare database integration without breaking mock data

---

## Core Tables

Start with these tables:

1. creators
2. creator_scores
3. campaigns
4. campaign_simulations
5. reports
6. notes

These tables should support the first Velox intelligence flow:

1. Store creator information
2. Calculate and store creator scores
3. Define campaigns
4. Simulate creator-campaign fit
5. Generate reports
6. Add human/internal notes

---

## Table: creators

### Purpose

Stores the main creator profile and performance information.

### Suggested Fields

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

### Notes

The creator record should be the central object in Velox.

Do not overload the creators table with every possible metric. Add specialized tables later if detailed platform history, content history, or campaign history becomes necessary.

---

## Table: creator_scores

### Purpose

Stores Velox scoring results for each creator.

### Suggested Fields

- id
- creator_id
- growth_score
- engagement_score
- consistency_score
- niche_authority_score
- brand_fit_score
- monetization_readiness_score
- overall_velox_score
- score_label
- score_notes
- created_at

### Notes

Scores should remain explainable.

Do not store only the final score. Store the dimension scores and notes so users can understand why a creator received a specific rating.

---

## Table: campaigns

### Purpose

Stores campaign information for simulation and matching.

### Suggested Fields

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

### Notes

Campaigns should begin simple. Later, campaign records can be expanded to include objectives, KPIs, deliverables, campaign status, and actual performance outcomes.

---

## Table: campaign_simulations

### Purpose

Stores simulated campaign outcomes between a campaign and a creator.

### Suggested Fields

- id
- campaign_id
- creator_id
- estimated_reach
- estimated_engagement
- estimated_conversion_potential
- risk_level
- brand_fit_rating
- recommendation
- suggested_next_action
- created_at

### Notes

The first version can use rule-based logic. Later, simulation results can be improved with AI and historical campaign performance data.

---

## Table: reports

### Purpose

Stores creator intelligence reports and campaign intelligence reports.

### Suggested Fields

- id
- report_title
- report_type
- creator_id
- campaign_id
- summary
- findings
- recommendations
- risks
- next_actions
- created_at

### Notes

Reports should be structured enough to generate professional previews and later PDF exports.

Do not treat reports as random text blobs only. Store important sections separately where useful.

---

## Table: notes

### Purpose

Stores internal admin notes and human observations.

### Suggested Fields

- id
- related_creator_id
- related_campaign_id
- note_type
- note_content
- created_by
- created_at

### Notes

Human intelligence matters. Admin notes allow Velox to capture context that raw metrics may miss.

Examples:

- Creator has strong offline influence.
- Creator has brand safety concerns.
- Creator is promising but needs content packaging.
- Creator should be watched for 30 days.

---

## Optional Future Tables

Do not build these immediately unless requested.

Future tables may include:

- brands
- users
- teams
- creator_platform_metrics
- creator_content_posts
- campaign_results
- brand_matches
- ai_insights
- data_sources
- report_exports
- audit_logs

These should come after Version 1 proves value.

---

## TypeScript Guidance

Create clear TypeScript types or interfaces for:

- Creator
- CreatorScore
- Campaign
- CampaignSimulation
- Report
- Note

Recommended file:

```text
/lib/types.ts
```

or, if the project grows:

```text
/types/creator.ts
/types/campaign.ts
/types/report.ts
```

Keep names simple and predictable.

---

## Mock Data Alignment

Mock data should match the future database structure as much as possible.

Recommended mock data file:

```text
/lib/mock-data.ts
```

Mock data should include:

- At least six creators
- Different niches
- Different platforms
- Different score levels
- At least two campaigns
- At least two campaign simulations
- At least two report examples
- Clear notes and recommendations

If mock data and schema drift apart, update the documentation or mock data to stay aligned.

---

## Supabase Preparation Guidance

When preparing Supabase:

1. Create `/lib/supabase.ts`
2. Add `.env.example` placeholders
3. Create TypeScript interfaces
4. Document schema in `/docs/database-schema.md`
5. Keep mock data working
6. Avoid hardcoding credentials
7. Do not expose service role keys in frontend code

Recommended `.env.example` placeholders:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Do not add real values to `.env.example`.

---

## Relationship Rules

Suggested basic relationships:

- creators can have many creator_scores
- creators can have many campaign_simulations
- campaigns can have many campaign_simulations
- creators can have many reports
- campaigns can have many reports
- creators can have many notes
- campaigns can have many notes

Keep relationships simple in Version 1.

---

## Data Quality Rules

Velox intelligence depends on clean data.

Plan for fields that help evaluate data quality:

- missing metrics
- uncertain metrics
- manually entered metrics
- last updated date
- source of data

Do not pretend uncertain data is verified.

If the data source is unclear, label it clearly.

---

## Security Guidance

Do not expose service role keys in frontend code.
Do not commit secrets.
Use environment variables.
Use `.env.example` only for placeholders.
Plan row-level security before handling real user or creator data.
Do not store unnecessary personal data.
Do not collect creator data without a clear purpose.

---

## Row-Level Security Planning

When Supabase is introduced, consider row-level security policies for:

- User-owned data
- Team-owned data
- Admin-only records
- Public vs private creator records
- Report visibility
- Notes visibility

Do not implement complex RLS until user roles are clear.

Document the intended access model first.

---

## Migration Guidance

If migrations are needed later:

- Keep migrations small
- Name migrations clearly
- Document what changed
- Avoid destructive changes without backup
- Keep schema documentation updated

Do not make schema changes silently.

---

## Database Documentation Guidance

When updating `/docs/database-schema.md`, include:

1. Table name
2. Purpose
3. Fields
4. Suggested data type
5. Required or optional
6. Relationship notes
7. Future expansion notes

Make the documentation easy for a non-expert to understand.

---

## Relationship With AGENTS.md

AGENTS.md remains the main Velox project brain.

This skill should support AGENTS.md, not replace it.

If there is a conflict between this skill and AGENTS.md, follow AGENTS.md and report the conflict.

---

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

---

## Final Guidance

The database should make Velox easier to reason about, not harder.

A clean schema is the foundation for reliable scoring, reports, AI insights, and future scale.

Simple first. Useful first. Scalable later.

