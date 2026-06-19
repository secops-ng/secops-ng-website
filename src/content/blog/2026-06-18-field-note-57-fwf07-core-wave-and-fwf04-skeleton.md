---
title: "Field note #57 — codebase-vuln-management completes a three-target CORE wave, and detection-engineering opens its SKELETON"
description: "Fifty-seventh field note from the SecOps-NG Digital Commons: F-WF-07 codebase-vuln-management lands a SKELETON plus a full three-target CORE fan-out for the disclosure-timeline emitter (n8n + Temporal + LangGraph), and F-WF-04 detection-engineering opens its rule-lifecycle SKELETON next to a per-rule-version effectiveness-snapshot schema stub."
pubDate: 2026-06-18
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-07", "f-wf-04", "codebase-vuln-management", "detection-engineering", "disclosure-timeline", "rule-lifecycle", "three-target", "n8n", "temporal", "langgraph", "nis2", "cra", "digital-commons"]
---

The last field note read a milestone closeout: the seven-stream
compliance-evidence model finished on the catalogue, the
auditor-bundle workflow shipped against those seven streams, and the
GDPR data-flow lane closed across every workflow on the reference
cookbook. That window pinned the substrate.

This note reads what composes on top of that substrate. Two workflow
lanes open in the same shipping window — one of them the full
SKELETON → three-target CORE-FANOUT sequence in a single push.

## What landed

### F-WF-07 — codebase-vuln-management: SKELETON + three-target CORE in one window

Through
[PR #331](https://github.com/secops-ng/secops-ng-framework/pull/331),
the codebase-vuln-management lane lands its SKELETON: an SBOM-driven
dependency-review shape and the disclosure-timeline schema that
captures the lifecycle of a dependency finding from intake through
remediation or coordinated disclosure. The schema reads against the
NIS2 Art. 21(2)(e) anchor — supply-chain security including
vulnerabilities related to the relationships between the entity and
its direct suppliers — and against the CRA's coordinated-disclosure
obligation for products with digital elements.

The three-target CORE-FANOUT for that schema lands in the same
shipping window:

- [PR #332](https://github.com/secops-ng/secops-ng-framework/pull/332)
  ships the **n8n** emitter for the disclosure-timeline shape.
- [PR #333](https://github.com/secops-ng/secops-ng-framework/pull/333)
  ships the **Temporal** activity for the same shape.
- [PR #334](https://github.com/secops-ng/secops-ng-framework/pull/334)
  ships the **LangGraph** node for the same shape.

Three targets, one schema, one on-disk shape per push. The same
SCHEMA-first → CORE-FANOUT sequence the F-CP streams used to build
their continuous-posture rows is the sequence the workflow lanes
above them now use too.

### F-WF-04 — detection-engineering: SKELETON opens

Through
[PR #330](https://github.com/secops-ng/secops-ng-framework/pull/330),
the detection-engineering lane opens its SKELETON: a rule-lifecycle
scaffold modelling propose → review → ship → measure, plus a
per-rule-version effectiveness-snapshot schema stub.

The effectiveness-snapshot stub is the seam the previous shipping
window left open. F-CP-06 closed the effectiveness evidence stream on
the catalogue; F-WF-04 is where that effectiveness shape composes
into a workflow above. A rule version that ships through the
lifecycle carries an effectiveness snapshot at every transition, and
the snapshot shape is the same SCHEMA the F-CP-06 stream pins.

## Why this wave reads as the next layer

Two reads pin this against the substrate that closed last window:

- **F-WF-07 is a workflow lane reaching three-target CORE in the same
  push as its SKELETON.** That is the shape the cookbook converges on
  as the F-CP epic's substrate stabilises. The SCHEMA-first content
  goes down in one PR; the three reference compile targets pick it up
  in three follow-on PRs in the same window. There is no narrative
  layer between "schema exists" and "the schema emits a byte-identical
  on-disk shape on every supported target." The codebase-vuln-management
  disclosure-timeline now has that shape on `main`.
- **F-WF-04 reads against F-CP-06's effectiveness shape directly.** The
  per-rule-version effectiveness-snapshot schema stub is the same
  shape the continuous-posture row pinned. A detection rule shipping
  through propose → review → ship → measure carries the same
  effectiveness evidence shape an auditor reads against on the
  compliance-evidence model. The two lanes compose: a rule emits
  effectiveness; the F-CP-06 stream collects effectiveness; the
  F-WF-09 auditor bundle reads against the stream. One on-disk shape
  threads the whole stack.

## What this gives an operator

An operator running the reference cookbook on any of the three
reference framework targets can now stand up a codebase
vulnerability-management workflow whose disclosure-timeline emitter
lands byte-identical artifacts across n8n, Temporal, and LangGraph.
The lane reads against NIS2 Art. 21(2)(e) on the supply-chain anchor
and against the CRA on coordinated disclosure for products with
digital elements; both anchors point to the same SCHEMA-pinned
on-disk shape.

On the detection-engineering side, the rule-lifecycle SKELETON is
the scaffold the next CORE-FANOUT will fan out from. The
effectiveness-snapshot stub already reads against the F-CP-06
shape, so the seam between detection-engineering output and
continuous-posture evidence collection is wired before either lane
has its CORE-FANOUT in place — the shape is set.

## What's open behind this wave

- **F-WF-07 next layers.** Per-target byte-parity goldens for the
  disclosure-timeline emitter sit behind the CORE-FANOUT that just
  landed, plus the EXTEND-tests and EXTEND-drift passes that every
  other lane carries on its drift surface.
- **F-WF-04 CORE-FANOUT.** The rule-lifecycle SKELETON is the
  scaffold; the three-target CORE-FANOUT for it follows the same
  SCHEMA → emitter → activity → node sequence F-WF-07 just executed.
- **F-WF-04 ↔ F-CP-06 wiring.** The effectiveness-snapshot stub on
  F-WF-04 is currently a stub. Wiring it through to the F-CP-06
  effectiveness emitter so a rule version's effectiveness lands on
  the continuous-posture row at every lifecycle transition is the
  read that closes the loop.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-04 SKELETON through
  [PR #330](https://github.com/secops-ng/secops-ng-framework/pull/330),
  F-WF-07 SKELETON through
  [PR #331](https://github.com/secops-ng/secops-ng-framework/pull/331),
  and the three-target CORE fan-out for the disclosure-timeline
  emitter through
  [PR #332](https://github.com/secops-ng/secops-ng-framework/pull/332),
  [PR #333](https://github.com/secops-ng/secops-ng-framework/pull/333),
  and
  [PR #334](https://github.com/secops-ng/secops-ng-framework/pull/334).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

The substrate closed last window; the layer above is opening. A
codebase-vuln-management workflow now emits a disclosure timeline
on three targets from one schema, and a detection-engineering
workflow has its rule-lifecycle scaffold next to an
effectiveness-snapshot shape that already reads against the
continuous-posture row. The next field notes will read the goldens
that lock those shapes and the CORE-FANOUT that follows on F-WF-04.
