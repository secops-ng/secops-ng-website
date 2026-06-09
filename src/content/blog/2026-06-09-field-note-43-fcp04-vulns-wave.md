---
title: "Field note #43 — F-CP-04 vulnerabilities evidence stream wave: CORE-FANOUT lands on n8n + LangGraph, per-target byte-parity goldens pin all three reference compile targets, and a NIS2 Article 21(2)(e) mapping ties the schema to obligation surface at clause granularity"
description: "Forty-third field note from the SecOps-NG Digital Commons: the F-CP-04 vulnerabilities evidence stream walks the same closeout shape F-CP-01 risk-analysis closed on. CORE-FANOUT fans the emitter out from the Temporal SKELETON onto n8n and LangGraph against the shared framework-agnostic helper. EXTEND-tests-goldens pins per-target byte-parity against checked-in fixtures across all three reference compile targets. EXTEND-NIS2-MAPPING ties the vulnerabilities schema to NIS2 Article 21(2)(e) at clause granularity. The lane is in closeout — the ROADMAP Shipped flip rides its own sibling beat."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-04", "continuous-posture", "evidence-stream", "core-fanout", "extend-tests", "goldens", "byte-parity", "nis2", "article-21-2-e", "vulnerabilities", "vulnerability-triage", "compilers", "n8n", "temporal", "langgraph", "digital-commons"]
---

Field note #42 read the F-CP-04 vulnerabilities lane opening against the
same substrate the F-CP-01 risk-analysis stream closed on: a typed
vulnerabilities evidence-artifact schema under `content/evidence/vulns/`
with enum and cadence promotions, and a Temporal emitter SKELETON
wrapping the F-WF-01 vulnerability-triage write-path. Two of seven
continuous-posture slots on the cross-stream index were lit up — CP-01
**Shipped** end-to-end, CP-04 opened at SCHEMA plus EMITTER SKELETON
on the Temporal target only.

This note reads the F-CP-04 lane walking the rest of the closeout shape
F-CP-01 traced ahead of it. The vulnerabilities emitter fans out onto
n8n and LangGraph against the same framework-agnostic helper, per-target
byte-parity goldens land for all three reference compile targets against
checked-in fixtures, and a NIS2 Article 21(2)(e) mapping ties the
schema to the obligation surface the stream discharges against at
clause granularity. The ROADMAP flip itself — In Progress to Shipped —
rides its own sibling beat ahead on the lane; the substrate beats sit
this note reads landed.

## What this note reads off `main`

### F-CP-04 CORE-FANOUT — n8n and LangGraph emitters land on the shared helper

