---
title: "Field note #41 — F-CP-01 risk-analysis evidence stream reads Shipped on ROADMAP, with NIS2 Art. 21(2)(a) tied to the schema at clause granularity"
description: "Forty-first field note from the SecOps-NG Digital Commons: the F-CP-01 risk-analysis evidence stream — the first continuous-posture lane in the catalogue — flips In Progress → Shipped on ROADMAP. The closeout wave layers a NIS2 Article 21(2)(a) mapping document onto the schema at clause granularity, then turns the ROADMAP marker over. The lane now reads end-to-end: typed schema, stream root, emitter skeleton, core fanout across n8n + Temporal + LangGraph, per-target byte-parity goldens, drift-detection hook surface at SKELETON, and a regulator-traceable mapping pointing back to the schema."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-01", "continuous-posture", "evidence-stream", "roadmap-flip", "shipped", "nis2", "article-21", "mapping", "risk-analysis", "compilers", "n8n", "temporal", "langgraph", "digital-commons"]
---

Field note #40 read the closeout beats on the F-CP-01 lane: per-target
byte-parity goldens against checked-in fixtures pinned each adapter for
n8n, Temporal, and LangGraph, and a drift-detection hook surface opened
at SKELETON on the shared evidence emitter. The note named one
remaining beat to walk before the ROADMAP marker turned over — a NIS2
Article 21(2)(a) mapping document tying the schema to the clause the
risk-analysis evidence stream discharges.

This note reads that beat landed and the ROADMAP marker turned. F-CP-01
risk-analysis is **Shipped** — the first continuous-posture evidence
stream in the catalogue lit up end-to-end across all three reference
compile targets, with a regulator-traceable mapping into NIS2 at clause
granularity.

## What this note reads off `main`

### F-CP-01 EXTEND-NIS2-MAPPING — Article 21(2)(a) at clause granularity

