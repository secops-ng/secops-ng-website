---
title: "Field note #64 — F-WF-11 on-boarding/off-boarding tracker lands three-target CORE plus joiner/leaver KRIs, F-WF-12 IT-and-security support agent opens with SKELETON and n8n CORE on the F-CP-02 incidents stream"
description: "Sixty-fourth field note from the SecOps-NG Digital Commons: F-WF-11 on-boarding/off-boarding tracker closes its three-target CORE-FANOUT wave with byte-parity goldens on n8n, Temporal, and LangGraph and lands two joiner/leaver KRI catalogue entries on the access-evidence stream; F-WF-12 IT-and-security support agent opens with a SKELETON carrying an explicit human-handoff step plus a GDPR ROPA, and lands the n8n CORE-FANOUT (primitives, wire-up, byte-parity golden) — reusing the F-CP-02 incidents stream for the interaction-evidence artifact. ROADMAP closeouts pending on both rows."
pubDate: 2026-06-20
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-wf-11", "f-wf-12", "nis2", "article-21", "human-resources-security", "incident-handling", "digital-commons", "three-target", "byte-parity", "n8n", "temporal", "langgraph", "kri", "gdpr"]
---

The last field note read the contract-time surface of NIS2
Article 21(2)(d) — F-WF-10 contractual-obligations tracker
flipping to Shipped across all three reference compile targets,
with a cookbook walkthrough and a portable obligation-evidence
artifact replay-stable from n8n, Temporal, and LangGraph. This
note reads a different pair of rows on the same NIS2 Article 21
spine: the **human-resources-security** row at 21(2)(i), and the
**incident-handling-capability** row at 21(2)(b) — each landing
content-first in this window, at different points on the SKELETON
→ CORE → EXTEND staircase.

Two workflow rows moved in this wave:

- **F-WF-11 on-boarding / off-boarding tracker** closes its
  three-target CORE-FANOUT — n8n, Temporal, and LangGraph each
  emitting a byte-identical access-evidence artifact against the
  F-CP-07 access stream — and lands an EXTEND-metrics pass adding
  two joiner/leaver KRI catalogue entries to the access-evidence
  surface. The ROADMAP flip is pending; the three-target CORE wave
  plus the metrics extension are merged.
- **F-WF-12 IT-and-security support agent** opens with SKELETON
  and the n8n CORE-FANOUT — five deterministic primitives wired
  into the playbook, an interaction-evidence emitter on the
  F-CP-02 incidents stream, and a byte-parity golden on the n8n
  worked example. Temporal and LangGraph fan-out are still to
  come on this row.

## What landed on F-WF-11

### F-WF-11 three-target CORE fan-out, byte-parity goldens

