---
title: "Field note #70 — F-WF-SCS supply-chain-security playbook flips to Shipped with three-target parity and a cookbook entry (NIS2 Article 21(2)(d))"
description: "Seventieth field note from the SecOps-NG Digital Commons: F-WF-SCS supply-chain-security lands as a full three-target playbook — n8n, Temporal, and LangGraph worked examples with byte-parity goldens on all three — plus a cookbook walkthrough and a ROADMAP flip to Shipped. The NIS2 Article 21(2)(d) supply-chain risk-management baseline is now portable, executable content that compiles into whichever orchestrator an operator already runs."
pubDate: 2026-06-22
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-scs", "supply-chain-security", "nis2", "article-21", "f-cp-03", "evidence", "three-target", "byte-parity", "n8n", "temporal", "langgraph", "cookbook", "digital-commons"]
---

The previous field note read the mapping layer closing across three
regulatory regimes — every finalized playbook on the framework now
carries Cyber Resilience Act, NIS2, and DORA per-clause mappings,
defended by a parametrised orphan-CI assertion. That work hardened
the cross-link surface. This note reads a different lane moving:
a new playbook joining the finalized set on the catalogue.

**F-WF-SCS supply-chain-security** ships in this window with three
of three reference compile targets, byte-parity goldens on all
three, and a cookbook entry. The NIS2 Article 21(2)(d)
supply-chain risk-management baseline — security characteristics
of direct suppliers and service providers, with periodic
re-attestation — is now portable, executable content an operator
can compile into the orchestrator they already run.

## What landed in this window

Six PRs, the same SKELETON → CORE-PRIM → CORE-FANOUT → CLOSEOUT
shape prior shipped workflows follow:

### F-WF-SCS SKELETON — CACAO scaffold and contract pin (PR #418)

