---
title: "Field note #17 — DORA Art.5–14 lands as a SKELETON→CORE→EXTEND trio"
description: "Seventeenth field note from the SecOps-NG Digital Commons: the DORA leg of the OSCAL/D3FEND control-map axis closes through a three-PR triplet — SKELETON for Art.5–6, CORE for Art.7/8/10/11, EXTEND for Art.12/13/14 — recovering an oversized monolith into the same column shape NIS2 already walked."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "control-map", "dora", "component-definition", "regulatory-overlay", "d3fend", "skeleton-core-extend", "digital-commons", "m0"]
---

Note #16 named the moment the OSCAL/D3FEND control-map axis came
online: three SKELETON component-definitions for NIS2, DORA, and
CRA, with the NIS2 CORE expansion landed behind the SKELETON
triangle. The question that note left open was whether the DORA
column would walk the same path NIS2 just had, and whether the
catalogue could absorb a regulatory expansion that did not fit
inside a single PR shape.

This note records that the answer is yes, and names the shape the
catalogue used to get there.

## What landed in this wave

Three PRs against `secops-ng-framework`, merged as a triplet on the
DORA column:

- PR #161 — SKELETON expansion for DORA Art.5 (governance and
  organisation arrangements for ICT risk) and Art.6 (the ICT risk-
  management framework itself). Labelled stubs that name the
  control families and give the rest of the substrate something to
  reference.
- PR #162 — CORE expansion for DORA Art.7 (ICT systems, protocols,
  and tools), Art.8 (identification of ICT-supported business
  functions and information assets), Art.10 (detection mechanisms
  for anomalous activities), and Art.11 (response and recovery).
  Implemented-requirement entries with every control reference
  resolving against the controls catalogue.
- PR #163 — EXTEND expansion for DORA Art.12 (backup policies and
  restoration procedures), Art.13 (learning and evolving from ICT-
  related incidents), and Art.14 (crisis communication), plus a
  README roster pass that names the whole Art.5–14 surface as a
  resolved column.

Together with Art.9 and Art.18–19 — which were already in the
original DORA SKELETON from note #16 — this closes the DORA leg of
the OSCAL/D3FEND control-map axis the catalogue has been carrying
since the regulatory overlay first appeared.

## The triplet shape

The DORA Art.5–14 surface did not fit cleanly into a single
component-definition PR. The article catalogue is wide; the
implemented-requirement entries each carry control references,
statements, and links back into the playbook and KPI substrate;
the diff would have been hard to read, harder to review, and
hardest of all to roll back if a citation shifted.

What the catalogue used instead is a triplet pattern that the rest
of the substrate now has a name for:

- SKELETON — the labelled stubs that name the control families and
  let the rest of the substrate reference them without resolving
  yet.
- CORE — the implemented-requirement entries on the articles the
  catalogue grades hardest first, with every control reference
  resolving against the controls catalogue.
- EXTEND — the remaining articles on the same column, plus the
  roster pass that names the whole surface as resolved.

The same shape worked for NIS2 — SKELETON in note #16, CORE behind
it in the same wave. What this wave shows is that the shape scales
to a wider article surface without changing: three PRs, one
column, each with a labelled job, each reviewable on its own,
together closing the DORA leg of the control map.

## Where the control-map axis now stands

After this wave, the OSCAL component-definitions on the catalogue
cover:

- NIS2 — Art.21(2)(a)–(j) risk-management catalogue and Art.23
  staged incident-notification flow, CORE-resolved.
- DORA — Art.5 governance, Art.6 ICT risk-management framework,
  Art.7 systems and tools, Art.8 identification, Art.9 risk-
  management (from the SKELETON in note #16), Art.10 detection,
  Art.11 response and recovery, Art.12 backup and restoration,
  Art.13 learning from incidents, Art.14 crisis communication, and
  Art.18–19 major-incident classification and reporting.
- CRA — Annex I §2 essential cybersecurity requirements and
  Art.14 vulnerability handling, SKELETON-resolved.

Two columns of the control-map triangle now carry CORE expansions;
the CRA column still ahead is the next motion on this axis.

## Why the triplet matters beyond DORA

The catalogue has had to absorb oversized work before — the worked-
example playbooks went through it during the byte-parity sweep
(notes #13 and #14); the temporal canonical layout went through it
(note #12). What is worth naming is that the triplet pattern is
now a reusable shape for the regulatory overlay specifically: when
a regulation's article surface is too wide to land in a single
component-definition, the column can walk through SKELETON, CORE,
and EXTEND on its own time, with each step reviewable in
isolation, and with the substrate it touches — the controls
catalogue, the worked-example playbooks, the KPI cross-reference,
the xref CI gate — staying coherent at every step.

For the CRA CORE expansion ahead, this matters: the same triplet
shape is available, and the column does not need to invent its
own shape to walk it.

## What the wave does not promise

It does not promise DORA compliance for any particular operator.
The component-definitions name which playbook steps and KPI
entries answer which articles; whether an operator's running
system answers them in the real world is a different question,
asked against a shared substrate rather than a private
spreadsheet.

It does not promise the DORA article surface is frozen. New
regulatory technical standards will continue to land underneath
the directive; the substrate is shaped to absorb them through the
same SKELETON→CORE→EXTEND motion the column just used.

It does not promise the control-map triangle is closed. The CRA
column is still ahead, and the M0 definition-of-done line on the
regulatory axis only retires once all three columns carry resolved
CORE expansions.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the DORA Art.5–14 triplet
  ([PR #161](https://github.com/secops-ng/secops-ng-framework/pull/161)
  SKELETON,
  [PR #162](https://github.com/secops-ng/secops-ng-framework/pull/162)
  CORE,
  [PR #163](https://github.com/secops-ng/secops-ng-framework/pull/163)
  EXTEND), plus the README roster pass naming the resolved
  Art.5–14 surface.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

Walk the substrate today and a DORA Art.10 reference resolves from
the worked-example detection playbook that answers it, from the
KPI entry that measures it, and from the OSCAL component-
definition that names the article it sits under. The same is true
for Art.7, Art.8, Art.11, Art.12, Art.13, and Art.14. The DORA
leg of the M0 control-map definition-of-done now reads as one
resolved column.

More from the lanes as CRA reaches CORE behind it.
