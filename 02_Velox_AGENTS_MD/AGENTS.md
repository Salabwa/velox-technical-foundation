# Velox AGENTS.md

## Project Identity

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

Velox is being built to support creator discovery, creator scoring, campaign planning, brand matching, monetization strategy, and intelligence reporting.

The long-term vision is for Velox to become an intelligence layer for the creator economy, especially for emerging markets where high-potential creators are often discovered late or undervalued.

---

## Strategic Purpose

Velox helps brands, agencies, media teams, creator managers, funders, and creative industry builders identify high-potential creators before the wider market notices them.

The system should help answer questions such as:

- Which creators are growing fastest?
- Which creators have strong engagement quality?
- Which creators are brand-ready?
- Which creators are undervalued?
- Which creators are suitable for a campaign?
- What campaign outcome can be expected?
- What should be done next to help a creator monetize and scale?

Velox should not only display data. It should help users make better decisions.

---

## Build Philosophy

Build simple first. Useful first. Scalable later.

Avoid unnecessary complexity. Prioritize clean structure, readable code, and practical features that can be tested quickly.

Do not overbuild. Do not add advanced infrastructure unless the current task clearly requires it.

The first goal is to build a working prototype that demonstrates the Velox intelligence flow using mock data before connecting live databases, APIs, AI models, or Cloudflare infrastructure.

---

## Product Principles

Every Velox feature should serve at least one of these purposes:

1. Discover creators
2. Understand creator growth
3. Score creator potential
4. Match creators to campaigns or brands
5. Simulate likely campaign outcomes
6. Recommend monetization and scaling actions
7. Generate clear intelligence reports

If a feature does not support one of these purposes, question whether it belongs in the current version.

---

## Preferred Technical Stack

Use the following stack unless the user or project owner specifies otherwise:

- Frontend: Next.js / React
- Styling: Tailwind CSS
- Database: Supabase
- Authentication: Supabase Auth
- Hosting: Vercel or Cloudflare Pages
- Future infrastructure: Cloudflare Workers, R2, Vectorize, AI Gateway, Workers AI
- Charts and visualizations: Recharts
- Code storage: GitHub
- Project instructions: AGENTS.md

For Version 1, prioritize a clean mock-data prototype before database integration.

---

## Design Direction

Velox should feel premium, intelligent, clean, modern, strategic, and professional.

Use:

- Clean dashboard layouts
- Sidebar navigation
- Cards
- Tables
- Score badges
- Metric panels
- Creator profile sections
- Report-style pages
- Clear hierarchy
- Strong spacing
- Simple data visualizations
- Mobile-responsive layouts

Avoid:

- Overly playful design
- Cluttered screens
- Unnecessary animations
- Too many colors
- Confusing navigation
- Heavy effects that reduce clarity
- Overdesigned pages that slow implementation

The interface should feel like an intelligence dashboard, not a social media feed.

---

## Core Velox Modules

Velox should be built around these core modules:

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

## Version 1 Product Priority

The current priority is to build Velox Version 1 as a working prototype.

Version 1 should include:

1. Dashboard homepage
2. Creator database table
3. Add creator form
4. Creator profile page
5. Basic creator scoring system
6. Campaign simulation form
7. Report preview page
8. Admin notes section
9. Mock data
10. Clean navigation

Version 1 should avoid:

- Complex payment systems
- Too many user roles
- Mobile app development
- Advanced automation before the data model is clear
- Unnecessary AI features
- Premature Cloudflare infrastructure complexity

---

## Recommended App Navigation

The app should begin with this navigation structure:

- Dashboard
- Creators
- Scoring
- Campaign Simulation
- Reports
- Settings

Optional later navigation:

- Brands
- Opportunities
- Data Sources
- AI Insights
- Admin

---

## Recommended Folder Structure

Use this structure where appropriate:

```text
velox-creator-intelligence/
  AGENTS.md
  README.md
  package.json
  .env.example
  /app
    /dashboard
    /creators
    /creators/[id]
    /scoring
    /campaigns
    /reports
    /settings
  /components
    /layout
    /dashboard
    /creators
    /scoring
    /campaigns
    /reports
    /ui
  /lib
    scoring.ts
    mock-data.ts
    supabase.ts
    utils.ts
  /docs
    product-vision.md
    database-schema.md
    scoring-system.md
    deployment-roadmap.md
  /skills
    velox-product-architect/
    velox-ui-designer/
    velox-database-engineer/
    velox-scoring-system/
    velox-report-generator/
```

Adapt if the project framework requires a different structure, but keep the logic clean.

---

## Coding Rules

Follow these rules when working on Velox:

