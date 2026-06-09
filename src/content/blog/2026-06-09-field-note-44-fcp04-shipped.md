---
title: "Field note #44 — F-CP-04 vulnerabilities evidence stream reads Shipped on ROADMAP, second continuous-posture lane lit up end-to-end with NIS2 Art. 21(2)(e) tied at clause granularity"
description: "Forty-fourth field note from the SecOps-NG Digital Commons: the F-CP-04 vulnerabilities evidence stream — the second continuous-posture lane in the catalogue — flips In Progress → Shipped on ROADMAP. The closeout floor field note #43 read in (CORE-FANOUT across all three reference compile targets, per-target byte-parity goldens, NIS2 Article 21(2)(e) mapping at clause granularity) now sits underneath a green ROADMAP marker. Two of seven continuous-posture slots read Shipped end-to-end on the same substrate, against two distinct Article 21(2) clauses."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-04", "continuous-posture", "evidence-stream", "roadmap-flip", "shipped", "nis2", "article-21-2-e", "vulnerabilities", "vulnerability-triage", "compilers", "n8n", "temporal", "langgraph", "digital-commons"]
---

Field note #43 read the F-CP-04 vulnerabilities lane walking the same
closeout shape F-CP-01 risk-analysis traced ahead of it: the
vulnerabilities emitter fanned out from the Temporal SKELETON onto n8n
and LangGraph against the shared framework-agnostic helper, per-target
byte-parity goldens pinned each adapter against an immutable fixture,
and a NIS2 Article 21(2)(e) mapping tied the schema to the obligation
surface at clause granularity. The note named one beat ahead on the
lane — the ROADMAP marker itself, riding its own sibling beat.

This note reads that marker turned. F-CP-04 vulnerabilities is
**Shipped** — the second continuous-posture evidence stream in the
catalogue lit up end-to-end across all three reference compile targets,
with a regulator-traceable mapping into NIS2 at clause granularity.
Two of seven continuous-posture slots now read Shipped on the same
substrate, against two distinct Article 21(2) clauses.

## What this note reads off `main`

### F-CP-04 ROADMAP-FLIP — In Progress → Shipped

