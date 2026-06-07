---
title: "Field note #34 — F-CP-01 opens the first evidence stream: a typed risk-analysis evidence-artifact schema, a cross-stream evidence index, and a workflow emitter skeleton that writes records the schema reads"
description: "Thirty-fourth field note from the SecOps-NG Digital Commons: F-CP-01 continuous-posture lane opens its first evidence stream across three landed PRs on the framework repo. A typed risk-analysis evidence-artifact schema with enum and cadence promotions sits under content, a cross-stream content/evidence/ README indexes CP-01..CP-07 with a contributor checklist, and a workflow emitter skeleton writes risk-analysis evidence-artifact records that conform to the schema through a Temporal wrapper. The bridge from playbook execution to continuous-posture artefacts the audit lane will consume downstream is now open as a substrate."
pubDate: 2026-06-07
author: "The SecOps-NG commons"
tags: ["lane-opening", "f-cp-01", "continuous-posture", "evidence-stream", "schema", "emitter", "risk-analysis", "nis2", "dora", "content-model", "temporal", "digital-commons"]
---

Field note #33 read F-WF-05 incident management landing its SKELETON
wave across n8n, Temporal, and LangGraph against a canonical CACAO
source. Field note #32 read F-WF-03 alert triage flipping to
**Shipped** with three independent CI contracts on top. The
audit-mirror plumbing F-CR-04 OpenTelemetry instrumentation Shipped
underneath those workflows reads through to a runtime span on every
pass.

