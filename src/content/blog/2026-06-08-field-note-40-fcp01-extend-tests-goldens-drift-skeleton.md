---
title: "Field note #40 — F-CP-01 closeout wave: per-target byte-parity goldens land for the risk-analysis evidence emitter, and a drift-detection hook surface opens at SKELETON across n8n, Temporal, and LangGraph"
description: "Fortieth field note from the SecOps-NG Digital Commons: the F-CP-01 risk-analysis evidence stream picks up its EXTEND-tests-goldens beat and a drift-detection hook SKELETON. Per-target byte-parity goldens against checked-in fixtures now sit under CI on each of n8n, Temporal, and LangGraph, complementing the cross-target parity pin field note #39 read in. A small, interface-only drift hook surface opens on the shared emitter so successive emissions on the same control can surface a structured drift event when attestation_state advances between cadence walks — noop default wired by every target, alerting and KRI promotion deferred to their own sibling beats."
pubDate: 2026-06-08
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-01", "continuous-posture", "evidence-stream", "extend-tests", "goldens", "byte-parity", "drift-detection", "skeleton", "emitter", "risk-analysis", "compilers", "n8n", "temporal", "langgraph", "digital-commons"]
---

Field note #39 read the F-CP-01 CORE-FANOUT beat: the risk-analysis
evidence emitter fanned out from the Temporal SKELETON onto n8n and
LangGraph against a single framework-agnostic helper under
`compilers/_shared/evidence/`, and a CORE-FANOUT parity test pinned all
three reference compile targets writing byte-identical JSON for the
same context. The note named two beats that still walked in next on
the same lane: per-target byte-parity goldens that pin each adapter
against a checked-in fixture, and a drift-detection hook surface on
top of the shared emitter.

This note reads both of those beats landed. The first continuous-posture
evidence stream now carries the same EXTEND-tests parity floor the
launch-window workflows already carry, and the interface the
drift-detection sibling reads against is open on the substrate at
SKELETON across all three reference targets.

## What this note reads off `main`

### F-CP-01 EXTEND-tests-goldens — per-target byte-parity against checked-in fixtures

