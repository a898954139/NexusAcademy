# Nexus Market Analysis Skill Design

Date: 2026-04-08
Skill: `nexus-market-analysis`

## Purpose

Create a reusable market-analysis skill that applies Nexus Academy's structure-liquidity-execution framework across markets, with default emphasis on gold / DXY / indices while remaining generalizable.

## Goals

- Standardize market analysis output
- Separate bias from actionability
- Force HTF -> LTF reasoning
- Normalize chart-reading and lesson-style outputs
- Build in no-trade discipline and confirmation / invalidation logic

## Scope

The skill should trigger for:
- market analysis requests
- chart / screenshot interpretation
- price-action and key-level questions
- SMC / ICT style explanation requests
- lesson-style market breakdowns

## File structure

```txt
nexus-market-analysis/
├── SKILL.md
└── references/
    ├── framework.md
    ├── output-templates.md
    └── glossary.md
```

## Design decisions

### 1. Keep SKILL.md concise
Put only trigger conditions, workflow, output expectations, guardrails, and reference routing into SKILL.md.

### 2. Store method details in framework.md
Keep the primary decision flow, market phases, no-trade rules, confirmation / invalidation logic, and reporting discipline there.

### 3. Separate output templates
Use dedicated templates so the skill can support both full reports and chart interpretation without bloating SKILL.md.

### 4. Normalize language with a glossary
Define BOS, CHoCH, OB, FVG, liquidity, premium / discount, displacement, and related concepts using Nexus language rather than textbook-only wording.

## Default workflow

1. Define instrument, timeframe, and request type
2. Read HTF first, then LTF
3. Identify market phase
4. Separate bias from actionability
5. Present main / alternate scenario
6. State confirmation / invalidation
7. Warn when no-trade is the better decision

## Risks addressed

- Overusing SMC / ICT jargon without actual edge
- Confusing directional bias with immediate execution quality
- Forcing trades in the middle of ranges
- Turning OB / FVG into standalone signals
- Ignoring ambiguity in screenshot-only analysis

## Success criteria

The skill is successful if it consistently produces:
- clear structure-first analysis
- explicit key levels and market phase
- bias vs actionability separation
- confirmation / invalidation logic
- no-trade warnings when warranted