The supply-chain-security playbook scaffold lands through
[PR #418](https://github.com/secops-ng/secops-ng-framework/pull/418):
a CACAO v2 artifact (`playbook.supply_chain_security@v1`) pinning
the two-action topology — `workflow_start` →
`assess-supplier-signal` → `emit-supply-chain-evidence` →
`workflow_end` — with deterministic transitions and the per-step
inputs and outputs declared at the schema floor. The SKELETON ships
the contract, not yet the action bodies; the regulatory anchor is
NIS2 Article 21(2)(d), pinned by the `nis2:art-21-2-d` entry in
the inbound mapping tree.

### F-WF-SCS CORE-PRIM — canonical action logic (PR #419)

The CORE-PRIM pass through
[PR #419](https://github.com/secops-ng/secops-ng-framework/pull/419)
fills the two action bodies as framework-agnostic primitives.
`assess-supplier-signal` canonicalises one raw supply-chain
signal — an SBOM diff, a supplier attestation, an upstream
advisory, a threat-intel report, or an operator report — into a
closed `verdict / supplier handle / affected components / signal
class` block. `emit-supply-chain-evidence` takes that closed
block and emits one supply-chain-evidence artifact against
`schemas/evidence/supply-chain.schema.json` (stream:
`supply-chain`), with `artifact_id` derived deterministically from
the input so two re-runs against the same signal produce a
byte-identical artifact. Both primitives live above the
compile-target layer: the same Python module is the source of
truth for all three downstream adapters.

### F-WF-SCS CORE-FANOUT — three reference compile targets

The fan-out pass lands across three PRs, one per reference
compile target:

- **n8n worked example**
  ([PR #420](https://github.com/secops-ng/secops-ng-framework/pull/420))
  — the n8n adapter at
  `examples/n8n/supply_chain_security/` wires the canonical
  primitives into a runnable n8n workflow, with a `regenerate.py`
  emitting the supply-chain-evidence artifact end-to-end against
  a representative supplier-signal input.
- **Temporal worked example**
  ([PR #421](https://github.com/secops-ng/secops-ng-framework/pull/421))
  — the Temporal adapter at
  `examples/temporal/supply_chain_security/` binds the same
  primitives behind `@activity.defn` declarations, with the
  worked example emitting the artifact end-to-end against the
  same representative signal. Landed via an external community
  contribution.
- **LangGraph worked example + byte-parity golden**
  ([PR #422](https://github.com/secops-ng/secops-ng-framework/pull/422))
  — the LangGraph adapter at
  `examples/langgraph/supply_chain_security/` closes the
  three-target set with a state-mapping node that delegates to
  the same framework-agnostic emitter, and the byte-parity
  golden at
  `tests/examples/supply_chain_security/test_langgraph_workflow_golden.py`
  pins the LangGraph output byte-for-byte against the n8n and
  Temporal siblings. The same representative supplier-signal
  input produces a byte-identical artifact on all three runtimes.

### F-WF-SCS CLOSEOUT — cookbook + ROADMAP flip (PR #423)

The closeout pass through
[PR #423](https://github.com/secops-ng/secops-ng-framework/pull/423)
flips the ROADMAP row from Proposed to Shipped, lands the
`supply_chain_security` cookbook entry at
[`docs/cookbook/supply_chain_security.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/cookbook/supply_chain_security.md),
and reconciles the worked-example READMEs across all three
targets so a reader landing in any of them can navigate to the
canonical source under `content/playbooks/supply_chain_security/`
and out to the shared evidence emitter under
`compilers/_shared/evidence/supply_chain.py`.

## Why three-target parity matters here

A regulated operator meeting NIS2 Article 21(2)(d) is asked the
same shape of question across audits: which of your operational
capabilities assesses a supply-chain signal, how is the
disposition recorded, and what does the evidence look like
end-to-end. Without portable executable content, the answer is
runtime-specific — the operator running n8n shows one workflow,
the operator running Temporal shows another, and the property
"these two workflows discharge the same regulatory obligation in
the same shape" is asserted in prose, not in artifacts.

The three-target byte-parity golden closes that gap structurally.
The same CACAO source compiles into all three reference targets,
the shared emitter under `compilers/_shared/evidence/` enforces
one supply-chain-evidence artifact shape across runtimes, and the
golden test fails the build if any one of the three targets
drifts at the byte level. An operator can read the cookbook and
the worked examples and know that the artifact they emit on their
runtime is the same artifact they would emit on either of the
other two — pinned at the schema floor, defended at the test
floor.

## The per-signal supply-chain stream

This playbook sits on the F-CP-03 supply-chain evidence stream
alongside the per-execution dependency-snapshot surface the rest
of the cookbook workflows produce. The two surfaces share the
same `supply-chain.schema.json` and the same shared emitter:

- The **per-execution** surface enumerates the dependency graph
  an arbitrary workflow execution actually resolved against — the
  runtime view of "what did we call when this ran."
- The **per-signal** surface (this playbook) ingests one
  operator-side supply-chain signal and records the supplier-side
  disposition — "no impact," "watch," or "confirmed compromise" —
  against the implicated-component set the signal carried.

The cross-stream join on `(workflow_id, execution_id)` lines up
the runtime dependency surface with the operator's signal
disposition for the same execution. Read together, the two
surfaces give a regulated operator the structured artifact set
NIS2 Article 21(2)(d) needs — periodic supplier attestation
freshness, per-signal disposition, dwell time on confirmed
compromises — without leaving the catalogue.

## Where this leaves the catalogue

After the wave closes, the catalogue holds:

- **A finalized-CACAO supply-chain-security playbook with
  three-target parity.** Every reference compile target — n8n,
  Temporal, LangGraph — runs the same playbook end-to-end and
  emits a byte-identical supply-chain-evidence artifact for the
  same input.
- **A cookbook walkthrough.** A reader landing on
  [`docs/cookbook/supply_chain_security.md`](https://github.com/secops-ng/secops-ng-framework/blob/main/docs/cookbook/supply_chain_security.md)
  can trace the playbook from the CACAO source through the
  shared primitive set, the shared evidence emitter, and into
  each of the three reference compile targets.
- **A ROADMAP row reading Shipped.** The F-WF-SCS row on the
  framework ROADMAP flips Proposed → Shipped on this wave;
  any further work — depth on the EXTEND lane, KPI / KRI
  catalogue entries for supplier-attestation freshness and
  supply-chain-compromise dwell — opens behind the row as a
  follow-on pass.

## Honest framing on what is and isn't in this window

The Shipped flip names the **operational** half of NIS2 Article
21(2)(d). What this wave does not yet land:

- **Per-row KPI / KRI catalogue entries for the stream.** A
  supplier-attestation-freshness KRI and a supply-chain-compromise
  dwell-time KRI are named in the SKELETON as out-of-scope
  siblings. The EXTEND pass on the metrics lane opens behind this
  closeout.
- **Article 22 Union-level aggregation overlay.** The artifact
  schema reserves the shape Article 22 needs for the Cooperation
  Group's Union-level coordinated risk assessment, but the
  framework emits the per-entity artifact, not the Member-State
  aggregation envelope. That overlay opens on a separate lane.
- **A first cross-compiler integration test.** The byte-parity
  golden defends within-target stability; an integration test
  that runs the three targets end-to-end against a shared signal
  feed lives on the F-CP-03 stream lane and opens behind it.

The accurate claim on this row is: the supply-chain-security
playbook ships three-target byte-parity and a cookbook entry on
the operational half of NIS2 Article 21(2)(d); the EXTEND pass on
the metrics lane, the Article 22 overlay, and the cross-compiler
integration test open as the next passes.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-WF-SCS lands across
  [PR #418](https://github.com/secops-ng/secops-ng-framework/pull/418),
  [PR #419](https://github.com/secops-ng/secops-ng-framework/pull/419),
  [PR #420](https://github.com/secops-ng/secops-ng-framework/pull/420),
  [PR #421](https://github.com/secops-ng/secops-ng-framework/pull/421),
  [PR #422](https://github.com/secops-ng/secops-ng-framework/pull/422),
  and
  [PR #423](https://github.com/secops-ng/secops-ng-framework/pull/423).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One lane moved in this window. The supply-chain-security
playbook joins the finalized-CACAO set with three of three
reference compile targets carrying byte-parity goldens and a
cookbook entry, taking the NIS2 Article 21(2)(d) supply-chain
risk-management baseline from a regulatory obligation written in
prose to a portable, executable artifact an operator can compile
into whichever orchestrator they already run. The EXTEND pass on
the metrics lane, the Article 22 aggregation overlay, and the
cross-compiler integration test open as the next passes behind
the row.
