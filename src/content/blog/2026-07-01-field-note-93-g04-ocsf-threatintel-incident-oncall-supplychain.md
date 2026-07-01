---
title: "Field note #93 — the per-cluster OCSF binding lint sweeps across four more KPI/KRI clusters (threat-intel & phishing SKELETON+CORE, incident-response SKELETON+CORE, on-call-rotation SKELETON+CORE, supply-chain-security SKELETON+CORE)"
description: "Ninety-third field note from the SecOps-NG Digital Commons: eight framework PRs widen the G-04 per-cluster OCSF source-data-shape binding lint across four more KPI/KRI clusters. Threat-intel & phishing ships SKELETON + CORE (#553, #554), incident-response ships SKELETON + CORE (#555, #556), on-call-rotation ships SKELETON + CORE (#557, #558), and supply-chain-security ships SKELETON + CORE (#559, #560). Four new clusters ride the nightly orphan-CI cadence; supply-chain arms at a zero-classified baseline until real bindings land."
pubDate: 2026-07-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-ocsf-threatintel", "f-met-ocsf-incident", "f-met-ocsf-oncall", "f-met-ocsf-supplychain", "ocsf", "threat-intel", "phishing", "incident-response", "on-call-rotation", "supply-chain-security", "cra", "kpi-kri", "orphan-ci", "digital-commons"]
---

