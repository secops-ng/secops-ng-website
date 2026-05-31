---
title: "Field note #12 — the temporal column closes, ten of ten"
description: "Twelfth field note from the SecOps-NG Digital Commons: the temporal compile target reaches SKELETON parity across all ten canonical playbooks, and the langgraph column widens with identity-compromise — operators can now compile the same CACAO source to n8n, Temporal, or LangGraph reference scaffolds across the full catalogue."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "temporal", "langgraph", "cacao", "compile-target", "parity", "skeleton", "ransomware-containment", "threat-intel-ingest", "vuln-intake", "identity-compromise", "digital-commons", "m0"]
---

Field note #11 closed with the temporal column at seven of ten
canonical and the eighth cell — ransomware-containment — in
flight in the same four-file shape. This note is the follow-up
that lets the column-by-column story land on a round number.

The temporal compile target now carries a SKELETON canonical
cell in every row of the catalogue. Ten of ten.

## What landed

Three PRs in the same wave, each the same shape, each filling
in the last open cell in its row of the temporal column:

- PR [#146](https://github.com/secops-ng/secops-ng-framework/pull/146)
  lands the temporal canonical layout for ransomware-containment.
- PR [#147](https://github.com/secops-ng/secops-ng-framework/pull/147)
  lands the temporal canonical layout for threat-intel-ingest.
- PR [#148](https://github.com/secops-ng/secops-ng-framework/pull/148)
  lands the temporal canonical layout for vuln-intake — leg
  ten of ten, the cell that closes the column.

And in the next column over, the langgraph leg widens:

- PR [#141](https://github.com/secops-ng/secops-ng-framework/pull/141)
  lands the langgraph canonical layout for identity-compromise,
  pulling another row into agentic compile-target parity.

Each of these is the same four-file shape the project has been
converging on: a `playbook.cacao.json` byte-mirror of the
portable artefact, a `workflow.<target>.{py,json}` derived from
that source, an idempotent `regenerate.sh` that reproduces the
derivation, and a README naming what each file is and what
derives from what. The byte-mirror is the contract. The
regenerate script is the proof.

## What ten of ten means

Closing a column is a particular kind of milestone. It does not
mean the temporal cells are at their richest expressible state —
it means the matrix no longer has an empty cell in that column.
Every row in the catalogue has, sitting next to its portable
CACAO source, a reference scaffold for an operator already
running Temporal. The scaffold is honest about which lines were
derived from the artefact and which were written by hand. The
regenerate step is the auditable contract.

The reason this matters for an operator is plain enough. The
orchestrator they already run is the orchestrator the new
content has to land on. Up to last week the temporal column
read as a leg in progress; today it reads as a leg the
catalogue can stand on. An operator on Temporal who walks any
row in the playbook set will find a starting point in the
shape the rest of the catalogue uses, with no row left out.

## The other two columns

The n8n column has been at CORE across the well-trodden rows
for several notes now, with per-action control references
in-line. The langgraph column is the one currently filling in
row by row in SKELETON shape; identity-compromise in PR #141
is the latest cell to land. The arc the catalogue is converging
on is one CACAO source compiling to three reference targets
at a labelled state in each column — and ten of ten on any
one column is the point at which that arc stops reading as a
plan and starts reading as a substrate.

The shape stays framework-agnostic at the artefact layer.
CACAO sources are the portable intent. The reference scaffolds
sit next to those sources. No commitment to one orchestrator,
no commitment to one model provider, no commitment to one
sovereign hoster. The compile targets exist because operators
have already made those choices; the content layer has to land
on them.

## Where this sits against M0

M0 — Launch Substrate Ready, target mid-June — asks for the
public website carrying the Digital Commons framing and the
portable playbook compiler skeleton across the n8n, Temporal,
and LangGraph reference targets. With the temporal column
closed at ten of ten and the langgraph column widening row by
row, the substrate spine the milestone names is locked into
its labelled shape. The remaining motion is column-by-column
deepening — langgraph cells filling in, n8n cells layering in
richer telemetry — rather than empty cells in the matrix.

The catalogue has reached the state where the next note will
narrate richness rather than coverage. That is the transition
M0 was written to mark.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the temporal closure wave (PRs #146, #147, #148) and the
  langgraph widening cell (PR #141).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eleven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the temporal column today, every row carries a
canonical cell in the four-file shape. If you walk the
langgraph column, identity-compromise is the latest row to
join the cells already there. The next note will pick up
whichever column reaches the next round number first.

More from the lanes as the rest of the cells fill in.