The F-WF-11 SKELETON shipped earlier in
[PR #364](https://github.com/secops-ng/secops-ng-framework/pull/364):
a `playbook.onboarding_offboarding_tracker@v1` CACAO source at
`content/playbooks/onboarding_offboarding_tracker/playbook.cacao.json`
walking joiner / mover / leaver lifecycle events through ingest →
identity-resolve → capability-delta-derive → confirm-grant-revoke
→ emit-access-evidence, a NIS2 Article 21(2)(i) mapping entry,
and a per-step field-derivation note with `TODO(CORE)`
placeholders for the per-target adapters. The artifact this
playbook emits reuses the existing F-CP-07 access-evidence shape
at `schemas/evidence/access.schema.json` — the same stream the
F-WF-08 iam-auditor anchors against — so an operator running both
playbooks against the same identity source gets coherent evidence
without a parallel schema.

The CORE wave lands across three siblings — one per reference
compile target — each fanning out from a shared emitter:

- **n8n CORE-FANOUT** through
  [PR #366](https://github.com/secops-ng/secops-ng-framework/pull/366).
- **Temporal CORE-FANOUT** through
  [PR #367](https://github.com/secops-ng/secops-ng-framework/pull/367).
- **LangGraph CORE-FANOUT** through
  [PR #368](https://github.com/secops-ng/secops-ng-framework/pull/368).

Each binds the same three pieces in its window:

- **A framework-agnostic shared emitter** taking a typed lifecycle
  context — `(workflow_id, execution_id, lifecycle_event,
  resolved_identity, declared_delta, observed_confirmation,
  captured_at)` — and returning the access-evidence record,
  plus an `emit_access_evidence(ctx, output_dir)` writing it
  atomically to disk. The artifact id is SHA-256-deterministic
  over the lifecycle-event keys; the same joiner event always
  produces the same record id, replay-stable across runs and
  across targets.
- **A thin per-target adapter** delegating to the shared emitter:
  a Temporal `@activity.defn` activity, a Python helper for n8n
  `executeCommand` / `Code` nodes that re-builds the typed
  context from a JSON-native payload, and a LangGraph
  state-mapping node. The runtime concerns — retry, timeout,
  state — sit in the per-target wiring; the artifact shape sits
  in the shared emitter.
- **A worked example** at
  `examples/{n8n,temporal,langgraph}/onboarding_offboarding_tracker/`
  carrying a `regenerate.py` that emits the access-evidence
  artifact for one representative joiner-mover-leaver wave. The
  LangGraph regenerator re-imports the Temporal sibling's typed
  `CTX`; the n8n regenerator carries a JSON-native `PAYLOAD`
  declared inline whose field-by-field values match the Temporal
  `CTX`. Cross-target byte parity at the artifact level is pinned
  by the goldens. The committed output is three access-evidence
  `.access.json` files — one per reference target — all
  byte-identical.

Per-target byte-parity goldens at
`tests/examples/onboarding_offboarding_tracker/test_{n8n,temporal,langgraph}_workflow_golden.py`
and the matching access-evidence goldens pin the artifact shape.
A refactor of the shared emitter that silently changes
serialisation gets caught at the byte level, naming which target
drifted, before it reaches downstream review.

### F-WF-11 EXTEND-metrics — joiner-to-provisioned and leaver-to-revoked KRIs

The EXTEND-metrics pass lands through
[PR #369](https://github.com/secops-ng/secops-ng-framework/pull/369).
Two KRI catalogue entries arrive against the access-evidence
stream that F-WF-11 anchors at NIS2 Article 21(2)(i):

- **`kri.joiner_to_provisioned_time@v1`** at
  `content/metrics/joiner_to_provisioned_time.yaml`. A residual-risk
  indicator on the onboarding edge: the elapsed time between the
  declared `effective_at` on a joiner lifecycle event and the
  `captured_at` at which the access-evidence artifact records the
  joiner's declared add-set as observed-present on the operator's
  identity source. Unit: minutes. Direction: lower is better.
  Aggregated as p95 on a 30-day sliding window. Joiner events
  where the confirm-grant-revoke step surfaced a missing-grant
  are excluded from latency and tracked separately, so this
  indicator does not silently improve when provisioning fails
  outright.
- **`kri.leaver_to_revoked_time@v1`** at
  `content/metrics/leaver_to_revoked_time.yaml`. The mirror
  indicator on the offboarding edge: the elapsed time between
  the declared `effective_at` on a leaver lifecycle event and
  the `captured_at` at which the access-evidence artifact
  records the leaver's declared remove-set as observed-absent
  on the operator's identity source. Same shape, same unit,
  same aggregation; the off-boarding latency tail is the
  residual-risk surface here.

Both entries bind their `playbook_refs` to the
`onboarding_offboarding_tracker` confirm-grant-revoke and
emit-access-evidence steps, both pin their `control_refs` to
`control.jml_evidence@v1` and `control.cloud_identity_least_privilege@v1`,
and both pin their `external_refs` to NIS2 Article 21(2)(i) and
the ENISA threat-landscape methodology. The catalogue is
identity-vendor-neutral; the concrete identity-source identifier
is resolved by the compile target at runtime.

The metrics pass also pins these KRI ids into the
`onboarding_offboarding_tracker` playbook's `metric_refs` so the
catalogue read against the playbook surfaces both indicators
without a separate join.

### F-WF-11 status — three-target CORE plus metrics, closeout pending

F-WF-11 currently reads on the ROADMAP as **Proposed** by the
historical priority assignment; the row carries a full
three-target CORE wave with byte-parity goldens and two KRI
catalogue entries against the access-evidence stream. The
EXTEND-closeout — the ROADMAP flip to Shipped and the cookbook
walkthrough — is the next pass on this row. The content
landed in this window is the operator-facing surface; the
catalogue read is already coherent.

## What landed on F-WF-12

### F-WF-12 SKELETON — interaction-evidence on the F-CP-02 incidents stream

The F-WF-12 SKELETON lands through
[PR #365](https://github.com/secops-ng/secops-ng-framework/pull/365)
with a deliberate design choice: the IT-and-security support agent
does **not** create a parallel evidence stream. Its
interaction-evidence artifact reuses the existing F-CP-02
incidents schema at `schemas/evidence/incidents.schema.json` —
the same shape F-WF-05 incident-management anchors against under
NIS2 Article 21(2)(b). Support interactions that escalate into
an incident handoff feed the same incident-handling capability;
support interactions that close without an incident emit on the
schema's intake-only audit-close branch (`classification.significant=false`)
so the interaction is still durable evidence without overcounting
the incident KPI surface.

Four pieces sit against the support-agent row at SKELETON:

- **A CACAO playbook** at
  `content/playbooks/it_security_support_agent/playbook.cacao.json`
  — `playbook.it_security_support_agent@v1`. Steps trace
  ingest-support-request → classify → automated-resolution-attempt
  → **human-handoff** (an explicit step, not an implicit
  fall-through) → emit-interaction-evidence. The human-handoff
  step is mandatory in the source and renders identically across
  all three reference compile targets; the catalogue does not
  ship a support-agent shape that closes silently without a
  named-responder edge.
- **Five deterministic Python primitives** at
  `content/playbooks/it_security_support_agent/primitives/` —
  `ingest`, `classify`, `resolution`, `handoff`, `artifact` —
  each unit-tested in the SKELETON window and bound to the
  playbook steps. The primitives are pure; runtime concerns sit
  in the per-target adapters.
- **A NIS2 Article 21(2)(b) mapping entry** at
  `content/mappings/nis2/article-21-2-b.yaml` registering
  `playbook.it_security_support_agent@v1` alongside the existing
  incident-family playbook list. The mapping reads the same
  obligation surface — operate an incident-handling capability —
  with the support-agent shape pinning the front-of-funnel for
  user-reported interactions that may or may not be incidents.
- **A GDPR ROPA (Record of Processing Activities)** documenting
  the personal-data flow through the support-agent workflow. The
  support-agent shape touches user-reported personal data —
  identifiers in tickets, free-text descriptions, occasionally
  contact information — and the ROPA names the lawful basis,
  retention boundary, and downstream-recipient surface for each
  field at ingest time. The catalogue ships the ROPA alongside
  the playbook because a NIS2-regulated operator with a GDPR
  overlay should not have to re-derive that flow at compile
  time.

### F-WF-12 n8n CORE-FANOUT — primitives, wiring, byte-parity golden

The n8n CORE-FANOUT lands across three siblings — one per
fan-out concern — each scoped narrowly so the diff is auditable:

- **n8n CORE-FANOUT-N8N-PRIM** through
  [PR #370](https://github.com/secops-ng/secops-ng-framework/pull/370):
  five deterministic primitives lifted from the SKELETON
  scaffold into their CORE shape, each with unit coverage and
  field-by-field derivation notes. The primitives ingest the
  support-request record, classify it against a closed
  vocabulary, attempt automated resolution against an operator-defined
  resolution-policy interface, capture the human-handoff envelope
  (named responder, escalation tier, handoff-brief reference),
  and assemble the interaction-evidence artifact.
- **n8n CORE-FANOUT-N8N-WIRE** through
  [PR #371](https://github.com/secops-ng/secops-ng-framework/pull/371):
  the playbook's `core_body` bindings are wired to the primitives,
  and the n8n worked example at
  `examples/n8n/it_security_support_agent/` emits the
  interaction-evidence artifact end-to-end. The worked example
  carries a `regenerate.py` that runs the playbook against a
  representative support-request record — both the
  automated-resolution closure path and the human-handoff path —
  and writes the resulting `.interaction.json` to the example's
  evidence directory.
- **n8n CORE-FANOUT-N8N-GOLDEN** through
  [PR #372](https://github.com/secops-ng/secops-ng-framework/pull/372):
  the byte-parity golden test fixture for the n8n worked
  example. The fixture pins the interaction-evidence artifact
  byte-for-byte; a refactor of the n8n adapter that silently
  changes serialisation gets caught at the byte level. Temporal
  and LangGraph siblings will land their own per-target
  goldens in the next CORE waves.

### F-WF-12 status — SKELETON plus n8n CORE; Temporal and LangGraph still ahead

F-WF-12 is **not** three-target complete and is **not** Shipped.
The catalogue currently carries the SKELETON, the n8n CORE
fan-out, and the n8n worked example with a byte-parity golden.
Temporal and LangGraph fan-out — each carrying the same shared
emitter binding and its own worked example plus golden — are the
next passes on this row. An operator running on Temporal or
LangGraph today can read the catalogue source (CACAO playbook,
primitives, ROPA, mapping entry) but does not yet have a
worked-example artifact and golden on those targets.

## Where these two rows sit against NIS2 Article 21

[NIS2 Article 21(2)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
enumerates a baseline set of cybersecurity risk-management
measures. Two of those rows fill out in this wave:

- **Article 21(2)(i) — human-resources security, access-control
  policies, and asset management.** F-WF-11 reads the
  joiner/mover/leaver evidence surface against the F-CP-07
  access stream. The two new KRIs read the residual-risk surface
  on both edges — provisioning tail on joiners, revocation tail
  on leavers — and the catalogue now carries them alongside the
  existing orphaned-privileged-accounts KRI on the same Article
  21(2)(i) mapping entry.
- **Article 21(2)(b) — incident-handling capability.** F-WF-12
  reads the front-of-funnel for user-reported interactions that
  may or may not be incidents. The interaction-evidence artifact
  reuses the F-CP-02 incidents schema; classification.significant
  distinguishes incident-shaped interactions from
  automated-resolution closures. The mapping now carries the
  support-agent playbook alongside the existing incident-family
  playbooks (phishing-triage, identity-compromise,
  ransomware-containment, data-exfil, post-incident review,
  on-call rotation).

The catalogue reads both rows content-first. The operator-facing
surface — what an auditor or a regulator reads when they ask "how
does your operator-shaped workflow address Article 21(2)(i) joiner
provisioning?" or "how does your operator-shaped workflow address
Article 21(2)(b) user-reported interactions?" — is a CACAO
playbook, an evidence-stream artifact, a mapping entry, and
(where applicable) a KRI catalogue entry. No runtime is baked in;
the reference compile targets are three of three.

## What this gives an operator

A regulated operator subject to NIS2 Article 21(2)(i) running on
any of the three reference compile targets can now:

- **Stage a joiner / mover / leaver lifecycle event once and get
  a portable access-evidence artifact.** The same shape F-WF-08
  iam-auditor already anchors against on the F-CP-07 stream;
  reading the operator's access-evidence stream for a given
  identity-source window returns both the per-execution
  capability snapshot from F-WF-08 and the per-lifecycle-event
  delta from F-WF-11, sharing the artifact-id key contract.
- **Replay byte-identically across targets.** The same
  lifecycle-event input emits a byte-identical access-evidence
  record on n8n, Temporal, and LangGraph; goldens pin it.
- **Read the residual-risk surface as catalogue KRIs.**
  `kri.joiner_to_provisioned_time@v1` and
  `kri.leaver_to_revoked_time@v1` are catalogue-resident,
  identity-vendor-neutral, and bound to the access-evidence
  stream. Aggregation, window, and threshold shape are pinned by
  the catalogue; the compile target is the source of truth for
  the executable form.

A regulated operator subject to NIS2 Article 21(2)(b) running on
n8n today can also:

- **Stage a support-request record and emit interaction-evidence
  on the F-CP-02 incidents stream.** Both branches — the
  automated-resolution closure and the human-handoff escalation
  — emit on the same schema, with `classification.significant`
  carrying the disposition. The downstream incident KPI surface
  (`kpi.mttd@v1`, `kpi.mttr@v1`, `kri.incidents_without_closeout@v1`)
  reads the significant=true branch without modification; the
  significant=false branch sits as durable audit evidence
  without overcounting the incident counters.
- **Carry a GDPR ROPA into the deployment as content.** The
  ROPA ships alongside the playbook; an operator with a NIS2 +
  GDPR overlay does not have to re-derive the personal-data
  flow at compile time.

A regulated operator on Temporal or LangGraph who wants to run
F-WF-12 today is encouraged to read the SKELETON and the n8n
CORE as the operator-facing surface — and to watch for the
Temporal and LangGraph fan-out passes on this row in subsequent
windows.

## What's open behind this wave

- **F-WF-11 EXTEND-closeout — ROADMAP flip to Shipped, cookbook
  walkthrough.** The three-target CORE plus the joiner/leaver
  KRIs land the operator-facing surface; the closeout pass folds
  the row into the published cookbook and pins the ROADMAP entry
  to Shipped.
- **F-WF-12 Temporal and LangGraph CORE-FANOUT.** The shared
  emitter is the source of byte parity; Temporal and LangGraph
  adapters delegate to the same emitter, each with a worked
  example and a byte-parity golden. Both rows are sibling cards.
- **F-WF-12 EXTEND — automated-resolution-policy interface,
  handoff-brief format.** The SKELETON pins the
  resolution-policy and handoff-brief as data-plane
  responsibilities the operator wires in their deployment; the
  EXTEND pass on this row will name the file-fixture interface
  for both so a community contributor can wire an open dataset
  against the same boundary.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the F-WF-11 SKELETON
  ([PR #364](https://github.com/secops-ng/secops-ng-framework/pull/364)),
  three-target CORE fan-out
  ([PR #366](https://github.com/secops-ng/secops-ng-framework/pull/366),
  [PR #367](https://github.com/secops-ng/secops-ng-framework/pull/367),
  [PR #368](https://github.com/secops-ng/secops-ng-framework/pull/368)),
  and EXTEND-metrics
  ([PR #369](https://github.com/secops-ng/secops-ng-framework/pull/369));
  the F-WF-12 SKELETON
  ([PR #365](https://github.com/secops-ng/secops-ng-framework/pull/365))
  and n8n CORE-FANOUT
  ([PR #370](https://github.com/secops-ng/secops-ng-framework/pull/370),
  [PR #371](https://github.com/secops-ng/secops-ng-framework/pull/371),
  [PR #372](https://github.com/secops-ng/secops-ng-framework/pull/372)),
  all merged.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the sixty-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

Two workflow rows moved in this window. The on-boarding /
off-boarding tracker closed its three-target CORE fan-out with
byte-parity goldens replay-tested across n8n, Temporal, and
LangGraph, and added two joiner/leaver KRI catalogue entries on
the access-evidence stream — closeout to Shipped pending. The
IT-and-security support agent opened content-first with a
SKELETON (explicit human-handoff step, GDPR ROPA) and the n8n
CORE fan-out — Temporal and LangGraph fan-out still ahead. The
catalogue now carries one more residual-risk reading on Article
21(2)(i) and one more front-of-funnel reading on Article 21(2)(b).
The next field notes will read whatever opens behind this wave —
the F-WF-11 closeout, the F-WF-12 Temporal and LangGraph
fan-outs, and the next workflow or report variant to arrive
content-first.
