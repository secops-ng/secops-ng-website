---
title: "Field note #135 — the EU AI Act playbook and its full regulatory-mapping ring landed in a single community-contributor wave (G-02/G-06)"
description: "Field note one hundred and thirty-five from the SecOps-NG Digital Commons. The EU AI Act Article 9 risk-management playbook trilogy and the full G-02 regulatory-mapping ring around it — NIS2 Art.21(2)(a) edge, GDPR Art.35 DPIA edge, EU AI Act OSCAL component definition, and the audited DORA/CRA no-interaction closures — landed as one contribution wave from a community contributor outside the founding maintainer set. Second major external wave after the ISO 27001 crosswalk series."
pubDate: 2026-07-06
author: "The SecOps-NG commons"
tags: ["field-note", "g-02", "g-06", "contributor-adoption", "digital-commons", "eu-ai-act", "regulatory-mapping", "cacao", "oscal", "community", "field-note-135"]
---

Field note one hundred and thirty-five. Two earlier entries
this week covered the *what* of the EU AI Act wave: field
note #133 for the F-WF-EUAIACT Article 9 risk-management
playbook trilogy, and field note #134 for the regulatory
edges that wired it into the wider mapping layer. This entry
is about the *who*. Both waves — the playbook content and
the full mapping ring around it — landed from a single
community contributor outside the founding maintainer set.

It is the second major external-contributor wave on this
project, after the ISO 27001 Annex A crosswalk series
covered in field note #128.

## What one contributor shipped in one wave

The scope of a single contribution wave, end to end:

- The **F-WF-EUAIACT playbook trilogy** — a CACAO v2
  playbook implementing EU AI Act Article 9 risk-management
  requirements for high-risk AI systems, plus three
  reference compilers (n8n, Temporal, LangGraph) so the same
  content ships against whatever orchestrator an operator
  already runs, plus the cookbook walkthrough that stitches
  the pieces together.
- The **F-MAP-G02-EUAIACT full regulatory-mapping chain** —
  the inbound edges from EU AI Act Article 9 across NIS2
  Art.21(2)(a) risk-management, GDPR Art.35 data-protection
  impact assessment, the EU AI Act's own OSCAL component
  definition, and the audited "no documented interaction"
  skip-manifest closures against DORA ICT risk management
  and the CRA vulnerability handling essential requirements.

The regulatory ring for the EU AI Act playbook, after the
wave, reads: NIS2 ok, GDPR ok, EU AI Act own OSCAL
component ok, DORA and CRA closed with audited "no
documented interaction" skip rationales. That closes the
G-02 ring for the
new playbook end to end — content, compilers, cookbook, and
the traceability layer that ties every step to the
regulation text that motivates it.

Every pull request went through the standard review path:
DCO sign-off, the forward-public hygiene linter, the parity
and skip-audit tests, and a maintainer review against the
regulation source texts. Nothing was fast-tracked. Nothing
was land-and-forget. The same gate a founding maintainer
clears is the gate that cleared here — twice over, across
the playbook lane and the mapping lane, from the same
external contributor.

## Why this is the G-06 signal we watch for

G-06 is the contributor-adoption goal, and the specific
shape of *this* wave matters more than its size. Two things
distinguish it from the ISO 27001 wave that preceded it:

1. **Vertical reach.** The ISO 27001 wave was
   horizontal — one regime, many entries, same shape. This
   wave went vertical: a full playbook (content), three
   reference compilers (framework code), the cookbook
   walkthrough (docs), plus the multi-regime mapping ring
   that anchors the playbook back to the regulations it
   implements. That is every layer of the stack, in one
   sitting, from one contributor.

2. **First-class regime addition, not extension of an
   existing one.** The EU AI Act arrived in the mapping
   layer as a first-class regime — new OSCAL component
   definition, new inbound edges from neighbouring regimes,
   audited skip closures where no interaction exists. A
   contributor who can add a *regime*, not just fill in
   entries under an existing one, is a contributor who has
   made the schema and the review loop their own.

Between the two, the pattern is: the extension path
scales along both axes. Anyone can add depth under a regime
that already exists, and anyone can add a whole regime that
did not exist yesterday. The commons behaves the same way
for both.

## Why the operator angle matters this week

The EU AI Act is the reason this wave landed *now*, and it
is worth naming that plainly. High-risk AI systems in scope
of Article 9 need a documented risk-management process,
traceable to the regulation, that operators can point to
under audit. That is the exact shape of what the wave
delivered: a runnable CACAO v2 playbook, three orchestrator
targets, and the OSCAL-component + inbound-edge layer that
maps each step of the playbook back to the article of the
regulation it implements.

For anyone reading this who runs high-risk AI systems in
the EU: the playbook, the compilers, and the mapping ring
are in the commons today, under a permissive licence, in
git, with the review history public. If your read of the
Article 9 text disagrees with a merged mapping, the public
issue tracker is the way to correct it. If the reference
compiler for your orchestrator is not the one you need,
the compiler surface is documented and extending it is a
pull request.

There is no gated version. There is no private fork. The
next contributor is the one this wave was written to
welcome.

## Where to look

- **Framework repo:**
  - `content/playbooks/eu_ai_act_risk_management/` — the
    EU AI Act Article 9 CACAO v2 playbook (with
    `mappings.yaml` and the compile-target workflow files).
  - `compilers/n8n/`, `compilers/temporal/`,
    `compilers/langgraph/` — the three reference compiler
    targets.
  - `docs/cookbook/eu_ai_act_risk_management.md` — the
    cookbook walkthrough.
  - `content/mappings/eu_ai_act/` — the inbound
    regulatory-edge files (Art.9 / Art.11 / Art.13 / Art.72,
    Art.6 classification + Annex III use cases) and the
    EU AI Act OSCAL component definition.
  - `content/mappings/dora/_orphan_skip.yaml` and
    `content/mappings/cra/_orphan_skip.yaml` — the audited
    "no documented interaction" skip closures keyed by
    `slug: eu_ai_act_risk_management`.
  - `docs/contributing/playbook-authoring.md` — the mapping
    and playbook authoring guide.

Two major external-contributor waves in a fortnight — one
horizontal across a compliance regime, one vertical through
the whole stack for a new regulation — is the shape of a
commons that has stopped being a codebase with users and
started being a codebase with co-authors. The next good day
is the one that starts with the third contributor.
