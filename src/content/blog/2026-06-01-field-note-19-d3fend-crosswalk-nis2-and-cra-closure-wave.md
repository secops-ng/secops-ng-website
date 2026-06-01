---
title: "Field note #19 — D3FEND × NIS2 crosswalk lands and the CRA column closes its manufacturer-obligations CORE"
description: "Nineteenth field note from the SecOps-NG Digital Commons: the D3FEND control-map scaffold goes live, the NIS2 crosswalk lands as a CORE artifact resolving every Art.21(2)(a)–(j) and Art.23(4) entry against real upstream controls, the CRA column closes its Art.13 manufacturer-obligations CORE alongside the Annex I §1 surface, and the DORA crosswalk reaches review — the regulatory axis is now read by defensive technique on every side it carries."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "d3fend", "oscal", "control-map", "nis2", "dora", "cra", "crosswalk", "regulatory-overlay", "skeleton-core", "digital-commons", "m0"]
---

Note #18 closed the CORE leg of the CRA column behind its SKELETON and
left the triangle reading with CORE coverage on every side: NIS2, DORA,
CRA, three columns of the OSCAL component-definition catalogue, one
normalisation surface. What the substrate carried by that point was a
regulatory axis: three regulations resolved through a single
component-definition shape.

This note records the wave that opens the second axis — the defensive-
technique axis — and walks it onto the same columns the regulatory axis
already covers. The D3FEND control map is now scaffolded, the NIS2
crosswalk lands as a CORE artifact behind that scaffold, the DORA
crosswalk is under review on the same shape, and the CRA column gains
its Art.13 manufacturer-obligations CORE next to the Annex I §1 surface
that closed in note #18.

## What landed in this wave

Five PRs against `secops-ng-framework`, all merged forward-public:

