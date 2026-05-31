---
title: "Field note #10 — executive-metrics ships and three more SKELETON cells fill in"
description: "Tenth field note from the SecOps-NG Digital Commons: the last playbook placeholder lands as a worked playbook, three more SKELETON cells fill in across temporal and langgraph, and per-action control_refs keep landing on the n8n CORE uplifts."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "executive-metrics", "ransomware-containment", "identity-compromise", "cacao", "compile-target", "parity", "n8n", "temporal", "langgraph", "digital-commons", "m0"]
---

Field note #9 marked the first row of the M0 matrix completing — a
single reference playbook carrying a labelled cell in every compile
target column. This note is a different shape of the same story: the
last empty playbook placeholder has been replaced with a real playbook,
and three more SKELETON cells have filled in across the catalogue. The
content layer no longer has any placeholder rows, and the matrix has
gone from one labelled row to a wider sweep of labelled cells.

Read it as the content layer closing on placeholder coverage and the
parity matrix thickening in parallel.

## What landed

Five PRs, one shipping wave across the catalogue:

- PR [#134](https://github.com/secops-ng/secops-ng-framework/pull/134)
  lands the executive-metrics playbook itself — `playbook.cacao.json`
  and a README replacing the last placeholder in the playbook
  catalogue. Executive-metrics is the row that operators reach for
  when leadership asks for a KPI/KRI surface that maps to the same
  controls the detection playbooks already cite, and it is now a
  worked playbook rather than a labelled gap.
- PR [#135](https://github.com/secops-ng/secops-ng-framework/pull/135)
  uplifts the CORE n8n example for executive-metrics and lands
  per-action `control_refs` along the way. Same pattern as the rest
  of the CORE uplift wave: each emitter action carries the OSCAL and
  D3FEND identifiers it is exercising, in-line, so the standards
  grounding does not have to be reconstructed from a separate
  document.
- PR [#139](https://github.com/secops-ng/secops-ng-framework/pull/139)
  lands the LangGraph SKELETON for ransomware-containment at the
  canonical `examples/langgraph/` layout — graph topology derived
  from the same CACAO source, agentic decision points called out
  rather than stubbed silent.
- PR [#140](https://github.com/secops-ng/secops-ng-framework/pull/140)
  lands the Temporal SKELETON for executive-metrics at the canonical
  `examples/temporal/` layout — activity surface named, workflow
  shape mirroring the CACAO step graph.
- PR [#141](https://github.com/secops-ng/secops-ng-framework/pull/141)
  lands the LangGraph SKELETON for identity-compromise at the
  canonical `examples/langgraph/` layout in the same shape as #139.

None of these mutate the portable artefact. All four runtime
additions derive from CACAO sources sitting next to them in the
repository, and the new executive-metrics playbook itself follows
the same CACAO step-graph shape the rest of the catalogue uses.

## Why the executive-metrics row matters

Most of the field notes so far have been about detection and
response playbooks — phishing, ransomware, identity, exfiltration,
misconfiguration. Executive-metrics is a different kind of row in
the same table: the playbook that produces the KPI/KRI surface
leadership reads, derived from the same CACAO step graph and the
same `control_refs` that the operational playbooks already cite.

Shipping it as a real playbook rather than a placeholder is what
lets the standards grounding round-trip honestly. The control
identifiers a SOC playbook exercises and the control identifiers a
metrics playbook reports against come from the same vocabulary, in
the same shape, sitting in the same catalogue. Until #134 landed,
that round-trip had a labelled gap at one end.

The content layer is now complete on playbook coverage. Every row
in the catalogue is a worked playbook with a CACAO source, not a
placeholder.

## What the SKELETON cells changed

The parity matrix at field note #9 had exactly one row with a
labelled cell in every column. After this wave:

- ransomware-containment picks up a LangGraph SKELETON cell at the
  canonical layout (PR #139).
- identity-compromise picks up a LangGraph SKELETON cell at the
  canonical layout (PR #141).
- executive-metrics picks up a Temporal SKELETON cell at the
  canonical layout (PR #140), on top of the n8n CORE uplift in
  #135 and the playbook itself in #134.

Each new SKELETON is a labelled skeleton in the sense the project
keeps using the word — workflow or graph shape derived from the
same CACAO source, places that need real connector wiring called
out rather than stubbed as silent no-ops, README naming what the
skeleton is deferring.

The parity story is no longer about one row reaching three
columns. It is about more cells across more rows reaching one of
the well-named labelled states.

## The per-action control_refs pattern keeps landing

PR #135 continues the pattern field note #8 walked through: each
n8n CORE example carries per-action `control_refs` in-line, so the
OSCAL and D3FEND grounding for each step is co-located with the
step itself. The shape this pattern arrived at on earlier uplifts
is the shape executive-metrics picked up, which is the small kind
of consistency that pays back when an operator is reading the
example as a starting point for their own derivative.

## Where this sits against M0

M0 is five reference playbooks shipped end-to-end across three
compile targets, plus a public website carrying the Digital
Commons framing. The content layer's playbook coverage is now
complete on placeholder closure. The cross-target parity work
continues to fill in cells: phishing-triage has its full row
(field note #9), and ransomware-containment, identity-compromise,
and executive-metrics each picked up at least one more labelled
cell in this wave.

The shape stays the same as before. CACAO sources are the portable
layer. The reference compile targets — n8n, Temporal, LangGraph —
sit next to those sources, each in its labelled state, each
derived from the same step graph.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the executive-metrics playbook (PR #134), the n8n CORE uplift
  with per-action `control_refs` (PR #135), the new SKELETON cells
  for ransomware-containment, executive-metrics, and
  identity-compromise (PRs #139, #140, #141).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the catalogue today, no row reads as a placeholder.
The parity matrix has more labelled cells than it had at field
note #9. Where a cell still reads as a gap, the kanban is the
place to flag it.

More from the lanes as the rest of the rows fill in.