The marker turns through
[PR #277](https://github.com/secops-ng/secops-ng-framework/pull/277).
Both ROADMAP acceptance criteria on the F-CP-04 row now read green:

- `content/evidence/vulns/` is populated by the F-WF-01
  vulnerability-triage write-path under each of the three reference
  compile targets. The schema is in, the Temporal emitter SKELETON is
  in, the CORE-FANOUT lights up n8n and LangGraph against the same
  framework-agnostic helper under `compilers/_shared/evidence/`,
  per-target byte-parity goldens pin each adapter against a
  checked-in fixture, and the drift-detection hook surface threads
  through the noop default on all three target adapters.
- The schema is documented under
  `content/mappings/nis2/article-21-vuln-handling.md` against
  §21(2)(e), tying each field on the vulnerabilities body — the
  finding identifier and source, the severity band, the exploitability
  and exposure flags, the triage outcome, the remediation track, and
  the sibling pointer back into the F-WF-01 vulnerability-triage
  playbook — to the regulator-visible obligation surface at clause
  granularity.

The vulnerabilities row on ROADMAP now reads **Shipped**. The second
continuous-posture evidence stream in the catalogue is lit up
end-to-end against the same substrate the first one closed on.

## What this Shipped state actually carries

It carries a typed evidence shape. Every record on the vulnerabilities
stream validates against `schemas/evidence/vulns.schema.json`. The
shared envelope — `producing_workflow`, `run_id`, `attestation_state`,
the `attestation_state_delta`, the audit-mirror sibling pointer, and
the signing surface — reads against the same vocabularies the
risk-analysis stream reads against. `attestation_state` and
`attestation_state_delta.previous_state` are drawn from the shared
four-state vocabulary in `schemas/attestation_state.json`. The shape
does not depend on which reference compile target emitted it.

It carries cross-target byte parity at emission. All three reference
target adapters — n8n, Temporal, LangGraph — sit on top of the same
framework-agnostic helper under `compilers/_shared/evidence/` the
F-CP-01 risk-analysis lane closed on. The CORE-FANOUT parity test pins
that on every push: under the same context, the three adapters produce
byte-identical JSON.

It carries per-target byte parity against a checked-in golden. Each
adapter is pinned against an immutable fixture under
`tests/fixtures/vulnerabilities_evidence/<target>.json`. A silent
serialisation drift from a shared-helper refactor fails the golden for
the affected target, by name, on the next push.

It carries a regulator-traceable mapping into NIS2 at clause
granularity. A reader walking from Article 21(2)(e) lands on the
vulnerabilities schema, the stream root, the three reference adapter
directories, and the audit-mirror sibling pointer without leaving the
repository or moving through a separate translation layer. The
cadence band promoted onto the schema — event-driven on ingest, with a
periodic re-walk rhythm — sits against the oversight rhythm a
downstream auditor reads freshness against.

It carries the same closeout shape the F-CP-01 risk-analysis lane
carries. The two continuous-posture lanes now read on identical
beats: SCHEMA → STREAM-ROOT → EMITTER SKELETON → CORE-FANOUT →
EXTEND-tests-goldens → EXTEND-NIS2-MAPPING → ROADMAP-FLIP. A
contributor reading either lane reads the other against the same
sequence; a sibling lane opening tomorrow opens against the same
shape, against its own §21(2) clause.

## What this Shipped state does not promise

It does not promise the drift-detection CORE-WIRE is in on the
vulnerabilities adapter. The drift hook surface field note #40 read
in sits on the shared emitter at SKELETON across all three target
adapters; the vulnerabilities adapter threads the noop default through
on the same shape. Alerting, KRI promotion, and persistence each ride
their own sibling beats on the same shared-helper-plus-three-adapters
shape, against both continuous-posture lanes equally.

It does not promise the five remaining continuous-posture streams are
scaffolded. The cross-stream index field note #34 read in still names
seven slots; CP-01 risk-analysis and CP-04 vulnerabilities are the two
slots lit up end-to-end across all three reference compile targets.
CP-02, CP-03, CP-05, CP-06, and CP-07 compose onto the same substrate
as their own evidence streams open against the parity floor F-CP-01
and F-CP-04 have now closed on between them.

It does not promise the mapping covers Article 21 in full. The
vulnerabilities document scopes to §21(2)(e) — the
vulnerability-handling and disclosure surface the vulnerabilities
evidence stream discharges against. The risk-analysis document scopes
to §21(2)(a). The other §21(2) clauses ride their own evidence streams
and their own mapping documents.

## Where the F-CP-04 lane sits now

The lane reads Shipped end-to-end across these waves:

- **SCHEMA** ([PR #272](https://github.com/secops-ng/secops-ng-framework/pull/272))
  — typed schema for the vulnerabilities evidence record plus
  enum/cadence promotions on the shared vocabularies.
- **EMITTER SKELETON** ([PR #273](https://github.com/secops-ng/secops-ng-framework/pull/273))
  — Temporal-first emitter SKELETON wrapping the F-WF-01
  vulnerability-triage write-path on the shared helper shape.
- **CORE-FANOUT** ([PR #274](https://github.com/secops-ng/secops-ng-framework/pull/274))
  — n8n + LangGraph adapters land on the same framework-agnostic
  helper; cross-target parity pinned at emission.
- **EXTEND-tests-goldens** ([PR #275](https://github.com/secops-ng/secops-ng-framework/pull/275))
  — per-target byte-parity goldens against checked-in fixtures, one
  per reference target.
- **EXTEND-NIS2-MAPPING** ([PR #276](https://github.com/secops-ng/secops-ng-framework/pull/276))
  — schema tied to NIS2 Article 21(2)(e) at clause granularity.
- **ROADMAP-FLIP** ([PR #277](https://github.com/secops-ng/secops-ng-framework/pull/277))
  — In Progress → Shipped on ROADMAP.

The practical handle the lane gives a reader walking in today: an
F-WF-01 vulnerability-triage pass running against any of the three
reference compile targets writes a typed, regulator-traceable
vulnerabilities evidence record on the same shared shape the
risk-analysis stream writes on, with Article 21(2)(e) tied to the
field set the substrate actually emits.

## Where the cross-stream evidence index sits now

The cross-stream root at `content/evidence/README.md` field note #34
read in now reads two slots Shipped end-to-end and five slots sitting
against the same shape ahead. F-CP-01 risk-analysis closed first
against Article 21(2)(a). F-CP-04 vulnerabilities closes second
against Article 21(2)(e). The substrate the two lanes traced out
between them — typed schema, shared helper, three adapters, golden
fixtures, drift hook surface at SKELETON, NIS2 mapping at clause
granularity, ROADMAP flip on the same closeout sequence — now sits
in place for CP-02, CP-03, CP-05, CP-06, and CP-07 to open against.

The contributor checklist on the cross-stream root reads the same
beats on every continuous-posture row: schema → stream root →
emitter → fanout → tests/goldens → drift hook → regulatory mapping →
ROADMAP flip. Two rows have walked it end-to-end. Five rows wait
their turn against the same checklist.

## Community lane status

The community-ignition entry point — "Open for contributors" —
remains live against the good-first-issues on `secops-ng-framework`,
and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set — F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management — all reading **Shipped**
on every reference compile target, and the first two continuous-posture
evidence streams — **F-CP-01 risk-analysis** against Article 21(2)(a)
and **F-CP-04 vulnerabilities** against Article 21(2)(e) — both
reading **Shipped** end-to-end against the same substrate, with the
NIS2 ties sitting side by side under `content/mappings/nis2/`.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-04 ROADMAP flip through
  [PR #277](https://github.com/secops-ng/secops-ng-framework/pull/277),
  on top of the closeout floor field note #43 read in: CORE-FANOUT
  through [PR #274](https://github.com/secops-ng/secops-ng-framework/pull/274),
  EXTEND-tests-goldens through
  [PR #275](https://github.com/secops-ng/secops-ng-framework/pull/275),
  and EXTEND-NIS2-MAPPING through
  [PR #276](https://github.com/secops-ng/secops-ng-framework/pull/276),
  with the lane opening through
  [PR #272](https://github.com/secops-ng/secops-ng-framework/pull/272)
  (SCHEMA) and
  [PR #273](https://github.com/secops-ng/secops-ng-framework/pull/273)
  (EMITTER SKELETON).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the catalogue reads three Shipped
surfaces against the same substrate: the launch-window workflow set
(F-WF-01, F-WF-03, F-WF-05) on the orchestration side, and the first
two continuous-posture streams (F-CP-01 risk-analysis, F-CP-04
vulnerabilities) on the continuous-posture side, against two distinct
NIS2 Article 21(2) clauses. The next moves walk the drift-detection
CORE-WIRE through the same fanout shape the SKELETON opened against,
and start lighting up the five sibling continuous-posture streams
against the parity floor the first two lanes have now closed on
between them.

More from the lanes as the drift-detection CORE-WIRE picks up the
shape the two Shipped lanes just sealed against.
