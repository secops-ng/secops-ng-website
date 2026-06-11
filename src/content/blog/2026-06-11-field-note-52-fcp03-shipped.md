---
title: "Field note #52 — F-CP-03 supply-chain evidence stream reads Shipped on ROADMAP, fifth continuous-posture lane lit up end-to-end against NIS2 Article 22 on supply-chain risk management, all five three-target CORE waves now closed with byte-parity goldens on the same framework-agnostic substrate, and a drift-detection SKELETON visible behind the same baseline"
description: "Fifty-second field note from the SecOps-NG Digital Commons: the F-CP-03 supply-chain evidence stream — opened a wave ago at SCHEMA with the NIS2 Article 22 mapping pinned at the typed-record layer, fanned out across n8n and Temporal and LangGraph in the three-target CORE-FANOUT wave, closed on per-target byte-parity goldens, and stood up a drift-detection SKELETON on the same lane — flips Proposed → Shipped on ROADMAP. Five of seven continuous-posture slots now read Shipped end-to-end on the same substrate, against five distinct regulatory anchors, and every three-target CORE wave on the continuous-posture side now sits closed with byte-parity goldens locking on-disk shape against checked-in canonical emissions on every push."
pubDate: 2026-06-11
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-03", "continuous-posture", "evidence-stream", "roadmap-flip", "shipped", "supply-chain", "byte-parity", "goldens", "extend-tests-goldens", "extend-drift", "drift-detection", "n8n", "temporal", "langgraph", "nis2", "article-22", "compilers", "digital-commons"]
---

Field note #49 read the F-CP-03 supply-chain evidence stream closing
its per-target byte-parity goldens on `main` and the F-CP-05
crypto-attestation lane opening behind it. Field notes #50 and #51
read the F-CP-05 wave in two beats — three-target CORE-FANOUT plus
two goldens, then the Temporal-side golden and the ROADMAP flip to
Shipped. The supply-chain lane sat one ROADMAP marker behind through
those two notes, with the three-target CORE wave closed, the three
per-target byte-parity goldens closed, the NIS2 Article 22 mapping
already pinned at SCHEMA time, and the marker waiting to read what
the lane already carried.

This note reads that marker turned, and a drift-detection SKELETON
landed behind it on the same lane. F-CP-03 supply-chain is
**Shipped** — the fifth continuous-posture evidence stream in the
catalogue lit up end-to-end across all three reference compile
targets, against NIS2 Article 22 on supply-chain risk management,
with byte-parity goldens locking the on-disk shape on every push,
and with a drift-detection axis open in SKELETON on the same lane.

Five of seven continuous-posture slots now read Shipped on the same
framework-agnostic substrate, against five distinct regulatory
anchors — Article 21(2)(a) for risk-analysis, Article 21(2)(e) for
vulnerabilities, Article 23(4) for incidents, Article 21(2)(h) for
the cryptographic and secret-management baseline, and Article 22
for supply-chain risk management.

## What this note reads off `main`

### F-CP-03 ROADMAP — Proposed → Shipped

