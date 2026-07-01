---
title: "Field note #94 — backup-recovery joins the OCSF binding ring (F-MET-BCR SKELETON + F-MET-OCSF-BCR SKELETON/CORE, framework PRs #561-#563)"
description: "Ninety-fourth field note from the SecOps-NG Digital Commons: three framework PRs open the backup-recovery KPI/KRI cluster with OCSF-armed metric definitions and wire its per-cluster OCSF source-data-shape binding lint into nightly orphan-CI. F-MET-BCR SKELETON authors four OCSF-armed metric entries against the shipped backup-recovery playbook (#561). F-MET-OCSF-BCR SKELETON adds the per-cluster binding lint (#562). F-MET-OCSF-BCR CORE lands the nightly orphan-CI wire-in (#563). Eleven KPI/KRI clusters now enforce their OCSF binding nightly on sibling orphan-CI lanes — the backup-recovery cluster closes the last major playbook cluster outside the OCSF binding ring."
pubDate: 2026-07-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-bcr", "f-met-ocsf-bcr", "ocsf", "backup-recovery", "restore-drill", "backup-integrity", "nis2", "dora", "cra", "kpi-kri", "orphan-ci", "digital-commons"]
---

Three framework PRs close this window, and together they bring the
backup-recovery cluster fully inside the G-04 OCSF source-data-shape
binding ring. [PR #561](https://github.com/secops-ng/secops-ng-framework/pull/561)
opens F-MET-BCR SKELETON — four OCSF-armed KPI/KRI catalogue entries
against the shipped `playbook.backup_recovery@v1`.
[PR #562](https://github.com/secops-ng/secops-ng-framework/pull/562)
opens F-MET-OCSF-BCR SKELETON — the per-cluster binding lint module
that reads those entries.
[PR #563](https://github.com/secops-ng/secops-ng-framework/pull/563)
closes F-MET-OCSF-BCR CORE — the nightly orphan-CI wire-in. Eleven
KPI/KRI clusters now enforce their OCSF source-data-shape binding
nightly on sibling orphan-CI lanes.

## What landed

Three PRs against the framework, all merged to `main`.

### F-MET-BCR SKELETON — OCSF-armed KPI/KRI metrics for the backup-recovery cluster (PR #561)

[PR #561](https://github.com/secops-ng/secops-ng-framework/pull/561)
opens the backup-recovery metric cluster. The `backup_recovery`
playbook has shipped from F-WF-BCR SKELETON for a while, but the
companion metrics YAML was empty — this SKELETON layer authors four
OCSF-armed catalogue entries against the playbook's real step UUIDs.

- `kpi.restore_drill_cadence@v1` — share of in-scope backup scopes
  that received a completed restore drill inside the operator's
  documented cadence window. Bound to the execute-restore-drill step;
  OCSF class 6003 API Activity per the playbook mappings.
- `kri.backup_integrity_failures@v1` — count of validate-backup-
  integrity step outcomes with `__integrity_ok__ == False`. Bound to
  the validate-backup-integrity step (D3-FH File Hashing anchor);
  OCSF class 1001 File System Activity.
- `kpi.restore_drill_attestation_freshness@v1` — share of in-scope
  backup scopes whose most-recent evidence-capture attestation lands
  inside the operator's documented freshness window. Bound to the
  evidence-capture step; OCSF class 6003 API Activity.
- `kri.restore_drill_rto_overrun@v1` — count of executed drills whose
  observed RTO exceeded the documented objective. Bound to the
  execute-restore-drill step (D3-SRA System Recovery Analysis anchor);
  OCSF class 6003 API Activity.

Each entry pins `foundation_property [auditability, operability]`,
carries `playbook_refs` against real step UUIDs on
`content/playbooks/backup_recovery/playbook.cacao.json`, and closes
its regulatory triplet outbound to NIS2 Art. 21(2)(c) business-
continuity / backup-management, DORA Art. 12 ICT business-continuity
policy, CRA Annex I §1(h) where applicable, and NIST SP 800-53 CP-9 /
CP-10. Each also ships a sibling `<stem>.viz.md` reference
visualisation carrying the G-04 chart-shape contract, and
`tests/content/test_metrics_reference_viz.py` is extended to require
them. The pre-existing `kpi.backup_integrity_pass_rate@v1` continues
to sit inside the incident-response cluster's exclusivity gate (per
field note #93) — the backup-recovery cluster ships with four
exclusive-membership metrics.

### F-MET-OCSF-BCR SKELETON — per-cluster OCSF binding lint for the backup-recovery cluster (PR #562)

[PR #562](https://github.com/secops-ng/secops-ng-framework/pull/562)
opens the per-cluster binding lint. A new
`tools/lint_backup_recovery_ocsf_bindings.py` sits as a thin wrapper
on the shared `tools.ocsf_cluster_lint` driver, sibling to the ten
per-cluster wrappers that shipped earlier in the G-04 wave. The
cluster's playbook set is `{playbook.backup_recovery@v1}`, and the
exclusivity gate via `tools.ocsf_cluster_lint.is_cluster_metric` keeps
fan-out cross-cluster metrics out. Every backup-recovery-class metric
must declare at least one `telemetry.ocsf.*` source-data ref that
resolves to a real class artifact under `content/telemetry/`. All
four metrics authored in #561 carry resolvable bindings, so the
SKELETON arms at zero findings on the shipped tree.

The paired test module mirrors the sibling per-cluster suites
one-for-one: shipped-tree pass, full-cluster classifier anchor,
synthetic unbound positives, fan-out exclusion, per-metric
strip-and-trip regression, and CLI text + json shape assertions.

### F-MET-OCSF-BCR CORE — backup-recovery OCSF binding rides nightly orphan-CI (PR #563)

[PR #563](https://github.com/secops-ng/secops-ng-framework/pull/563)
closes the CORE step by wiring the backup-recovery SKELETON module as
a new `backup-recovery-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs. Both the linter module and its test module land in the
`pull_request` and `push` path-trigger lists; the nightly 02:23 UTC
schedule slot picks the lane up on the standard orphan-CI cadence.
Scope is CI wiring only — no new content, no new linter logic. The
lane lands green on `main`, so the backup-recovery cluster is now
enforced nightly.

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
- **Post-incident-review** — CORE (from earlier waves).
- **Regulatory-notification** — CORE (from #547/#548).
- **Identity-&-access** — CORE (from #549/#550).
- **Vulnerability-&-patch (CRA-family)** — CORE (from #551/#552).
- **Threat-intel & phishing** — CORE (from #553/#554).
- **Incident-response** — CORE (from #555/#556).
- **On-call-rotation** — CORE (from #557/#558).
- **Supply-chain-security (CRA Art. 13 family)** — CORE (from
  #559/#560), held at a zero-classified baseline anchor until real
  bindings arm the cluster.
- **Backup-recovery (NIS2 Art. 21(2)(c) / DORA Art. 12 continuity
  family)** — SKELETON + CORE this window (#561, #562, #563).
  Single-playbook classifier on `backup_recovery`. Arms at zero
  findings via four real OCSF bindings on the shipped catalogue.

Eleven KPI/KRI clusters now have per-cluster linter modules and
enforce their OCSF source-data-shape binding nightly on sibling
orphan-CI lanes. Ten arm at zero findings via real bindings on the
shipped catalogue; supply-chain arms at a zero-classified baseline
anchor until an exclusive-membership supply-chain metric lands with a
real binding. The backup-recovery cluster was the last major playbook
cluster outside the OCSF binding ring — with this window it now sits
inside the same nightly invariant every other shipped cluster does.

## The community-facing shape of the four new definitions

Each of the four new backup-recovery metric entries declares — in the
same YAML block — the OCSF source-data shape an operator's SIEM or
telemetry pipeline must emit for the KPI to be computable:

- **Restore-drill cadence** reads against OCSF API Activity events
  emitted at the execute-restore-drill step. An operator whose
  orchestrator already emits a runbook-step audit event at that step
  is one field mapping away from the KPI.
- **Backup-integrity failures** reads against OCSF File System
  Activity events with a hash-verification outcome — the same shape a
  restic-check, borg-check, or object-store integrity-scan job
  already emits in most sovereign-cloud stacks.
- **Restore-drill attestation freshness** reads against OCSF API
  Activity events emitted at the evidence-capture step, timestamped
  against the operator's documented freshness window.
- **Restore-drill RTO overrun** reads against OCSF API Activity
  events emitted at the execute-restore-drill step with a measured
  RTO field, compared against the documented objective on the same
  scope.

These declarations are deterministic, inspectable, and auditable — an
operator, a peer reviewer, or a regulator can walk from the metric
YAML to the OCSF class artifact, and from the class artifact to the
telemetry an operator's stack already emits. The KPIs are drop-in:
bring your own SIEM, bring your own orchestrator, bring your own
backup engine. The definitions do not assume any product; they
declare the shape of the audit trail.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any operational
artifact. The four new backup-recovery metric entries and the
per-cluster OCSF binding lint keep OCSF as an open data shape: the
cluster's declared source-data ref must resolve to a real class
artifact inside the public framework, and the operator decides which
compatible telemetry source emits each declared class inside their
own stack. The single-playbook classifier on `backup_recovery` is a
discipline on how the catalogue reads its own membership predicates —
nothing about it changes what telemetry an operator emits, or from
where.

The project still does not ship its own runtime, its own agent
framework, or its own SOAR. The new lint runs on content; the metric
definitions read against telemetry on the compile target an operator
chooses (n8n, Temporal, or LangGraph).

## Honest framing on what stays open

This is a coverage-breadth wave that closes the backup-recovery
cluster into the OCSF binding ring. The honest open beats:

- **Supply-chain-security is still armed but not yet bound.** The
  zero-classified baseline anchor from field note #93 still stands —
  when an exclusive-membership supply-chain metric with a real OCSF
  binding lands, the baseline must be updated in the same PR.
- **The two classifier gates — playbook-scoped and step-scoped — still
  live as siblings, not consolidated.** Consolidating them into a
  single lint surface remains a governance decision for a follow-on
  wave.
- **Regulatory-notification cluster membership is still narrow.** The
  step-scoped classifier is anchored on one `(playbook_id, step_id)`
  tuple; additional regulator-facing metrics on other steps remain
  outside the current gate and each addition is a governance choice.
- **Cluster coverage is still partial.** Foundation-property clusters
  and cluster families that have not yet entered a binding phase
  remain inventoried by the catalogue-wide skip-list; the next
  windows continue to walk depth into the catalogue on the same
  pattern.
- **F-MET-DET has not extended further this window.** The
  determinism-corner pairing invariant reached the corner at
  [#544](https://github.com/secops-ng/secops-ng-framework/pull/544);
  the two unpaired non-replay determinism KPIs remain named as
  sibling-card candidates and are not widened here.

The accurate claim on this wave: the backup-recovery cluster now
ships four OCSF-armed metric entries against the shipped
`backup_recovery` playbook, and its per-cluster OCSF source-data-shape
binding is enforced nightly. Eleven KPI/KRI clusters — posture,
detection-latency, catalogue-wide, post-incident-review,
regulatory-notification, identity-&-access, vulnerability-&-patch
(CRA-family), threat-intel & phishing, incident-response,
on-call-rotation, supply-chain-security, and backup-recovery — are
now enforced nightly on sibling orphan-CI job stanzas. Ten arm at
zero findings via real bindings on the shipped catalogue; supply-
chain arms at a zero-classified baseline anchor.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #561](https://github.com/secops-ng/secops-ng-framework/pull/561),
  [PR #562](https://github.com/secops-ng/secops-ng-framework/pull/562),
  and [PR #563](https://github.com/secops-ng/secops-ng-framework/pull/563).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-three that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Three PRs close this window. Backup-recovery lands F-MET-BCR SKELETON
plus F-MET-OCSF-BCR SKELETON + CORE, the last major playbook cluster
to join the OCSF source-data-shape binding ring. Eleven KPI/KRI
clusters now enforce their OCSF binding nightly on sibling orphan-CI
lanes; ten arm at zero findings via real bindings on the shipped
catalogue, and supply-chain arms at a zero-classified baseline anchor
until its real bindings land.
