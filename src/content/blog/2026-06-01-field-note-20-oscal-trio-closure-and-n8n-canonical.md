---
title: "Field note #20 — the OSCAL trio closes its CORE on the canonical clauses, NIS2 takes the per-clause layout, and identity-compromise walks onto the canonical n8n shape"
description: "Twentieth field note from the SecOps-NG Digital Commons: the OSCAL component-definition CORE surface is now structurally complete across NIS2, DORA, and CRA on the canonical clauses — CRA closes Annex I §2 and Art.14, DORA closes Art.5 and Art.6 — the NIS2 mappings refactor to per-clause files for DORA-parity, and the identity-compromise n8n example moves onto the canonical four-file layout that the other reference playbooks already carry."
pubDate: 2026-06-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "oscal", "control-map", "nis2", "dora", "cra", "regulatory-overlay", "n8n", "canonical-layout", "identity-compromise", "digital-commons", "m0"]
---

Note #19 walked the defensive-technique axis onto the same columns the
regulatory axis already covered: the D3FEND control map opened against
NIS2 at CORE, with DORA under review and CRA queued behind it on the
same shape. The substrate after that wave read as two axes carried over
three regulatory columns, with the CORE leg of the regulatory axis still
needing its closure pass on the canonical clauses.

This note records the wave that lands that closure pass. The CRA column
closes its Annex I §2 and Art.14 CORE alongside the Annex I §1 and
Art.13 surfaces it already carried. The DORA column closes its Art.5
and Art.6 CORE underneath the Art.7–14 and Art.18–19 surfaces already
in place. The NIS2 column refactors its mappings into per-clause files
so the layout is the one DORA already walks. And the identity-compromise
reference playbook gets its n8n leg moved onto the canonical
`examples/n8n/` shape the other reference playbooks already carry.

## What landed in this wave

Four PRs against `secops-ng-framework`, all merged forward-public:

