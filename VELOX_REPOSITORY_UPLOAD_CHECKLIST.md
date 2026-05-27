# Velox Repository Upload Checklist

## Purpose

This checklist helps confirm that the Velox Technical Foundation folder is ready before uploading it to GitHub.

It is designed to prevent confusion around:

- Folder placement
- File names
- Markdown files
- GitHub-ready files
- Codex-ready instructions
- Root-level files
- Repository verification

Velox discipline:

**Simple first. Useful first. Scalable later.**

---

# 1. What This Checklist Is For

Before uploading Velox to GitHub, use this checklist to confirm that every folder and file is properly prepared.

This checklist is not for building the application yet.

It is for preparing the Velox foundation repository.

The current goal is:

```text
Organize the Velox brain before building the Velox body.
```

That means we are organizing:

```text
Planning documents
Codex instructions
README file
Command pack
Skill files
Skill index
Technical foundation documents
```

---

# 2. Main Folder to Upload

## Simple version

The main folder you are preparing is:

```text
VELOX PROJECT
```

Inside it, you should have your Velox foundation folders.

## Code/file-path version

```text
VELOX PROJECT/
```

Plain meaning:

Open the folder called `VELOX PROJECT`. This is the main folder that will eventually be uploaded to GitHub.

---

# 3. Main Folder Structure Checklist

Inside `VELOX PROJECT`, confirm that these folders exist:

```text
01_Velox_Technical_Foundation_Pack
02_Velox_AGENTS_MD
03_Velox_README_MD
04_Velox_Codex_Command_Pack
05_Velox_Codex_Skills
```

Checklist:

```text
[ ] 01_Velox_Technical_Foundation_Pack exists
[ ] 02_Velox_AGENTS_MD exists
[ ] 03_Velox_README_MD exists
[ ] 04_Velox_Codex_Command_Pack exists
[ ] 05_Velox_Codex_Skills exists
```

---

# 4. Folder 01: Technical Foundation Pack

## Folder name

```text
01_Velox_Technical_Foundation_Pack
```

## Files that should be inside

Minimum required file:

```text
Velox_Technical_Foundation_Pack.md
```

Optional reading/sharing file:

```text
Velox_Technical_Foundation_Pack.pdf
```

Checklist:

```text
[ ] Velox_Technical_Foundation_Pack.md is inside this folder
[ ] PDF version exists if needed for reading or sharing
[ ] The .md file opens correctly
[ ] The file name does not have extra words like copy, final, or version 2
```

## Simple explanation

This folder contains the main technical vision and system foundation for Velox.

It explains what Velox is, what it will become, and how the technical system is expected to work.

---

# 5. Folder 02: AGENTS.md

## Folder name

```text
02_Velox_AGENTS_MD
```

## Files that should be inside

Recommended file:

```text
AGENTS.md
```

Optional backup file:

```text
Velox_AGENTS.md
```

Checklist:

```text
[ ] AGENTS.md is inside this folder
[ ] The file is named exactly AGENTS.md
[ ] The file type is MD File
[ ] The content explains how Codex should behave when working on Velox
```

## Simple explanation

This file tells Codex how to act when working on the Velox project.

It is like the operating discipline for the AI coding assistant.

## Important future note

When we create the actual Velox app repository, `AGENTS.md` should also be copied to the main/root level of the repository.

Code/file-path version:

```text
VELOX PROJECT/AGENTS.md
```

Plain meaning:

Later, we will place a copy of `AGENTS.md` directly inside the main project folder, not only inside the `02_Velox_AGENTS_MD` folder.

---

# 6. Folder 03: README.md

## Folder name

```text
03_Velox_README_MD
```

## Files that should be inside

Recommended file:

```text
README.md
```

Optional backup file:

```text
Velox_README.md
```

Checklist:

```text
[ ] README.md is inside this folder
[ ] The file is named exactly README.md
[ ] The file type is MD File
[ ] The content explains what Velox is
[ ] The content explains who Velox is for
[ ] The content explains the repository structure
```

## Simple explanation

This file explains Velox to anyone who opens the GitHub repository.

It is the front-door explanation of the project.

## Important future note

GitHub automatically shows a root-level `README.md`.

So later, a copy should also be placed directly inside the main project folder.

Code/file-path version:

```text
VELOX PROJECT/README.md
```

Plain meaning:

Later, we will place a copy of `README.md` directly inside the main project folder so GitHub can display it automatically.

---

# 7. Folder 04: Codex Command Pack

## Folder name

```text
04_Velox_Codex_Command_Pack
```

## Files that should be inside

Recommended file:

```text
Velox_Codex_Command_Pack.md
```

Optional quick-start file:

