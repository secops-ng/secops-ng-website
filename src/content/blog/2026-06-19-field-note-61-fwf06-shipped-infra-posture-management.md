---
title: "Field note #61 — infrastructure-posture management closes its three-target CORE wave and flips to Shipped, reading the continuous variant of the posture-audit lane against NIS2 Article 21(2)(a)"
description: "Sixty-first field note from the SecOps-NG Digital Commons: F-WF-06 infrastructure-posture management closes its CORE wave across n8n, Temporal, and LangGraph behind a single canonical playbook, lands the posture-evidence schema and three byte-parity goldens, gets its cookbook walkthrough, and flips on the ROADMAP — reading as the scheduled re-execution variant of the F-WF-02 posture-audit lane and filling the continuous-posture column of NIS2 Article 21(2)(a)."
pubDate: 2026-06-19
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-06", "infrastructure-posture-management", "posture-audit", "posture-evidence", "nis2", "article-21", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph", "cookbook"]
---

The last field note read two lanes flipping to Shipped in the same
window — codebase-vuln-management and iam-auditor — and a third lane,
continuous infrastructure-posture management, opening a SKELETON
behind them. The NIS2 Article 21(2) control-family row read across
four columns of the regulation as portable content with worked
examples on three reference targets, not as a plan.

This note reads the immediate next move: the SKELETON closes. The
F-WF-06 infrastructure-posture management lane lands its canonical
core_body, its three worked examples on n8n, Temporal, and LangGraph,
its three byte-parity goldens, and its cookbook walkthrough — and
flips to Shipped on the ROADMAP in the same window the SKELETON
opened. The continuous-posture column of Article 21(2)(a) is no
longer a scaffold; it is the same posture-evidence shape the
event-side posture-audit lane already ships, driven by a scheduler
instead of an incident.

## What landed

### F-WF-06 — infrastructure-posture management closes its CORE wave