The CORE-FANOUT beat lands through
[PR #274](https://github.com/secops-ng/secops-ng-framework/pull/274).
The vulnerabilities emitter fans out from the Temporal SKELETON the
lane opened on into n8n and LangGraph adapters, all three sitting on
top of the same framework-agnostic helper under
`compilers/_shared/evidence/` the F-CP-01 risk-analysis lane closed on.
The shape lines up adapter-for-adapter with the F-CP-01 fanout field
note #39 read in:

- **Shared helper carries the envelope and the body.** The
  `emit_vulnerabilities_artifact` entrypoint on the shared helper takes
  the vulnerabilities body and the cross-target envelope —
  `producing_workflow`, `run_id`, `attestation_state`, the
  `attestation_state_delta`, the audit-mirror sibling pointer, and the
  signing surface — and writes the typed record on the same schema
  every adapter validates against.
- **Adapters are glue only.** The n8n, Temporal, and LangGraph adapters
  under `compilers/{n8n,temporal,langgraph}/evidence/` each pick up the
  target-specific execution context — node identifier on n8n, workflow
  context on Temporal, node state on LangGraph — bind it onto the
  shared envelope at write time, and delegate the actual emission to
  the shared helper. None of the three adapters reach into the
  vulnerabilities body; the body is owned by the shared helper.
- **Cross-target parity pinned at emission.** A CORE-FANOUT parity test
  exercises all three adapters against the same context inside a single
  execution, and asserts the three records are byte-identical on disk.
  The shape mirrors the F-CP-01 CORE-FANOUT parity test field note #39
  read in: a serialisation invariant the substrate signs against
  cross-target, before any per-target fixture rides on top.

A F-WF-01 vulnerability-triage pass running against any of the three
reference compile targets now writes a typed vulnerabilities evidence
record on the same shape the audit-mirror sibling span reads against,
without target-specific drift in the body.

### F-CP-04 EXTEND-tests-goldens — per-target byte-parity against checked-in fixtures

The EXTEND-tests-goldens beat lands through
[PR #275](https://github.com/secops-ng/secops-ng-framework/pull/275).
For each of the three reference compile targets, the vulnerabilities
adapter is exercised against an immutable golden fixture under
`tests/fixtures/vulnerabilities_evidence/<target>.json` — one fixture
per target, so a silent serialisation drift on the shared helper fails
the golden for the affected target by name on the next push. The
properties the goldens pin read against the same shape F-CP-01 closed
the EXTEND-tests-goldens beat on:

- **Schema-conformant emit.** Each golden validates against
  `schemas/evidence/vulns.schema.json` — the typed schema field note
  #42 read in as the lane opened.
- **Enum-value normalisation.** `attestation_state` and
  `attestation_state_delta.previous_state` are drawn from the shared
  four-state vocabulary at `schemas/attestation_state.json`; the
  severity band on the vulnerabilities body reads against the closed
  enum the schema promoted.
- **Cadence-promotion serialisation.** The vulnerabilities cadence
  surfaces verbatim on the record at the top level, and the bytes
  around it are byte-identical across targets.

The CORE-FANOUT parity test already pinned cross-target equivalence in
a single execution. The EXTEND-tests-goldens beat reads the per-target
complement — each target's adapter pinned against an immutable
reference byte stream the substrate signs against. The two contracts
sit under CI together: cross-target parity at the moment of emission,
and per-target parity against a fixture that does not move when the
shared helper does. The shape now reads symmetric with the F-CP-01
risk-analysis lane on both axes.

### F-CP-04 EXTEND-NIS2-MAPPING — Article 21(2)(e) tied to the schema at clause granularity

The EXTEND-NIS2-MAPPING beat lands through
[PR #276](https://github.com/secops-ng/secops-ng-framework/pull/276).
A mapping document at
`content/mappings/nis2/article-21-vuln-handling.md` ties the
vulnerabilities evidence schema to NIS2 Article 21(2)(e) — the
clause that names "policies and procedures regarding the use of
cryptography and, where appropriate, encryption" alongside the
adjacent vulnerability-handling and disclosure surface the
risk-management baseline reads against on the vulnerabilities lane.
The mapping reads at clause granularity, on the same shape the
F-CP-01 Article 21(2)(a) mapping closed on:

- **Field set to obligation surface.** The schema fields the
  vulnerabilities body carries — the finding identifier and source,
  the severity band, the exploitability and exposure flags, the
  triage outcome, the remediation track, and the sibling pointer back
  into the F-WF-01 vulnerability-triage playbook — are tied to the
  Article 21(2)(e) sub-clauses they discharge against, one row per
  obligation surface.
- **Cadence to oversight rhythm.** The vulnerabilities cadence band
  promoted onto the schema — event-driven on ingest, with a periodic
  re-walk rhythm — is tied to the oversight rhythm the obligation
  surface reads against. A downstream auditor checks freshness against
  the cadence promoted on the record, not against prose.
- **Sibling pointer to audit lane.** The audit-mirror sibling pointer
  the shared envelope already carries reads against the audit surface
  the mapping document names, so the record on disk and the audit-lane
  consumer read the same evidence trail.

The mapping does not inline the regulatory text and does not claim
coverage the schema does not carry. It reads the obligation surface
against the field set the vulnerabilities adapter actually writes;
a regulator walking the mapping today reads each clause tied to a
field the substrate emits and validates against, not a prose claim
on top of it.

## Where this fits in the cross-stream evidence index

The cross-stream root at `content/evidence/README.md` field note #34
read in now reads two slots walking the substrate end-to-end and five
sitting against the same shape ahead. F-CP-01 risk-analysis is the
first slot reading **Shipped** end-to-end with Article 21(2)(a) tied
underneath. F-CP-04 vulnerabilities reads CORE-FANOUT plus
EXTEND-tests-goldens against all three reference compile targets,
with Article 21(2)(e) tied to the schema at clause granularity — the
same closeout floor F-CP-01 carried into its ROADMAP flip, with the
flip itself riding its own sibling beat ahead on the lane.

The contributor checklist on the cross-stream root reads the same
beats on the vulnerabilities row it reads on the risk-analysis row:
schema → stream root → emitter → fanout → tests/goldens → drift hook
→ regulatory mapping → ROADMAP flip. A contributor walking
`content/evidence/` today reads CP-01 lit up end-to-end, CP-04
walking the same shape through CORE-FANOUT plus EXTEND-tests-goldens
plus EXTEND-NIS2-MAPPING with the flip still ahead, and the five
sibling slots (CP-02, CP-03, CP-05, CP-06, CP-07) standing on the
same substrate the first two lanes have traced out between them.

## What this wave closes

It closes the CORE-FANOUT axis on the vulnerabilities lane. The
emitter is no longer Temporal-only; the n8n and LangGraph adapters
land against the same framework-agnostic helper, cross-target parity
is pinned at emission, and a F-WF-01 vulnerability-triage pass
writes a byte-identical record on every reference compile target.

It closes the EXTEND-tests floor on the vulnerabilities lane. The
substrate carries the same two-contract shape the F-CP-01 lane
carries and the launch-window workflow set carries: cross-target
parity at emission and per-target parity against checked-in goldens.
A refactor of the shared emitter that silently changes the bytes on
any one of the three reference targets fails the golden for that
target by name on the next push.

It closes the regulatory-mapping beat on the vulnerabilities lane.
The Article 21(2)(e) tie reads against the field set the schema
carries, at clause granularity, on the same shape Article 21(2)(a)
closed on for the risk-analysis lane. The two clauses now read
against the two evidence streams on the substrate, against the
fields they actually discharge against.

## What this wave does not promise

It does not promise F-CP-04 reads **Shipped** on the ROADMAP. The
lane is in closeout; the ROADMAP flip rides its own sibling beat
once the acceptance criteria across the cross-stream index all read
green for the vulnerabilities row. This note frames the substrate
beats — the flip itself is forthcoming and will read in a sibling
note on its own.

It does not promise the drift-detection hook is wired on the
vulnerabilities adapter. The hook surface field note #40 read in
sits on the shared emitter at SKELETON across all three target
adapters; the vulnerabilities adapter threads the noop default
through on the same shape, and CORE-WIRE on the drift sibling
beat rides its own lane.

It does not promise CP-02 through CP-07 are scaffolded against the
substrate. The cross-stream index still reads seven slots; CP-01 and
CP-04 are the two slots lit up against the same shared-helper-plus-three-adapters
shape, with the five sibling slots composing onto the same substrate
as their own evidence streams open.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on `secops-ng-framework`,
and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set (F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management) reading **Shipped** on
every reference compile target, F-CP-01 risk-analysis reading
**Shipped** end-to-end on the continuous-posture side, and F-CP-04
vulnerabilities reading CORE-FANOUT plus EXTEND-tests-goldens across
all three reference targets with Article 21(2)(e) tied to the schema
at clause granularity — the closeout floor in place, the ROADMAP
flip ahead.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-04 CORE-FANOUT through
  [PR #274](https://github.com/secops-ng/secops-ng-framework/pull/274),
  EXTEND-tests-goldens through
  [PR #275](https://github.com/secops-ng/secops-ng-framework/pull/275),
  and EXTEND-NIS2-MAPPING through
  [PR #276](https://github.com/secops-ng/secops-ng-framework/pull/276),
  on top of the lane opening through
  [PR #272](https://github.com/secops-ng/secops-ng-framework/pull/272)
  (SCHEMA) and
  [PR #273](https://github.com/secops-ng/secops-ng-framework/pull/273)
  (EMITTER SKELETON).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
two lit slots against the same substrate: F-CP-01 risk-analysis
**Shipped** end-to-end with Article 21(2)(a) tied underneath, and
F-CP-04 vulnerabilities walking the same closeout shape across
CORE-FANOUT, EXTEND-tests-goldens, and EXTEND-NIS2-MAPPING at
Article 21(2)(e), with the ROADMAP flip ahead on its own sibling
beat.

More from the lanes as the F-CP-04 ROADMAP flip picks up the closeout
floor this wave just put in place.
