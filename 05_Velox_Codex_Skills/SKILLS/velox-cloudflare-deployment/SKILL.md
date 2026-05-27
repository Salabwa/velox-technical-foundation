---
name: velox-cloudflare-deployment
description: Use this skill when planning or preparing Velox deployment, Cloudflare Pages hosting, Workers backend logic, R2 storage, AI Gateway cost control, Vectorize semantic search, Workers AI, environment variables, or staged infrastructure decisions. Do not use this skill for UI design, scoring formulas, report writing, or database schema unless Cloudflare deployment is the main task.
---

# Velox Cloudflare Deployment Skill

## Purpose

This skill helps Codex plan and prepare Cloudflare infrastructure for Velox Creator Intelligence.

Velox is an AI creator intelligence system that discovers emerging creators, analyzes their growth, simulates campaign outcomes, and recommends how to monetize and scale them.

Cloudflare is part of the Velox scale layer, but it should be introduced gradually and only when it solves a clear need.

---

## Core Cloudflare Principle

Do not add Cloudflare complexity before the Velox prototype is working.

Use Cloudflare only when it helps with a clear hosting, storage, backend, AI-control, security, performance, or scaling need.

Cloudflare should make Velox stronger, faster, safer, and more cost-aware — not more complicated too early.

---

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
- Create staged deployment plans
- Compare Vercel vs Cloudflare Pages for Velox
- Prepare future AI infrastructure control

---

## Cloudflare Roadmap for Velox

Introduce Cloudflare in stages.

Do not jump directly into every Cloudflare service.

---

## Stage 1: Hosting With Cloudflare Pages

Use Cloudflare Pages when Velox needs simple frontend hosting.

Good for:

- Hosting the Next.js frontend
- Connecting GitHub
- Preview deployments
- Production deployment
- Global performance
- Basic deployment workflow

Do not overconfigure hosting during the first prototype.

The first goal is simply to get Velox online safely.

---

## Stage 2: Backend Logic With Cloudflare Workers

Use Cloudflare Workers when Velox needs lightweight backend logic.

Good for:

- API endpoints
- Secure server-side processing
- Request handling
- Small data utilities
- Webhooks
- Rate-limited operations
- Lightweight scoring helpers if needed later

Do not move all backend logic to Workers too early.

For Version 1, keep backend logic simple and mostly inside the app unless a Worker clearly solves a problem.

---

## Stage 3: File Storage With Cloudflare R2

Use Cloudflare R2 when Velox needs scalable object storage.

Good for:

- PDF reports
- Creator media
- Screenshots
- CSV uploads
- Dataset archives
- Exported files
- Report attachments

Do not add R2 until Velox has real file workflows.

For early prototype work, use local placeholders or simple app-level structures.

---

## Stage 4: AI Control With Cloudflare AI Gateway

Use Cloudflare AI Gateway when Velox starts making frequent AI model calls.

Good for:

- AI cost tracking
- Rate limiting
- Caching
- Retries
- Model fallback
- Observability
- Monitoring AI traffic

This is important for Velox because the product may eventually use AI for:

- Creator analysis
- Score explanations
- Report generation
- Brand matching
- Campaign recommendations
- Risk detection

Do not add AI Gateway before AI calls exist.

Plan it first, implement it when AI usage becomes real.

---

## Stage 5: Semantic Search and Memory With Cloudflare Vectorize

Use Cloudflare Vectorize when Velox needs semantic creator search or AI memory.

Good for:

- Similar creator search
- Brand-to-creator matching
- Retrieval-based reports
- Creator intelligence memory
- Searching past campaign reports
- Finding creators by meaning, not only keywords

Do not add Vectorize before the core creator database and scoring system are working.

Vectorize becomes valuable when Velox has enough text, notes, reports, and creator profiles to search intelligently.

---

## Stage 6: Serverless AI With Workers AI

Use Workers AI for selected AI tasks when useful.

Good for:

- Lightweight inference
- Classification
- Embeddings
- Experiments at the edge
- Cost-aware AI tasks

Do not replace the main AI plan with Workers AI unless the task fits well.

Use it selectively.

---

## What Not to Do Too Early

Do not add the following before the prototype is stable:

- Full Workers architecture
- R2 storage
- AI Gateway
- Vectorize
- Workers AI
- Complex Cloudflare Access rules
- Advanced caching strategies
- Multi-region infrastructure planning
- Complex edge routing

