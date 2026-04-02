# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Savoury Lab** project — a business asset repository for a food/beverage company (SavouryLab GmbH). It currently contains product catalogues, compliance documents, and partner materials. There is no source code, build system, or test suite yet.

## Folder Structure

- **Catalogues/** — Product catalogues (Crumzy, Fruzzle, Gummy Hug, Tarweeqa, ZEE)
- **IFCG/** — Food compliance and lab test reports (sweet potatoes, french fries — microbiological, pesticides, acrylamide)
- **Juhayna/** — Distribution partner materials (export catalogues, commercial offers, product images, packaging conditions)
- **Savourylab_Firma_Daten/** — Company registration documents (Betriebsnummer, Transparenzregister, USt-IdNr.)

## Operating Model: WAT Framework

This project follows the **WAT (Workflows, Agents, Tools)** architecture. AI handles reasoning/orchestration; deterministic scripts handle execution.

- **Workflows** (`workflows/`): Markdown SOPs defining objectives, inputs, tools to use, expected outputs, and edge-case handling
- **Tools** (`tools/`): Python scripts for deterministic execution (API calls, data transforms, file ops). Credentials live in `.env`
- **`.tmp/`**: Disposable intermediate/processing files

**Key principles:**
1. Check `tools/` for existing scripts before building new ones
2. When a tool fails: read the full error, fix the script, retest, then update the workflow with lessons learned
3. Don't create or overwrite workflows without asking the user first
4. Final deliverables go to cloud services (Google Sheets, Slides, etc.) — local files are for processing only

## Build / Test / Lint

No build, test, or lint commands exist. This will change as the web site and tooling are developed.
