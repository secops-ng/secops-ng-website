---
title: "Field note #16 — OSCAL control-map axis comes online across NIS2, DORA, and CRA"
description: "Sixteenth field note from the SecOps-NG Digital Commons: three OSCAL component-definition SKELETONs land for NIS2, DORA, and CRA, and the NIS2 CORE expansion lands behind them. The catalogue now has a machine-readable bridge between EU regulation and the playbook + KPI substrate, with control IDs that resolve across content/controls/{nis2,dora,cra}/."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "control-map", "nis2", "dora", "cra", "component-definition", "regulatory-overlay", "d3fend", "kpi-catalog", "playbooks", "digital-commons", "m0"]
---

Note #15 closed the byte-parity sweep across the five reference
playbooks. The catalogue has had a compile axis from CACAO source down
to three runtimes for a while now; what it has not had, until this
wave, is the other axis — the bridge upward, from playbook step and KPI
to the regulation the operator is actually answering to.

This note records the moment that axis comes online.

## What landed in this wave

Four PRs against `secops-ng-framework`, merged in the last day:

- PR #157 — SKELETON OSCAL component-definition for NIS2 (Art.21 risk-
  management measures + Art.23 incident-reporting stub).
- PR #158 — SKELETON OSCAL component-definition for DORA (Art.9 ICT
  risk-management + Art.18-19 major-incident reporting).
- PR #159 — SKELETON OSCAL component-definition for CRA (Annex I §2
  essential cybersecurity requirements + Art.14 vulnerability
  handling).
- PR #160 — CORE OSCAL component-definition for NIS2: the full
  Art.21(2)(a)–(j) risk-management catalogue plus Art.23(4) early-
  warning / 72-hour notification / final-report flow. Thirteen
  implemented-requirement entries, every control reference resolves
  against the controls catalogue, 227 of 227 tests green at landing.

Three SKELETON columns plus one CORE expansion on the column the
catalogue grades hardest first. That is the shape worth naming.

## What the control map actually is

An OSCAL component-definition is a machine-readable contract: this is
the regulatory control we are answering, this is the playbook step or
KPI that answers it, this is the evidence that says the answer is
real. The component-definition is the artefact that lets a posture
audit cross the boundary between "the operator runs this workflow"
and "the regulation is satisfied by that workflow."

Three component-definitions — one each for NIS2, DORA, and CRA — give
the catalogue three named regulatory axes. The IDs they emit live
under `content/controls/{nis2,dora,cra}/`, and they are resolvable
from the same places the rest of the substrate already reaches: the
worked-example playbooks reference them, the KPI catalogue cross-
references them, and the control-xref CI gate (note #4) keeps any of
those references from silently rotting.

## What the citations actually are

NIS2 Art.21(2)(a)–(j) is the ten-point catalogue of risk-management
measures the directive requires essential and important entities to
adopt. Art.23(4) is the staged incident-notification flow: early
warning within 24 hours, incident notification within 72, final
report within a month. The CORE component-definition (PR #160)
covers both of these in full.

DORA Art.9 covers ICT risk-management; Art.18 and Art.19 cover major-
incident classification and reporting. The SKELETON (PR #158) names
each of those control families with a labelled stub; the CORE
expansion to Art.5–14 is the next motion on this column.

CRA Annex I §2 enumerates the essential cybersecurity requirements
for products with digital elements; Art.14 covers vulnerability
handling across the support lifecycle. The SKELETON (PR #159) names
both with labelled stubs; the CRA CORE expansion is in flight on the
same path NIS2 just walked.

These are real article references. Nothing here is being inflated
into a compliance claim. What the substrate now carries is a
machine-readable description of which steps and KPIs answer which
articles — not a certificate that any particular operator's running
system does.

## Why the axis matters

The catalogue has been carrying a question since the regulatory
overlay first appeared in note #4: can the same content layer that
compiles down into three runtimes also reach upward into three
regulatory frameworks without losing its shape? A SKELETON column
filling in is encouraging; a CORE expansion behind it that resolves
end-to-end against the controls catalogue is a different kind of
evidence.

For a practitioner reading the catalogue today, the practical effect
is this: a reference playbook step or a KPI entry can name the
control ID it answers, and that control ID will resolve — against
the NIS2 catalogue under `content/controls/nis2/`, against DORA
under `content/controls/dora/`, against CRA under
`content/controls/cra/`. The same canonical IDs are reachable from
the playbook side, the metrics side, and the OSCAL component-
definition side. The xref CI gate makes that promise enforceable.

## Where this sits against M0

M0 — Launch Substrate Ready — carries a definition-of-done line for
an OSCAL/D3FEND control map across NIS2, DORA, and CRA. With this
wave, the SKELETON triangle is complete on all three axes, the
NIS2 CORE expansion has landed behind it, and the DORA + CRA CORE
expansions are the next motions on the column.

What the parity axis (notes #11 through #15) defended for the
compile direction, the control-map axis now begins to defend for
the regulatory direction: every reference cell has a labelled shape,
and at least one column carries a full CORE expansion with every
reference resolving against the controls catalogue.

## What the wave does not promise

It does not promise the regulatory mapping is closed. Three
frameworks are named; the SKELETONs name the article families;
the NIS2 CORE goes deep on its catalogue; DORA and CRA CORE are
still ahead. New articles will be added as the directives evolve;
new frameworks may join the catalogue.

It does not promise the mapping makes any particular operator's
system compliant. What it does carry is the bridge — same control
IDs, machine-readable, cross-referenced from playbook and KPI to
regulation — so the question of compliance can be asked against a
shared substrate instead of a private spreadsheet.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the three SKELETON OSCAL component-definitions
  ([PR #157](https://github.com/secops-ng/secops-ng-framework/pull/157)
  NIS2, [PR #158](https://github.com/secops-ng/secops-ng-framework/pull/158)
  DORA, [PR #159](https://github.com/secops-ng/secops-ng-framework/pull/159)
  CRA), and the NIS2 CORE expansion
  ([PR #160](https://github.com/secops-ng/secops-ng-framework/pull/160),
  thirteen implemented-requirement entries, 227/227 tests green).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the kanban, the auto-generated roadmap.

If you walk the substrate today, a control ID under
`content/controls/nis2/` resolves from the worked-example playbook
that answers it, from the KPI entry that measures it, and from the
OSCAL component-definition that names the article it sits under.
That is the bridge the M0 definition-of-done asks for on the
regulatory axis, and that is the bridge now in place.

More from the lanes as DORA and CRA reach CORE behind it.
