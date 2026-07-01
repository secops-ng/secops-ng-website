---
title: "Field note #95 — detection-engineering joins the OCSF binding ring (F-MET-OCSF-DETENG SKELETON + CORE, framework PRs #564-#565)"
description: "Ninety-fifth field note from the SecOps-NG Digital Commons: two framework PRs bring the detection-engineering KPI/KRI cluster fully inside the G-04 OCSF source-data-shape binding ring. F-MET-OCSF-DETENG SKELETON adds the per-cluster binding lint and pins the anchor metric to its detection-engineering playbook step (#564). F-MET-OCSF-DETENG CORE wires the assertion into nightly orphan-CI (#565). Twelve KPI/KRI clusters now enforce their OCSF binding nightly on sibling orphan-CI lanes."
pubDate: 2026-07-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-ocsf-deteng", "ocsf", "detection-engineering", "detection-coverage", "nis2", "dora", "cra", "kpi-kri", "orphan-ci", "digital-commons"]
---

Two framework PRs close this window, and together they bring the
detection-engineering cluster fully inside the G-04 OCSF source-data-
shape binding ring.
[PR #564](https://github.com/secops-ng/secops-ng-framework/pull/564)
opens F-MET-OCSF-DETENG SKELETON — the per-cluster binding lint
module, plus a `playbook_refs` pin on the shipped detection-coverage
metric so the classifier picks it up on the detection-engineering
playbook.
[PR #565](https://github.com/secops-ng/secops-ng-framework/pull/565)
closes F-MET-OCSF-DETENG CORE — the nightly orphan-CI wire-in.
Twelve KPI/KRI clusters now enforce their OCSF source-data-shape
binding nightly on sibling orphan-CI lanes.

## What landed

Two PRs against the framework, both merged to `main`.

### F-MET-OCSF-DETENG SKELETON — per-cluster OCSF binding lint for the detection-engineering cluster (PR #564)

[PR #564](https://github.com/secops-ng/secops-ng-framework/pull/564)
opens the per-cluster binding lint. A new
`tools/lint_detection_engineering_ocsf_bindings.py` sits as a thin
wrapper on the shared `tools.ocsf_cluster_lint` driver, sibling to
the eleven per-cluster wrappers that shipped in earlier G-04 waves.
The cluster's playbook set is
`{playbook.detection_engineering@v1}`, and the exclusivity gate via
`tools.ocsf_cluster_lint.is_cluster_metric` keeps fan-out cross-
cluster metrics out. Every detection-engineering-class metric must
declare at least one `telemetry.ocsf.*` source-data ref that resolves
to a real class artifact under `content/telemetry/`.

The same PR adds a small `playbook_refs` pin on the shipped
`kpi.detection_coverage@v1` metric, binding it to the
detection-engineering playbook's shipped detection-authoring step so
the classifier picks it up. The metric already carried its OCSF
source-data ref (`telemetry.ocsf.detection_finding@v1`) from earlier
detection-latency work — the pin closes the last gap between the
metric and the cluster gate, and the SKELETON arms at zero findings
on the shipped tree.

The paired test module mirrors the sibling per-cluster suites
one-for-one: shipped-tree pass, full-cluster classifier anchor,
synthetic unbound positives, fan-out exclusion, per-metric
strip-and-trip regression, and CLI text + json shape assertions.

### F-MET-OCSF-DETENG CORE — detection-engineering OCSF binding rides nightly orphan-CI (PR #565)

[PR #565](https://github.com/secops-ng/secops-ng-framework/pull/565)
closes the CORE step by wiring the detection-engineering SKELETON
module as a new `detection-engineering-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing
per-cluster jobs. Both the linter module and its test module land in
the `pull_request` and `push` path-trigger lists; the nightly 02:23
UTC schedule slot picks the lane up on the standard orphan-CI
cadence. Scope is CI wiring only — no new content, no new linter
logic. The lane lands green on `main`, so the detection-engineering
cluster is now enforced nightly.

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
  family)** — SKELETON + CORE (from #561/#562/#563).
- **Detection-engineering** — SKELETON + CORE this window
  (#564, #565). Single-playbook classifier on
  `detection_engineering`. Arms at zero findings on the shipped
  catalogue via the pre-existing detection-finding binding on the
  anchor metric.

Twelve KPI/KRI clusters now have per-cluster linter modules and
enforce their OCSF source-data-shape binding nightly on sibling
orphan-CI lanes. Eleven arm at zero findings via real bindings on the
shipped catalogue; supply-chain arms at a zero-classified baseline
anchor until an exclusive-membership supply-chain metric lands with a
real binding.

## The pattern, held twelve times running

The two-step shape — SKELETON introduces the per-cluster linter as a
thin wrapper on the shared driver; CORE wires it into orphan-CI so
the binding is continuously enforced, not just checked on demand —
now holds across twelve clusters without variation. Each wrapper is
a handful of lines. Each declares the cluster's playbook set, the
exclusivity predicate, and the per-metric OCSF ref requirement. Each
paired test module mirrors the sibling suites one-for-one. Each CORE
step adds a single job stanza to the same `orphan-CI` workflow file.

This is the shape a Digital Commons wants: cluster growth is a
mechanical, reviewable operation, not a bespoke integration. A
community member adding the next cluster copies the previous
wrapper, edits the playbook set, drops in a matching test module,
and adds the job stanza — and the nightly enforcement follows.

## The community-facing shape of the anchor metric

The detection-engineering cluster ships with one exclusive-membership
metric, `kpi.detection_coverage@v1` — the share of documented
adversary techniques on which a detection is authored, tuned, and
live in production. It reads against OCSF Detection Finding events
emitted at the detection-authoring step. An operator whose SIEM or
detection platform already emits authored/tuned detections as
Detection Finding class events — with a technique-mapping field
resolvable against the operator's chosen threat-model reference —
is one field mapping away from the KPI.

The declaration is deterministic, inspectable, and auditable: an
operator, a peer reviewer, or a regulator can walk from the metric
YAML to the OCSF Detection Finding class artifact, and from the
class artifact to the detection-authoring telemetry the operator's
stack already emits. The KPI is drop-in: bring your own SIEM, bring
your own detection platform, bring your own threat-model reference.
The definition does not assume any product; it declares the shape of
the audit trail.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any
operational artifact. The per-cluster OCSF binding lint keeps OCSF as
an open data shape: the cluster's declared source-data ref must
resolve to a real class artifact inside the public framework, and
the operator decides which compatible telemetry source emits each
declared class inside their own stack. The single-playbook
classifier on `detection_engineering` is a discipline on how the
catalogue reads its own membership predicates — nothing about it
changes what telemetry an operator emits, or from where.

The project still does not ship its own runtime, its own agent
framework, or its own SOAR. The new lint runs on content; the metric
definitions read against telemetry on the compile target an operator
chooses (n8n, Temporal, or LangGraph).

## Honest framing on what stays open

This is a coverage-breadth wave that closes the detection-engineering
cluster into the OCSF binding ring. The honest open beats:

- **Detection-engineering cluster membership is narrow.** The
  classifier is anchored on one exclusive-membership metric
  (`kpi.detection_coverage@v1`); additional detection-engineering-
  scoped metrics — detection freshness, mean tuning latency,
  false-positive rate under a defined threshold — remain named as
  sibling-card candidates and are not widened here.
- **Supply-chain-security is still armed but not yet bound.** The
  zero-classified baseline anchor from field note #93 still stands —
  when an exclusive-membership supply-chain metric with a real OCSF
  binding lands, the baseline must be updated in the same PR.
- **The two classifier gates — playbook-scoped and step-scoped —
  still live as siblings, not consolidated.** Consolidating them
  into a single lint surface remains a governance decision for a
  follow-on wave.
- **Cluster coverage is still partial.** Foundation-property
  clusters and cluster families that have not yet entered a binding
  phase remain inventoried by the catalogue-wide skip-list; the
  next windows continue to walk depth into the catalogue on the
  same pattern.

The accurate claim on this wave: the detection-engineering cluster
now has a per-cluster OCSF source-data-shape binding lint, and that
lint is enforced nightly. Twelve KPI/KRI clusters — posture,
detection-latency, catalogue-wide, post-incident-review,
regulatory-notification, identity-&-access, vulnerability-&-patch
(CRA-family), threat-intel & phishing, incident-response,
on-call-rotation, supply-chain-security, backup-recovery, and
detection-engineering — are now enforced nightly on sibling
orphan-CI job stanzas. Eleven arm at zero findings via real
bindings on the shipped catalogue; supply-chain arms at a zero-
classified baseline anchor.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #564](https://github.com/secops-ng/secops-ng-framework/pull/564)
  and [PR #565](https://github.com/secops-ng/secops-ng-framework/pull/565).
  Both merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Two PRs close this window. Detection-engineering lands F-MET-OCSF-
DETENG SKELETON + CORE, joining the OCSF source-data-shape binding
ring. Twelve KPI/KRI clusters now enforce their OCSF binding
nightly on sibling orphan-CI lanes; eleven arm at zero findings via
real bindings on the shipped catalogue, and supply-chain arms at a
zero-classified baseline anchor until its real bindings land.
