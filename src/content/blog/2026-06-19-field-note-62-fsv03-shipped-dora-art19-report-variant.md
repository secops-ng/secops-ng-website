---
title: "Field note #62 — F-SV-03 DORA Article 19 technical-incident report variant flips to Shipped across all three reference compile targets, with byte-parity goldens pinning the four-milestone reporting chain"
description: "Sixty-second field note from the SecOps-NG Digital Commons: F-SV-03 lands the DORA Article 19(4) technical-incident report variant — schema + field-derivation mapping at SKELETON, shared emitter + per-target adapters for n8n, Temporal, and LangGraph at CORE, and a ROADMAP flip to Shipped with cookbook walkthrough at CLOSEOUT. Twelve worked report artifacts (four milestones × three targets) replay byte-identically across targets per variant, with the Article 19 reporting-chain invariant pinned at the emitter."
pubDate: 2026-06-19
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-sv-03", "dora", "article-19", "incident-reporting", "report-variant", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph", "cookbook"]
---

The last field note read the continuous infrastructure-posture lane
closing its three-target CORE wave and flipping to Shipped — the
scheduled re-execution variant of the posture-audit lane, against
NIS2 Article 21(2)(a). That note read a workflow row. This note
reads a different row entirely: the regulatory **report-variant**
row, where the same incident timeline an operator already runs needs
to compose into a report shape a financial-sector regulator can read
without translation.

In this window, the F-SV-03 lane lands the DORA **Article 19**
technical-incident report variant — schema and field-derivation
mapping at SKELETON, per-target emitters and byte-parity goldens at
CORE, and a ROADMAP flip to Shipped plus cookbook walkthrough at
CLOSEOUT — all three merged in the same day. An operator on F-WF-05
incident_management now has a portable report shape that emits
byte-identically across n8n, Temporal, and LangGraph for each of the
four DORA Article 19(4) milestones.

## What landed

### F-SV-03 SKELETON — the report-variant contract