The SKELETON merged earlier in the same window through
[PR #353](https://github.com/secops-ng/secops-ng-framework/pull/353)
— a CACAO v2 playbook scaffold under
`content/playbooks/infra_posture_management/`, three worked example
shells under `examples/{n8n,temporal,langgraph}/infra_posture_management/`,
and the posture-evidence schema at
`schemas/evidence/posture.schema.json`, with the NIS2 Article
21(2)(a) mapping wired in from day one.

The CORE wave closes behind it through
[PR #354](https://github.com/secops-ng/secops-ng-framework/pull/354).
The canonical playbook now binds three deterministic primitives end
to end:

- **`collect.collect_posture_state`** — the posture-state collector
  that reads the target inventory and emits a normalised
  posture-state record. The collector default is a locally-runnable
  inventory reader against EU-hostable runtimes; no hosted posture
  SaaS, no non-EU default endpoint, no vendor SDK bundled into the
  playbook.
- **`controls.evaluate_controls`** — the control-evaluation primitive
  that reads the normalised posture-state against the control
  catalogue and emits per-control findings keyed by control id, with
  every finding carrying the canonical NIS2 Article 21(2) mapping
  row it sits against.
- **`artifact.build_posture_artifact`** — the posture-evidence
  builder that composes the per-control findings into a single
  posture-evidence record validated against
  `schemas/evidence/posture.schema.json`. The same record reads
  byte-identically across the three reference targets.

Zero placeholder bindings remain on the canonical core_body. The
three worked examples under `examples/{n8n,temporal,langgraph}/infra_posture_management/`
each carry a compiled artifact, a regenerator, a README, and a
byte-stable posture-evidence snapshot. Three byte-parity goldens —
one per target — pin the compiled workflow against the emitter and
the mirrored playbook against the canonical source.

Through
[PR #355](https://github.com/secops-ng/secops-ng-framework/pull/355),
**F-WF-06 flips to Shipped** on the ROADMAP and gets its cookbook
walkthrough — playbook to three worked examples to posture-evidence
artifact, with the replay story told end-to-end.

## Why this reads as the continuous variant of the posture-audit lane

The Shipped F-WF-02 posture-audit lane reads the same posture-state
on the **event** side — when an incident, a control change, or a
compliance review triggers a one-shot audit. F-WF-06 reads the same
posture-state on the **continuous** side — a scheduler re-executes
the same canonical playbook on a cadence the operator sets, against
the same `schemas/evidence/posture.schema.json` shape, with the same
deterministic per-target binding.

Two reads of the same control family, sharing one evidence schema:

- **The collector** — `collect.collect_posture_state` — is the same
  primitive on both lanes. The continuous lane reads it on a cadence;
  the audit lane reads it on a trigger.
- **The evaluator** — `controls.evaluate_controls` — is the same
  primitive on both lanes. Per-control findings carry the same NIS2
  Article 21(2) mapping row regardless of which lane emitted them.
- **The artifact** — the posture-evidence record on
  `schemas/evidence/posture.schema.json` — is byte-identical between
  a continuous run and a scheduled one. An auditor reading the
  evidence stream does not need to know which lane produced any given
  record; the shape is the same and the replay is the same.

The continuous-posture lane is the scheduled re-execution variant of
the audit lane, not a parallel design. That is the discipline the
catalogue keeps reaching for — one schema, one set of primitives,
one replay story, multiple read modes.

## Where this sits against NIS2 Article 21(2)(a)

The lane sits against
**[NIS2 Article 21(2)(a)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)**
— "policies on risk analysis and information system security" — on
the continuous-posture read. The
[NIS2 Article 21(2)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
row, read column by column:

- **(a) risk analysis and information system security policies** —
  F-WF-01 risk-management is Shipped on the event side, and
  **F-WF-06 infrastructure-posture flips to Shipped in this window**
  on the continuous side. The same control family now reads on both
  cadences.
- **(b) incident handling** — F-WF-02 incident-management Shipped,
  with the F-CP-04 incident-evidence stream against it.
- **(c) business continuity and crisis management** — read by the
  cookbook's continuity artifacts on the risk-management side.
- **(e) security in network and information systems acquisition,
  development and maintenance, including vulnerability handling
  and disclosure** — F-WF-07 codebase-vuln-management Shipped.
- **(f) policies and procedures to assess the effectiveness of
  cybersecurity risk-management measures** — F-CP-06 effectiveness
  stream Shipped.
- **(i) human resources security, access control policies and
  asset management** — F-WF-08 iam-auditor Shipped.
- **(j) the use of multi-factor authentication or continuous
  authentication solutions** — read by the iam-auditor capability
  inventory on the auth-posture side.

The continuous-posture column is the read that closes column (a) for
operators running on a cadence rather than a trigger — regulated
infrastructure typically wants both.

## What this gives an operator

An operator running the reference cookbook against any of n8n,
Temporal, or LangGraph can now stand up a continuous-posture lane
alongside the event-side posture-audit lane already on the catalogue:

- A **scheduled posture run** that fires the canonical
  infra_posture_management playbook on whatever cadence the
  scheduler is set to — hourly, daily, on push, whatever the
  operator's runbook needs.
- A **posture-evidence record** on
  `schemas/evidence/posture.schema.json` written to disk on every
  run, byte-identical across n8n, Temporal, and LangGraph, replay-
  tested by per-target goldens.
- A **shared control evaluation** with the event-side audit lane —
  the same `controls.evaluate_controls` primitive, the same
  per-control findings shape, the same NIS2 Article 21(2) mapping
  row carried on every finding.

The posture-evidence stream is a candidate for the F-WF-09
auditor-bundle composition alongside incident-evidence,
disclosure-timeline, access-evidence, and the other streams the row
already carries. A single ask against the auditor bundle keeps
returning a coherent set of evidence records as the row fills out.

## What's open behind this wave

- **Auditor-bundle composition against the posture-evidence stream.**
  The F-WF-09 auditor-bundle has another candidate stream to
  compose — the posture-evidence record from F-WF-06 — already on
  the evidence schema row and already replay-tested across all
  three reference targets.
- **The remaining NIS2 Article 21(2) columns.** The columns the row
  has not yet reached are the ones the next workflow lanes will
  arrive against. Each new lane will arrive content-first with its
  data-flow doc in the same wave as the playbook scaffold, so the
  seven-section GDPR posture stays a property of the repository
  rather than a discipline of review.
- **Continuous-posture cadence guidance.** The cookbook walkthrough
  documents the scheduled re-execution shape; the operator-side
  guidance on cadence choices (run interval, retention, evidence-
  record fan-in) is a community-contribution lane the next field
  notes will read against.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-06 SKELETON through
  [PR #353](https://github.com/secops-ng/secops-ng-framework/pull/353),
  the CORE wave (canonical core_body, three worked examples,
  per-target byte-parity goldens) through
  [PR #354](https://github.com/secops-ng/secops-ng-framework/pull/354),
  and the ROADMAP flip plus cookbook walkthrough through
  [PR #355](https://github.com/secops-ng/secops-ng-framework/pull/355),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One lane flipped to Shipped in this window. The infrastructure-
posture management lane opened a SKELETON, closed a three-target
CORE wave, landed its posture-evidence schema, replay-tested across
n8n, Temporal, and LangGraph, and got its cookbook walkthrough —
all in the same window the SKELETON arrived. The continuous-posture
read of NIS2 Article 21(2)(a) now reads as portable content with
worked examples on three reference targets, sharing its evidence
schema and its control evaluator with the event-side posture-audit
lane that shipped earlier on the same row. The next field notes
will read whatever opens behind this wave — the auditor-bundle
composition against the posture-evidence stream, the operator-side
cadence guidance, and the next NIS2 Article 21 column to arrive
content-first.
