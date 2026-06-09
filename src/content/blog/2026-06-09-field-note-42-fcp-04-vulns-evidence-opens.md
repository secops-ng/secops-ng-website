---
title: "Field note #42 — F-CP-04 opens the second evidence stream: a typed vulnerabilities evidence-artifact schema with enum/cadence promotions, and a Temporal emitter skeleton wrapping the vulnerability-triage write-path"
description: "Forty-second field note from the SecOps-NG Digital Commons: F-CP-04 vulnerabilities — the second continuous-posture evidence stream on the catalogue — opens against the substrate F-CP-01 risk-analysis just closed on. A typed vulnerabilities evidence-artifact schema lands under content/evidence/vulns/ with enum and cadence promotions, and a Temporal emitter SKELETON wraps the vulnerability-triage write-path so a F-WF-01 pass writes a typed vulnerabilities evidence record on the same shape the audit-mirror already reads against."
pubDate: 2026-06-09
author: "The SecOps-NG commons"
tags: ["lane-opening", "f-cp-04", "continuous-posture", "evidence-stream", "schema", "emitter", "vulnerabilities", "vulnerability-triage", "f-wf-01", "nis2", "dora", "content-model", "temporal", "digital-commons"]
---

Field note #41 read the F-CP-01 risk-analysis evidence stream flipping
to **Shipped** on ROADMAP, with NIS2 Article 21(2)(a) tied to the
schema at clause granularity and per-target byte-parity goldens pinning
the n8n, Temporal, and LangGraph adapters against checked-in fixtures.
The closeout sealed the first continuous-posture slot on the catalogue
against a shared-helper-plus-three-adapters shape every sibling stream
is meant to compose into.

This note reads the second slot opening against that shape. F-CP-04
vulnerabilities — the continuous-posture lane sitting directly on top
of the launch-window F-WF-01 vulnerability-triage workflow — opened
its evidence stream over two PRs on the framework repo: a typed
schema under `content/evidence/vulns/` with enum and cadence
promotions, and a Temporal emitter SKELETON wrapping the
vulnerability-triage write-path on the same shape the F-CP-01 emitter
SKELETON opened against.

## What this note reads off `main`

### F-CP-04 SCHEMA: typed vulnerabilities evidence-artifact schema + enum and cadence promotions

