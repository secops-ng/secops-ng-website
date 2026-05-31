---
title: "Field note #9 — phishing-triage reaches three-target SKELETON parity"
description: "Ninth field note from the SecOps-NG Digital Commons: phishing-triage — the canonical first reference playbook — now carries an honest SKELETON across all three M0 compile targets. One CACAO source, three runtime columns, the first reference playbook proving the framework-agnostic pattern compiles in practice."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "phishing-triage", "cacao", "compile-target", "parity", "n8n", "temporal", "langgraph", "digital-commons", "m0"]
---

Field note #8 walked the n8n column across the launch playbook set
until each row was in one of a small number of honest states. This
note is a different shape of the same parity story, told along the
other axis: a single reference playbook — phishing-triage, the
canonical first one — picking up its third runtime column so that
all three M0 compile targets now carry something honest for it.

Read it as a row completing, not a milestone closing. The M0 lodestar
is five reference playbooks shipped end-to-end across three compile
targets. Phishing-triage is the first row in that table to have a
labelled cell in every column.

## What landed

Three pieces, one row of the matrix:

- The n8n column for phishing-triage has carried the canonical worked
  example for some time — the layout that field notes #5 and #7
  walked through, with the co-located CACAO mirror and the
  `regenerate.sh` next to the workflow.
- PR [#137](https://github.com/secops-ng/secops-ng-framework/pull/137)
  lands the Temporal SKELETON for phishing-triage. Honest skeleton:
  the activity surface is named, the workflow shape mirrors the CACAO
  step graph, and the places where a contributor would need to wire
  in real connectors are labelled rather than stubbed out as silent
  no-ops.
- PR [#138](https://github.com/secops-ng/secops-ng-framework/pull/138)
  lands the LangGraph SKELETON in the same shape — graph nodes that
  correspond to CACAO steps, edges that follow the playbook's control
  flow, and explicit TODOs at the points where an agentic
  implementation would have to make a tool-use decision.

Both skeletons sit next to the same CACAO source the n8n column
compiles from. None of them mutate the portable artefact; all three
columns derive from it.

## Why this row matters

Phishing-triage is the playbook we keep coming back to because it is
the one most operators recognise without preamble. If the
framework-agnostic claim — portable intent in CACAO, three reference
compile targets, runtime choice left to the operator — fails to
hold on phishing-triage, it does not hold anywhere. The opposite is
also true: the first row in the matrix to land in all three columns
is the row that lets the claim be checked end-to-end against
something concrete.

A reader walking into `examples/n8n/phishing-triage`,
`examples/temporal/phishing-triage`, and
`examples/langgraph/phishing-triage` today sees three different
runtimes expressing the same playbook, derived from one source,
honest about which parts are worked and which parts are skeletal.
That is the substrate moment worth a field note.

## What "SKELETON parity" means here

The bar for a reference playbook at M0 is that each runtime column
carries something honest: either a faithful worked example, or an
explicit skeleton with the reason it is still a skeleton. SKELETON
parity is the weaker, earlier form of cross-target parity — every
column is labelled in one of the well-named states, even if not
every column is yet a worked example.

For phishing-triage the columns now read:

- n8n — worked example, regeneration script next to it, co-located
  CACAO mirror.
- Temporal — labelled SKELETON, activity surface and workflow
  shape derived from the same CACAO source.
- LangGraph — labelled SKELETON, graph topology derived from the
  same CACAO source, agentic decision points called out.

No empty cells, no placeholder workflows pretending to be worked
examples, no column silently deferring to another. The work the
SKELETONs are deferring is named in their READMEs.

## Where this sits against M0

M0 is five reference playbooks shipped end-to-end across three
compile targets, plus a public website carrying the Digital Commons
framing. Phishing-triage is one of those five, and it is the first
to have a labelled cell in every column. The remaining four rows
are in flight, and the SKELETON-first pattern this row used —
emitter parity first, worked-example uplift second — is the shape
the others are following.

The portable layer did not change for this row. The CACAO step
graph is what it was before PR #137 and PR #138 landed. What
changed is that two more runtimes now carry a faithful, if
skeletal, reading of that graph, derived from the same source,
sitting next to it in the repository.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the phishing-triage CACAO source, the n8n worked example, the
  Temporal SKELETON (PR #137), the LangGraph SKELETON (PR #138).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you compile phishing-triage into any of the three reference
runtimes today, what you get out is either a derived worked example
or a labelled skeleton, each derived from the same CACAO source and
sitting next to it. If a column reads as the wrong shape for what
it is doing, the kanban is the place to flag it.

First row of the M0 matrix complete. More from the lanes as the
other four rows catch up.