- Keep components reusable.
- Use clear file names.
- Keep business logic separate from UI where possible.
- Use mock data clearly labeled as mock data.
- Do not delete existing working code without explaining why.
- Do not introduce unnecessary dependencies.
- Do not hardcode secrets.
- Use environment variables for API keys and credentials.
- Keep pages readable and modular.
- Prioritize maintainability over cleverness.
- Add comments only where they improve understanding.
- Make changes in small, understandable steps.

When unsure, choose the simpler implementation.

---

## Database Rules

Use simple table structures first. Avoid complex relationships until the feature requires them.

Core tables planned for Velox:

- creators
- creator_scores
- campaigns
- campaign_simulations
- reports
- notes

Initial database work should be documented before implementation.

Do not connect Supabase until the mock-data prototype is working unless specifically instructed.

---

## Suggested Database Fields

### creators

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

### creator_scores

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

### campaigns

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

### campaign_simulations

- id
- campaign_id
- creator_id
- estimated_reach
- estimated_engagement
- estimated_conversion_potential
- risk_level
- recommendation
- created_at

### reports

- id
- report_title
- report_type
- creator_id
- campaign_id
- summary
- findings
- recommendations
- created_at

### notes

- id
- related_creator_id
- note_type
- note_content
- created_by
- created_at

---

## Creator Scoring Logic

The Velox scoring system should begin with six core dimensions:

1. Growth Velocity
2. Engagement Quality
3. Consistency
4. Niche Authority
5. Brand Fit
6. Monetization Readiness

Initial weighting:

- Growth Velocity: 20%
- Engagement Quality: 20%
- Consistency: 15%
- Niche Authority: 15%
- Brand Fit: 15%
- Monetization Readiness: 15%

The overall Velox Score should be easy to explain to a non-technical user.

Do not create a black-box score. Always provide a short explanation of why a creator received a score.

---

## AI Feature Rules

AI features should support clear product value. Do not add AI just because it is possible.

AI should help with:

- Creator analysis
- Score explanation
- Campaign recommendation
- Brand matching
- Report writing
- Risk detection
- Opportunity discovery

For early development, use mock AI outputs or simple rule-based logic before connecting real AI APIs.

When real AI APIs are added:

- Keep prompts organized.
- Do not expose API keys.
- Use environment variables.
- Log assumptions clearly.
- Keep outputs reviewable by a human.

---

## Cloudflare Usage Rules

Cloudflare is part of the Velox future infrastructure layer, but it should be introduced gradually.

Use Cloudflare Pages for hosting when appropriate.

Use Cloudflare Workers when Velox needs lightweight backend functions or secure API logic.

Use Cloudflare R2 when Velox needs object storage for reports, exports, screenshots, datasets, or creator media.

Use Cloudflare AI Gateway when Velox starts making regular AI model calls and needs cost control, rate limiting, logging, caching, retries, or model fallback.

Use Cloudflare Vectorize when Velox needs semantic search, creator memory, brand matching, or retrieval-based intelligence.

Do not add Cloudflare complexity before the prototype is working.

---

## Report Generator Rules

Velox reports should be clear, professional, and decision-focused.

A creator intelligence report should include:

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

Reports should be readable by non-technical users.

Avoid jargon unless clearly explained.

---

## UX Writing Rules

Use clear language.

Prefer:

- “Growth Score” instead of “Growth Velocity Index” unless explaining advanced scoring
- “Recommended Next Action” instead of “Strategic Intervention Output”
- “Brand Fit” instead of “Commercial Compatibility Matrix”
- “Campaign Simulation” instead of “Predictive Campaign Intelligence Engine”

Velox can be powerful without sounding complicated.

---

## Testing Rules

When creating or changing a feature, explain how to test it.

Testing notes should include:

1. Page or feature changed
2. Expected behavior
3. Mock data used
4. Any assumptions
5. Known limitations

Do not claim a feature is fully working if it has not been tested.

---

## Security Rules

Do not expose API keys.
Do not hardcode secrets.
Do not commit sensitive credentials.
Use `.env.example` for placeholder environment variables.
Use environment variables for real keys.
Do not store personal data unnecessarily.
Do not collect creator data without a clear purpose.

---

## Output Format When Completing Work

After completing a task, report the result in this format:

```markdown
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

Keep the report concise and useful.

---

## First Build Command Reference

When beginning the prototype, use this command:

```text
Create the initial Next.js app structure for Velox Creator Intelligence. Use Tailwind CSS. Create a clean dashboard layout with sidebar navigation for Dashboard, Creators, Scoring, Campaign Simulation, Reports, and Settings. Use mock data only for now. Follow the AGENTS.md instructions and report what files you created or edited.
```

---

## Final Instruction

Velox should be built with discipline.

The mission is not to build the biggest system immediately.

The mission is to build the clearest first version that proves Velox can discover, analyze, score, recommend, and report on creator opportunity.

Simple first. Useful first. Scalable later.