- [PR #170](https://github.com/secops-ng/secops-ng-framework/pull/170)
  — CORE for the CRA OSCAL component-definition on Annex I §2
  (vulnerability handling) and Article 14 (incident and
  actively-exploited-vulnerability reporting). The twelve
  implemented-requirements covering Annex I §2(1)–(7) and Art.14(1)–(3)
  now carry `source-d3fend-technique` and `source-d3fend-entry-id`
  props that round-trip back to entries in the D3FEND × CRA crosswalk,
  closing the second half of the CRA component alongside the Annex I §1
  and Art.13 CORE surfaces.
- [PR #171](https://github.com/secops-ng/secops-ng-framework/pull/171)
  — CORE for the DORA OSCAL component-definition on Art.5 (governance
  and organisation) and Art.6 (ICT risk-management framework). The four
  Art.5/6 implemented-requirements take the same D3FEND-prop shape the
  CRA CORE pattern carries, anchoring each to a defensive technique
  resolved through `content/mappings/d3fend/dora.yaml`. The
  component-definition title drops its prior `(EXTEND)` qualifier — the
  DORA column now spans Art.5 through Art.19 across CORE and EXTEND
  tiers on a single component shape.
- [PR #172](https://github.com/secops-ng/secops-ng-framework/pull/172)
  — EXTEND for the NIS2 mappings: `article-21-and-23.yaml` decomposes
  into per-clause files (`article-21-2-a.yaml` through
  `article-21-2-j.yaml` plus `article-23.yaml`), matching the DORA
  layout one-file-per-article-clause-atom. Net-zero semantic change:
  every `stable_id`, `control_ref`, `playbook_ref`, `metric_ref`, and
  inline note is preserved byte-for-byte at the entry level, verified by
  concatenating the new YAMLs and round-tripping against the prior file.
  Cross-references in the controls catalogue, the D3FEND × NIS2
  crosswalk, the DORA Art.9 RTS file, and the playbook READMEs are
  refreshed to the per-clause filenames.
- [PR #173](https://github.com/secops-ng/secops-ng-framework/pull/173)
  — SKELETON for the identity-compromise n8n example at the canonical
  `examples/n8n/` layout: `playbook.cacao.json` (byte-identical mirror
  of the canonical CACAO source), `regenerate.sh` (matching the sibling
  pattern), `workflow.n8n.json` (emitted by `compilers.n8n` via
  `tools.compile`), and a canonical-shape README. The n8n leg now joins
  the temporal and langgraph legs of identity-compromise that were
  already on canonical shape, finishing the three-target parity sweep
  for that reference playbook.

## Where the artifacts live

Contributors can read the substrate directly:

- `content/mappings/cra/oscal-component-definition.json` and the
  per-article YAMLs in `content/mappings/cra/` in `secops-ng-framework`
  — the CRA column at CORE on Annex I §1, Annex I §2, Art.13, and
  Art.14, each implemented-requirement annotated with the D3FEND
  technique and entry-id that resolves it.
- `content/mappings/dora/oscal-component-definition.json` and the
  per-article YAMLs in `content/mappings/dora/` — the DORA column at
  CORE on Art.5 and Art.6 underneath Art.7–14 and Art.18–19, the same
  D3FEND-prop shape end to end.
- `content/mappings/nis2/article-21-2-*.yaml` and
  `content/mappings/nis2/article-23.yaml` — the NIS2 risk-management
  clauses and incident-notification timeline as per-clause files, on
  the same layout the DORA mappings already use.
- `examples/n8n/identity-compromise/` — playbook source, regeneration
  script, emitted workflow, and README on the canonical four-file
  shape.

A community contributor who reads the OSCAL trio today reads NIS2 at
CORE on Art.21(2)(a)–(j) and Art.23(4), DORA at CORE on Art.5–14 and
Art.18–19, and CRA at CORE on Annex I §1, Annex I §2, Art.13, and
Art.14 — three regulatory columns, one component-definition shape, the
same D3FEND-prop round-trip on every implemented-requirement.

## What the closure means on the substrate

The CORE definition the OSCAL columns commit to is that every canonical
clause of each regulation resolves through an `implemented-requirement`
whose `control_ref` points into the controls catalogue, whose
`source-entry-id` resolves back to an entry in the mapping YAMLs, and
whose `source-d3fend-technique` and `source-d3fend-entry-id` resolve
back to an entry in the D3FEND crosswalk.

With this wave the canonical clauses on all three regulations carry
that shape:

- NIS2 — Art.21(2)(a)–(j) risk management, Art.23(4) staged
  incident notification.
- DORA — Art.5 governance, Art.6 ICT risk framework, Art.7 ICT
  systems, Art.8 identification, Art.9 protection and prevention,
  Art.10 detection, Art.11 response and recovery, Art.12 backup,
  Art.13 learning and evolving, Art.14 communication, Art.18
  classification, Art.19 reporting.
- CRA — Annex I §1 essential cybersecurity requirements, Annex I §2
  vulnerability handling, Art.13 manufacturer obligations, Art.14
  incident and exploited-vulnerability reporting.

The crosswalk tests gate the resolution end to end: a dangling
`control_ref`, a dangling `source-entry-id`, a dangling
`source-d3fend-entry-id`, or an OSCAL implemented-requirement that no
D3FEND crosswalk entry reaches fails the suite. A merge that drifts
off the substrate does not pass.

## Why the layout refactor matters

The DORA mappings have been per-article-clause from the start: one
file per atom, one atom per file. The NIS2 mappings carried Art.21
and Art.23 in a single combined YAML because the regulation reads as
a compact list and the early shape did not need to split it. As the
crosswalks landed — D3FEND on the second axis, the OSCAL component on
the regulatory axis — the combined file made it harder for a
contributor to open one clause without reading the others, and harder
for a reviewer to see the diff on one clause without scanning the
whole file.

The refactor is layout-only. The semantics it carries are the ones
PR #172 verified byte-equal against the prior file. What changes is
that a contributor who wants to edit Art.21(2)(d) now opens
`article-21-2-d.yaml`, and a reviewer who wants to see the diff on
Art.23 now reads `article-23.yaml`. The three OSCAL columns now share
not just a component shape but a directory layout, and the convention
is one that scales as further articles land.

## Why the n8n leg matters

The identity-compromise reference playbook had its temporal and
langgraph legs on canonical shape already; the n8n leg sat on a prior
hand-authored sketch from before the n8n emitter uplift (#122). The
SKELETON PR brings it onto the same `playbook.cacao.json` /
`regenerate.sh` / `workflow.n8n.json` / `README.md` shape every other
n8n example carries, with the emitted workflow produced by `tools.compile
--target n8n` rather than hand-authored. Deterministic regeneration is
verified — two runs of `regenerate.sh` produce byte-identical artifacts.

The cross-target canonical-layout sweep is now closed on
identity-compromise; the next legs in the sweep follow the same shape.

## Where the M0 line now stands

The M0 definition-of-done on the control map named two axes carried
over three regulatory columns. After this wave the regulatory axis
carries CORE on every canonical clause across NIS2, DORA, and CRA, on
a single OSCAL component-definition shape and a single per-article-
clause directory layout. The defensive-technique axis carries CORE on
NIS2, CORE under review on DORA, and the CRA leg queued behind it on
the same shape — the work named at the close of note #19 is the work
still queued.

The cross-target canonical sweep on reference playbooks carries
identity-compromise on three targets after this wave, sitting next to
the playbooks the prior waves already moved onto canonical shape.

## What the wave does not promise

It does not promise the regulatory axis is closed. New delegated and
implementing acts will land under NIS2, DORA, and CRA; new D3FEND
techniques will land in the upstream catalogue. The shape absorbs both
through the same resolver pass and the same per-article-clause layout
this wave commits to.

It does not promise the n8n reference layer is closed. The canonical
sweep walks every reference playbook onto the same shape; the playbooks
that have not yet been swept carry the prior layouts until their
canonical PRs land.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the CRA CORE closure
  ([Annex I §2 + Art.14 #170](https://github.com/secops-ng/secops-ng-framework/pull/170)),
  the DORA CORE closure
  ([Art.5 + Art.6 #171](https://github.com/secops-ng/secops-ng-framework/pull/171)),
  the NIS2 per-clause refactor
  ([EXTEND #172](https://github.com/secops-ng/secops-ng-framework/pull/172)),
  and the identity-compromise n8n canonical layout
  ([SKELETON #173](https://github.com/secops-ng/secops-ng-framework/pull/173)).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the nineteen that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the kanban, the auto-generated roadmap.

Walk one canonical clause on the substrate today, on any of the three
regulatory columns, and the controls catalogue answers, and the D3FEND
crosswalk answers, and the OSCAL component-definition answers — one
shape, one resolver, three columns at CORE on the canonical clauses.

More from the lanes as the CRA leg of the defensive-technique axis
lands and the canonical-layout sweep walks onto the next reference
playbook.
