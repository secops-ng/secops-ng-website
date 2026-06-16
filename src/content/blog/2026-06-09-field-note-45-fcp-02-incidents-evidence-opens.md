---
title: "Field note #45 — F-CP-02 opens the third evidence stream: a typed incidents evidence-artifact schema with the NIS2 Article 23(4) three-milestone vocabulary promoted, and a Temporal emitter skeleton wrapping the incident-management write-path"
description: "Forty-fifth field note from the SecOps-NG Digital Commons: F-CP-02 incidents — the third continuous-posture evidence stream on the catalogue — opens against the same substrate F-CP-01 risk-analysis and F-CP-04 vulnerabilities already compose onto. A typed incidents evidence-artifact schema lands under content/evidence/incidents/ with the NIS2 Article 23(4) three-milestone vocabulary promoted into the shared helper, and a Temporal emitter SKELETON wraps the incident-management write-path so a F-WF-05 pass writes a typed incidents evidence record on the same shape the audit-mirror already reads against."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["lane-opening", "f-cp-02", "continuous-posture", "evidence-stream", "schema", "emitter", "incidents", "incident-management", "f-wf-05", "nis2", "article-23", "three-milestone", "content-model", "temporal", "digital-commons"]
---

Field note #44 read the F-CP-04 vulnerabilities evidence stream flipping
to **Shipped** on ROADMAP, with NIS2 Article 21(2)(e) tied to the schema
at clause granularity. The two evidence streams the catalogue had lit up
by the end of that note — F-CP-01 risk-analysis and F-CP-04
vulnerabilities — between them traced out the
shared-helper-plus-three-adapters shape every sibling slot on the
continuous-posture side is meant to compose onto.

This note reads the third slot opening against that shape. F-CP-02
incidents — the continuous-posture lane sitting directly on top of the
launch-window F-WF-05 incident-management workflow — opened its
evidence stream over two PRs on the framework repo: a typed schema
under `content/evidence/incidents/` with the NIS2 Article 23(4)
three-milestone vocabulary promoted into the shared helper, and a
Temporal emitter SKELETON wrapping the incident-management write-path
on the same shape the F-CP-01 and F-CP-04 emitter SKELETONS already
opened against.

## What this note reads off `main`

### F-CP-02 SCHEMA: typed incidents evidence-artifact schema + Article 23(4) three-milestone vocabulary promotion

