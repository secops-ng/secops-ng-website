---
title: "Field note #56 — F-CP-06 effectiveness, F-CP-07 access, F-WF-09 auditor-bundle, and F-GD-01 GDPR data-flow all flip to Shipped: the seven-stream compliance-evidence model closes"
description: "Fifty-sixth field note from the SecOps-NG Digital Commons: a milestone-closeout wave. Four ROADMAP entries flip to Shipped in one window — F-CP-06 (effectiveness evidence), F-CP-07 (access evidence), F-WF-09 (auditor-bundle workflow), and F-GD-01 (GDPR data-flow / ROPA adoption per cookbook workflow). The seven-stream compliance-evidence model (F-CP-01..F-CP-07) is now complete on the catalogue, the auditor-bundle workflow that consumes those seven streams is shipped, and the GDPR data-flow lane covers the full reference cookbook set."
pubDate: 2026-06-18
author: "The SecOps-NG commons"
tags: ["shipping-update", "milestone-closeout", "f-cp-06", "f-cp-07", "f-wf-09", "f-gd-01", "effectiveness-evidence", "access-evidence", "auditor-bundle", "gdpr-data-flow", "ropa", "nis2", "continuous-posture", "digital-commons"]
---

The last field note read F-WF-09 graduating from SKELETON to a
three-target CORE-FANOUT with two worked examples, F-CP-07 wiring
its Temporal access emitter into the incident-management bundle
write-path with a drift SKELETON queued behind it, and F-CP-06
opening the effectiveness evidence stream with the full SCHEMA →
CORE-FANOUT → byte-parity-goldens sequence in one shipping window.

This note reads the closeout wave: four ROADMAP entries flip to
Shipped in one window. The seven-stream compliance-evidence model
is now complete on the catalogue; the auditor-bundle workflow
that stitches those seven streams together is shipped; and the
GDPR data-flow lane covers every workflow in the reference
cookbook.

## What flipped on ROADMAP

### F-CP-06 — effectiveness evidence stream → Shipped

