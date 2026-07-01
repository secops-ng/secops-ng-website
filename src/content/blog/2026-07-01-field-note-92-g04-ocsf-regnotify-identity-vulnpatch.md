---
title: "Field note #92 — the per-cluster OCSF binding lint sweeps across three more KPI/KRI clusters (regulatory-notification CORE, identity-&-access SKELETON+CORE, vulnerability-&-patch SKELETON+CORE)"
description: "Ninety-second field note from the SecOps-NG Digital Commons: five framework PRs widen the G-04 per-cluster OCSF source-data-shape binding lint across three more KPI/KRI clusters. Regulatory-notification closes to CORE (#548), identity-&-access ships SKELETON + CORE (#549, #550), and vulnerability-handling & patch (CRA-family) ships SKELETON + CORE (#551, #552). All three now ride the same nightly orphan-CI cadence and arm at zero findings on the shipped catalogue."
pubDate: 2026-07-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-ocsf-regnotify", "f-met-ocsf-identity", "f-met-ocsf-vulnpatch", "ocsf", "regulatory-notification", "identity-access", "vulnerability-patch", "cra", "kpi-kri", "orphan-ci", "digital-commons"]
---

Five framework PRs close this window, and they push the G-04
catalogue-maturity theme along a single dimension: coverage breadth on
the per-cluster OCSF source-data-shape binding lint. Last window
([#91](https://github.com/secops-ng/secops-ng-website)) landed
post-incident-review at CORE and regulatory-notification at SKELETON.
This window closes regulatory-notification to CORE and opens two more
clusters on the same SKELETON → CORE pattern: identity-&-access and
vulnerability-handling & patch (the CRA-family cluster). Each cluster
now has both a per-cluster linter and a nightly orphan-CI job wired
against it, sibling to the posture, detection-latency, catalogue-wide,
sovereignty, determinism, and post-incident-review lanes already in
flight.

## What landed

Five PRs against the framework, all merged to `main`.

### F-MET-OCSF-REGNOTIFY CORE — regulatory-notification OCSF binding rides nightly orphan-CI (PR #548)

[PR #548](https://github.com/secops-ng/secops-ng-framework/pull/548)
closes the CORE step of the regulatory-notification triplet whose
SKELETON shipped last window at
[#547](https://github.com/secops-ng/secops-ng-framework/pull/547). A
new `regulatory-notification-ocsf-bindings` job stanza lands in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
lanes, running `python -m tools.lint_regulatory_notification_ocsf_bindings
--format text`. The workflow's `pull_request` and `push` path-trigger
lists are extended so an edit to either the linter module or its test
module fires the workflow on the PR that introduces it, not on the
next nightly. Scope is strictly CI wiring — no new content, no new
linter logic, no changes under `content/` or `tools/`. The lane lands
green on `main`, so the step-scoped classifier for the CRA Article 14
regulator-notification step is now enforced nightly.

### F-MET-OCSF-IDENTITY SKELETON — per-cluster OCSF binding lint for the identity-&-access cluster (PR #549)

[PR #549](https://github.com/secops-ng/secops-ng-framework/pull/549)
opens the F-MET-OCSF-IDENTITY triplet at the SKELETON floor. A new
per-cluster wrapper, `tools/lint_identity_access_ocsf_bindings.py`,
sits on the shared helpers in `tools.ocsf_cluster_lint` and enforces
the same discipline the sibling clusters ship: every metric whose
`playbook_refs` resolve exclusively to the identity-&-access cluster's
playbook set must carry at least one `telemetry.ocsf.*` source-data
ref that resolves to a real class artifact under `content/telemetry/`.

The cluster's playbook set is
`{playbook.identity_compromise@v1, playbook.onboarding_offboarding_tracker@v1}`.
Four shipped metrics classify in-cluster today —
`mttd_identity_compromise`, `mttc_identity_compromise`,
`joiner_to_provisioned_time`, `leaver_to_revoked_time` — and each
already carries a resolvable OCSF binding, so the SKELETON arms at
zero findings on the shipped tree. The paired test mirrors the
detection-cluster test shape: shipped-tree pass, full-cluster
classifier anchor, synthetic unbound positives for both playbooks,
fan-out exclusion, per-metric strip-and-trip regression, and CLI
text + json shape assertions.

### F-MET-OCSF-IDENTITY CORE — identity-&-access OCSF binding rides nightly orphan-CI (PR #550)

[PR #550](https://github.com/secops-ng/secops-ng-framework/pull/550)
closes the CORE step by wiring the identity-&-access SKELETON module
as a new `identity-access-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs. The `pull_request` and `push` path-trigger lists are extended
to include both the new linter module and its test module. Scope is
CI wiring only — no new content, no new linter logic. The lane lands
green on `main`.

### F-MET-OCSF-VULNPATCH SKELETON — per-cluster OCSF binding lint for the vulnerability-handling & patch (CRA-family) cluster (PR #551)

[PR #551](https://github.com/secops-ng/secops-ng-framework/pull/551)
opens the F-MET-OCSF-VULNPATCH triplet at the SKELETON floor for the
vulnerability-handling & patch cluster — the CRA-family cluster that
carries coordinated-vulnerability-disclosure and SBOM release
obligations. The cluster's playbook set is
`{playbook.vuln_intake@v1, playbook.patch_management@v1}`, and the
exclusivity gate keeps regulatory-notification fan-out metrics that
touch `vuln_intake` on other steps
(`breach_notification_clock_margin`,
`regulator_notification_overrun`, and their siblings) out of the
CRA cluster — their source-data shape is captured by the
regulatory-notification lint, and a playbook-scoped gate would sweep
them in for the wrong reason.

Six shipped metrics classify in-cluster and all six already carry a
resolvable OCSF binding, so the SKELETON arms at zero findings:

- `kri.cvd_intake_aging@v1` → `telemetry.ocsf.vulnerability_finding@v1`
- `kpi.vuln_disclosure_sla@v1` → `telemetry.ocsf.incident_finding@v1`
- `kri.releases_without_sbom@v1` → `telemetry.ocsf.incident_finding@v1`
- `kpi.patch_disseminated_on_time@v1` → `telemetry.ocsf.incident_finding@v1`
- `kpi.patch_rollout_success_rate@v1` → `telemetry.ocsf.patch_state@v1`
- `kri.patch_rollout_overdue_exposure@v1` → `telemetry.ocsf.patch_state@v1`

The paired test mirrors the identity-cluster test shape one-for-one,
plus explicit fan-out exclusivity gates against
regulatory-notification-family metrics that live on other `vuln_intake`
steps.

### F-MET-OCSF-VULNPATCH CORE — vuln-&-patch OCSF binding rides nightly orphan-CI (PR #552)

[PR #552](https://github.com/secops-ng/secops-ng-framework/pull/552)
closes the CORE step by wiring the VULNPATCH SKELETON module as a new
`vuln-patch-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing per-cluster
jobs, and extending the `pull_request` and `push` path-trigger lists to
include the new linter module and its test module. Scope is CI wiring
only — no new content or linter logic. The lane lands green on `main`,
so the CRA-family cluster is now enforced nightly.

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
- **Post-incident-review** — CORE (SKELETON + nightly wiring, from
  last window's #545/#546).
- **Regulatory-notification** — CORE this window (#548) after SKELETON
  landed last window at #547. Step-scoped classifier anchored on the
  CRA Article 14 regulator-notification step.
- **Identity-&-access** — CORE this window (#549 + #550). Playbook-scoped
  classifier on `identity_compromise` + `onboarding_offboarding_tracker`.
- **Vulnerability-&-patch (CRA-family)** — CORE this window
  (#551 + #552). Playbook-scoped classifier on `vuln_intake` +
  `patch_management`.

Seven clusters at CORE-or-above now, each on the same nightly cadence
and each arming at zero findings on the shipped catalogue. The pattern
across clusters is deliberately identical — one thin per-cluster
wrapper module over the shared helpers in `tools.ocsf_cluster_lint`,
one paired test with the same six anchors, one sibling job stanza in
`orphan-ci.yml`, one addition to the `pull_request` / `push`
path-trigger lists — so the coverage matrix stays readable as new
clusters enter the sweep.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any operational
artifact. The per-cluster OCSF binding lints keep OCSF as an open data
shape: the cluster's declared source-data ref must resolve to a real
class artifact inside the public framework, and the operator decides
which compatible telemetry source emits each declared class inside
their own stack. The cluster classifiers — playbook-scoped for
identity-&-access and vulnerability-&-patch, step-scoped for
regulatory-notification — are disciplines on how the catalogue reads
its own membership predicates. Nothing about them changes what
telemetry an operator emits, or from where.

The project still does not ship its own runtime, its own agent
framework, or its own SOAR. The new lints run on content; the modules
they lint are the same ones operators read against telemetry on the
compile target they choose (n8n, Temporal, or LangGraph).

## Honest framing on what stays open

This is a coverage-breadth wave, not a milestone wave. The honest
open beats:

- **The two classifier gates — playbook-scoped and step-scoped — still
  live as siblings, not consolidated.** Consolidating them into a
  single lint surface is called out in the REGNOTIFY body as a
  governance decision for a follow-on CORE. This window sticks with
  the sibling shape: each cluster's gate ships on the classifier
  discipline that fits its cluster.
- **Regulatory-notification cluster membership is still narrow.**
  The step-scoped classifier is anchored on exactly one
  `(playbook_id, step_id)` tuple —
  `(playbook.vuln_intake@v1, action--…000006)` — the CRA Article 14
  regulator-notification step. Additional regulator-facing metrics that
  live on other steps (`breach_notification_clock_margin`,
  `notification_sla_compliance`, `regulator_notification_overrun`,
  `gdpr_lawful_basis_section_coverage`) are outside the current gate
  and each addition is a governance choice for a follow-on wave.
- **Cluster coverage is still partial.** Foundation-property clusters
  and other cluster families that have not yet entered a binding phase
  remain inventoried by the catalogue-wide skip-list; the next windows
  continue to walk depth into the catalogue on the same pattern.
- **F-MET-DET has not extended further this window.** The
  determinism-corner pairing invariant reached the corner at
  [#544](https://github.com/secops-ng/secops-ng-framework/pull/544)
  last window; the two unpaired non-replay determinism KPIs remain
  named as sibling-card candidates and are not widened here.

The accurate claim on this wave: the per-cluster OCSF source-data-shape
binding lint now enforces nightly on seven KPI/KRI clusters —
posture, detection-latency, catalogue-wide, post-incident-review,
regulatory-notification, identity-&-access, and
vulnerability-&-patch (CRA-family) — each on its own sibling job
stanza in `orphan-ci.yml`, each arming at zero findings on the shipped
catalogue, and each following the same SKELETON → CORE pattern that
the rest of the sweep uses.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #548](https://github.com/secops-ng/secops-ng-framework/pull/548),
  [PR #549](https://github.com/secops-ng/secops-ng-framework/pull/549),
  [PR #550](https://github.com/secops-ng/secops-ng-framework/pull/550),
  [PR #551](https://github.com/secops-ng/secops-ng-framework/pull/551),
  and [PR #552](https://github.com/secops-ng/secops-ng-framework/pull/552).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety-one that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Five PRs close this window. Regulatory-notification closes to CORE,
identity-&-access and vulnerability-&-patch (CRA-family) each land
SKELETON + CORE. Seven KPI/KRI clusters now enforce their OCSF
source-data-shape binding nightly on sibling orphan-CI lanes, all
arming at zero findings on the shipped catalogue.
