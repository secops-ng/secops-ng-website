---
title: "Field note #63 — F-WF-10 contractual-obligations tracker flips to Shipped across all three reference compile targets, pinning the contract-time surface of NIS2 Article 21(2)(d)"
description: "Sixty-third field note from the SecOps-NG Digital Commons: F-WF-10 lands the contractual-obligations tracker — supplier-contract obligation extraction, per-obligation review-schedule derivation, and a portable obligation-evidence artifact — at SKELETON, with per-target adapters and byte-parity goldens for n8n, Temporal, and LangGraph at CORE, and a ROADMAP flip to Shipped plus cookbook walkthrough at EXTEND closeout. The catalogue now carries both surfaces of NIS2 Article 21(2)(d) supply-chain security: the execution-time surface (F-CP-03) and the contract-time surface (F-WF-10), keyed distinctly and reconciled on the same supplier ref."
pubDate: 2026-06-20
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-10", "nis2", "article-21", "supply-chain", "contractual-obligations", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph", "cookbook"]
---

The last field note read the DORA Article 19 technical-incident
report-variant row — a regulator-shaped report record sitting
downstream of the F-WF-05 incident-management timeline. That note
read a report variant. This note reads a different shape entirely:
the **contract-time** surface of supply-chain security, where the
obligations an operator accepted when signing a supplier contract
need to compose into a portable artifact that the auditor bundle
folds into a handover.

In this window, the F-WF-10 lane lands the contractual-obligations
tracker — supplier-contract obligation extraction and per-obligation
review-schedule derivation at SKELETON, a shared obligation-evidence
emitter with per-target adapters for n8n, Temporal, and LangGraph at
CORE, and a ROADMAP flip to Shipped plus cookbook walkthrough at
EXTEND closeout. The catalogue now carries both axes of NIS2 Article
21(2)(d): the execution-time surface from F-CP-03, and the
contract-time surface from F-WF-10, sharing the supplier ref but
keyed distinctly.

## What landed

### F-WF-10 SKELETON — the obligation-evidence contract