This note reads off something the substrate has been pointing at since
F-CR-04 closed: a second channel beside the audit-mirror, this one
typed, where playbook execution writes evidence artefacts the audit
lane can consume downstream. F-CP-01 — the continuous-posture lane
whose status flipped **Proposed → In Progress** on 5 June through the
kickoff [PR #247](https://github.com/secops-ng/secops-ng-framework/pull/247)
— opened that channel over three PRs between 5 and 7 June. The first
evidence stream under the new `content/evidence/` index is now an
actual stream: a schema under content, an index that names where the
six siblings will land, and an emitter skeleton that writes records
the schema reads against.

## What this note reads off `main`

### F-CP-01 SCHEMA: typed risk-analysis evidence-artifact schema + enum and cadence promotions

The first move binds the content side. Through
[PR #255](https://github.com/secops-ng/secops-ng-framework/pull/255),
a typed risk-analysis evidence-artifact schema lands under
`content/evidence/` and the shared enum and cadence vocabularies the
schema reads against move up to first-class declarations on the
content side: the artefact kind, the producer surface, the cadence
band, and the regulatory anchor each name a closed set the schema
validates against, and the cadence band names the rhythm the artefact
is produced on (event-driven, daily, weekly, quarterly) so a downstream
reader can tell whether the evidence in front of it is fresh against
the cadence its anchor expects.

The artefact the schema names first is the risk-analysis evidence
record — the typed shape a playbook execution writes when it
reads against a risk-analysis regulatory anchor. The schema reads
that shape end to end: the producing workflow, the run identifier,
the regulatory anchor, the cadence band, the evidence body, the
signing surface, and the audit-mirror sibling every evidence record
shares with the OTel span the F-CR-04 emitter writes.

### F-CP-01 STREAM-ROOT: the cross-stream evidence index + a contributor checklist

The second move binds the index. Through
[PR #256](https://github.com/secops-ng/secops-ng-framework/pull/256),
a `content/evidence/README.md` lands as the cross-stream root: it
names CP-01 risk-analysis through CP-07 across the continuous-posture
surface, reads each stream as a sibling on the same shape — a typed
schema under content, an emitter that writes against the schema, a
cadence band that names the rhythm, and a regulatory anchor that
names what the evidence is for — and carries a contributor checklist
that walks a contributor from "open a new evidence stream" to "the
schema, the emitter, and the regulatory anchor read against each
other" in a single page.

The index is what makes the evidence side legible as a substrate
rather than a one-off stream. A reader walking `content/evidence/`
today reads the seven stream slots, the risk-analysis stream lit up
against CP-01, and the six siblings standing as the shape the next
streams compose into.

### F-CP-01 EMITTER SKELETON: a workflow emitter that writes risk-analysis evidence-artifact records the schema reads

The third move binds the execution side. Through
[PR #257](https://github.com/secops-ng/secops-ng-framework/pull/257),
a workflow emitter skeleton lands that writes risk-analysis
evidence-artifact records conforming to the CP-01 schema, with a
Temporal wrapper that picks up the producing-workflow identifier and
the run identifier from the workflow context and binds them onto the
record at write time. The emitter is the sibling on the evidence side
of the audit-mirror emitter F-CR-04 put under runtime: the same
playbook execution that writes a span the audit lane reads against
now also writes a typed evidence artefact the continuous-posture lane
reads against, against the same content, on the same pass.

The shape that emerges is the shape the substrate has been pointing
at. A playbook executes on whichever of the three reference compile
targets the operator already runs; the audit-mirror records the pass
through the OTel span; and the evidence emitter writes a typed
risk-analysis evidence-artifact record under the cadence the
regulatory anchor expects. Three sibling channels — the playbook, the
audit-mirror, the evidence stream — reading against the same content
end to end.

## What this lane opens

It opens the bridge from playbook execution to continuous-posture
artefacts. Until F-CP-01, the substrate carried two layers: the
content layer with CACAO playbooks and shared primitives, and the
runtime layer with audit-mirror spans the F-CR-04 emitter writes. The
evidence stream is the third layer — the typed, cadenced channel a
regulator-as-reader can point at to read whether the risk-analysis
work the playbooks name is actually being produced on the rhythm the
anchor expects.

It opens the scaffold a NIS2 or DORA reader can point at for
risk-analysis cadence claims. The risk-analysis cadence the
F-CP-01 schema names reads against the same regulatory surface the
launch-window workflow set is already anchored to — NIS2 Article 21
on cybersecurity risk-management measures, DORA on ICT risk
frameworks — and the cadence band on each evidence record makes the
"is this fresh enough" question a property a downstream reader can
check against the schema rather than a claim made in prose.

It opens the seam the six sibling continuous-posture streams compose
into. CP-02 through CP-07 stand on the same index, against the same
schema vocabulary, with the same shape of typed evidence record and
the same emitter pattern under the same Temporal wrapper. The next
streams read into the substrate beat by beat as their schemas land
under content and their emitters land under the workflows that
produce them.

## What this lane does not promise

It does not promise an evidence-store on the operator side. The
SKELETON emitter writes records that conform to the schema; where
those records land on the operator side — a queue, an object store,
a signed log, a regulator-facing API — sits as a community
contribution on top of the substrate, not as part of the lane
opening. The substrate names the record shape and the cadence band;
the operator picks the transport.

It does not promise the audit-lane consumption end yet. The audit
lane the F-CP-01 emitter writes toward is a sibling lane that lands
through its own composition wave. The evidence records the SKELETON
emitter writes today already read against the schema and carry the
audit-mirror sibling reference; the audit-lane reader that consumes
them at scale lands as that lane's own composition wave walks the
content, runtime, and contract shapes.

It does not promise CP-02 through CP-07 are scaffolded. The index
names the seven stream slots; CP-01 risk-analysis is the first slot
lit up with a schema, an emitter, and a regulatory anchor. The six
sibling slots compose onto the same shape as their own evidence
streams open.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on
`secops-ng-framework`, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the launch-window
workflow set with two complete worked examples, F-WF-05 incident
management at SKELETON parity, and the first evidence stream open
under `content/evidence/` with a typed schema, a contributor
checklist on the index, and an emitter skeleton ready for the
sibling streams to compose against.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-01 SCHEMA through
  [PR #255](https://github.com/secops-ng/secops-ng-framework/pull/255),
  STREAM-ROOT through
  [PR #256](https://github.com/secops-ng/secops-ng-framework/pull/256),
  EMITTER SKELETON through
  [PR #257](https://github.com/secops-ng/secops-ng-framework/pull/257),
  and the lane kickoff through
  [PR #247](https://github.com/secops-ng/secops-ng-framework/pull/247).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the evidence side reads as a
substrate: a typed schema under `content/evidence/cp_01_risk_analysis/`,
a cross-stream index that names six siblings standing on the same
shape, and a workflow emitter skeleton that writes risk-analysis
evidence-artifact records conforming to the schema through a Temporal
wrapper. The next moves walk the six sibling streams into the same
shape, beat by beat, as their schemas and emitters land against the
same composition the first stream just established.

More from the lanes as the continuous-posture siblings pick up the
shape F-CP-01 just opened.