```text
Velox_Codex_Command_Quick_Start.md
```

Optional PDF version:

```text
Velox_Codex_Command_Pack.pdf
```

Checklist:

```text
[ ] Velox_Codex_Command_Pack.md is inside this folder
[ ] The file type is MD File
[ ] The file contains prompts and commands for Codex
[ ] Any PDF version is only treated as a reading/sharing version
```

## Simple explanation

This folder contains the command prompts you can give Codex when building Velox.

It is your command manual.

---

# 8. Folder 05: Codex Skills

## Folder name

```text
05_Velox_Codex_Skills
```

## Files and folders that should be inside

Inside this folder, you should have:

```text
Velox_Codex_Skills_Pack.md
VELOX_SKILLS_INDEX.md
SKILLS
```

Checklist:

```text
[ ] Velox_Codex_Skills_Pack.md is inside this folder
[ ] VELOX_SKILLS_INDEX.md is inside this folder
[ ] SKILLS folder is inside this folder
[ ] File names are clean and readable
[ ] Both .md files open correctly
```

## Simple explanation

This folder contains the Velox skill system for Codex.

The skills pack explains the overall skill system.

The skills index explains when to use each skill.

The `SKILLS` folder contains the individual skill folders.

---

# 9. Inside the SKILLS Folder

## Folder name

```text
SKILLS
```

Inside `SKILLS`, confirm these six folders exist:

```text
velox-product-architect
velox-ui-designer
velox-database-engineer
velox-scoring-system
velox-report-generator
velox-cloudflare-deployment
```

Checklist:

```text
[ ] velox-product-architect folder exists
[ ] velox-ui-designer folder exists
[ ] velox-database-engineer folder exists
[ ] velox-scoring-system folder exists
[ ] velox-report-generator folder exists
[ ] velox-cloudflare-deployment folder exists
```

---

# 10. Inside Each Individual Skill Folder

Each skill folder must contain one file named exactly:

```text
SKILL.md
```

Checklist:

```text
[ ] velox-product-architect contains SKILL.md
[ ] velox-ui-designer contains SKILL.md
[ ] velox-database-engineer contains SKILL.md
[ ] velox-scoring-system contains SKILL.md
[ ] velox-report-generator contains SKILL.md
[ ] velox-cloudflare-deployment contains SKILL.md
```

## Important naming rule

Correct:

```text
SKILL.md
```

Incorrect:

```text
velox_product_architect_skill.md
velox_ui_designer_SKILL.md
SKILL.md.md
SKILL.txt
skill.md
```

## Simple explanation

The folder name tells Codex which skill it is.

The file name should always be:

```text
SKILL.md
```

Example:

Simple version:

```text
Open velox-product-architect.
Inside it, place SKILL.md.
```

Code/file-path version:

```text
SKILLS/velox-product-architect/SKILL.md
```

---

# 11. Full Correct Structure

## Simple version

Your full structure should look like this:

```text
VELOX PROJECT
  01_Velox_Technical_Foundation_Pack
    Velox_Technical_Foundation_Pack.md

  02_Velox_AGENTS_MD
    AGENTS.md

  03_Velox_README_MD
    README.md

  04_Velox_Codex_Command_Pack
    Velox_Codex_Command_Pack.md

  05_Velox_Codex_Skills
    Velox_Codex_Skills_Pack.md
    VELOX_SKILLS_INDEX.md
    SKILLS
      velox-product-architect
        SKILL.md
      velox-ui-designer
        SKILL.md
      velox-database-engineer
        SKILL.md
      velox-scoring-system
        SKILL.md
      velox-report-generator
        SKILL.md
      velox-cloudflare-deployment
        SKILL.md
```

## Code/file-path version