The first move binds the content side. Through
[PR #278](https://github.com/secops-ng/secops-ng-framework/pull/278),
a typed incidents evidence-artifact schema lands at
`schemas/evidence/incidents.schema.json` with a stream root at
`content/evidence/incidents/` and a README pointing at the regulatory
anchor the stream discharges against. The schema reads off the shared
vocabularies the substrate already carries, and promotes the surface
the incidents lane needs on top of them:

- **Shared envelope.** `producing_workflow`, `run_id`,
  `attestation_state`, `attestation_state_delta`, the audit-mirror
  sibling pointer, and the signing surface read against the same
  envelope every evidence record on the substrate carries.
  `attestation_state` and `attestation_state_delta.previous_state` are
  drawn from the shared four-state vocabulary at
  `schemas/attestation_state.json` — the same one the F-CP-01
  risk-analysis and F-CP-04 vulnerabilities records validate against.
- **Incidents body.** The evidence body reads the typed shape an
  incident-management pass actually writes: the incident identifier and
  source, the affected-service surface, the impact band as a closed
  enum, the containment state, the sibling pointer back into the
  F-WF-05 incident-management playbook run that produced the record,
  and the operator-facing decision trail every milestone on the
  incident timeline rides on.
- **NIS2 Article 23(4) three-milestone vocabulary promotion.** The
  early-warning, incident-notification, and final-report milestones
  land as a typed three-state vocabulary at
  `schemas/incident_milestone.json`, promoted into the shared helper
  so every emitter and adapter on the substrate reads against the same
  closed enum. The milestone a record carries, the timestamp the
  milestone fired at, and the obligation surface it discharges against
  are properties of the record on disk — not claims made in prose.
- **Regulatory anchor, by reference.** The schema points at the
  regulatory clause the incidents evidence discharges against without
  inlining the mapping document. The mapping itself rides its own beat
  on the lane — the same shape F-CP-01 walked through the
  EXTEND-NIS2-MAPPING wave on closeout.

### F-CP-02 EMITTER SKELETON: Temporal wrapper around the incident-management write-path

The second move binds the execution side. Through
[PR #279](https://github.com/secops-ng/secops-ng-framework/pull/279),
a Temporal emitter SKELETON lands wrapping the incident-management
write-path on top of the same framework-agnostic helper under
`compilers/_shared/evidence/` the F-CP-01 and F-CP-04 lanes already
close on. The Temporal wrapper picks up `producing_workflow` and
`run_id` from the workflow context and binds them onto the record at
write time, so a F-WF-05 incident-management pass running against the
Temporal compile target writes a typed incidents evidence record on
the same shape the audit-mirror sibling span already reads against.

The helper module shape mirrors the F-CP-04 EMITTER SKELETON one-for-one
for review symmetry — the same envelope plumbing, the same
attestation-state binding, the same audit-mirror sibling pointer, with
the incidents body and the three-milestone vocabulary binding sitting
on top. One happy-path replay test pins the wrapper's
deterministic-replay surface against a checked-in fixture; the broader
test matrix rides ahead of the lane on the same beats the sibling
streams already walked.

The SKELETON does not yet fan out to n8n or LangGraph, does not yet pin
per-target byte-parity goldens, and does not yet thread the drift hook
through the incidents adapter — all three beats sit ahead on the lane
on the same shape the sibling streams walked.

## Where this fits in the cross-stream evidence index

The cross-stream root at `content/evidence/README.md` now reads three
of its seven slots lit up. F-CP-01 risk-analysis and F-CP-04
vulnerabilities are the two slots reading **Shipped** end-to-end across
all three reference compile targets, with the NIS2 Article 21(2)(a)
and Article 21(2)(e) ties pinned underneath. F-CP-02 incidents is the
third slot lit up: its schema is on disk under
`content/evidence/incidents/`, its emitter SKELETON wraps the
incident-management write-path on Temporal, and its row on the index
points at both PRs as the lane's substrate beats.

The contributor checklist on the cross-stream root reads the same way
for the incidents row it reads for the risk-analysis and vulnerabilities
rows: schema → stream root → emitter → fanout → tests/goldens →
drift hook → regulatory mapping → ROADMAP flip. A contributor walking
`content/evidence/` today reads CP-01 and CP-04 lit up end-to-end,
CP-02 opened at SCHEMA + EMITTER SKELETON, and the four sibling slots
(CP-03, CP-05, CP-06, CP-07) standing on the same shape the first
three streams have now between them traced out.

## What the Article 23(4) promotion means for the substrate

The incidents lane is the first slot on the catalogue that anchors a
regulatory timeline — the NIS2 Article 23 incident-notification
sequence: an early warning within twenty-four hours, an incident
notification within seventy-two hours, and a final report within one
month. Field note #45 does not promise the timeline is enforced; it
reads the timeline being promoted into the typed substrate. The
three-milestone enum is a property of the record, the timestamp a
property of the record, and the obligation surface the milestone
discharges against a property of the record. A downstream reader
checking that a forty-eight-hour-old incident has emitted both an
early-warning record and an incident-notification record reads against
the typed surface; it does not parse prose.

The shape the substrate now carries on the incidents row is the shape
every operator-facing reading of the Article 23 timeline will compose
against — the audit-mirror sibling span, the operator-facing decision
trail, the freshness check on the cadence band, and the regulatory
mapping document on the EXTEND beat ahead.

## What comes next on this lane

The lane composes through the same waves F-CP-01 and F-CP-04 walked,
against the same shared-helper-plus-three-adapters shape:

- **CORE-FANOUT** — the n8n and LangGraph adapters land on the same
  framework-agnostic helper as the Temporal SKELETON, cross-target
  parity pinned at emission so the three reference compile targets
  produce byte-identical incidents evidence under the same context.
- **EXTEND-tests-goldens** — per-target byte-parity goldens against
  checked-in fixtures, one per reference target. A silent
  serialisation drift on the shared helper fails the golden for the
  affected target by name on the next push.
- **drift-detection SKELETON** — the typed `DriftHook` contract on the
  shared emitter threads through the incidents adapter for every
  target. The SKELETON default stays noop until CORE-WIRE rides its
  own sibling beat.
- **EXTEND-NIS2-MAPPING** — a mapping document tying the incidents
  schema to Article 21(2)(b) on the technical-and-organisational
  measures side and Article 23 on the notification-timeline side, at
  clause granularity, the same way F-CP-01 closed against §21(2)(a)
  and F-CP-04 closed against §21(2)(e).
- **ROADMAP-FLIP** — In Progress → Shipped on the F-CP-02 row once
  the acceptance criteria above all read green.

The beats walk in the order the sibling streams walked them, because
the substrate they walk against is the one F-CP-01 and F-CP-04 closed
on. The incidents lane does not re-invent the shape; it composes onto
it, and brings the regulatory-timeline surface onto the typed
substrate for the first time.

## What this opening does not promise

It does not promise the n8n or LangGraph adapters carry incidents
evidence yet. The SKELETON wraps the Temporal compile target only;
CORE-FANOUT is the next beat on the lane.

It does not promise byte-parity goldens for the incidents emitter.
The shared helper underneath it is pinned by the F-CP-01 and F-CP-04
fixtures already on disk; the incidents-specific goldens ride their
own EXTEND-tests-goldens beat once CORE-FANOUT closes.

It does not promise a regulatory mapping document yet. The schema
points at the clauses the stream discharges against; the document
tying field set to obligation surface at clause granularity rides the
EXTEND-NIS2-MAPPING beat on the lane, and on this lane it carries
both the Article 21(2)(b) technical-and-organisational tie and the
Article 23 notification-timeline tie.

It does not promise the drift hook is wired on the incidents adapter.
The contract sits on the shared emitter; the adapter threads it
through the same way every F-CP-01 and F-CP-04 adapter threads the
noop default through today.

It does not promise the Article 23 timeline is enforced. The
three-milestone vocabulary is promoted on the typed substrate so an
operator-facing reading can compose against it; the enforcement
surface — windows checked, thresholds escalated, late-notification
fired — rides on top of the typed substrate, not inside the SKELETON.

## Community lane status

The community-ignition entry point — "Open for contributors" — remains
live against the good-first-issues on `secops-ng-framework`, and the
free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set (F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management) reading **Shipped** on
every reference compile target, F-CP-01 risk-analysis and F-CP-04
vulnerabilities reading **Shipped** end-to-end on the
continuous-posture side, and F-CP-02 incidents open against the same
substrate at SCHEMA + EMITTER SKELETON with the Article 23(4)
three-milestone vocabulary already promoted on the typed surface.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-02 SCHEMA through
  [PR #278](https://github.com/secops-ng/secops-ng-framework/pull/278)
  and EMITTER SKELETON through
  [PR #279](https://github.com/secops-ng/secops-ng-framework/pull/279),
  composing onto the shared-helper-plus-three-adapters shape F-CP-01
  and F-CP-04 already close on.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
three lit slots against the same substrate: F-CP-01 risk-analysis and
F-CP-04 vulnerabilities **Shipped** end-to-end across n8n, Temporal,
and LangGraph, and F-CP-02 incidents open at SCHEMA + EMITTER SKELETON
with the Temporal wrapper already binding the incident-management
write-path onto the typed shape the cross-stream index now reads
against in three rows instead of two — and with the Article 23
incident-notification timeline carried on the typed substrate for the
first time.

More from the lanes as the F-CP-02 CORE-FANOUT picks up the shape the
SKELETON just opened against.
