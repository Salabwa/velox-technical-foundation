# Velox Creator Intelligence

Velox is an AI-powered creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

Velox is designed to help brands, agencies, media teams, funders, creator managers, and creative industry builders identify high-potential creators before the wider market fully notices them.

---

## Mission

The mission of Velox is to turn creator data into clear intelligence that supports better decisions.

Velox helps users answer questions such as:

- Which creators are growing fastest?
- Which creators have strong engagement quality?
- Which creators are brand-ready?
- Which creators are undervalued?
- Which creators are suitable for a campaign?
- What campaign outcome can be expected?
- What should be done next to help a creator monetize and scale?

Velox is not just a dashboard. It is a decision-support system for the creator economy.

---

## Core Vision

Velox exists to discover potential early.

In many emerging markets, talented creators are often identified late, undervalued, or poorly positioned for monetization. Velox aims to provide a structured intelligence layer that helps analyze creators, understand their growth patterns, and recommend practical next steps for scaling their influence and income.

The long-term vision is for Velox to become an infrastructure layer for creator discovery, creator scoring, campaign planning, brand matching, monetization strategy, and intelligence reporting.

---

## Core Features

The first version of Velox is focused on proving the creator intelligence flow.

### Version 1 Features

- Dashboard overview
- Creator database
- Creator profile pages
- Creator scoring system
- Campaign simulation
- Report preview pages
- Admin notes
- Mock data for early testing
- Clean navigation and layout

### Future Features

- Supabase database integration
- User authentication
- Brand matching engine
- AI-powered creator analysis
- AI-generated creator intelligence reports
- Campaign prediction logic
- Cloudflare AI Gateway integration
- Cloudflare R2 file storage
- Cloudflare Vectorize for semantic search and creator memory
- Exportable PDF reports
- Advanced analytics dashboard

---

## Product Modules

Velox is structured around the following core modules:

1. Dashboard Overview
2. Creator Database
3. Creator Profile
4. Creator Scoring
5. Campaign Simulation
6. Brand Match
7. Report Generator
8. Admin Notes
9. Settings

Each module should be built step by step, starting with mock data before moving into live database and AI integration.

---

## Recommended Tech Stack

The preferred Velox stack is:

- Frontend: Next.js / React
- Styling: Tailwind CSS
- Database: Supabase
- Authentication: Supabase Auth
- Hosting: Vercel or Cloudflare Pages
- Charts and visualizations: Recharts
- Code storage: GitHub
- Project instructions: AGENTS.md
- Future infrastructure: Cloudflare Workers, R2, Vectorize, AI Gateway, Workers AI

The current build priority is a clean mock-data prototype before adding advanced backend infrastructure.

---

## Build Philosophy

Velox follows one core build principle:

**Simple first. Useful first. Scalable later.**

This means:

- Build the working prototype first.
- Use mock data before live integrations.
- Avoid unnecessary complexity.
- Build one feature at a time.
- Keep the code clean and readable.
- Add AI only where it creates clear product value.
- Add Cloudflare infrastructure only when the prototype is ready for scale.

---

## Project Structure

Recommended repository structure:

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

---

## Creator Scoring System

Velox scores creators across six core dimensions:

1. Growth Velocity
2. Engagement Quality
3. Consistency
4. Niche Authority
5. Brand Fit
6. Monetization Readiness

Initial weighting:

| Dimension | Weight |
|---|---:|
| Growth Velocity | 20% |
| Engagement Quality | 20% |
| Consistency | 15% |
| Niche Authority | 15% |
| Brand Fit | 15% |
| Monetization Readiness | 15% |

The overall Velox Score should always be easy to explain to a non-technical user.

Velox should not create black-box scores. Every score should include a simple explanation.

---

## Development Approach

The first development phase should use mock data to demonstrate the full intelligence flow:

1. Add or view a creator.
2. Review creator metrics.
3. Calculate a Velox Score.
4. Simulate a campaign.
5. Generate a recommendation.
6. Preview a report.

After this flow works, the system can be connected to Supabase and later expanded with AI and Cloudflare infrastructure.

---

## AGENTS.md

This repository should include an `AGENTS.md` file in the root directory.

The `AGENTS.md` file provides project-specific instructions for Codex and other AI coding agents working inside the Velox repository.

It defines:

- Project identity
- Product purpose
- Technical stack
- Design direction
- Coding rules
- Database rules
- AI feature rules
- Cloudflare usage rules
- Testing expectations
- Output format after completing tasks

Codex should follow `AGENTS.md` before making major changes to the project.

---

## Setup Instructions

Setup instructions will be finalized after the initial Next.js prototype is created.

Expected setup flow:

```bash
# Clone the repository
git clone <repository-url>

# Move into the project folder
cd velox-creator-intelligence

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open the local development URL in the browser.

---

## Environment Variables

The project should include a `.env.example` file for placeholder variables.

Example:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
```

Do not commit real API keys or secret credentials.

---

## Roadmap

### Phase 1: Prototype

- Create Next.js app structure
- Build dashboard layout
- Add creator database page
- Add creator profile page
- Add scoring logic
- Add campaign simulation page
- Add report preview page
- Use mock data

### Phase 2: Database Integration

- Set up Supabase
- Create database schema
- Connect creator records
- Connect scoring records
- Add admin notes
- Add authentication

### Phase 3: Intelligence Layer

- Add AI-assisted creator analysis
- Add score explanations
- Add campaign recommendation logic
- Add report generation prompts
- Add risk and opportunity notes

### Phase 4: Cloudflare Infrastructure

- Deploy using Cloudflare Pages or Vercel
- Add Cloudflare Workers for backend logic where useful
- Add Cloudflare R2 for file storage
- Add Cloudflare AI Gateway for AI usage control
- Add Cloudflare Vectorize for semantic search and creator memory

### Phase 5: Advanced Product Expansion

- Brand matching engine
- Creator opportunity marketplace
- Exportable PDF reports
- Team accounts
- Campaign history tracking
- Creator performance benchmarking
- Africa-focused creator intelligence datasets

---

## Current Status

Velox is currently in the foundation and prototype planning stage.

The immediate priority is to create a working Version 1 prototype using mock data.

---

## Contribution and Build Rules

Anyone working on Velox should follow these rules:

- Read `AGENTS.md` before making project changes.
- Keep the implementation simple.
- Build one feature at a time.
- Do not introduce unnecessary dependencies.
- Do not expose secrets or API keys.
- Use mock data until the prototype flow is working.
- Keep UI clean, professional, and easy to understand.
- Explain what changed after each development task.

---

## Strategic Positioning

Velox is positioned as an intelligence system for the creator economy.

Its value is not only in storing creator data, but in helping users understand creator potential, campaign fit, monetization readiness, and strategic next steps.

The real power of Velox is this:

**Velox helps discover potential before the market has fully priced it.**

---

## License

License details to be added.

---

## Project Owner

Velox is being developed as a creator intelligence initiative led by Cyrus Kawalya, with Astra supporting strategy, product architecture, and build direction.

