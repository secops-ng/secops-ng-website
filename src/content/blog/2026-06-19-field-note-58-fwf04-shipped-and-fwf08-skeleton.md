---
title: "Field note #58 — detection-engineering ships across three targets with byte-parity goldens, and iam-auditor opens its SKELETON"
description: "Fifty-eighth field note from the SecOps-NG Digital Commons: F-WF-04 detection-engineering closes a full three-target CORE wave (n8n + Temporal + LangGraph rule-lifecycle + per-rule effectiveness snapshots) with EXTEND-goldens locking byte-parity, and F-WF-08 iam-auditor opens a capability-inventory SKELETON next to its GDPR data-flow doc."
pubDate: 2026-06-19
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-04", "f-wf-08", "detection-engineering", "iam-auditor", "rule-lifecycle", "capability-inventory", "three-target", "n8n", "temporal", "langgraph", "byte-parity", "nis2", "gdpr", "digital-commons"]
---

The last field note read two lanes opening: codebase-vuln-management
landed its SKELETON plus a three-target CORE fan-out in a single
window, and detection-engineering opened a rule-lifecycle SKELETON
next to a per-rule-version effectiveness-snapshot schema stub that
already read against the F-CP-06 continuous-posture shape.

This note reads the next move on both fronts. The
detection-engineering lane closes its three-target CORE wave and
flips to Shipped on byte-parity goldens. A new workflow lane —
iam-auditor — opens its SKELETON in the same window.

## What landed

### F-WF-04 — detection-engineering: three-target CORE wave + EXTEND goldens, Shipped

The rule-lifecycle scaffold the previous window stubbed in now
compiles across all three reference targets, with a per-rule-version
effectiveness snapshot pinned at every transition:

- [PR #335](https://github.com/secops-ng/secops-ng-framework/pull/335)
  ships the **n8n** rule-effectiveness snapshot emitter.
- [PR #336](https://github.com/secops-ng/secops-ng-framework/pull/336)
  ships the **n8n** rule-lifecycle workflow emitter.
- [PR #337](https://github.com/secops-ng/secops-ng-framework/pull/337)
  ships the **Temporal** rule-lifecycle workflow emitter.
- [PR #338](https://github.com/secops-ng/secops-ng-framework/pull/338)
  ships the **LangGraph** rule-lifecycle workflow plus its per-rule
  effectiveness-snapshot node.
- [PR #339](https://github.com/secops-ng/secops-ng-framework/pull/339)
  ships the **EXTEND-goldens** pass for n8n — byte-parity golden for
  the detection-engineering on-disk shape — and flips the lane to
  Shipped on the ROADMAP.

Five PRs, one window. The rule-lifecycle (propose → review → ship →
measure) now compiles byte-identical artifacts across n8n, Temporal,
and LangGraph, and every transition carries a per-rule-version
effectiveness snapshot that reads against the same shape the F-CP-06
continuous-posture row pinned last epic.

### F-WF-08 — iam-auditor: capability-inventory SKELETON opens

Through
[PR #340](https://github.com/secops-ng/secops-ng-framework/pull/340),
a new workflow lane opens: iam-auditor. The SKELETON is a CACAO v2
playbook scaffold for capability inventory — the read that asks
"what can each identity actually do, and against which system?" —
and it ships with its GDPR data-flow doc in the same push.

Content-only at this stage: the playbook scaffold and the data-flow
doc go down together. The CORE fan-out into n8n, Temporal, and
LangGraph follows the same SCHEMA → emitter → activity → node
sequence the prior workflow lanes converged on.

## Why this wave reads as the next layer

Two reads pin this against the substrate the last few windows laid:

- **F-WF-04 reads the closed-loop seam through to Shipped.** The
  effectiveness-snapshot stub the previous window left open is now
  wired through three targets, with byte-parity goldens locking the
  on-disk shape. A rule version moving through the lifecycle emits
  effectiveness on every transition in the same shape the F-CP-06
  stream collects. The loop the previous field note flagged as
  "the read that closes" — a rule's effectiveness landing on the
  continuous-posture row at every lifecycle step — is closed at the
  emitter layer on the catalogue.
- **F-WF-08 opens content-first, with the GDPR data-flow doc in the
  same push as the playbook scaffold.** That is the shape the
  cookbook has been converging on since the F-GD-01 data-flow lane
  closed: a new workflow lane's content layer ships next to its
  ROPA-mapped data-flow doc in one motion, so the GDPR seam is
  pinned before any compile target picks the lane up. The
  iam-auditor capability-inventory shape will fan out into three
  reference compile targets, but the data-flow read is already
  documented on the catalogue today.

## What this gives an operator

An operator running the reference cookbook on any of the three
reference framework targets can now stand up a detection-engineering
workflow whose rule-lifecycle emits byte-identical artifacts across
n8n, Temporal, and LangGraph. Each rule version's transitions carry
an effectiveness snapshot in the same on-disk shape the
continuous-posture stream collects, so detection output composes
into the compliance-evidence model without translation.

On the iam-auditor side, the capability-inventory SKELETON is the
playbook scaffold the next CORE-FANOUT will fan out from. The GDPR
data-flow doc is shipped alongside the scaffold rather than trailing
it, which means the lawful-basis read on the lane is documented
before the first compile target picks it up — the same content-first
discipline F-GD-01 closed on the existing cookbook now applies to
new lanes as they open.

## What's open behind this wave

- **F-WF-04 EXTEND-goldens across Temporal and LangGraph.** The n8n
  byte-parity golden landed with #339 and flipped the lane to
  Shipped on the ROADMAP; per-target byte-parity goldens for
  Temporal and LangGraph follow in the next windows.
- **F-WF-04 ↔ F-CP-06 catalogue wiring.** The effectiveness emitter
  is wired at every target. The next read is plumbing a rule
  version's effectiveness snapshots into the F-CP-06 stream on the
  catalogue's continuous-posture row so an auditor-bundle pull at
  any moment carries the latest rule effectiveness next to the
  other six evidence streams.
- **F-WF-08 CORE-FANOUT.** The capability-inventory SKELETON is the
  content scaffold; the three-target CORE-FANOUT — n8n emitter,
  Temporal activity, LangGraph node — follows the same SCHEMA-first
  sequence the previous workflow lanes used. EXTEND-goldens lock
  on-disk parity afterwards.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-04 three-target CORE wave through
  [PR #335](https://github.com/secops-ng/secops-ng-framework/pull/335),
  [PR #336](https://github.com/secops-ng/secops-ng-framework/pull/336),
  [PR #337](https://github.com/secops-ng/secops-ng-framework/pull/337),
  and
  [PR #338](https://github.com/secops-ng/secops-ng-framework/pull/338),
  EXTEND-goldens + ROADMAP flip through
  [PR #339](https://github.com/secops-ng/secops-ng-framework/pull/339),
  and F-WF-08 iam-auditor SKELETON through
  [PR #340](https://github.com/secops-ng/secops-ng-framework/pull/340).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-seven that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two workflow lanes moved this window. detection-engineering closed
its three-target CORE wave and flipped to Shipped, with byte-parity
locked on n8n and the same shape staged for Temporal and LangGraph
goldens. iam-auditor opened its SKELETON with the GDPR data-flow
doc in the same push, so the lawful-basis read is on the catalogue
before any compile target picks the lane up. The next field notes
will read the remaining EXTEND-goldens on F-WF-04 and the
CORE-FANOUT that follows on F-WF-08.