The EXTEND-tests-goldens beat lands through
[PR #268](https://github.com/secops-ng/secops-ng-framework/pull/268).
For each of the three reference compile targets, the adapter is
exercised against an immutable golden fixture under
`tests/fixtures/risk_analysis_evidence/<target>.json` — one fixture per
target, so the failure message names which target drifted the moment a
refactor of the shared emitter silently changes serialisation. The
property the goldens pin reads against the same shared-helper-plus-three-adapters
shape the CORE-FANOUT beat closed parity on:

- **Schema-conformant emit.** Each golden validates against
  `schemas/evidence/risk-analysis.schema.json` — the typed schema field
  note #34 read in as the lane opened.
- **Enum-value normalisation.** `attestation_state` and
  `attestation_state_delta.previous_state` are drawn from the shared
  four-state vocabulary in `schemas/attestation_state.json`, with no
  per-adapter coercion in the way.
- **Cadence-promotion serialisation.** `review_cadence` surfaces
  verbatim as an ISO-8601 duration at the top level of the record, and
  the bytes around it are byte-identical across targets.

The CORE-FANOUT parity test already pinned cross-target equivalence in
a single execution: all three adapters agree byte-for-byte under the
same context. The EXTEND-tests-goldens beat reads the per-target
complement — each target's adapter pinned against an immutable
reference byte stream the substrate signs against. The two contracts
sit under CI together: cross-target parity at the moment of emission,
and per-target parity against a fixture that does not move when the
shared helper does.

The shape mirrors the EXTEND-tests floor the launch-window workflow
set already carries. Field note #37 read the F-WF-05 EXTEND-tests wave
closing — a cross-target happy-path golden replay alongside a
deterministic same-target replay, with failure messages naming the
target that drifted. The F-CP-01 EXTEND-tests-goldens beat reads the
same shape on the evidence side: one fixture per target, one
named-target failure path when a serialisation invariant breaks.

### F-CP-01 drift-detection hook surface — SKELETON across all three targets

The drift-detection SKELETON lands through
[PR #269](https://github.com/secops-ng/secops-ng-framework/pull/269).
A small interface surface opens on the shared evidence emitter so
successive emissions on the same control can surface a structured
drift event when `attestation_state` advances between cadence walks.

The surface itself sits under `compilers/_shared/evidence/drift_hook.py`
as a `DriftEvent` dataclass, a `DriftHook` callable type, and a
`noop_drift_hook` default. `emit_risk_analysis_artifact` on the shared
helper now accepts an optional `drift_hook` and invokes it when an
`attestation_state_delta` is present on the context and the
`previous_state` differs from the new `attestation_state`. The three
target adapters under `compilers/{n8n,temporal,langgraph}/evidence/`
each thread the optional hook through to the shared helper and
register the noop default when no hook is supplied.

The unit coverage under
`tests/content_model/test_risk_analysis_drift_hook.py` pins five
properties at SKELETON: hook invocation on a state advance,
steady-state silence when `attestation_state` does not move,
first-emission silence when there is no prior state to compare
against, the noop default behaving as a contract-conformant no-op, and
per-target adapter wiring — each one of n8n, Temporal, and LangGraph
threads the hook through to the shared helper on the same shape.

## What this beat closes

It closes the EXTEND-tests floor on the first continuous-posture
evidence stream. F-CP-01 risk-analysis now carries the same two-contract
shape the launch-window workflow set carries: cross-target parity at
emission and per-target parity against checked-in goldens. A refactor
of the shared emitter that silently changes the bytes on any one of the
three reference targets fails the goldens for that target, by name, on
the next push.

It opens the interface the drift-detection sibling reads against. The
SKELETON does not alert, does not promote a KRI, and does not persist a
drift log; it opens a typed hook surface on the shared emitter, threads
it through every reference target adapter, and pins the invocation
contract at the unit level. CORE-WIRE, EXTEND-KRI, and EXTEND-PERSIST
ride their own sibling beats on the same shape.

It reads the F-CP-01 lane symmetric with the launch-window workflows on
the EXTEND-tests axis. F-WF-01, F-WF-03, and F-WF-05 each carry a
cross-target replay and a same-target replay under CI; F-CP-01 now
carries cross-target parity at emission and per-target parity against
goldens. The two surfaces — workflow execution and continuous-posture
evidence — read against the same parity discipline on the same
substrate.

## What this beat does not promise

It does not promise the drift-detection sibling is wired. The hook
surface is an interface and a noop default; alerting, KRI promotion,
and persistence each sit on their own sibling beat on the lane, on the
same shared-helper-plus-three-adapters shape this SKELETON opens
against.

It does not promise the KRI/KPI binding or the audit-lane consumption
end. Field note #39 already named these as siblings on the same
fanout pattern; the EXTEND-tests-goldens and drift SKELETON beats do
not advance them.

It does not promise CP-02 through CP-07 are scaffolded. The cross-stream
index field note #34 named still reads seven slots; CP-01 risk-analysis
is the first slot lit up end-to-end across all three reference compile
targets with the EXTEND-tests floor and the drift hook surface in
place. The six sibling slots compose onto the same shape as their own
evidence streams open.

## Community lane status

The community-ignition entry point — "Open for contributors" — remains
live against the good-first-issues on `secops-ng-framework`, and the
free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set — F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management — all reading **Shipped** on
every reference compile target, and the first continuous-posture
evidence stream reading CORE-FANOUT plus EXTEND-tests-goldens against
all three reference targets, with a drift-detection hook surface open
at SKELETON on the same shape.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-01 EXTEND-tests-goldens through
  [PR #268](https://github.com/secops-ng/secops-ng-framework/pull/268)
  and the drift-detection hook SKELETON through
  [PR #269](https://github.com/secops-ng/secops-ng-framework/pull/269),
  on top of the CORE-FANOUT beat through
  [PR #267](https://github.com/secops-ng/secops-ng-framework/pull/267)
  and the lane opening through
  [PR #255](https://github.com/secops-ng/secops-ng-framework/pull/255)
  (SCHEMA),
  [PR #256](https://github.com/secops-ng/secops-ng-framework/pull/256)
  (STREAM-ROOT), and
  [PR #257](https://github.com/secops-ng/secops-ng-framework/pull/257)
  (EMITTER SKELETON).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the thirty-nine that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the risk-analysis evidence stream
reads end to end against all three reference compile targets: a single
framework-agnostic helper under `compilers/_shared/evidence/`, three
target adapters that are glue only, cross-target parity pinned at
emission, per-target parity pinned against checked-in goldens, and a
drift-detection hook surface open at SKELETON for the sibling beat
that wires the alerting end. The next moves walk the drift-detection
CORE-WIRE through the same fanout shape and start lighting up the six
sibling continuous-posture streams against the substrate F-CP-01 just
closed parity floor on.

More from the lanes as the drift-detection CORE-WIRE picks up the
shape this SKELETON just opened against.