The first move binds the content side. Through
[PR #272](https://github.com/secops-ng/secops-ng-framework/pull/272),
a typed vulnerabilities evidence-artifact schema lands at
`schemas/evidence/vulns.schema.json` with a stream root at
`content/evidence/vulns/` and a README pointing at the regulatory
anchor the stream discharges against. The schema reads off the shared
vocabularies F-CP-01 promoted to first-class status on the content
side, and adds the surface the vulnerabilities lane needs on top:

- **Shared envelope.** `producing_workflow`, `run_id`,
  `attestation_state`, `attestation_state_delta`, the audit-mirror
  sibling pointer, and the signing surface read against the same
  envelope every evidence record on the substrate carries.
  `attestation_state` and `attestation_state_delta.previous_state` are
  drawn from the shared four-state vocabulary at
  `schemas/attestation_state.json` — the same one the F-CP-01
  risk-analysis records validate against.
- **Vulnerabilities body.** The evidence body reads the typed shape a
  vulnerability-triage pass actually writes: the asset surface, the
  finding identifier and source, the severity band as a closed enum,
  the exploitability and exposure flags, the triage outcome, the
  remediation track the finding is placed on, and the sibling pointer
  back into the F-WF-01 vulnerability-triage playbook run that produced
  the record.
- **Cadence band promotion.** The vulnerabilities cadence band lands as
  an enum promotion on the shared cadence vocabulary — event-driven on
  ingest, with a periodic re-walk rhythm a downstream reader can check
  freshness against. The cadence is a property of the record on disk,
  not a claim made in prose.
- **Regulatory anchor, by reference.** The schema points at the
  regulatory clause the vulnerabilities evidence discharges against
  without inlining the mapping document. The mapping itself rides its
  own beat on the lane — the same shape F-CP-01 walked through the
  EXTEND-NIS2-MAPPING wave on closeout.

### F-CP-04 EMITTER SKELETON: Temporal wrapper around the vulnerability-triage write-path

The second move binds the execution side. Through
[PR #273](https://github.com/secops-ng/secops-ng-framework/pull/273),
a Temporal emitter SKELETON lands wrapping the vulnerability-triage
write-path on top of the same framework-agnostic helper under
`compilers/_shared/evidence/` the F-CP-01 lane closed on. The Temporal
wrapper picks up `producing_workflow` and `run_id` from the workflow
context and binds them onto the record at write time, so a F-WF-01
vulnerability-triage pass running against the Temporal compile target
writes a typed vulnerabilities evidence record on the same shape the
audit-mirror sibling span already reads against.

The shape lines up sibling-for-sibling with the F-CP-01 SKELETON the
substrate started with. The shared helper carries the envelope, the
attestation-state vocabulary, and the audit-mirror sibling pointer; the
adapter on top of it binds the vulnerabilities body and the
target-specific context. The SKELETON does not yet fan out to n8n or
LangGraph, does not yet pin per-target byte-parity goldens, and does
not yet thread the drift hook through the vulnerabilities adapter —
all three beats sit ahead on the lane on the same shape F-CP-01
walked.

## Where this fits in the cross-stream evidence index

The cross-stream root at `content/evidence/README.md` — the index
field note #34 read in as F-CP-01 opened — now reads two of its seven
slots lit up. F-CP-01 risk-analysis is the first slot reading
**Shipped** end-to-end across all three reference compile targets,
with the NIS2 Article 21(2)(a) tie pinned underneath. F-CP-04
vulnerabilities is the second slot lit up: its schema is on disk under
`content/evidence/vulns/`, its emitter SKELETON wraps the
vulnerability-triage write-path on Temporal, and its row on the index
points at both PRs as the lane's substrate beats.

The contributor checklist on the cross-stream root reads the same way
for the vulnerabilities row it reads for the risk-analysis row:
schema → stream root → emitter → fanout → tests/goldens → drift hook →
regulatory mapping → ROADMAP flip. A contributor walking
`content/evidence/` today reads CP-01 lit up end-to-end, CP-04 opened
at SCHEMA + EMITTER SKELETON, and the five sibling slots
(CP-02, CP-03, CP-05, CP-06, CP-07) standing on the same shape the
first two streams have now between them traced out.

## What comes next on this lane

The lane composes through the same waves F-CP-01 walked, against the
same shared-helper-plus-three-adapters shape:

- **CORE-FANOUT** — the n8n and LangGraph adapters land on the same
  framework-agnostic helper as the Temporal SKELETON, cross-target
  parity pinned at emission so the three reference compile targets
  produce byte-identical vulnerabilities evidence under the same
  context.
- **EXTEND-tests-goldens** — per-target byte-parity goldens against
  checked-in fixtures, one per reference target. A silent
  serialisation drift on the shared helper fails the golden for the
  affected target by name on the next push.
- **drift-detection SKELETON** — the typed `DriftHook` contract on the
  shared emitter threads through the vulnerabilities adapter for every
  target. The SKELETON default stays noop until CORE-WIRE rides its
  own sibling beat.
- **EXTEND-NIS2-MAPPING** — a mapping document tying the
  vulnerabilities schema to the clause the stream discharges against,
  at clause granularity, the same way F-CP-01 closed against
  §21(2)(a).
- **ROADMAP-FLIP** — In Progress → Shipped on the F-CP-04 row once
  the acceptance criteria above all read green.

The beats walk in the order F-CP-01 walked them, because the substrate
they walk against is the one F-CP-01 closed on. The vulnerabilities
lane does not re-invent the shape; it composes onto it.

## What this opening does not promise

It does not promise the n8n or LangGraph adapters carry vulnerabilities
evidence yet. The SKELETON wraps the Temporal compile target only;
CORE-FANOUT is the next beat on the lane.

It does not promise byte-parity goldens for the vulnerabilities
emitter. The shared helper underneath it is pinned by the F-CP-01
fixtures already on disk; the vulnerabilities-specific goldens ride
their own EXTEND-tests-goldens beat once CORE-FANOUT closes.

It does not promise a regulatory mapping document yet. The schema
points at the clause the stream discharges against; the document
tying field set to obligation surface at clause granularity rides
the EXTEND-NIS2-MAPPING beat on the lane.

It does not promise the drift hook is wired on the vulnerabilities
adapter. The contract sits on the shared emitter; the adapter threads
it through the same way every F-CP-01 adapter threads the noop default
through today.

## Community lane status

The community-ignition entry point — "Open for contributors" — remains
live against the good-first-issues on `secops-ng-framework`, and the
free practitioner Discord
([discord.gg/secops-ng](https://discord.gg/secops-ng)) remains the
contributor chat. A contributor walking in today finds the
launch-window workflow set (F-WF-01 vulnerability triage, F-WF-03
alert triage, F-WF-05 incident management) reading **Shipped** on every
reference compile target, F-CP-01 risk-analysis reading **Shipped**
end-to-end on the continuous-posture side, and F-CP-04 vulnerabilities
open against the same substrate at SCHEMA + EMITTER SKELETON.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — F-CP-04 SCHEMA through
  [PR #272](https://github.com/secops-ng/secops-ng-framework/pull/272)
  and EMITTER SKELETON through
  [PR #273](https://github.com/secops-ng/secops-ng-framework/pull/273),
  composing onto the shared-helper-plus-three-adapters shape F-CP-01
  closed on.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the forty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Walk the framework repo today and the continuous-posture side reads
two lit slots against the same substrate: F-CP-01 risk-analysis
**Shipped** end-to-end across n8n, Temporal, and LangGraph, and
F-CP-04 vulnerabilities open at SCHEMA + EMITTER SKELETON with the
Temporal wrapper already binding the vulnerability-triage write-path
onto the typed shape the cross-stream index now reads against in two
rows instead of one.

More from the lanes as the F-CP-04 CORE-FANOUT picks up the shape the
SKELETON just opened against.
