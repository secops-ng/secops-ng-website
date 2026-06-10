---
title: "Field note #47 — F-CP-02 incidents evidence stream reads Shipped on ROADMAP, third continuous-posture lane lit up end-to-end with NIS2 Art. 23(4) three-milestone notification timeline tied at clause granularity"
description: "Forty-seventh field note from the SecOps-NG Digital Commons: the F-CP-02 incidents evidence stream — the third continuous-posture lane in the catalogue — flips Proposed → Shipped on ROADMAP. The closeout wave field note #46 read in (CORE-FANOUT across all three reference compile targets) now sits closed by per-target byte-parity goldens and a NIS2 Article 23(4) three-milestone narrative — early-warning at 24 hours, incident notification at 72 hours, and final report at one month — tied to the schema at clause granularity. Three of seven continuous-posture slots read Shipped end-to-end on the same substrate, against three distinct regulatory surfaces."
pubDate: 2026-06-10
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-cp-02", "continuous-posture", "evidence-stream", "roadmap-flip", "shipped", "nis2", "article-23", "article-23-4", "incident-notification", "three-milestone", "early-warning", "incidents", "incident-management", "compilers", "n8n", "temporal", "langgraph", "byte-parity", "goldens", "digital-commons"]
---

Field note #46 read the F-CP-02 incidents lane walking the same closeout
shape F-CP-01 risk-analysis and F-CP-04 vulnerabilities traced ahead of
it: the incidents emitter fanned out from the Temporal SKELETON onto n8n
and LangGraph against the shared framework-agnostic helper under
`compilers/_shared/evidence/incidents.py`, with a CORE-FANOUT parity test
pinning byte-identical emission on every push. The note named three
beats ahead of the ROADMAP flip on the lane — EXTEND-tests-goldens, the
NIS2 mapping at clause granularity, and the ROADMAP marker itself.

This note reads those three beats turned, in the same hour, on the same
substrate. F-CP-02 incidents is **Shipped** — the third continuous-
posture evidence stream in the catalogue lit up end-to-end across all
three reference compile targets, with a regulator-traceable mapping into
the NIS2 Article 23(4) three-milestone notification timeline at clause
granularity. Three of seven continuous-posture slots now read Shipped on
the same substrate, against three distinct regulatory surfaces —
Article 21(2)(a) for risk-analysis, Article 21(2)(e) for vulnerabilities,
and Article 23(4) for incidents.

## What this note reads off `main`

### F-CP-02 EXTEND-tests-goldens — per-target byte-parity goldens land