The mapping document lands through
[PR #270](https://github.com/secops-ng/secops-ng-framework/pull/270) as
`content/mappings/nis2/article-21-risk-management.md`. It is a
companion narrative to the structured `article-21-2-a.yaml` already on
disk, and it ties the risk-analysis evidence emitter to NIS2 Article
21(2)(a) — the policy-and-procedure obligation at the head of the
risk-management measures list.

The document does not duplicate the schema body. It points back at the
authoritative artifacts and reads the trace:

- **Schema source of truth.** Points at
  `schemas/evidence/risk-analysis.schema.json` and the stream README at
  `content/evidence/risk-analysis/README.md` — the typed schema field
  note #34 read in as the lane opened.
- **Field set ↔ obligation mapping.** Walks the on-disk field set —
  `control_id`, `attestation_state`, `review_cadence`,
  `attestation_state_delta`, the evidence envelope — against the
  §21(2)(a) obligation surface, naming which field carries which
  regulator-visible property.
- **Reference compile targets, by name.** Names n8n, Temporal, and
  LangGraph as the three reference adapters, and points at the
  per-target golden directories under
  `tests/fixtures/risk_analysis_evidence/<target>.json` so a reader
  walking the mapping from the regulator end can land on the bytes a
  compiler emits without an extra translation hop.
- **Drift hook surface, by file.** Points at
  `compilers/_shared/evidence/drift_hook.py` so the audit-lane reader
  can see where the structured drift event surfaces and which
  contract it advances under.

The mapping reads as a tie, not a translation. It does not invent a
new vocabulary on top of the schema; it reads the schema and the clause
against each other.

### F-CP-01 ROADMAP-FLIP — In Progress → Shipped

The marker turns through
[PR #271](https://github.com/secops-ng/secops-ng-framework/pull/271).
Both ROADMAP acceptance criteria on the F-CP-01 row now read green:

- `content/evidence/risk-analysis/` is populated by the reference
  workflows. The schema is in, the stream root is in, the emitter
  SKELETON is in, the CORE-FANOUT lights up the three reference target
  adapters against a single framework-agnostic helper, per-target
  byte-parity goldens pin each adapter against a checked-in fixture,
  and the drift-detection hook surface is open at SKELETON across all
  three reference targets.
- The schema is documented under
  `content/mappings/nis2/article-21-risk-management.md` §21(2)(a),
  tying each field on the schema to the regulator-visible obligation.

The risk-analysis row on ROADMAP now reads **Shipped**. The first
continuous-posture evidence stream in the catalogue is lit up
end-to-end.

## What this Shipped state actually carries

It carries a typed evidence shape. Every record on the risk-analysis
stream validates against
`schemas/evidence/risk-analysis.schema.json`. `attestation_state` and
`attestation_state_delta.previous_state` are drawn from the shared
four-state vocabulary in `schemas/attestation_state.json`. The shape
does not depend on which reference compile target emitted it.

It carries cross-target byte parity at emission. All three reference
target adapters — n8n, Temporal, LangGraph — sit on top of a single
framework-agnostic helper under `compilers/_shared/evidence/`. The
CORE-FANOUT parity test pins that on every push: under the same
context, the three adapters produce byte-identical JSON.

It carries per-target byte parity against a checked-in golden. Each
adapter is pinned against an immutable fixture under
`tests/fixtures/risk_analysis_evidence/<target>.json`. A silent
serialisation drift from a shared-helper refactor fails the golden for
the affected target, by name, on the next push.

It carries a structured drift event surface. A typed `DriftHook`
contract on the shared emitter fires a `DriftEvent` when
`attestation_state` advances between cadence walks. Every reference
target adapter threads the hook through. The SKELETON does not alert,
does not promote a KRI, and does not persist; alerting (CORE-WIRE),
KRI promotion (EXTEND-KRI), and persistence (EXTEND-PERSIST) ride
their own sibling beats on the same shape.

It carries a regulator-traceable mapping into NIS2. A reader walking
from Article 21(2)(a) can land on the schema, the stream root, the
three reference adapter directories, and the drift hook surface
without leaving the repository or moving through a separate
translation layer.

## What this Shipped state does not promise

It does not promise the drift-detection CORE-WIRE is in. The hook
surface is an interface and a noop default. Alerting, KRI promotion,
and persistence each sit on their own sibling beat on the lane, on
the same shared-helper-plus-three-adapters shape this SKELETON opens
against. Field note #40 named these as siblings; F-CP-01 reading
Shipped does not advance them.

It does not promise the six remaining continuous-posture streams are
scaffolded. The cross-stream index field note #34 named still reads
seven slots; CP-01 risk-analysis is the first slot lit up end-to-end
across all three reference compile targets. CP-02 through CP-07
compose onto the same shape as their own evidence streams open against
the substrate F-CP-01 just closed.

It does not promise the mapping covers Article 21 in full. The
document scopes to §21(2)(a) — the policy/procedure clause the
risk-analysis evidence stream discharges. The other §21(2) clauses
ride their own evidence streams and their own mapping documents.

## Where the F-CP-01 lane sits now

The lane reads Shipped end-to-end across these waves:

- **SCHEMA** ([PR #255](https://github.com/secops-ng/secops-ng-framework/pull/255))
  — typed schema for the risk-analysis evidence record.
- **STREAM-ROOT** ([PR #256](https://github.com/secops-ng/secops-ng-framework/pull/256))
  — `content/evidence/risk-analysis/` stream root with README and
  example fixtures.
- **EMITTER SKELETON** ([PR #257](https://github.com/secops-ng/secops-ng-framework/pull/257))
  — Temporal-first emitter SKELETON against the shared helper shape.
- **CORE-FANOUT** ([PR #267](https://github.com/secops-ng/secops-ng-framework/pull/267))
  — n8n + LangGraph adapters land on the same framework-agnostic
  helper; cross-target parity pinned at emission.
- **EXTEND-tests-goldens** ([PR #268](https://github.com/secops-ng/secops-ng-framework/pull/268))
  — per-target byte-parity goldens against checked-in fixtures, one
  per reference target.
- **drift-detection SKELETON** ([PR #269](https://github.com/secops-ng/secops-ng-framework/pull/269))
  — typed hook surface on the shared emitter, every adapter threading
  the noop default through.
- **EXTEND-NIS2-MAPPING** ([PR #270](https://github.com/secops-ng/secops-ng-framework/pull/270))
  — schema tied to NIS2 Article 21(2)(a) at clause granularity.
- **ROADMAP-FLIP** ([PR #271](https://github.com/secops-ng/secops-ng-framework/pull/271))
  — In Progress → Shipped on ROADMAP.

The practical handle the lane gives a reader walking in today:
risk-analysis workflows get a typed, drift-checked, regulator-traceable
evidence shape across all three reference compile targets, sitting on
a single shared helper that does not move when the adapter underneath
it moves.

## Community lane status

The community-ignition entry point — "Open for contributors" — remains
live against the good-first-issues on `secops-ng-framework`, and the
free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set — F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management — all reading **Shipped** on
every reference compile target, and the first continuous-posture
evidence stream **F-CP-01 risk-analysis** reading **Shipped** on the
same substrate, with the NIS2 Article 21(2)(a) tie sitting under
`content/mappings/nis2/`.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-01 ROADMAP flip through
  [PR #271](https://github.com/secops-ng/secops-ng-framework/pull/271)
  and the NIS2 Article 21(2)(a) mapping through
  [PR #270](https://github.com/secops-ng/secops-ng-framework/pull/270),
  on top of the closeout beats field note #40 read in.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the catalogue reads two Shipped
surfaces against the same substrate: the launch-window workflow set
(F-WF-01, F-WF-03, F-WF-05) on the orchestration side, and F-CP-01
risk-analysis on the continuous-posture side. The next moves walk
the drift-detection CORE-WIRE through the same fanout shape the
SKELETON just opened against, and start lighting up the six sibling
continuous-posture streams against the parity floor F-CP-01 just
closed on.

More from the lanes as the drift-detection CORE-WIRE picks up the
shape this Shipped marker just sealed against.
