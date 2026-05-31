---
title: "Field note #11 — the temporal column fills in"
description: "Eleventh field note from the SecOps-NG Digital Commons: three more SKELETON-temporal cells land in the same wave, bringing the temporal compile-target column to seven of ten canonical, all derived from the same CACAO sources."
pubDate: 2026-05-31
author: "The SecOps-NG commons"
tags: ["shipping-update", "temporal", "cacao", "compile-target", "parity", "skeleton", "identity-compromise", "cloud-misconfiguration", "data-exfil", "digital-commons", "m0"]
---

Field note #10 read the parity matrix as the content layer closing
on placeholder coverage and more cells reaching their labelled
states across the catalogue. This note is narrower and easier to
describe: one column of that matrix — the temporal compile target
— picked up three more canonical cells in a single tick.

The temporal leg now reads seven of ten canonical at the four-file
shape the project has been converging on.

## What landed

Three PRs, each the same shape, each in a different row of the
catalogue:

- PR [#143](https://github.com/secops-ng/secops-ng-framework/pull/143)
  lands the temporal canonical layout for identity-compromise.
- PR [#144](https://github.com/secops-ng/secops-ng-framework/pull/144)
  lands the temporal canonical layout for cloud-misconfiguration.
- PR [#145](https://github.com/secops-ng/secops-ng-framework/pull/145)
  lands the temporal canonical layout for data-exfil.

Canonical here is a precise word. Each cell ships the same four
files in the same shape: a `playbook.cacao.json` byte-mirror of
the portable artefact, a `workflow.temporal.py` deriving its
activity surface and step graph from that CACAO source, an
idempotent `regenerate.sh` that reproduces the derivation, and a
canonical README naming what each file is and what derives from
what.

The byte-mirror matters more than it reads. It is the contract
that says the temporal cell is not a hand-maintained fork of the
portable artefact — it is a co-located copy under a regeneration
script, and the script is the proof that the derivation is honest.
If a CACAO source changes upstream, the regenerate step is what
keeps the cell aligned. If it doesn't, the diff is the audit
trail.

## Why this matters for an operator picking their own orchestrator

The reason the project ships three reference compile targets
rather than one is that operators do not get to pick their
orchestrator in a vacuum. The orchestrator they already run is
the orchestrator the new content has to land on. The shape the
project is converging on is one CACAO source compiling to n8n
for the no-code lane, to Temporal for the durable-code lane, and
to LangGraph for the agentic lane — each at a labelled state,
each next to the same portable artefact.

A temporal canonical cell, in particular, is what an operator
on Temporal reaches for when they want a starting point that is
honest about what is derived and what is hand-written. The four
files together say: here is the portable intent, here is the
workflow that runs it on your stack, here is the script that
regenerates the workflow from the intent, and here is the README
that names the contract. Nothing about that pattern is specific
to Temporal — n8n and LangGraph each have a parallel canonical
shape in their own column — but a column reaching seven of ten
canonical is the point at which the pattern stops reading as one
example and starts reading as a layer.

## Where the parity matrix sits now

After this wave the temporal column carries canonical cells for
seven rows in the catalogue. The eighth — ransomware-containment
— is in flight in the same shape and will either land in the
same narrative window or read as the next cell to fill. The
shape stays the same either way: four files, byte-mirrored
source, idempotent regeneration, README naming the contract.

The other two columns continue at their own pace. n8n has
already reached its CORE state across the well-trodden rows with
per-action `control_refs` in-line; LangGraph SKELETONs are
filling in the agentic decision points row by row. The point of
this note is not that one column has overtaken the others — it
is that the column-by-column story has become legible enough to
narrate one column at a time.

## Where this sits against M0

M0 — Launch Substrate Ready, target mid-June — asks for five
reference playbooks end-to-end across three compile targets and
a public website carrying the Digital Commons framing. The
portable playbook compiler skeleton checkbox edges closer with
each canonical cell that lands: the substrate is the four-file
shape, repeated across the matrix until each row carries it in
each column. Seven of ten on the temporal column is the kind of
number that lets the substrate read as ready rather than as
aspirational.

The shape stays framework-agnostic at the artefact layer. CACAO
sources are the portable intent. The reference compile targets
sit next to those sources. No commitment to one orchestrator,
no commitment to one model provider, no commitment to one
sovereign hoster. The operator's existing choices are the
constraint the content layer is written to land on.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the three temporal canonical cells in this wave (PRs #143,
  #144, #145) and the ransomware-containment cell in flight.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ones that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the temporal column today, seven of ten rows carry
a canonical cell in the four-file shape. The next note will
either close on the eighth or move to whichever column reaches
the next round number first.

More from the lanes as the rest of the cells fill in.