The contract lands through
[PR #356](https://github.com/secops-ng/secops-ng-framework/pull/356).
Four pieces sit against the contract-time row:

- **A CACAO playbook** at
  `content/playbooks/contractual_obligations_tracker/playbook.cacao.json`
  — `playbook.contractual_obligations_tracker@v1`, the canonical
  workflow source. Four steps trace contract-ingest →
  obligation-extract → review-schedule-derive → emit-obligation-evidence,
  each backed by a deterministic Python primitive at
  `content/playbooks/contractual_obligations_tracker/primitives/`.
  The CACAO source is the source of truth; the three worked examples
  carry a byte-identical mirror copy refreshed by per-target
  `regenerate.sh`.
- **An obligation-evidence schema** at
  `schemas/evidence/contractual-obligations.schema.json` pinning the
  top-level envelopes — `contract_id`, `supplier_ref`,
  `obligations[]`, `review_schedule`, `attestation_window` — as
  Draft 2020-12 JSON Schema. Each obligation enumerates clause-anchor,
  obligation-class (security-control commitment, audit-right window,
  attestation cadence, sub-processor-disclosure clause,
  breach-notification cadence), next-review date, and review-cadence
  policy ref.
- **A NIS2 Article 21(2)(d) mapping entry** at
  `content/mappings/nis2/article-21-2-d.yaml` registering the
  contract-time surface against the supply-chain clause, alongside
  the execution-time surface from the F-CP-03 supply-chain stream.
  Two evidence-stream refs — `supply-chain` and
  `contractual-obligations` — sit under one obligation entry; the
  catalogue now reads both axes against the same clause.
- **A field-derivation note** tracing every top-level field back to
  the operator's supplier-contract record, with placeholders marked
  `TODO(CORE)` for the per-target adapters.

### F-WF-10 CORE — three-target fan-out, byte-parity goldens

The CORE wave lands across three siblings — one per reference compile
target — each fanning out from the same shared emitter:

- **n8n CORE-FANOUT** through
  [PR #360](https://github.com/secops-ng/secops-ng-framework/pull/360).
- **Temporal CORE-FANOUT** through
  [PR #361](https://github.com/secops-ng/secops-ng-framework/pull/361).
- **LangGraph CORE-FANOUT** through
  [PR #362](https://github.com/secops-ng/secops-ng-framework/pull/362).

Each binds three pieces in its window:

- **A framework-agnostic shared emitter** at
  `compilers/_shared/evidence/contractual_obligations.py` — a pure
  `render_contractual_obligations(ctx)` returning a record plus an
  `emit_contractual_obligations(ctx, output_dir)` writing it
  atomically to disk. `derive_artifact_id(contract_id, supplier_ref,
  emitted_at)` is SHA-256-deterministic per the schema contract; the
  same supplier-contract inputs always produce the same artifact id,
  replay-stable across runs and across targets.
- **A thin per-target adapter** delegating to the shared emitter: a
  Temporal `@activity.defn` at
  `compilers.temporal.evidence.contractual_obligations_activity`, a
  Python helper at
  `compilers.n8n.evidence.contractual_obligations_node` that re-builds
  the typed context from a JSON-native payload for n8n
  `executeCommand` / `Code` nodes, and a LangGraph state-mapping node
  at `compilers.langgraph.evidence.contractual_obligations_node`.
- **A worked example** at
  `examples/{n8n,temporal,langgraph}/contractual_obligations_tracker/`,
  each carrying a `regenerate.py` that emits the obligation-evidence
  artifact for one representative supplier contract. The n8n and
  LangGraph regenerators re-import the Temporal sibling's `CONTEXTS`
  dict, so the three targets exercise byte-identical input by
  construction. The committed output is three `.obligations.json`
  files — one per reference target — all byte-identical.

Byte-parity golden tests at
`tests/examples/contractual_obligations_tracker/test_golden.py` pin
the result: cross-target byte parity for the canonical contract,
per-target adapter parity, schema-conformant emit, NIS2 Article
21(2)(d) vocabulary coverage, `artifact_id` determinism, and the
per-obligation review-schedule invariant. The failure messages name
which target drifted, so a refactor of the shared emitter that
silently changes serialisation gets caught at the byte level, not at
downstream review.

### F-WF-10 EXTEND closeout — Shipped on the ROADMAP, cookbook walkthrough

The ROADMAP flip and cookbook walkthrough land through
[PR #363](https://github.com/secops-ng/secops-ng-framework/pull/363).
**F-WF-10 flips to Shipped**, and the cookbook gets the end-to-end
walkthrough — supplier-contract record to per-clause obligation
extraction to derived review-schedule to a written-to-disk
`.obligations.json` artifact, told byte-identically across n8n,
Temporal, and LangGraph. The walkthrough sits at
[`docs/cookbook/contractual_obligations_tracker.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/cookbook/contractual_obligations_tracker.md)
and names the operator surfaces that stay outside the framework — the
document-store read endpoint, the review-cadence policy source, the
sovereign-provider KB read interface — as data-plane responsibilities
the operator wires in their own deployment.

## Where this sits against NIS2 Article 21(2)(d)

[NIS2 Article 21(2)(d)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
asks regulated entities to address supply-chain security, including
the security characteristics of direct suppliers and service
providers, with periodic re-attestation. The clause reads on two
distinct surfaces, and the catalogue now carries both:

- **The execution-time surface** is F-CP-03 — one artifact per
  workflow execution enumerating the external-provider dependencies
  that execution resolved against. The shape keys on
  `(workflow_id, execution_id)` and enumerates `provider_id` records.
  An auditor reading the F-CP-03 stream sees what the operator is
  actually calling, run by run.
- **The contract-time surface** is F-WF-10 — one artifact per
  supplier contract enumerating the obligations the operator accepted
  at procurement time and the per-obligation review schedule the
  operator's review-cadence policy derives from those obligations.
  The shape keys on `contract_id` and enumerates `obligation`
  records. An auditor reading the F-WF-10 stream sees what the
  operator committed to, clause by clause, alongside when the next
  review is due.

The two streams are intentionally distinct in shape and key, and
share the supplier ref so a downstream join can compose them. The
cross-stream reconciliation — F-CP-03's `provider_id` against
F-WF-10's `supplier_ref` — is the explicit subject of a sibling card
on the roadmap. The catalogue now reads NIS2 Article 21(2)(d) along
both axes — what is being called, and what was contractually
committed — without conflating them at the shape layer.

## Why the contract-time row reads differently from the execution-time row

Earlier field notes have read execution-time evidence streams —
F-CP-03 supply-chain, F-CP-06 control-effectiveness, F-CP-07 access
— each emitting one artifact per workflow execution and pinning what
ran. F-WF-10 reads a different cadence entirely: the **contract-time**
row emits when an operator ingests a supplier contract, on the
review-cadence the operator's policy derives from the contractual
clauses.

An operator wiring F-WF-10 on the catalogue stages a supplier
contract once, walks its per-clause obligations once, derives the
per-obligation review schedule once, and emits one
`.obligations.json` artifact that the obligation-evidence stream
consumes and the F-WF-09 auditor bundle folds into a handover. The
same contract gets re-emitted on the schedule the policy describes —
quarterly, annually, on attestation-window edge — not on every
runtime execution. The contract-time row sits where the regulation
does: at the boundary between what the operator agreed to and what
the operator can re-attest against, and reads the operator's existing
procurement artifact rather than asking the operator to maintain a
parallel one.

The same row pattern is what F-WF-05 incident-management already sits
on for the disclosure-evidence row, and what F-CP-06 effectiveness
already sits on for the control-evidence row. The catalogue now
carries one obligation-evidence discipline alongside those, sharing
the audit-bundle composition shape and the deterministic artifact-id
contract across all three.

## What this gives an operator

A regulated operator subject to NIS2 Article 21(2)(d) running on any
of the three reference compile targets can now:

- **Stage a supplier contract once and get a portable
  obligation-evidence artifact.** Per-clause obligations enumerate
  against the closed obligation-class vocabulary the schema validates
  against; review-schedule derivation pulls from the operator's
  review-cadence policy at emit time, not from caller input.
- **Replay byte-identically across targets.** The same supplier
  contract emits a byte-identical obligation-evidence record on n8n,
  Temporal, and LangGraph; goldens pin it. Switching reference target
  leaves the filed shape unchanged.
- **Get a deterministic artifact id.** `derive_artifact_id` is
  SHA-256-deterministic over `(contract_id, supplier_ref,
  emitted_at)`, so re-emitting the same artifact from the same inputs
  returns the same id — useful for downstream evidence composition
  and for the auditor-bundle row.
- **Compose into the auditor bundle.** The obligation-evidence
  stream is a candidate composition stream for F-WF-09 alongside
  incident-evidence, supply-chain (F-CP-03), control-effectiveness
  (F-CP-06), access (F-CP-07), and the other streams the bundle row
  already carries. The Article 21(2)(d) ask against a NIS2-regulated
  operator can now return a coherent set of evidence records that
  includes both the execution-time supply-chain dependencies and the
  contract-time obligation commitments for the supplier window in
  scope.

## What's open behind this wave

- **F-CP-03 ↔ F-WF-10 cross-stream join** — the
  `provider_id` ↔ `supplier_ref` reconciliation is the subject of a
  sibling card. The two streams stay distinct in shape and key by
  design; the join is a downstream composition over both, not a shape
  reshuffle on either.
- **Sovereign-provider classification interface** — supplier
  residency, ownership, and sub-processor chain read from a private
  sovereign-provider KB through a file-fixture interface in the
  framework. The framework repository never ingests KB contents; the
  fixture-shape contract is a candidate EXTEND card so a community
  contributor can wire an open dataset against the same interface.
- **Re-attestation drift KRI** — `kri.suppliers_attestation_stale@v1`
  is registered on the NIS2 Article 21(2)(d) mapping entry and ready
  for the metrics row to absorb against the per-obligation review
  schedule the contract-time artifact emits.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-10 SKELETON (CACAO playbook, primitives package,
  obligation-evidence schema, NIS2 Article 21(2)(d) mapping entry)
  through
  [PR #356](https://github.com/secops-ng/secops-ng-framework/pull/356),
  the three-target CORE fan-out (shared emitter, per-target adapters,
  worked examples, byte-parity goldens) through
  [PR #360](https://github.com/secops-ng/secops-ng-framework/pull/360),
  [PR #361](https://github.com/secops-ng/secops-ng-framework/pull/361),
  and
  [PR #362](https://github.com/secops-ng/secops-ng-framework/pull/362),
  and the EXTEND closeout (ROADMAP flip to Shipped, cookbook
  walkthrough) through
  [PR #363](https://github.com/secops-ng/secops-ng-framework/pull/363),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane, the
  auto-generated roadmap.

One workflow row flipped to Shipped in this window. The
contractual-obligations tracker opened a SKELETON, closed a
three-target CORE fan-out with byte-parity goldens replay-tested
across n8n, Temporal, and LangGraph, and got its cookbook walkthrough
and ROADMAP flip — all in the same wave. The catalogue now reads the
contract-time surface of NIS2 Article 21(2)(d) as portable content
with worked examples on three reference targets, sitting alongside
the execution-time surface F-CP-03 already carries. The next field
notes will read whatever opens behind this wave — the F-CP-03 ↔
F-WF-10 cross-stream join, the sovereign-provider classification
interface, the re-attestation drift KRI, and the next workflow or
report variant to arrive content-first.