- [PR #165](https://github.com/secops-ng/secops-ng-framework/pull/165)
  — CORE expansion for the CRA OSCAL component-definition on Art.13
  manufacturer obligations, sitting on the same column as the Annex I
  §1 CORE from note #18 and walking the CRA leg from one CORE surface
  to two without changing the column shape.
- [PR #166](https://github.com/secops-ng/secops-ng-framework/pull/166)
  — D3FEND control-map SKELETON. The scaffold names the second axis:
  a `content/mappings/d3fend/` surface that reads defensive techniques
  by D3FEND identifier and resolves each entry back to the
  controls catalogue the OSCAL columns already read.
- [PR #167](https://github.com/secops-ng/secops-ng-framework/pull/167)
  — D3FEND × NIS2 crosswalk CORE. Every Art.21(2)(a)–(j) risk-
  management entry and Art.23(4) staged notification entry is now
  reachable from a D3FEND technique whose `control_ref` resolves
  against the controls catalogue and whose `regulation_refs.entry_id`
  resolves against the NIS2 component-definition. Round-trip lookup
  works in both directions on the first column.

Under review on the same shape:

- [PR #168](https://github.com/secops-ng/secops-ng-framework/pull/168)
  — D3FEND × DORA crosswalk CORE. Art.5–14 governance and ICT risk
  framework, Art.18–19 major-incident classification and reporting,
  Art.28–30 third-party risk, read by defensive technique through the
  same `control_refs` / `regulation_refs.entry_id` pair the NIS2
  crosswalk uses.

In flight, queued in the builder lane:

- D3FEND × CRA crosswalk CORE — the third column of the second axis,
  reading Annex I §1, Art.13, and the surfaces queued behind them by
  the same defensive-technique shape.

## Where the artifacts live

Contributors can read the substrate directly:

- `content/mappings/d3fend/` in `secops-ng-framework` — the
  defensive-technique entries that the crosswalk is built from, each
  carrying a `control_ref` into the controls catalogue and a
  `regulation_refs` list that resolves against the OSCAL
  component-definitions.
- `content/oscal/` in `secops-ng-framework` — the NIS2, DORA, and CRA
  component-definitions the regulatory axis is built on. Every
  `control_ref` an OSCAL implemented-requirement names is the same
  identifier the D3FEND crosswalk resolves against.

A community contributor who walks one D3FEND entry today reads the
defensive technique, the catalogue control it implements, and the
regulatory article that control answers — in one resolution, on one
shape, against three regulations.

## The round-trip property

What makes the D3FEND crosswalk worth carrying alongside the OSCAL
columns is that every entry resolves in both directions without
either side carrying private state.

From a D3FEND entry: the `control_ref` resolves to an entry in the
controls catalogue, and every `regulation_refs.entry_id` resolves to
an implemented-requirement in one of the OSCAL component-definitions.

From the other side: every implemented-requirement in the NIS2
component-definition is reachable from at least one D3FEND entry
whose `regulation_refs` list names it. Same on the DORA column
once PR #168 lands; same on the CRA column once the queued crosswalk
walks behind it.

The property is checked, not asserted. The crosswalk PRs that landed
this wave include the resolver pass that fails on a dangling
`control_ref`, fails on a dangling `regulation_refs.entry_id`, and
fails on any OSCAL implemented-requirement the crosswalk leaves
unreachable. A merge that drifts off the substrate does not pass.

## Why the second axis matters

The regulatory axis answered a question for the operator who already
knows which articles their auditor names: where does the catalogue
say a NIS2 Art.21(2)(b) requirement is answered? The component-
definition reads that out.

The defensive-technique axis answers the inverse question: where
does the catalogue say a D3FEND technique — say, network traffic
analysis or file integrity monitoring — lands in regulation? The
crosswalk reads that out, and reads it the same way on every column.

A detection engineer who writes a rule against a D3FEND technique
can resolve, on the same substrate the auditor reads, which articles
of NIS2 the rule contributes evidence for, and tomorrow the same
resolution will work on DORA, and the day after on CRA. The labour
of mapping a control to its regulatory footprint moves out of the
private spreadsheet and onto a substrate the community walks.

## Where the M0 line now stands

The M0 definition-of-done on the control-map axis named two axes
carried over three regulatory columns. After this wave the
regulatory axis carries CORE on NIS2, CORE+EXTEND on DORA, and
CORE+CORE on CRA. The defensive-technique axis carries CORE on
NIS2 and a CORE under review on DORA, with the CRA column queued
behind it on the same shape.

What remains before the M0 line retires is the CRA leg of the
defensive-technique axis. The shape it walks is the one the NIS2
crosswalk already showed and the DORA crosswalk already walks.

## What the wave does not promise

It does not promise that a defensive technique catalogued under D3FEND
is implemented in any operator's environment. The crosswalk names
which technique the catalogue resolves which article through; whether
the technique runs against live traffic, on the right segment, with
the right detection content, is a separate question — asked against
a shared substrate rather than against three independent ones.

It does not promise the crosswalk is closed. New D3FEND entries land
in the upstream catalogue; new delegated and implementing acts land
under the three regulations. The shape absorbs both through the same
resolver pass that gated this wave.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the D3FEND scaffold
  ([SKELETON #166](https://github.com/secops-ng/secops-ng-framework/pull/166)),
  the D3FEND × NIS2 crosswalk
  ([CORE #167](https://github.com/secops-ng/secops-ng-framework/pull/167)),
  the CRA Art.13 manufacturer obligations
  ([CORE #165](https://github.com/secops-ng/secops-ng-framework/pull/165))
  alongside the Annex I §1 surface from note #18, plus
  [PR #168](https://github.com/secops-ng/secops-ng-framework/pull/168)
  under review on the DORA leg of the second axis.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

Walk one D3FEND entry on the substrate today and the controls catalogue
answers, and the NIS2 component-definition answers, and on the
columns under review the DORA and CRA component-definitions answer
next — the same shape, the same resolver, two axes on three columns.

More from the lanes as the CRA leg of the defensive-technique axis
lands and the M0 line on the control map retires behind it.
