---
title: "Field note #91 — the residual-risk pairing invariant reaches the determinism corner, and the per-cluster OCSF binding lint opens two more clusters (post-incident-review, regulatory-notification)"
description: "Ninety-first field note from the SecOps-NG Digital Commons: four framework PRs extend the sovereignty-corner pairing invariant into the determinism corner (#544), open the F-MET-OCSF-PIR triplet for the post-incident-review cluster on SKELETON + CORE (#545, #546), and open F-MET-OCSF-REGNOTIFY on SKELETON for the regulatory-notification cluster (#547). All four ride the same nightly orphan-CI cadence and arm at zero findings on the shipped catalogue."
pubDate: 2026-07-01
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-det", "f-met-ocsf-pir", "f-met-ocsf-regnotify", "ocsf", "determinism", "post-incident-review", "regulatory-notification", "kpi-kri", "orphan-ci", "digital-commons"]
---

Four framework PRs close this window, and they widen G-04 catalogue
maturity along two dimensions at once. On the residual-risk pairing
dimension, the sovereignty-corner invariant that landed at
[#543](https://github.com/secops-ng/secops-ng-framework/pull/543)
generalises into the determinism corner: every replay coverage KPI
under `foundation_property: determinism` must now ship paired with a
replay drift KRI at the same version family, enforced nightly
([#544](https://github.com/secops-ng/secops-ng-framework/pull/544)).
On the OCSF source-data-shape dimension, the per-cluster binding lint
pattern — already shipping for the posture and detection-latency
clusters — opens two more clusters this window: the
post-incident-review cluster gets its SKELETON + CORE (linter plus
nightly orphan-CI wiring, [#545](https://github.com/secops-ng/secops-ng-framework/pull/545)
and [#546](https://github.com/secops-ng/secops-ng-framework/pull/546)),
and the regulatory-notification cluster gets its SKELETON on a
step-scoped classifier ([#547](https://github.com/secops-ng/secops-ng-framework/pull/547)).

## What landed

Four PRs against the framework, all merged to `main`.

### F-MET-DET EXTEND — residual-risk pairing invariant reaches the determinism corner (PR #544)

[PR #544](https://github.com/secops-ng/secops-ng-framework/pull/544)
extends the shape of the sovereignty-cluster pairing invariant from
[#543](https://github.com/secops-ng/secops-ng-framework/pull/543)
into the determinism corner of the catalogue. A new sibling module,
`tools/lint_determinism_replay_pairing.py`, asserts that every replay
coverage KPI matching `kpi.*replay*_(determinism|parity)_rate@vN`
whose `foundation_property` includes `determinism` must be paired with
a replay drift KRI matching `kri.*replay*_drift@vN` at the same
version family, also under `determinism`. A version-family mismatch
(KPI@v2 paired with KRI@v1) is caught; an alternative KRI name on the
replay-drift shape is accepted, so the invariant generalises when a
second determinism-corner replay coverage KPI lands.

The sovereignty pairing lint is untouched — the determinism corner
lands as a sibling module rather than a parameter on the existing
file, so each corner's semantics can be reviewed in isolation. Today
the determinism corner carries exactly one shipped pair
(`kpi.same_target_replay_determinism_rate@v1` ⇄
`kri.same_target_replay_drift@v1`), so the lint exercises non-vacuously
on the LHS and arms clean. Two non-replay determinism KPIs
(`cross_target_audit_envelope_parity_rate@v1`,
`span_block_emitter_determinism_rate@v1`) remain unpaired today and
are named as sibling-card candidates for a follow-on EXTEND wave; the
current PR does not widen into them.

The new `determinism-replay-pairing` job stanza rides the same
nightly cadence as the OCSF cluster lanes and the sovereignty pairing
lane.

### F-MET-OCSF-PIR SKELETON — per-cluster OCSF binding lint for the post-incident-review cluster (PR #545)

[PR #545](https://github.com/secops-ng/secops-ng-framework/pull/545)
opens the F-MET-OCSF-PIR triplet at the SKELETON floor: a per-cluster
OCSF source-data-shape binding linter for the post-incident-review
(PIR / corrective-action) cluster, mirroring the shape of the shipping
`lint_posture_ocsf_bindings.py` and `lint_detection_ocsf_bindings.py`
modules. The cluster membership predicate is the exclusivity gate on
`{playbook.post_incident_review@v1}`: a metric is in-cluster iff every
one of its `playbook_refs` resolves to that playbook id.

Four PIR metrics are in-cluster today and all four already carry a
resolvable `telemetry.ocsf.incident_finding@v1` `telemetry_ref` under
`content/telemetry/`, so the SKELETON arms at zero findings on the
shipped tree. Fan-out metrics that touch the PIR playbook via other
steps are excluded by the exclusivity gate; the CLI ships text + json
surfaces and a JSON payload shape assertion is under test.

### F-MET-OCSF-PIR CORE — PIR OCSF binding rides nightly orphan-CI (PR #546)

[PR #546](https://github.com/secops-ng/secops-ng-framework/pull/546)
closes the CORE step by wiring the SKELETON module as a new
`post-incident-review-ocsf-bindings` job stanza in
`.github/workflows/orphan-ci.yml`, sibling to the existing posture,
detection, catalogue, sovereignty, and determinism jobs. The workflow's
`pull_request` and `push` path-trigger lists are extended to include
both the new linter module and its test module, so an edit to either
file fires the workflow on the PR that introduces it, not on the next
nightly. The lane lands green on `main`.

### F-MET-OCSF-REGNOTIFY SKELETON — per-cluster OCSF binding lint for the regulatory-notification cluster on a step-scoped classifier (PR #547)

[PR #547](https://github.com/secops-ng/secops-ng-framework/pull/547)
opens the F-MET-OCSF-REGNOTIFY thread at the SKELETON floor for the
regulatory-notification metric family. The design note is worth
naming: the classifier for this cluster is **step-scoped** rather
than playbook-scoped. A metric is regulatory-notification-class iff
every one of its `playbook_refs` resolves to a `(playbook_id, step_id)`
tuple in a seeded set, rather than to a playbook id in isolation.

The single seeded anchor is
`(playbook.vuln_intake@v1, action--…000006)` — the CRA Article 14
regulator-notification step. Four shipped CRA on-time metrics
classify against it and are already bound to
`telemetry.ocsf.incident_finding@v1`, so the SKELETON arms at zero
findings. The step-scoped gate keeps fan-out metrics that touch the
same host playbook via other steps out of the cluster; their
source-data shape is (or will be) captured by other cluster lints, and
a playbook-scoped gate would sweep them in for the wrong reason.

The shared helpers on `tools.ocsf_cluster_lint` (Finding, the
`has_ocsf_binding` helper, the `OCSF_TELEMETRY_PREFIX` constant) are
reused; the scan/CLI drivers there are playbook-scoped, so this module
ships its own small step-scoped scan + CLI wrapper. Consolidating the
playbook-scoped and step-scoped gates into a single surface is called
out as a governance decision for a follow-on CORE; today the two
gates live as siblings.

Nightly orphan-CI wiring for the REGNOTIFY cluster is named as an
EXTEND sibling and is not part of this SKELETON.

## Why this reads against G-04

G-04 on the published roadmap is the catalogue-maturity goal: every
shipped artifact in the catalogue moves from a bare definition to a
declared, machine-readable surface that a nightly orphan-CI lane can
walk. This window widens the goal along two independent dimensions of
the KPI/KRI catalogue in parallel.

The **residual-risk pairing dimension** — the discipline that a
coverage KPI on a given foundation corner cannot ship without a
paired residual-risk KRI at the same version family, and the pairing
is enforced nightly — now covers two of the catalogue's foundation
corners (sovereignty from #543, determinism from #544 this window)
rather than one. The two corners share a shape and are enforced as
sibling modules, so each corner's semantics stay reviewable in
isolation.

The **OCSF source-data-shape dimension** — the discipline that every
operator-telemetry metric in a cluster declares a `telemetry.ocsf.*`
source-data ref that resolves to a real class artifact under
`content/telemetry/`, and the declaration is enforced nightly on the
cluster's lint lane — now covers four clusters at various stages:
posture and detection-latency at full triplet closeout, catalogue-wide
at full triplet closeout as of last window's #540/#541, PIR at CORE
(SKELETON + nightly wiring, this window), and regulatory-notification
at SKELETON (this window, EXTEND pending). The pattern is the same
across clusters, and the shared helpers on
`tools.ocsf_cluster_lint` are the surface the pattern lives on.

## Sovereignty stance on this wave

Nothing in this wave changes the sovereignty stance on any operational
artifact. The determinism-corner pairing invariant enforces a shape
on the catalogue's own metric declarations, not on any operator
runtime; the paired KPI and KRI already live in the framework, and
the invariant only asserts they cannot silently drop out of each
other's company. The per-cluster OCSF binding lints keep OCSF as an
open data shape: the cluster's declared source-data ref must resolve
to a real class artifact inside the public framework, and the
operator decides which compatible telemetry source emits each declared
class inside their own stack.

The step-scoped classifier introduced by REGNOTIFY is a discipline on
how the catalogue reads its own membership predicates — a metric that
touches a regulator-notification step is regulatory-notification-class
for the purpose of this lint, and a metric that touches the same
playbook via a different step is not. That discipline stays inside
the catalogue; nothing about it changes what telemetry an operator
emits, or from where.

The project still does not ship its own runtime, its own agent
framework, or its own SOAR. The new lints and the new pairing invariant
run on content; the modules they lint are the same ones operators read
against telemetry on the compile target they choose.

## Honest framing on what stays open

This is a mixed closeout-and-opening wave, not a milestone wave. The
honest open beats:

- **F-MET-DET has extended, but the determinism corner still carries
  two unpaired non-replay KPIs.** `cross_target_audit_envelope_parity_rate@v1`
  and `span_block_emitter_determinism_rate@v1` are outside the
  replay-family gate and remain unpaired in the catalogue today;
  widening the invariant to cover them is named as a sibling EXTEND,
  not done in this wave.
- **F-MET-OCSF-PIR sits at CORE, not full triplet.** The linter and
  the nightly wiring are both in; the EXTEND phase would add a
  contributor README note in `tools/` or `content/metrics/README.md`
  and continue widening
  `POST_INCIDENT_REVIEW_PLAYBOOK_IDS` as more closeout-family
  playbooks ship paired OCSF bindings. Today no-op on the
  cluster-membership widening — all four shipped PIR metrics are
  already in cluster and bound.
- **F-MET-OCSF-REGNOTIFY sits at SKELETON only.** Nightly orphan-CI
  wiring is the pending CORE. Additional regulatory-notification
  metrics that live on other steps
  (`breach_notification_clock_margin`, `notification_sla_compliance`,
  `regulator_notification_overrun`, `vuln_disclosure_sla`,
  `gdpr_lawful_basis_section_coverage`) are explicitly out of scope
  of the SKELETON — their step tuples land on
  `playbook.incident_management@v1`, `playbook.data_exfil@v1`,
  `playbook.ransomware_containment@v1`, or on vuln_intake intake /
  dissemination steps, and each addition is a governance choice for
  a follow-on CORE.
- **The two classifier gates — playbook-scoped and step-scoped —
  live as siblings, not consolidated.** Consolidating them into a
  single lint surface is called out in the REGNOTIFY body as a
  governance decision for a follow-on CORE; today each cluster's
  gate ships on the shape that fits its cluster.
- **G-04 catalogue maturity continues.** The corners and clusters
  that have not yet entered a binding phase continue to be
  inventoried by the catalogue-wide skip-list; the next windows
  continue to walk depth into the catalogue.

The accurate claim on this wave is: the residual-risk pairing
invariant now enforces on the sovereignty and determinism corners in
parallel; the per-cluster OCSF source-data-shape binding lint now
enforces nightly on posture, detection-latency, catalogue-wide, and
post-incident-review, and has opened at SKELETON on the
regulatory-notification cluster with a step-scoped classifier.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #544](https://github.com/secops-ng/secops-ng-framework/pull/544),
  [PR #545](https://github.com/secops-ng/secops-ng-framework/pull/545),
  [PR #546](https://github.com/secops-ng/secops-ng-framework/pull/546),
  and [PR #547](https://github.com/secops-ng/secops-ng-framework/pull/547).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the ninety that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Four PRs close this window. The residual-risk pairing invariant reaches
the determinism corner alongside sovereignty, and the per-cluster OCSF
source-data-shape binding lint pattern opens on two more clusters —
post-incident-review at CORE, regulatory-notification at SKELETON on
a step-scoped classifier — arming at zero findings on the shipped
catalogue.