```text
VELOX PROJECT/
  01_Velox_Technical_Foundation_Pack/
    Velox_Technical_Foundation_Pack.md

  02_Velox_AGENTS_MD/
    AGENTS.md

  03_Velox_README_MD/
    README.md

  04_Velox_Codex_Command_Pack/
    Velox_Codex_Command_Pack.md

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

# 12. Markdown vs PDF Rule

Use this simple rule:

```text
Markdown .md = for GitHub, Codex, and AI agents
PDF = for humans to read and share
```

Before GitHub upload, prioritize:

```text
.md files
```

PDF files are optional.

They are useful for reading, sending, printing, or presenting, but Codex works better with Markdown.

Checklist:

```text
[ ] Main working files are saved as .md
[ ] PDF files are optional and not treated as the main source
[ ] No important file exists only as PDF
```

---

# 13. File Naming Cleanliness Checklist

Before uploading, confirm:

```text
[ ] File names do not include random download names
[ ] File names do not include unnecessary underscores unless intentional
[ ] Important files use clear names
[ ] README.md is named correctly
[ ] AGENTS.md is named correctly
[ ] SKILL.md files are named correctly
[ ] No file accidentally ends with .txt
[ ] No file accidentally ends with .md.md
```

Recommended clean names:

```text
Velox_Technical_Foundation_Pack.md
AGENTS.md
README.md
Velox_Codex_Command_Pack.md
Velox_Codex_Skills_Pack.md
VELOX_SKILLS_INDEX.md
SKILL.md
```

---

# 14. GitHub Upload Readiness Checklist

Before uploading to GitHub, confirm:

```text
[ ] All five main folders exist
[ ] Each folder contains the correct .md file
[ ] The SKILLS folder contains six skill folders
[ ] Each skill folder contains SKILL.md
[ ] All files open correctly
[ ] No required file is missing
[ ] No required file is only available as PDF
[ ] The structure is easy to understand
[ ] The project still follows: Simple first. Useful first. Scalable later.
```

---

# 15. Recommended GitHub Repository Name

Recommended repository name:

```text
velox-technical-foundation
```

Alternative:

```text
velox-foundation
```

Avoid names that are too broad at this stage, such as:

```text
velox-app
velox-production
velox-final
```

Why:

At this stage, we are uploading the foundation system, not the full working application yet.

---

# 16. First GitHub Commit Message

Use this as your first commit message:

```text
Add Velox technical foundation structure
```

Optional longer description:

```text
Added the Velox technical foundation documents, Codex instructions, command pack, skills pack, skills index, and individual SKILL.md files for the Velox build system.
```

---

# 17. Codex Verification Prompt After Upload

After uploading to GitHub, ask Codex:

```text
Codex, inspect the Velox technical foundation repository.

Do not modify anything yet.

Verify that the repository contains these folders:

1. 01_Velox_Technical_Foundation_Pack
2. 02_Velox_AGENTS_MD
3. 03_Velox_README_MD
4. 04_Velox_Codex_Command_Pack
5. 05_Velox_Codex_Skills

Then verify that:

- Velox_Technical_Foundation_Pack.md exists
- AGENTS.md exists
- README.md exists
- Velox_Codex_Command_Pack.md exists
- Velox_Codex_Skills_Pack.md exists
- VELOX_SKILLS_INDEX.md exists
- The SKILLS folder exists
- Each individual skill folder exists
- Each individual skill folder contains SKILL.md

Report what is correct, what is missing, and whether the repository is ready for the next Velox build step.
```

---

# 18. Expected Codex Response

Codex should respond with something like:

```text
Velox Repository Verification Report

Main folders found:
- 01_Velox_Technical_Foundation_Pack
- 02_Velox_AGENTS_MD
- 03_Velox_README_MD
- 04_Velox_Codex_Command_Pack
- 05_Velox_Codex_Skills

Core files found:
- Velox_Technical_Foundation_Pack.md
- AGENTS.md
- README.md
- Velox_Codex_Command_Pack.md
- Velox_Codex_Skills_Pack.md
- VELOX_SKILLS_INDEX.md

Skill folders found:
- velox-product-architect
- velox-ui-designer
- velox-database-engineer
- velox-scoring-system
- velox-report-generator
- velox-cloudflare-deployment

SKILL.md files found in each folder.

Status:
The Velox technical foundation repository is correctly structured and ready for the next build step.
```

---

# 19. What Comes After Upload

After the repository is uploaded and verified, the next build step should be:

```text
Create root-level README.md and AGENTS.md
```

This means:

- Keep the archive copies in their folders
- Also place working copies at the top level of the repository

Why:

GitHub reads the root-level `README.md`.

Codex works better when `AGENTS.md` is easy to find at the root level.

---

# 20. Final Upload Decision

Before uploading, answer these questions:

```text
[ ] Is this a foundation repository, not the app repository?
[ ] Are all files saved as .md where needed?
[ ] Are the six SKILL.md files correctly named?
[ ] Is the folder structure clean?
[ ] Do I understand where each file belongs?
[ ] Am I ready to upload the first clean version to GitHub?
```

If all answers are yes, the repository is ready.

---

# 21. Export Recommendation

Best working format:

```text
.md
```

Recommended file name:

```text
VELOX_REPOSITORY_UPLOAD_CHECKLIST.md
```

Best placement:

Simple version:

```text
Place this directly inside the main VELOX PROJECT folder.
```

Code/file-path version:

```text
VELOX PROJECT/VELOX_REPOSITORY_UPLOAD_CHECKLIST.md
```

Why:

This checklist should be easy to find before upload. It should sit at the main project level as a final preparation guide.
