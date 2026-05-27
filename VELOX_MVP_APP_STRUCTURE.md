# Velox MVP App Structure

## 1. Purpose

This document defines the simplest structure for the first working Velox application.

The foundation repository is:

```text
velox-technical-foundation
```

This repository stores Velox strategy, documentation, Codex instructions, skills, and planning files.

The future working application should be called:

```text
velox-app
```

The purpose of `velox-app` is to prove the first useful Velox product loop before advanced systems are added.

Velox discipline:

```text
Simple first. Useful first. Scalable later.
```

---

## 2. First Useful Velox Loop

Velox MVP 1 should prove this simple flow:

```text
Add creator -> Enter metrics -> Score creator -> View profile -> Generate report
```

This loop proves that Velox can store creator information, understand basic performance data, calculate a simple Velox score, show a useful creator profile, and create a basic creator intelligence report.

---

## 3. Recommended App Folder Structure

Recommended future application structure:

```text
velox-app/
  AGENTS.md
  README.md
  package.json
  .env.example

  app/
    page.tsx
    dashboard/
      page.tsx
    creators/
      page.tsx
      new/
        page.tsx
      [id]/
        page.tsx
    scoring/
      page.tsx
    reports/
      page.tsx
      [id]/
        page.tsx
    settings/
      page.tsx

  components/
    layout/
      AppShell.tsx
      Sidebar.tsx
      PageHeader.tsx
    creators/
      CreatorForm.tsx
      CreatorTable.tsx
      CreatorMetricForm.tsx
      CreatorProfileSummary.tsx
    scoring/
      ScoreBadge.tsx
      ScoreBreakdown.tsx
    reports/
      CreatorReportPreview.tsx
      ReportSection.tsx
    ui/
      MetricCard.tsx
      StatusBadge.tsx
      EmptyState.tsx

  lib/
    mock-data.ts
    types.ts
    scoring/
      calculate-velox-score.ts
      score-labels.ts
      score-explanations.ts
    reports/
      create-creator-report.ts
      report-template.ts
    utils.ts

  docs/
    database-schema.md
    scoring-system.md
    report-template.md
```

---

## 4. First Pages and Screens

### Dashboard

The dashboard should show:

- Total creators
- Top Velox scores
- Fastest growing creators
- Recent reports
- Quick action to add a creator

### Creators

The creators page should show:

- Creator name
- Platform
- Niche
- Country
- Follower count
- Engagement rate
- Growth rate
- Velox score
- Status
- View profile action

### Add Creator

The add creator page should collect:

- Creator name
- Platform
- Profile URL
- Country
- City or region
- Niche or category
- Notes

### Enter Metrics

The metrics form should collect:

- Follower count
- Average views
- Average likes
- Average comments
- Average shares
- Posting frequency
- Engagement rate
- Growth rate

### Creator Profile

The creator profile should show:

- Creator overview
- Platform and profile link
- Location
- Niche
- Key metrics
- Velox score
- Score breakdown
- Strengths
- Risks
- Recommended next action
- Generate report button

### Scoring

The scoring page should explain:

- Growth Score
- Engagement Quality Score
- Consistency Score
- Brand Fit Score
- Monetization Potential Score
- Risk Score
- Overall Velox Score

### Reports

The reports page should show:

- Generated reports
- Creator name
- Report title
- Report date
- View report action

### Report Detail

The report detail page should show a clean creator intelligence report.

### Settings

The settings page should begin with simple placeholders:

- Project name
- Default country
- Default scoring weights
- Report branding
- Export preferences

---

## 5. First Components

Recommended first layout components:

- `AppShell`
- `Sidebar`
- `PageHeader`

Recommended first creator components:

- `CreatorForm`
- `CreatorTable`
- `CreatorMetricForm`
- `CreatorProfileSummary`

Recommended first scoring components:

- `ScoreBadge`
- `ScoreBreakdown`

Recommended first report components:

- `CreatorReportPreview`
- `ReportSection`

Recommended first shared UI components:

- `MetricCard`
- `StatusBadge`
- `EmptyState`

---

## 6. First Database Tables

Velox MVP 1 should start with a small database plan.

The app should use mock data first. These tables should be documented before live Supabase integration.

### creators

Purpose: stores the main creator profile.

Fields:

- `id`
- `creator_name`
- `platform`
- `profile_url`
- `country`
- `city`
- `niche`
- `status`
- `notes`
- `created_at`
- `updated_at`

### creator_metrics

Purpose: stores creator performance numbers.

Fields:

- `id`
- `creator_id`
- `follower_count`
- `average_views`
- `average_likes`
- `average_comments`
- `average_shares`
- `posting_frequency`
- `engagement_rate`
- `growth_rate`
- `recorded_at`
- `created_at`

### creator_scores

Purpose: stores Velox scoring results.

Fields:

- `id`
- `creator_id`
- `growth_score`
- `engagement_quality_score`
- `consistency_score`
- `brand_fit_score`
- `monetization_potential_score`
- `risk_score`
- `overall_velox_score`
- `score_label`
- `score_notes`
- `created_at`

### creator_reports

Purpose: stores generated creator intelligence reports.

Fields:

- `id`
- `creator_id`
- `report_title`
- `report_summary`
- `growth_analysis`
- `engagement_analysis`
- `brand_readiness`
- `monetization_opportunities`
- `risk_notes`
- `strategic_recommendation`
- `created_at`

---

## 7. First Scoring Logic Files

Recommended scoring files:

```text
lib/scoring/calculate-velox-score.ts
lib/scoring/score-labels.ts
lib/scoring/score-explanations.ts
```

### calculate-velox-score.ts

Purpose:

- Accept creator metrics
- Calculate dimension scores
- Calculate the overall Velox score
- Return score notes and next action

### score-labels.ts

Purpose:

- Convert numeric scores into simple labels

Initial labels:

- `85-100`: High Potential
- `70-84`: Strong Opportunity
- `55-69`: Developing
- `40-54`: Needs Support
- `Below 40`: Watch Carefully

### score-explanations.ts

Purpose:

- Explain why a score was given
- Recommend the next action
- Keep scoring clear for non-technical users

Simple MVP formula:

```text
Overall Velox Score =
Growth Score
+ Engagement Quality Score
+ Consistency Score
+ Brand Fit Score
+ Monetization Potential Score
- Risk Score
```

The final score should be normalized between:

```text
0 and 100
```

---

## 8. First Report Generation Files

Recommended report files:

```text
lib/reports/create-creator-report.ts
lib/reports/report-template.ts
components/reports/CreatorReportPreview.tsx
```

### create-creator-report.ts

Purpose:

- Convert creator data, metrics, and scores into report content
- Produce a basic creator intelligence report object

### report-template.ts

Purpose:

- Define the first report sections
- Keep report output consistent

### CreatorReportPreview.tsx

Purpose:

- Display the report on screen
- Keep the report readable and professional

First report sections:

- Creator Overview
- Key Metrics
- Velox Score
- Growth Analysis
- Engagement Analysis
- Brand Readiness
- Monetization Opportunities
- Risk Notes
- Strategic Recommendation

---

## 9. First Documentation Files

Recommended documentation files inside `velox-app/docs`:

```text
docs/database-schema.md
docs/scoring-system.md
docs/report-template.md
```

### database-schema.md

Purpose:

- Document the first tables
- Explain fields in simple language
- Prepare for future Supabase integration

### scoring-system.md

Purpose:

- Explain the first scoring formula
- Explain scoring labels
- Explain score limitations

### report-template.md

Purpose:

- Document the first creator intelligence report structure
- Keep reports consistent
- Prepare for later PDF or Markdown export

---

## 10. Build Sequence

Recommended first build order:

```text
1. Create the Next.js and Tailwind app shell.
2. Add sidebar navigation.
3. Create TypeScript types for creators, metrics, scores, and reports.
4. Create mock creator data.
5. Build the Creators table.
6. Build the Add Creator form.
7. Build the creator metrics form.
8. Add simple Velox scoring logic.
9. Build the Creator Profile page.
10. Add basic report generation from mock data.
11. Build the report preview page.
12. Add dashboard summary cards.
13. Document the first database schema.
14. Verify the full MVP loop with mock data.
```

---

## 11. What Should Not Be Built Yet

Velox MVP 1 should not start with:

- Automated TikTok scraping
- Advanced AI agents
- Payment systems
- Full campaign marketplace
- Complex brand simulation engine
- Full investor dashboard
- Mobile app
- Advanced authentication roles
- Large-scale data pipelines
- Automated social listening
- Cloudflare Workers
- Cloudflare R2
- Cloudflare Vectorize
- Cloudflare AI Gateway
- PDF export
- Live Supabase integration before the mock-data prototype works

These features can come later after the first useful Velox loop is working.

---

## 12. Approval Before App Code

No app code should be created until this MVP app structure is reviewed and approved.

This document is a planning artifact only.

The next step should be approval of the `velox-app` MVP structure before any working application files are created.

Velox discipline:

```text
Simple first. Useful first. Scalable later.
```