Eight framework PRs close this window, and they continue the G-04
catalogue-maturity theme along a single dimension: coverage breadth on
the per-cluster OCSF source-data-shape binding lint. Last window
([#92](https://github.com/secops-ng/secops-ng-website)) closed
regulatory-notification to CORE and opened identity-&-access and
vulnerability-&-patch (CRA-family) on the same SKELETON → CORE
pattern. This window lands four more clusters at CORE —
threat-intel & phishing, incident-response, on-call-rotation, and
supply-chain-security — each on its own SKELETON → CORE pair. Ten
KPI/KRI clusters now have both a per-cluster linter module and a
nightly orphan-CI job wired against each, sibling to the posture,
detection-latency, catalogue-wide, sovereignty, determinism, and
post-incident-review lanes already in flight.

## What landed

Eight PRs against the framework, all merged to `main`.

### F-MET-OCSF-THREATINTEL SKELETON — per-cluster OCSF binding lint for the threat-intel & phishing cluster (PR #553)

[PR #553](https://github.com/secops-ng/secops-ng-framework/pull/553)
opens the F-MET-OCSF-THREATINTEL triplet at the SKELETON floor. A new
per-cluster wrapper, `tools/lint_threat_intel_ocsf_bindings.py`, sits
on the shared helpers in `tools.ocsf_cluster_lint` and enforces the
same discipline the sibling clusters ship: every metric whose
`playbook_refs` resolve exclusively to the threat-intel & phishing
cluster's playbook set must carry at least one `telemetry.ocsf.*`
source-data ref that resolves to a real class artifact under
`content/telemetry/`.

The cluster's playbook set is
`{playbook.threat_intel_ingest@v1, playbook.phishing_triage@v1}`.
Seven shipped metrics classify in-cluster today —
`kpi.mttd_threat_intel_indicator`, `kpi.coverage_threat_intel_feed`,
`kpi.mttr_blocklist_propagation`, `kpi.mttd_phishing`,
`kpi.mttr_phishing_triage`, `kri.phishing_suppression_rate`, and
`kpi.phishing_sim_click_rate` — and each already carries a resolvable
OCSF binding, so the SKELETON arms at zero findings on the shipped
tree. The exclusivity gate keeps sovereignty-pipeline fan-out
metrics that touch `phishing_triage` alongside `executive_metrics`
and `it_security_support_agent` out of the cluster. The paired test
mirrors the sibling per-cluster suites one-for-one: shipped-tree
pass, full-cluster classifier anchor, synthetic unbound positives
for both playbooks, fan-out exclusion, per-metric strip-and-trip
regression, and CLI text + json shape assertions.

### F-MET-OCSF-THREATINTEL CORE — threat-intel & phishing OCSF binding rides nightly orphan-CI (PR #554)

[PR #554](https://github.com/secops-ng/secops-ng-framework/pull/554)
closes the CORE step by wiring the threat-intel & phishing SKELETON
module as a new `threat-intel-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs. The `pull_request` and `push` path-trigger lists are extended to
include both the new linter module and its test module. Scope is CI
wiring only — no new content, no new linter logic. The lane lands
green on `main`, so the cluster is now enforced nightly.

### F-MET-OCSF-INCIDENT SKELETON — per-cluster OCSF binding lint for the incident-response cluster (PR #555)

[PR #555](https://github.com/secops-ng/secops-ng-framework/pull/555)
opens the F-MET-OCSF-INCIDENT triplet at the SKELETON floor. The
cluster's playbook set is
`{playbook.incident_management@v1, playbook.ransomware_containment@v1, playbook.ddos_response@v1, playbook.data_exfil@v1}`.
The MTTR-family anchor is `kpi.mttr_containment@v1`, bound to OCSF
`Detection Finding` and `Incident Finding` shapes. Six additional
shipped metrics classify in-cluster —
`kpi.backup_integrity_pass_rate`,
`kri.breach_notification_clock_margin`, `kpi.mttd_exfil`,
`kpi.mttd_ransomware`, `kpi.notification_sla_compliance`, and
`kri.regulator_notification_overrun` — and each already carries a
resolvable OCSF binding, so the SKELETON arms at zero findings on the
shipped tree. The exclusivity gate keeps regulatory-notification and
executive-metrics fan-out shapes out of the cluster. The paired test
mirrors the threat-intel suite one-for-one.

### F-MET-OCSF-INCIDENT CORE — incident-response OCSF binding rides nightly orphan-CI (PR #556)

[PR #556](https://github.com/secops-ng/secops-ng-framework/pull/556)
closes the CORE step by wiring the incident-response SKELETON module
as a new `incident-response-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs, with matching extensions to the `pull_request` and `push`
path-trigger lists. Scope is CI wiring only. The lane lands green on
`main`.

### F-MET-OCSF-ONCALL SKELETON — per-cluster OCSF binding lint for the on-call-rotation cluster (PR #557)

[PR #557](https://github.com/secops-ng/secops-ng-framework/pull/557)
opens the F-MET-OCSF-ONCALL triplet at the SKELETON floor for a
single-playbook cluster: `{playbook.on_call_rotation@v1}`, covering
schedule coverage, escalation-tier discipline, handoff-brief delivery
SLA, and paged-alert acknowledgement latency. Four shipped metrics
classify in-cluster and each already carries a resolvable OCSF
binding, so the SKELETON arms at zero findings:

- `kpi.coverage_on_call_schedule@v1` → `telemetry.ocsf.account_change@v1`
- `kri.escalation_tier_breach@v1` → `telemetry.ocsf.account_change@v1`
- `kpi.handoff_brief_delivery_sla@v1` → `telemetry.ocsf.api_activity@v1`
- `kpi.mttr_on_call_ack@v1` → `telemetry.ocsf.detection_finding@v1`, `telemetry.ocsf.incident_finding@v1`

MTTR-family anchor for the cluster is `kpi.mttr_on_call_ack@v1`.
The exclusivity gate keeps on-call fan-out metrics that touch
`incident_management` or `executive_metrics` out of the cluster.

### F-MET-OCSF-ONCALL CORE — on-call-rotation OCSF binding rides nightly orphan-CI (PR #558)

[PR #558](https://github.com/secops-ng/secops-ng-framework/pull/558)
closes the CORE step by wiring the on-call-rotation SKELETON module
as a new `on-call-rotation-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs, with matching path-trigger extensions. Scope is CI wiring only.
The lane lands green on `main`.

### F-MET-OCSF-SUPPLYCHAIN SKELETON — per-cluster OCSF binding lint for the supply-chain-security cluster (PR #559)

[PR #559](https://github.com/secops-ng/secops-ng-framework/pull/559)
opens the F-MET-OCSF-SUPPLYCHAIN triplet at the SKELETON floor for
another single-playbook cluster: `{playbook.supply_chain_security@v1}`,
carrying CRA Article 13 component-due-diligence, SBOM, and
dependency-risk obligations. This SKELETON lands with a **different
initial shape** than its siblings: the exclusivity-gate is honest, and
today it classifies zero metrics on the shipped tree.

Every metric that currently references
`playbook.supply_chain_security@v1` on `main` is a fan-out across
pipeline / executive-catch-all playbooks — none classify as
exclusive-membership supply-chain, so the exclusivity gate correctly
excludes them. Five unbound orphan metrics reference the playbook
today:

- `kri.compiler_byte_parity_drift@v1` — fan-out with `asset_management`, `infra_posture_management`, `executive_metrics`
- `kpi.compiler_byte_parity_pass_rate@v1` — same four-playbook fan-out
- `kpi.cross_target_audit_envelope_parity_rate@v1` — fan-out with `executive_metrics`, `asset_management`
- `kri.otel_span_attribute_schema_drift@v1` — same three-playbook fan-out
- `kpi.span_block_emitter_determinism_rate@v1` — same three-playbook fan-out

All five have `telemetry_refs: []`. Arming the lint against real
bindings is CORE follow-on work; the nightly wire-in is #560.

The SKELETON therefore ships a zero-classified baseline: the
shipped-tree assertion passes trivially, and a **baseline anchor
test** asserts `classified == set()` on `main`. The anchor is
deliberate — the moment an exclusive-membership supply-chain metric
lands, the baseline must be updated in the same PR. That prevents a
silent no-op degradation where the cluster stays green because
nothing classifies, rather than because everything that classifies is
bound. Synthetic fixtures still arm the lint end-to-end:
exclusive-membership `telemetry_refs: []` trips it, an OCSF-bound
synthetic metric passes, and the fan-out shapes are kept out by the
exclusivity gate.

### F-MET-OCSF-SUPPLYCHAIN CORE — supply-chain-security OCSF binding rides nightly orphan-CI (PR #560)

[PR #560](https://github.com/secops-ng/secops-ng-framework/pull/560)
closes the CORE step by wiring the supply-chain-security SKELETON
module as a new `supply-chain-security-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs, with matching extensions to the `pull_request` and `push`
path-trigger lists. Scope is CI wiring only — no new content, no new
linter logic, no change to the zero-classified baseline anchor. The
lane lands green on `main`, so the supply-chain-security cluster now
arms at zero findings on the shipped catalogue on the same nightly
cadence as its siblings. The zero-classified baseline anchor still
applies: until an exclusive-membership supply-chain metric lands and
updates the baseline in the same PR, the lane is honestly green
because nothing classifies, not because every classified metric is
bound.

## Why this reads against G-04

G-04 on the published roadmap is the catalogue-maturity goal: every
shipped artifact in the catalogue moves from a bare definition to a
declared, machine-readable surface that a nightly orphan-CI lane can
walk. The OCSF source-data-shape dimension of G-04 is the discipline
that every operator-telemetry metric in a KPI/KRI cluster declares a
`telemetry.ocsf.*` source-data ref that resolves to a real class
artifact under `content/telemetry/`, and that the declaration is
enforced nightly on the cluster's own lint lane.

The coverage breadth after this window:

- **Posture** — full triplet closeout (from earlier waves).
- **Detection-latency** — full triplet closeout (from earlier waves).
- **Catalogue-wide** — full triplet closeout (from #540/#541).
- **Post-incident-review** — CORE (from last-window's siblings).
- **Regulatory-notification** — CORE (from last window's #547/#548).
- **Identity-&-access** — CORE (from last window's #549/#550).
- **Vulnerability-&-patch (CRA-family)** — CORE (from last window's #551/#552).
- **Threat-intel & phishing** — CORE this window (#553 + #554).
  Playbook-scoped classifier on `threat_intel_ingest` +
  `phishing_triage`.
- **Incident-response** — CORE this window (#555 + #556).
  Playbook-scoped classifier on `incident_management`,
  `ransomware_containment`, `ddos_response`, `data_exfil`.
- **On-call-rotation** — CORE this window (#557 + #558).
  Single-playbook classifier on `on_call_rotation`.
- **Supply-chain-security (CRA Art. 13 family)** — CORE this window
  (#559 + #560). Single-playbook classifier on
  `supply_chain_security`, held at a zero-classified baseline anchor
  until real bindings arm the cluster.

Ten KPI/KRI clusters now have per-cluster linter modules and enforce
their OCSF source-data-shape binding nightly on sibling orphan-CI
lanes. Nine arm at zero findings on the shipped catalogue via real
bindings; supply-chain arms at a zero-classified baseline anchor
until an exclusive-membership supply-chain metric lands.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any operational
artifact. The per-cluster OCSF binding lints keep OCSF as an open data
shape: the cluster's declared source-data ref must resolve to a real
class artifact inside the public framework, and the operator decides
which compatible telemetry source emits each declared class inside
their own stack. The cluster classifiers — playbook-scoped for
threat-intel & phishing and incident-response, single-playbook for
on-call-rotation and supply-chain-security — are disciplines on how
the catalogue reads its own membership predicates. Nothing about them
changes what telemetry an operator emits, or from where.

The project still does not ship its own runtime, its own agent
framework, or its own SOAR. The new lints run on content; the modules
they lint are the same ones operators read against telemetry on the
compile target they choose (n8n, Temporal, or LangGraph).

## Honest framing on what stays open

This is a coverage-breadth wave, not a milestone wave. The honest
open beats:

- **Supply-chain-security is armed but not yet bound.** The nightly
  lane is green on the shipped catalogue because nothing classifies
  as exclusive-membership supply-chain today — the five unbound
  orphan metrics that reference `playbook.supply_chain_security@v1`
  all fan out across pipeline / executive-catch-all playbooks and are
  correctly kept out of the cluster by the exclusivity gate. The
  zero-classified baseline anchor test on `main` is a deliberate
  placeholder that will need to be updated in the same PR that lands
  the first exclusive-membership supply-chain metric with a real
  OCSF binding. Until then, the lane's green state is honest about
  what it is measuring.
- **The two classifier gates — playbook-scoped and step-scoped — still
  live as siblings, not consolidated.** Consolidating them into a
  single lint surface remains a governance decision for a follow-on
  wave. Each cluster's gate continues to ship on the classifier
  discipline that fits its cluster (single-playbook, playbook-scoped,
  or step-scoped).
- **Regulatory-notification cluster membership is still narrow.** The
  step-scoped classifier is anchored on exactly one
  `(playbook_id, step_id)` tuple — the CRA Article 14
  regulator-notification step. Additional regulator-facing metrics
  that live on other steps remain outside the current gate and each
  addition is a governance choice.
- **Cluster coverage is still partial.** Foundation-property clusters
  and other cluster families that have not yet entered a binding phase
  remain inventoried by the catalogue-wide skip-list; the next windows
  continue to walk depth into the catalogue on the same pattern.
- **F-MET-DET has not extended further this window.** The
  determinism-corner pairing invariant reached the corner at
  [#544](https://github.com/secops-ng/secops-ng-framework/pull/544);
  the two unpaired non-replay determinism KPIs remain named as
  sibling-card candidates and are not widened here.

The accurate claim on this wave: the per-cluster OCSF source-data-shape
binding lint now covers ten KPI/KRI clusters — posture,
detection-latency, catalogue-wide, post-incident-review,
regulatory-notification, identity-&-access, vulnerability-&-patch
(CRA-family), threat-intel & phishing, incident-response,
on-call-rotation, and supply-chain-security — with all ten enforced
nightly on their own sibling job stanza in `orphan-ci.yml`. Nine arm
at zero findings on the shipped catalogue via real bindings, and
supply-chain arms at a zero-classified baseline anchor until real
bindings land.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #553](https://github.com/secops-ng/secops-ng-framework/pull/553),
  [PR #554](https://github.com/secops-ng/secops-ng-framework/pull/554),
  [PR #555](https://github.com/secops-ng/secops-ng-framework/pull/555),
  [PR #556](https://github.com/secops-ng/secops-ng-framework/pull/556),
  [PR #557](https://github.com/secops-ng/secops-ng-framework/pull/557),
  [PR #558](https://github.com/secops-ng/secops-ng-framework/pull/558),
  [PR #559](https://github.com/secops-ng/secops-ng-framework/pull/559),
  and [PR #560](https://github.com/secops-ng/secops-ng-framework/pull/560).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-two that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Eight PRs close this window. Threat-intel & phishing,
incident-response, on-call-rotation, and supply-chain-security each
land SKELETON + CORE. Ten KPI/KRI clusters now enforce their OCSF
source-data-shape binding nightly on sibling orphan-CI lanes; nine
arm at zero findings on the shipped catalogue via real bindings, and
supply-chain arms at a zero-classified baseline anchor until its real
bindings land.