The contract lands through
[PR #357](https://github.com/secops-ng/secops-ng-framework/pull/357).
Three pieces sit against the Article 19(4) reporting chain:

- **A milestone enum** at `schemas/dora_art19_report_milestone.json`
  naming the four entries on the DORA reporting chain —
  `initial_4h`, `intermediate_72h`, `final_1mo`, and
  `voluntary_cyber_threat` — mirroring the shape already used for the
  NIS2 incident-notification milestone enum so the catalogue carries
  one vocabulary discipline across both regulations.
- **A report-variant schema** at
  `schemas/evidence/dora-art19-technical-incident-report.schema.json`
  pinning the top-level envelopes — `classification`, `timeline_refs`,
  `impact_indicators`, `mitigation_status` — as Draft 2020-12 JSON
  Schema. Inner shapes start permissive at SKELETON and tighten in
  EXTEND so the schema can carry an operator's existing classification
  output today and lift onto the RTS rule-pack classifier when that
  lands.
- **A field-derivation mapping** at
  `content/mappings/dora/article-19-report-variant.md` tracing every
  top-level field back to the F-WF-05 incident_management timeline
  record it is derived from (`TimelineSession`, `TimelineEvent`,
  `RegulatorSubmissionReceipt`, `ClassificationVerdict`,
  `FinalReportSubmission`). Unresolved derivations are marked
  `TODO(CORE)` so the CORE sibling has a single checklist to close
  against.

Twenty-seven schema-validity tests land alongside the contract — the
minimal report validates, every canonical milestone validates,
obvious bad shapes reject, and a drift guard binds the milestone
enum to `content/mappings/dora/article-19-and-28.yaml` so the
vocabulary cannot quietly diverge from the broader Article 19/28
mapping the catalogue already carries.

### F-SV-03 CORE — shared emitter, per-target adapters, byte-parity goldens

The CORE wave lands through
[PR #358](https://github.com/secops-ng/secops-ng-framework/pull/358).
It binds three pieces in the same wave:

- **A framework-agnostic shared emitter** at
  `compilers/_shared/evidence/dora_art19_report.py` — a pure
  `render_dora_art19_report(ctx)` returning a record plus an
  `emit_dora_art19_report(ctx, output_dir)` writing it atomically to
  disk. `derive_report_id(incident_id, report_variant, submitted_at)`
  is SHA-256-deterministic per the schema contract; the same inputs
  always produce the same report id, replay-stable across runs and
  across targets.
- **The Article 19 reporting-chain invariant** pinned at the emitter:
  `intermediate_72h` resolves its `previous_milestone_event_id` from
  the `early_warning` event id on the timeline, and `final_1mo`
  resolves it from the `notification` event id on the timeline. The
  emitter reads the chain from the timeline-events log rather than
  from caller input, so a forged shape cannot bypass the chain at the
  contract layer.
- **Three thin per-target adapters**, one per reference compile
  target, each delegating to the shared emitter: a Temporal
  `@activity.defn` at `compilers.temporal.evidence.dora_art19_report_activity`,
  a Python helper at `compilers.n8n.evidence.dora_art19_report_node`
  that re-builds the typed context from a JSON-native payload for n8n
  `executeCommand` / `Code` nodes, and a LangGraph state-mapping node
  at `compilers.langgraph.evidence.dora_art19_report_node`.

Per-target worked examples land under
`examples/{n8n,temporal,langgraph}/dora_art19_report/`, each carrying
a `regenerate.py` that emits all four DORA Article 19 chain variants
for one representative incident. The n8n and LangGraph regenerators
re-import the Temporal sibling's `CONTEXTS` dict, so the three
targets exercise byte-identical input by construction. The committed
output is twelve `.report.json` files — four milestone variants times
three reference targets — all byte-identical across targets per
variant.

Sixty-six golden-test cases at
`tests/examples/dora_art19_report/test_golden.py` pin the result:
cross-target byte parity per variant, per-target adapter parity,
schema-conformant emit, Article 19 chain vocabulary coverage,
`report_id` determinism, and the cross-milestone chain invariant.
The failure messages name which target drifted, so a refactor of the
shared emitter that silently changes serialisation gets caught at
the byte level, not at downstream review.

At CORE close, the field-derivation mapping carries zero
`TODO(CORE)` markers, the schema bumps from `0.1.0` to `1.0.0`, and
the SKELETON-era test that required `TODO(CORE)` markers in the
mapping doc flips to a CORE invariant that forbids them.

### F-SV-03 CLOSEOUT — Shipped on the ROADMAP, cookbook walkthrough

The ROADMAP flip and cookbook walkthrough land through
[PR #359](https://github.com/secops-ng/secops-ng-framework/pull/359).
**F-SV-03 flips to Shipped**, and the cookbook gets the
end-to-end walkthrough — F-WF-05 incident_management timeline to
shared emitter context to per-target adapter to a written-to-disk
`.report.json` artifact for each of the four Article 19 milestones,
told byte-identically across n8n, Temporal, and LangGraph.

## Where this sits against DORA Article 19

[DORA Article 19](https://eur-lex.europa.eu/eli/reg/2022/2554/oj)
is the reporting clause for major ICT-related incidents at financial
entities — the article a regulated entity reads when it has to
notify a competent authority that something has happened. Article
19(4) sets the reporting **chain**: an initial notification within
the early window, an intermediate report within the multi-day window,
and a final report by the end of the first month, with a separate
voluntary-cyber-threat lane alongside the chain.

The F-SV-03 lane reads that clause as a portable report variant a
reference compiler can emit:

- **The four milestones — `initial_4h`, `intermediate_72h`,
  `final_1mo`, `voluntary_cyber_threat`** — sit on a closed
  vocabulary the schema validates against and the goldens cover by
  case.
- **The reporting chain itself** — `intermediate_72h` pointing back
  to the early warning, `final_1mo` pointing back to the
  notification — is pinned at the emitter against the timeline-events
  log, not against caller input. The cross-milestone chain invariant
  is a property of the contract rather than a discipline of review.
- **The shape an authority reads** is byte-identical across n8n,
  Temporal, and LangGraph for one operator-supplied incident context.
  An operator running on any of the three reference targets emits
  the same report record from the same timeline, and an authority or
  auditor reading the records does not have to know which compile
  target produced any given one.

The two other Commission-level instruments around Article 19 — the
RTS classifier (Commission Delegated Regulation (EU) 2024/1772) and
the ITS field-level shapes (Commission Implementing Regulation (EU)
2024/2956) — are explicitly EXTEND-deferred. The shared emitter
accepts the existing operator-populated `DoraClassification` today and
will lift onto the RTS rule-pack output once that lands; the ITS
field-level vocabulary tightening on `impact_indicators` lands on a
sibling EXTEND card. The lane ships at Article 19(4) coverage with
those two extensions named on the mapping.

## Why the report-variant row reads differently from a workflow row

Earlier field notes have read workflow lanes — F-WF-05 incident
management, F-WF-06 infrastructure-posture management, F-WF-07
codebase-vuln management — closing CORE waves and flipping to Shipped.
F-SV-03 reads a different row: the **report-variant** row sits
downstream of a workflow lane, not as a workflow of its own.

An operator running F-WF-05 incident_management on the catalogue
today already produces a canonical timeline record on
`schemas/evidence/incident-timeline.schema.json`. F-SV-03 reads that
timeline and emits a regulator-shaped report against it — same
timeline, different reader. The same incident handled on the
incident-management lane today can now be composed into a DORA
Article 19 report variant on every milestone the chain calls for,
without re-running the incident or re-collecting evidence. The
report-variant row sits where the regulation does — at the boundary
between the operator's runbook and the authority's filing — and
reads the operator's existing artifact rather than asking the
operator to maintain a second one.

The same row pattern is what the NIS2 incident-notification milestone
enum already sits on; the catalogue now carries one report-variant
discipline that reads against two different regulations, sharing the
timeline schema and the milestone-vocabulary shape across both.

## What this gives an operator

A financial-sector operator running F-WF-05 incident_management on
any of the three reference compile targets can now:

- **Emit a DORA Article 19(4) report on every milestone of the chain.**
  Four milestone variants — `initial_4h`, `intermediate_72h`,
  `final_1mo`, `voluntary_cyber_threat` — emit from the same
  operator-supplied incident context, on the same incident timeline
  the workflow already produces.
- **Replay byte-identically across targets.** The same timeline and
  context emit a byte-identical report record on n8n, Temporal, and
  LangGraph; goldens pin it. Switching reference target leaves the
  filed shape unchanged.
- **Get a deterministic report id.** `derive_report_id` is
  SHA-256-deterministic over `(incident_id, report_variant,
  submitted_at)`, so re-emitting the same report from the same inputs
  returns the same id — useful for downstream evidence composition
  and for the auditor-bundle row.
- **Trust the chain.** The cross-milestone `previous_milestone_event_id`
  is resolved from the timeline-events log at emit time, not from
  caller input. The reporting chain DORA Article 19(4) describes is a
  contract-layer invariant on the emitter, not a property of operator
  discipline.

The report record is a candidate stream for the F-WF-09 auditor-bundle
composition alongside incident-evidence, disclosure-timeline,
posture-evidence, and the other streams the row already carries. The
auditor-bundle ask against a DORA-regulated operator can now return a
coherent set of evidence records that includes the Article 19 report
variants for the regulated incidents in the bundle window.

## What's open behind this wave

- **The DORA Article 18(1) classifier rule pack** — the CORE-CLASSIFIER
  sibling card. The emitter accepts the existing operator-populated
  `DoraClassification` today; the rule-pack lift is a non-breaking
  swap once the classifier ships.
- **ITS (EU) 2024/2956 field-level vocabulary tightening** — the
  EXTEND-SCHEMA sibling. The shared impact-indicator and
  mitigation-state vocabularies live at
  `schemas/dora_data_impact.json` and
  `schemas/dora_mitigation_state.json` on the EXTEND row, with the
  `impact_indicators` field tightened against ITS shapes once
  available.
- **Per-milestone KPI specs** — the EXTEND-METRICS sibling. Each of
  the four Article 19 milestones gets its own on-time KPI
  (`kpi.dora_initial_4h_on_time@v1` and the three siblings), already
  declared on the mapping and ready for the metrics row to absorb.
- **Auditor-bundle composition against the Article 19 report stream**
  — the F-WF-09 auditor-bundle has another candidate evidence stream
  to compose, already on the evidence-schema row and already
  replay-tested across all three reference targets.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-SV-03 SKELETON (schema, milestone enum, field-derivation
  mapping, 27 schema-validity tests) through
  [PR #357](https://github.com/secops-ng/secops-ng-framework/pull/357),
  the CORE wave (shared emitter, per-target adapters, twelve worked
  report artifacts, 66 byte-parity goldens) through
  [PR #358](https://github.com/secops-ng/secops-ng-framework/pull/358),
  and the ROADMAP flip plus cookbook walkthrough through
  [PR #359](https://github.com/secops-ng/secops-ng-framework/pull/359),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One report-variant row flipped to Shipped in this window. The DORA
Article 19 technical-incident report variant opened a SKELETON,
closed a three-target CORE wave with twelve worked report artifacts
replay-tested across n8n, Temporal, and LangGraph, pinned the
four-milestone reporting chain at the emitter rather than at review,
and got its cookbook walkthrough — all in the same day. The DORA
Article 19(4) reporting chain now reads as portable content with
worked examples on three reference targets, sitting downstream of
the F-WF-05 incident_management timeline the catalogue already
carries. The next field notes will read whatever opens behind this
wave — the DORA Article 18(1) classifier rule pack, the ITS
field-level vocabulary tightening, the per-milestone KPI specs, and
the next regulatory report variant to arrive content-first.