Through
[PR #327](https://github.com/secops-ng/secops-ng-framework/pull/327),
the EXTEND-drift SKELETON for the effectiveness stream lands
under `content/evidence/effectiveness/drift/` — the same drift
shape every other continuous-posture stream carries on its drift
lane.

Through
[PR #328](https://github.com/secops-ng/secops-ng-framework/pull/328),
the ROADMAP status for F-CP-06 flips to **Shipped**. The
acceptance criteria the lane was tracked against — SCHEMA + CORE
emitter fanned out across n8n, Temporal, and LangGraph + per-target
byte-parity goldens + the NIS2 Art. 21(2)(f) mapping stub + the
drift-detection SKELETON — are all on `main`.

### F-CP-07 — access evidence stream → Shipped

The same ROADMAP-flip PR
([#328](https://github.com/secops-ng/secops-ng-framework/pull/328))
flips F-CP-07 to **Shipped**. The lane carries the full sequence
from earlier waves: the SCHEMA under
`content/evidence/access/`, the CORE-FANOUT emitter across n8n,
Temporal, and LangGraph, per-target byte-parity goldens, the
drift-detection SKELETON, and the write-path SKELETON wiring the
Temporal access emitter into the incident-management auditor-bundle.

### F-WF-09 — auditor-bundle workflow → Shipped

The same PR flips F-WF-09 to **Shipped**. The acceptance criterion
on the lane reads "workflow consumes the seven evidence streams
(F-CP-01..F-CP-07) and emits a single bundle suitable for an
auditor handover." With F-CP-06 and F-CP-07 now both Shipped,
that criterion is met: the auditor-bundle collector lands a
three-target CORE-FANOUT, two worked examples (vuln-intake and
incident-management) sit behind it on the reference cookbook, and
the bundle layer reads against all seven continuous-posture
streams — incidents, access, supply-chain, crypto-attestation,
effectiveness, plus the two earlier streams the F-CP epic already
shipped.

### F-GD-01 — GDPR data-flow / ROPA adoption per cookbook workflow → Shipped

Through
[PR #329](https://github.com/secops-ng/secops-ng-framework/pull/329),
F-GD-01 flips to **Shipped**. The lane tracked GDPR Art. 30
record-of-processing adoption across the reference cookbook: a
canonical data-flow template under `content/mappings/gdpr/` plus
a per-workflow data-flow document for every workflow on the
reference catalogue. The closeout wave that landed those documents
across the full cookbook set merged in the previous shipping
window; this PR is the ROADMAP-flip that follows the work.

## Why this wave reads as a milestone, not just four flips

The four flips compose against the same substrate. Pulling them
apart:

- **F-CP-06 closes the continuous-posture row.** The
  continuous-posture row of the catalogue now reads **incidents,
  supply-chain, crypto-attestation, access, effectiveness, plus
  the two earlier F-CP streams** — seven evidence streams in
  total, each carrying the same SCHEMA-first shape, the same
  three-target compile fanout, and the same per-target byte-parity
  goldens locking the on-disk shape on every push. There are no
  more open lanes on the F-CP epic.
- **F-WF-09 reads against all seven streams.** The acceptance
  criterion on F-WF-09 is that the workflow consumes the seven
  F-CP streams. That criterion required F-CP-01..F-CP-07 to ship
  first. With F-CP-06 and F-CP-07 closing in the same window,
  F-WF-09's dependency edge resolves and the workflow flips on the
  same PR. The auditor-bundle layer is no longer scaffolding —
  it's the shipped layer that picks up every continuous-posture
  stream the framework emits and packages them for handover.
- **F-GD-01 closes the GDPR data-flow lane across every workflow.**
  Article 30 ROPA records are no longer template-only. Every
  reference cookbook workflow carries its data-flow document next
  to the workflow itself, in the same place an operator already
  reads for compile targets and evidence emitters. The
  regulator-facing GDPR surface reads against the cookbook the
  same way the NIS2-facing surface does.

That composition is the read against the catalogue this note
pins. The compliance-evidence model the project has been building
toward since the F-CP epic opened — seven SCHEMA-first streams,
each fanned out across three reference framework targets, each
locked by per-target byte-parity goldens, all stitched together by
an auditor-bundle workflow that reads against all seven, plus a
parallel GDPR data-flow lane covering the same cookbook — is
complete on `main`.

## What this gives an operator

Concretely: an operator running the reference cookbook on any of
the three reference framework targets (n8n, Temporal, or
LangGraph) can now stand up the seven continuous-posture evidence
streams, wire the auditor-bundle collector against them, and emit
a bundle that picks up incidents, access, supply-chain,
crypto-attestation, effectiveness, plus the two earlier F-CP
streams in a single hand-off. The bundle shape is byte-pinned
across compile targets — the same SCHEMA emits a byte-identical
on-disk shape on every target. And the GDPR data-flow document
for every workflow on the catalogue is alongside the workflow it
describes, so the ROPA surface reads off the same source tree as
the runtime artifacts.

The regulator-facing anchor on this wave is the NIS2 Art. 21(2)(f)
mapping stub on F-CP-06 ("policies and procedures to assess the
effectiveness of cybersecurity risk-management measures") and the
GDPR Art. 30 anchor on F-GD-01. Both are now backed by shipped,
SCHEMA-pinned, three-target on-disk shapes — not narrative.

## What's open behind this milestone

The compliance-evidence model is closed; the lanes behind it open
the next layer:

- **F-WF-09 next layers.** Population passes that wire more
  reference cookbook workflows into the auditor-bundle collector,
  and a sealing pass that pins the bundle cryptographically, sit
  on the cards behind the shipped F-WF-09 lane.
- **F-GD-02 lawful-basis CI guard.** The SKELETON the previous
  note read sits behind a CORE-FANOUT and goldens lane of its
  own; the GDPR Art. 6 anchor follows the same shape the F-CP
  streams used.
- **F-WF-04 rule lifecycle.** The detection-engineering lane
  picks up a SKELETON next to the per-rule-version effectiveness
  snapshot stub — the F-CP-06 effectiveness shape composing into
  a workflow above.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-06 EXTEND-drift SKELETON through
  [PR #327](https://github.com/secops-ng/secops-ng-framework/pull/327),
  F-CP-06 / F-CP-07 / F-WF-09 ROADMAP flip through
  [PR #328](https://github.com/secops-ng/secops-ng-framework/pull/328),
  and F-GD-01 ROADMAP flip through
  [PR #329](https://github.com/secops-ng/secops-ng-framework/pull/329).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The seven-stream compliance-evidence model is complete on the
catalogue. The auditor-bundle workflow that reads against those
seven streams is shipped. The GDPR data-flow lane covers every
workflow on the reference cookbook. What composes on top of that
substrate — population, sealing, lawful-basis guards, rule
lifecycle — is what the next field notes will read.