These are powerful later, but distracting too early.

---

## Recommended Velox Infrastructure Order

Follow this order:

1. Build local prototype with mock data
2. Store code in GitHub
3. Deploy simple frontend to Vercel or Cloudflare Pages
4. Connect Supabase when prototype flow works
5. Add AI only where product value is clear
6. Add AI Gateway when AI usage needs control
7. Add R2 when reports/files need scalable storage
8. Add Vectorize when semantic search and memory become valuable
9. Add Workers when backend tasks need edge execution

---

## Cloudflare Pages Guidance

When preparing Cloudflare Pages documentation, include:

- GitHub repository connection
- Build command
- Output directory
- Environment variables
- Preview deployment process
- Production deployment process
- Rollback notes

Possible build command for a Next.js app may depend on the project configuration.

Do not guess final deployment settings until the app structure exists.

Document placeholders first.

---

## Environment Variable Guidance

Use `.env.example` for placeholders.

Never commit real credentials.

Possible Cloudflare placeholders:

```bash
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_R2_BUCKET=
CLOUDFLARE_VECTORIZE_INDEX=
CLOUDFLARE_AI_GATEWAY_ID=
```

Possible related AI placeholders:

```bash
OPENAI_API_KEY=
AI_GATEWAY_BASE_URL=
```

Do not add real values to `.env.example`.

---

## Security Guidance

Do not expose API keys.
Do not hardcode credentials.
Do not commit Cloudflare tokens.
Use environment variables.
Use least-privilege API tokens where possible.
Do not expose service keys in frontend code.
Document what secrets are required and where they should be configured.

---

## AI Gateway Planning Guidance

When planning AI Gateway, document:

1. Which AI provider Velox is using
2. Which features will call AI
3. Expected request volume
4. Whether caching is useful
5. Rate limiting needs
6. Logging and observability needs
7. Fallback model plan
8. Cost monitoring approach

Do not route AI calls through AI Gateway until there are real AI calls to control.

---

## R2 Planning Guidance

When planning R2 storage, document:

1. What files will be stored
2. Expected file types
3. Bucket naming plan
4. Access rules
5. Upload flow
6. Download/export flow
7. Retention policy

For Velox, likely file types include:

- PDF reports
- CSV imports
- creator media references
- screenshots
- exported datasets

Do not store unnecessary personal data.

---

## Vectorize Planning Guidance

When planning Vectorize, document:

1. What text will be embedded
2. How embeddings will be created
3. What users will search
4. How search results will be filtered
5. How creator matches will be explained
6. How old or inaccurate data will be handled

Possible searchable content:

- Creator bios
- Admin notes
- Report summaries
- Campaign briefs
- Brand requirements
- Niche descriptions
- Risk notes

Do not add semantic search before the regular database is useful.

---

## Workers Planning Guidance

When planning Workers, document:

1. What endpoint or function is needed
2. Why it should run on Cloudflare Workers
3. What data it handles
4. What secrets it needs
5. What response it returns
6. How it will be tested

Use Workers for clear backend tasks, not because they sound advanced.

---

## Vercel vs Cloudflare Pages Guidance

If asked to choose between Vercel and Cloudflare Pages:

- Vercel may be simpler for early Next.js deployment.
- Cloudflare Pages may be stronger when Velox is moving toward Cloudflare’s wider infrastructure.

For early prototype, choose whichever gets the app online with least friction.

For long-term infrastructure control, Cloudflare becomes more attractive because of Pages, Workers, R2, Vectorize, AI Gateway, and Workers AI.

Do not turn deployment choice into a blocker.

---

## Deployment Documentation Template

When creating deployment documentation, include:

```markdown
# Velox Deployment Notes

## Deployment Platform
-

## Repository
-

## Build Command
-

## Output Directory
-

## Environment Variables
-

## Preview Deployment Steps
-

## Production Deployment Steps
-

## Rollback Notes
-

## Known Limitations
-
```

---

## Relationship With AGENTS.md

AGENTS.md remains the main Velox project brain.

This skill should support AGENTS.md, not replace it.

If there is a conflict between this skill and AGENTS.md, follow AGENTS.md and report the conflict.

---

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

---

## Final Guidance

Cloudflare is a power layer, not the starting point for everything.

For Velox, the correct path is:

Prototype first. Database second. AI third. Cloudflare scale layer after the value is clear.

Simple first. Useful first. Scalable later.