Through
[PR #305](https://github.com/secops-ng/secops-ng-framework/pull/305),
the F-CP-03 entry on
[`ROADMAP.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/ROADMAP.md)
flips to **Shipped**. The entry mirrors the shape the F-CP-01,
F-CP-02, F-CP-04, and F-CP-05 entries carry — a single Status line
under the lane title pinning end-to-end status, followed by a
per-PR enumeration that walks the SCHEMA card, the EMITTER SKELETON,
the three CORE-FANOUT cards across n8n and Temporal and LangGraph,
the EXTEND-tests-goldens beat closing per-target byte-parity goldens
on all three surfaces, and the EXTEND-drift SKELETON sitting on the
lane behind the Shipped line. The same surface an operator or a
regulator reaches for to read which continuous-posture slots are
live on the substrate now reads a fifth slot Shipped on the
supply-chain baseline.

### F-CP-03 EXTEND-drift SKELETON — drift-detection axis opens behind the Shipped baseline

Through
[PR #304](https://github.com/secops-ng/secops-ng-framework/pull/304),
the drift-detection axis behind the supply-chain stream lands as a
SKELETON on the lane. The card opens the same shape the F-CP-01
drift SKELETON carried a handful of waves ago — a typed comparison
surface that reads two evidence emissions for the same workflow
artifact across two executions, surfaces structured drift against
the pinned schema, and stays separate from the per-execution emit
path the Shipped baseline carries. The CORE pass behind the
SKELETON stays Proposed against the same lane and fans out from
the baseline that just flipped.

### Anchors behind the ROADMAP marker

The marker reads against work the lane already carried on `main`
through five earlier beats:

- The three-target CORE-FANOUT wave —
  [PR #287](https://github.com/secops-ng/secops-ng-framework/pull/287)
  for the shared helper at `compilers/_shared/evidence/supply_chain.py`,
  [PR #288](https://github.com/secops-ng/secops-ng-framework/pull/288)
  for the n8n adapter,
  [PR #289](https://github.com/secops-ng/secops-ng-framework/pull/289)
  for the Temporal adapter,
  [PR #290](https://github.com/secops-ng/secops-ng-framework/pull/290)
  for the LangGraph adapter SKELETON, and
  [PR #291](https://github.com/secops-ng/secops-ng-framework/pull/291)
  for the LangGraph worked example — sits closed across all three
  reference compile targets under the same shared helper.
- The per-target byte-parity goldens through
  [PR #303](https://github.com/secops-ng/secops-ng-framework/pull/303)
  pin the n8n, Temporal, and LangGraph on-disk emissions against
  checked-in canonical snapshots, and re-run the schema-conformant
  emit check before any byte comparison so a regression that
  changes shape surfaces with a schema diagnostic instead of a raw
  byte diff.
- The NIS2 Article 22 mapping behind the typed record landed in the
  SCHEMA wave a stretch earlier through
  [PR #286](https://github.com/secops-ng/secops-ng-framework/pull/286),
  pinning the regulator-traceable anchor at the schema layer where
  the adapters inherit it once and the validator enforces it once.

## Why this slot Shipped matters for the supply-chain baseline

NIS2 Article 22 names supply-chain risk management as a coordinated
posture a Member-State entity has to put under governance — across
direct suppliers, the services they depend on themselves, and the
upstream component graph an entity carries inside its operational
boundary. The clause is short; the operational surface behind it
isn't. Reading it against a workflow-shaped substrate splits into
two questions the F-CP-03 stream answers per workflow execution and
per reference compile target.

The first question is what the workflow actually consumes. The
schema pins the typed identity of each supplier component the
execution touched — name, version pin, source surface, declared
relationship to the workflow — and the shared helper carries the
boundary rule that the same identity has to land on disk in the
same canonical shape regardless of which reference compile target
emitted it. A regression that drops the identity, widens it past
the typed shape, or quietly shifts a version pin surfaces against
the per-target golden on every push.

The second question is what the workflow attests against that
supply graph — checksums against a pinned reference, source
attestations carried inside the artifact the workflow ran, and
the pass/fail per assertion. The schema pins the assertion shape;
the shared helper rejects emissions that drop a pinned assertion
or quietly relax the pass/fail surface; the three per-target
byte-parity goldens replay the same canonical record on every
push against the n8n adapter, the Temporal adapter, and the
LangGraph adapter respectively.

Both answers — the typed identity surface, and the per-component
assertion surface — live in one place at the schema layer and one
place at the shared boundary the adapters all wrap, with three
per-target goldens pinning the on-disk shape against fixtures
that ship in the same repo as the schema they validate against.

## What this reads against on the catalogue

The continuous-posture catalogue now reads five distinct slots
emitting per-execution evidence against five distinct NIS2 clauses
on the same framework-agnostic substrate — and all five carry the
same three-target CORE shape closed with per-target byte-parity
goldens:

- F-CP-01 reads Shipped against Article 21(2)(a) on the
  risk-analysis baseline.
- F-CP-02 reads Shipped against Article 23(4) on the
  incident-notification three-milestone timeline.
- F-CP-03 reads Shipped against Article 22 on the supply-chain
  baseline, with the drift-detection axis open in SKELETON on the
  same lane.
- F-CP-04 reads Shipped against Article 21(2)(e) on the
  vulnerability-handling baseline.
- F-CP-05 reads Shipped against Article 21(2)(h) on the
  cryptographic and secret-management baseline, with the
  project-side env-only-injection commitment pinned at the schema
  layer and inherited by every reference compile target.

Every three-target CORE wave on the continuous-posture side now
sits closed. Every per-target byte-parity golden behind the five
Shipped lanes now sits closed. Every regulatory anchor behind the
five Shipped lanes now sits pinned at the schema layer where the
adapters inherit it.

Out-of-scope callouts retain behind the F-CP-03 lane and stay
Proposed against the same baseline: EXTEND-drift on the
drift-detection CORE pass behind the SKELETON that just landed, and
EXTEND-NIS2-MAPPING widening the Article 22 anchor into a narrative
doc that walks the clause surface against the typed record. The
two live on separate cards behind the Shipped marker and don't
gate it.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-03 ROADMAP flip to Shipped through
  [PR #305](https://github.com/secops-ng/secops-ng-framework/pull/305),
  EXTEND-drift SKELETON through
  [PR #304](https://github.com/secops-ng/secops-ng-framework/pull/304),
  EXTEND-tests-goldens closing per-target byte-parity through
  [PR #303](https://github.com/secops-ng/secops-ng-framework/pull/303),
  the three-target CORE-FANOUT wave through PRs
  [#287](https://github.com/secops-ng/secops-ng-framework/pull/287),
  [#288](https://github.com/secops-ng/secops-ng-framework/pull/288),
  [#289](https://github.com/secops-ng/secops-ng-framework/pull/289),
  [#290](https://github.com/secops-ng/secops-ng-framework/pull/290),
  and
  [#291](https://github.com/secops-ng/secops-ng-framework/pull/291),
  and the SCHEMA wave carrying the NIS2 Article 22 mapping through
  [PR #286](https://github.com/secops-ng/secops-ng-framework/pull/286).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the fifty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
five slots Shipped end-to-end against five distinct NIS2 clauses on
the same substrate, every three-target CORE wave behind those five
slots closed with byte-parity goldens locking on-disk shape against
checked-in canonical emissions on every push, and a drift-detection
SKELETON visible behind the supply-chain baseline that just flipped.

What's next on the lanes — the EXTEND-NIS2-MAPPING narrative doc
widening the Article 22 anchor into the surrounding clause surface,
and the EXTEND-drift CORE pass behind the SKELETON that just landed
on the supply-chain lane.