Through
[PR #282](https://github.com/secops-ng/secops-ng-framework/pull/282),
each of the three incidents adapters is pinned against a checked-in
immutable fixture under
`tests/fixtures/incidents_evidence/<target>.json`. The n8n adapter, the
Temporal adapter, and the LangGraph adapter each compose against the
shared helper, and each writes byte-for-byte the same JSON the golden
on disk carries — for the same incident context, the same workflow run
identifier, the same milestone state.

A silent serialisation drift from a refactor on the shared helper fails
the golden for the affected target, by name, on the next push. The
CORE-FANOUT cross-target parity test already pinned that the three
adapters agree with one another; the per-target goldens pin that they
each agree with the shape on disk yesterday. The two tests together
close the byte-parity beat on the incidents stream against the same
two-axis grid F-CP-01 and F-CP-04 closed on.

### F-CP-02 EXTEND-NIS2-MAPPING — Article 23(4) three-milestone narrative

Through
[PR #283](https://github.com/secops-ng/secops-ng-framework/pull/283),
the incidents schema picks up its NIS2 mapping document at clause
granularity, under `content/mappings/nis2/article-23-incidents.md`. The
shape mirrors the Article 21(2)(a) and Article 21(2)(e) mapping
documents one-for-one for review symmetry, but the obligation surface
underneath is the one Article 23(4) carries: the three-milestone
notification timeline that NIS2 binds member states to thread through
into the operator surface — an **early warning** within 24 hours of
becoming aware of a significant incident, an **incident notification**
within 72 hours updating the early warning with an initial assessment,
and a **final report** within one month carrying the post-incident
detail.

The mapping reads each milestone against the typed field on the
incidents schema the SCHEMA wave promoted to the substrate. The
milestone vocabulary — `early_warning`, `incident_notification`,
`final_report` — lives as a typed enum on the evidence record, not as
free-text. The mapping document ties each enum value back to its
clause in Article 23(4), names the reporting clock the milestone reads
against — discovery for the 24-hour clock, the 72-hour and one-month
clocks composing onto the same anchor — and points at the schema field
that carries the milestone state on disk. A reader walking from
Article 23(4) lands on the incidents schema field at clause granularity;
a reader walking from the incidents record lands back at the
regulator-visible obligation the field discharges against.

### F-CP-02 ROADMAP-FLIP — Proposed → Shipped

The marker turns through
[PR #284](https://github.com/secops-ng/secops-ng-framework/pull/284).
Both ROADMAP acceptance criteria on the F-CP-02 row now read green:

- `content/evidence/incidents/` is populated by the F-WF-05
  incident-management write-path under each of the three reference
  compile targets. The schema is in, the Temporal emitter SKELETON is
  in, the CORE-FANOUT lights up n8n and LangGraph against the same
  framework-agnostic helper under `compilers/_shared/evidence/`,
  per-target byte-parity goldens pin each adapter against a
  checked-in fixture, and the three-milestone enum threads through
  every target adapter at the same shape on disk.
- The schema is documented under
  `content/mappings/nis2/article-23-incidents.md` against §23(4),
  tying each field on the incidents body — the producing workflow,
  the incident identifier, the discovery anchor for the reporting
  clocks, the milestone state on the three-step vocabulary, the
  initial-assessment summary the 72-hour milestone reads against,
  and the post-incident detail the final report carries — to the
  regulator-visible obligation surface at clause granularity.

The incidents row on ROADMAP now reads **Shipped**. The third
continuous-posture evidence stream in the catalogue is lit up
end-to-end against the same substrate the two sibling streams closed
on.

## What this Shipped state actually carries

It carries a typed evidence shape. Every record on the incidents stream
validates against `schemas/evidence/incidents.schema.json`. The shared
envelope — `producing_workflow`, `run_id`, `attestation_state`, the
`attestation_state_delta`, the audit-mirror sibling pointer, and the
signing surface — reads against the same vocabularies the risk-analysis
and vulnerabilities streams read against. `attestation_state` and
`attestation_state_delta.previous_state` are drawn from the shared
four-state vocabulary in `schemas/attestation_state.json`. The shape
does not depend on which reference compile target emitted it.

It carries cross-target byte parity at emission. All three reference
target adapters — n8n, Temporal, LangGraph — sit on top of the same
framework-agnostic helper the F-CP-01 and F-CP-04 lanes closed on. The
CORE-FANOUT parity test pins that on every push: under the same
incident context, the three adapters produce byte-identical JSON.

It carries per-target byte parity against a checked-in golden. Each
adapter is pinned against an immutable fixture under
`tests/fixtures/incidents_evidence/<target>.json`. A silent
serialisation drift from a shared-helper refactor fails the golden for
the affected target, by name, on the next push.

It carries the NIS2 Article 23(4) notification timeline as typed state
on the record. The milestone enum lives on the schema, not in a
free-text field, which means an emitter cannot ship an incident record
without naming which of the three reporting milestones the record is
discharging — and a reader cannot misread which clause of Article 23(4)
the record traces to. Drift on the milestone vocabulary surfaces as a
type error, not as a semantic disagreement weeks later.

It carries a regulator-traceable mapping into NIS2 at clause
granularity. A reader walking from Article 23(4) lands on the incidents
schema fields that discharge each of the three milestones; a reader
walking from an incidents record on disk lands back at the
regulator-visible clause the record reads against. The mapping
document sits in the same shape on disk as the Article 21(2)(a) and
Article 21(2)(e) mapping documents that closed under the two sibling
lanes.

## Where this lands the continuous-posture catalogue

The cross-stream root at `content/evidence/README.md` now reads three
of its seven continuous-posture slots Shipped end-to-end:

- **F-CP-01 risk-analysis** — Shipped against NIS2 Article 21(2)(a).
- **F-CP-04 vulnerabilities** — Shipped against NIS2 Article 21(2)(e).
- **F-CP-02 incidents** — Shipped against NIS2 Article 23(4).

Three distinct clauses, three distinct evidence shapes, one shared
substrate. The same framework-agnostic helper under
`compilers/_shared/evidence/` carries all three streams' emission. The
same CORE-FANOUT parity grid and per-target golden grid pin all three
streams' byte parity. The same `attestation_state` vocabulary threads
through every record on every stream. The same NIS2 mapping shape on
disk ties each stream to its clause.

Four continuous-posture slots remain ahead on the catalogue, walking
the same wave shape against the substrate the first three closed on.

## Why the Article 23(4) tie matters

The Article 21(2) clauses the first two streams closed against read
the technical-and-organisational measures side of NIS2: the operator's
obligation to carry a risk-analysis discipline, a vulnerability-handling
discipline, an incident-handling discipline, and the rest of the
§21(2) catalogue. Article 23 reads a different surface: the operator's
obligation, on becoming aware of a significant incident, to notify the
competent authority on a three-step timeline — early warning at 24
hours, incident notification at 72 hours, final report at one month.

The same typed substrate now reads both surfaces. An incidents record
on disk carries the §21(2)(b) "incident-handling" obligation
discharged on the technical side, and the §23(4) "three-milestone
notification" obligation discharged on the regulatory-timeline side.
The schema does not pick one surface and drop the other; the shape on
disk is the surface the operator already runs, and the mappings tie
that surface back to both clauses at clause granularity. A reader
auditing for §21(2)(b) and a reader auditing for §23(4) read against
the same record on disk, against two distinct mapping documents, both
landing on the same fields.

## What comes next

Three continuous-posture slots are Shipped end-to-end; four remain
ahead on the catalogue, against their own clauses on the §21(2)
surface. The wave shape is the one the first three slots walked —
SCHEMA, EMITTER SKELETON, CORE-FANOUT, EXTEND-tests-goldens,
EXTEND-NIS2-MAPPING, ROADMAP-FLIP — composing onto the substrate
already on disk.

The drift-detection hook surface threads through every target adapter
on every Shipped stream today on its noop default. CORE-WIRE for the
drift hook rides its own sibling beat on the substrate, and reads in
when it lands.

The good-first-issues lane on the framework repo remains open against
the catalogue, and the free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A reader walking the framework repo today finds
three continuous-posture lanes reading **Shipped** end-to-end with
NIS2 ties at clause granularity on three distinct clauses, the
launch-window workflow set reading **Shipped** on every reference
compile target, and the typed mapping substrate carrying its growing
contributor surface on disk.

## What this note does not promise

It does not promise the catalogue reads Shipped end-to-end. Three of
seven continuous-posture slots are lit up; four remain ahead, on the
same wave shape the first three walked.

It does not promise drift-detection is wired on the Shipped streams.
The hook surface threads through every adapter on its noop default
today; CORE-WIRE rides its own sibling beat ahead on the substrate.

It does not promise Article 23 in full. The mapping ties the schema
to §23(4) — the three-milestone notification timeline. The
surrounding §23 surface — significance thresholds, cross-border
coordination, the recipient authorities — reads off the regulatory
text the mapping points at, not off the substrate, and stays where
it lives.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-02 EXTEND-tests-goldens through
  [PR #282](https://github.com/secops-ng/secops-ng-framework/pull/282),
  EXTEND-NIS2-MAPPING through
  [PR #283](https://github.com/secops-ng/secops-ng-framework/pull/283),
  and ROADMAP-FLIP through
  [PR #284](https://github.com/secops-ng/secops-ng-framework/pull/284),
  composing onto the SCHEMA, EMITTER SKELETON, and CORE-FANOUT waves
  through PRs
  [#278](https://github.com/secops-ng/secops-ng-framework/pull/278),
  [#279](https://github.com/secops-ng/secops-ng-framework/pull/279),
  and [#280](https://github.com/secops-ng/secops-ng-framework/pull/280).
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-six that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three slots Shipped end-to-end against three distinct NIS2 clauses,
on the same substrate, with the same parity grid and the same mapping
shape underneath.

More from the lanes as the next continuous-posture slot opens its
SCHEMA wave on the substrate the first three closed against.
