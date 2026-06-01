---
title: "Field note #18 — CRA Annex I §1 lands as CORE, closing the third column of the control-map triangle toward M0"
description: "Eighteenth field note from the SecOps-NG Digital Commons: the CRA leg of the OSCAL/D3FEND control-map axis reaches CORE — Annex I §1 essential cybersecurity (secure-by-design / secure-by-default) resolves behind the SKELETON, completing CORE coverage on every column of the NIS2 / DORA / CRA triangle and leaving one normalisation surface for downstream playbook authors."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "control-map", "cra", "component-definition", "regulatory-overlay", "d3fend", "skeleton-core", "secure-by-design", "digital-commons", "m0"]
---

Note #17 closed the DORA leg of the OSCAL/D3FEND control-map axis
through a SKELETON→CORE→EXTEND triplet, and named the CRA column as
the one motion still ahead before the M0 definition-of-done on the
regulatory axis could retire. The shape was set; the column was not
yet walked.

This note records the next step. The CRA column now carries a CORE
expansion behind its SKELETON, and the triangle that the axis has
been carrying since note #16 — NIS2, DORA, CRA — now reads with CORE
coverage on every side.

## What landed in this wave

One PR against `secops-ng-framework`, merged on the CRA column:

- PR #164 — CORE expansion for the CRA OSCAL component-definition
  on Annex I §1, the essential cybersecurity requirements that frame
  the regulation's secure-by-design and secure-by-default obligations
  on manufacturers of products with digital elements. Implemented-
  requirement entries with every control reference resolving against
  the controls catalogue, sitting directly behind the SKELETON that
  PR #159 named the column shape with.

Combined with the SKELETON from note #16 (PR #159), the CRA column
now reads as a resolved CORE leg of the control-map axis, with the
same component-definition shape NIS2 and DORA already walked.

## Where the control-map axis now stands

After this wave, the OSCAL component-definitions on the catalogue
cover, at the CORE bar or above:

- NIS2 — Art.21(2)(a)–(j) risk-management catalogue and Art.23
  staged incident-notification flow.
  ([SKELETON #157](https://github.com/secops-ng/secops-ng-framework/pull/157),
  [CORE #160](https://github.com/secops-ng/secops-ng-framework/pull/160))
- DORA — Art.5–14 governance, ICT risk-management framework,
  systems and tools, identification, detection, response and
  recovery, backup and restoration, learning from incidents, and
  crisis communication, plus Art.18–19 major-incident classification
  and reporting.
  ([SKELETON #158](https://github.com/secops-ng/secops-ng-framework/pull/158),
  [CORE #162](https://github.com/secops-ng/secops-ng-framework/pull/162),
  [EXTEND #163](https://github.com/secops-ng/secops-ng-framework/pull/163))
- CRA — Annex I §1 essential cybersecurity (secure-by-design and
  secure-by-default) at CORE, behind the original SKELETON surface.
  ([SKELETON #159](https://github.com/secops-ng/secops-ng-framework/pull/159),
  [CORE #164](https://github.com/secops-ng/secops-ng-framework/pull/164))

Every column of the control-map triangle now carries a CORE
expansion. The CRA Article 13 manufacturer-obligations surface is
in flight as a follow-on CORE sibling on the same column; that
work walks the EXTEND step that DORA already showed scales without
the column shape changing.

## Why one normalisation surface matters

What the three columns have in common, beyond the regulatory texts
they map to, is that they ship as the same OSCAL component-definition
shape. The `control_refs` on a NIS2 implemented-requirement read the
same way as the `control_refs` on a DORA implemented-requirement and
the same way as the `control_refs` on a CRA implemented-requirement.
A downstream playbook author or KPI curator who learns to read one
column has learned to read all three.

That property is not a side effect of the shipping order; it is the
reason the columns were modelled as siblings rather than as three
parallel inventions. Concretely, a community contributor who writes
a detection playbook today does not need to know whether it answers
NIS2 Art.21(2)(b), DORA Art.10, or CRA Annex I §1 — the playbook
declares the controls it implements, and the component-definitions
resolve which regulatory articles those controls answer. One
normalisation surface, three regulations, one shape to learn.

When the EU Cyber Resilience Act lands on a product team's desk
alongside the NIS2 transposition their CISO already tracks and the
DORA articles their finance function already reports against, the
substrate the catalogue carries is the same. The shape is portable;
the columns are independent; the labour does not multiply.

## What the wave does not promise

It does not promise CRA conformity for any manufacturer. The
component-definition names which playbook steps and KPI entries
answer which Annex I §1 requirements; whether a product's running
controls answer them in the real world is a different question,
asked against a shared substrate rather than a private spreadsheet.

It does not promise the CRA column is closed. Annex I §2 essential
cybersecurity requirements and Art.13 manufacturer obligations and
Art.14 vulnerability handling still sit ahead on the same column;
the SKELETON named them, and the same SKELETON→CORE→EXTEND motion
the catalogue used twice already is the one the CRA column walks
from here.

It does not promise the triangle is frozen. The Commission's
delegated and implementing acts under all three regulations will
continue to land underneath; the substrate is shaped to absorb
them through the same motion.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the CRA Annex I §1 CORE expansion
  ([PR #164](https://github.com/secops-ng/secops-ng-framework/pull/164))
  behind the original SKELETON
  ([PR #159](https://github.com/secops-ng/secops-ng-framework/pull/159)),
  plus the NIS2 column
  ([SKELETON #157](https://github.com/secops-ng/secops-ng-framework/pull/157),
  [CORE #160](https://github.com/secops-ng/secops-ng-framework/pull/160))
  and the DORA column
  ([SKELETON #158](https://github.com/secops-ng/secops-ng-framework/pull/158),
  [CORE #162](https://github.com/secops-ng/secops-ng-framework/pull/162),
  [EXTEND #163](https://github.com/secops-ng/secops-ng-framework/pull/163))
  that the CRA column now reads alongside.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventeen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

Walk the substrate today and a CRA Annex I §1 reference resolves
from the worked-example playbook step that answers it, from the
KPI entry that measures it, and from the OSCAL component-definition
that names the requirement it sits under — the same way a NIS2
Art.21 reference or a DORA Art.10 reference already does. Every
side of the triangle now answers in the same shape.

More from the lanes as the CRA column walks the EXTEND step and the
M0 definition-of-done line on the regulatory axis retires behind it.
