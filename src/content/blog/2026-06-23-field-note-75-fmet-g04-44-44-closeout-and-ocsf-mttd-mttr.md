---
title: "Field note #75 — the F-MET G-04 reference-visualisation pass closes at 44/44 across the executive-metrics catalogue and OCSF source-data-shape bindings begin landing on the MTTD/MTTR latency clusters"
description: "Seventy-fifth field note from the SecOps-NG Digital Commons: six PRs against the framework close the F-MET G-04 reference-visualisation property at forty-four of forty-four entries across the executive-metrics catalogue, then open the next catalogue-maturity step by landing OCSF source-data-shape bindings on the MTTD detection-latency and MTTR response-latency clusters. The detection-quality, corrective-action governance, incident-process integrity, and CLOSEOUT clusters finish the .viz.md sibling-file convention; the MTTD/MTTR OCSF bindings tie each latency KPI to a concrete OCSF event shape behind the row."
pubDate: 2026-06-23
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-met", "metrics", "kpi", "kri", "g-04", "reference-visualisation", "viz-md", "ocsf", "ocsf-binding", "mttd", "mttr", "detection-quality", "corrective-action", "incident-process", "closeout", "digital-commons", "audit-readable"]
---

The previous field note read the F-MET G-04 reference-visualisation
catch-up wave landing: nine PRs against the framework moved the
`.viz.md` sibling-file convention from one CORE exemplar plus four
SKELETON entries to thirty-three committed siblings across eight
clusters. The accurate claim on that row was *broad cluster-by-cluster
coverage*; the catalogue floor still carried eleven entries without
a committed sibling behind the row.

This note reads two beats from the same window. First, four further
PRs close the property at forty-four of forty-four entries across
the catalogue — the G-04 def-of-done reference-visualisation pass
is structurally complete. Second, two PRs open the next
catalogue-maturity step: OCSF source-data-shape bindings begin
landing on the MTTD detection-latency and MTTR response-latency
clusters, tying each latency KPI to a concrete OCSF event shape on
the artifact rather than deferring the binding behind the row.

## What landed in this window

Six PRs against the framework, all merged to `main`. The first four
close the `.viz.md` sibling property across the remaining catalogue
clusters; the last two open the OCSF-binding pass on the latency
families.

### Detection-quality cluster (PR #459)

[PR #459](https://github.com/secops-ng/secops-ng-framework/pull/459)
lands sibling `.viz.md` artifacts for the detection-quality family:
`kri.false_positive_rate@v1`, `kpi.lateral_hunt_coverage@v1`, and
`kri.recurring_cloud_misconfig@v1`. The trio reads the audit-side
questions on detection signal-to-noise (the false-positive KRI),
proactive coverage of the lateral-movement surface (the hunt-coverage
KPI against a defined hunt cadence), and the recurrence-rate KRI on
cloud-misconfiguration findings against an in-period denominator.
Chart contracts follow the cluster pattern set by PR #449 — chart
kind + headline-figure annotation, in-tree Mermaid reference
rendering, threshold-band table pointing back at the catalogue YAML.

### Corrective-action governance cluster (PR #460)

[PR #460](https://github.com/secops-ng/secops-ng-framework/pull/460)
lands sibling viz artifacts for the corrective-action governance
family: `kri.corrective_action_overdue@v1`,
`kpi.corrective_action_close_rate@v1`, and
`kpi.control_effectiveness@v1`. The trio reads the overdue-count
KRI against the active backlog, the close-rate KPI against an
in-period denominator, and the control-effectiveness KPI against
the in-period audit-test outcome — the three rows an audit asks
about directly when reading the corrective-action programme.

### Incident-process integrity cluster (PR #461)

[PR #461](https://github.com/secops-ng/secops-ng-framework/pull/461)
lands sibling viz artifacts for the incident-process integrity
family: `kpi.timeline_completeness@v1`,
`kpi.review_completion_sla@v1`, and
`kpi.handoff_brief_delivery_sla@v1`. The trio reads the
process-discipline KPIs the catalogue carries against the incident
lifecycle — the percentage of closed incidents that carry a
complete timeline against the playbook step contract, the
post-incident review on-time-rate against the SLA window, and the
handoff-brief delivery on-time-rate across shift transitions.

### CLOSEOUT cluster — 44/44 (PR #462)

[PR #462](https://github.com/secops-ng/secops-ng-framework/pull/462)
lands sibling viz artifacts for the closeout cluster:
`kpi.backup_integrity_pass_rate@v1`, `kri.cvd_intake_aging@v1`,
`kri.escalation_tier_breach@v1`, and `kri.releases_without_sbom@v1`.
The cluster reads the four entries the catalogue carries on
resilience-and-supply-chain hygiene that did not fit the prior
groupings — the backup-restore integrity-test pass rate, the
coordinated-vulnerability-disclosure intake-aging KRI, the
escalation-tier breach KRI across on-call paths, and the
release-without-SBOM KRI on the supply-chain surface.

This PR closes the property on the catalogue floor: forty-four
metrics, forty-four committed `.viz.md` siblings, every artifact
mirroring the exemplar contract, every metric YAML carrying the
`Reference visualisation:` paragraph the regression net asserts.
The G-04 def-of-done reference-visualisation pass reaches structural
completion on this row.

### OCSF source-data-shape bindings — MTTD detection-latency cluster (PR #463)

[PR #463](https://github.com/secops-ng/secops-ng-framework/pull/463)
opens the next catalogue-maturity step. Each `.viz.md` sibling on
the MTTD detection-latency cluster — the unscoped `kpi.mttd@v1`
baseline plus the four per-scenario variants (`mttd_cloud_misconfig`,
`mttd_exfil`, `mttd_identity_compromise`,
`mttd_threat_intel_indicator`) — gains an OCSF source-data-shape
section that names the concrete OCSF class the detection event
reads against, the OCSF attributes the latency clock binds to
(`time` for the detection-side timestamp and the activity-side
timestamp the cluster reads from `metadata.original_time` or the
class-specific event-time field), and the OCSF profile extensions
the per-scenario variants narrow against.

The PR also reaches into each metric YAML's `measurement.inputs[]`
binding to back-reference the OCSF class on the source-event row,
so the catalogue YAML carries the binding as a first-class field
rather than as a `.viz.md`-only annotation. The detection-latency
surface now reads OCSF-first on the source side; the catalogue
sibling and the YAML agree on the same binding.

### OCSF source-data-shape bindings — MTTR response-latency cluster (PR #464)

[PR #464](https://github.com/secops-ng/secops-ng-framework/pull/464)
mirrors PR #463 on the remediation side. Each `.viz.md` sibling
on the MTTR response-latency cluster — the unscoped
`kpi.mttr_critical@v1` baseline, the scoped variants
(`kpi.mttr_containment@v1`, `kpi.mttr_phishing_triage@v1`), and the
per-scenario family (`mttr_blocklist_propagation`,
`mttr_cloud_misconfig`, `mttr_on_call_ack`) — gains an OCSF
source-data-shape section that names the response-side event the
MTTR clock binds against. Where no unambiguous OCSF class covers
the playbook-step transition that closes the latency (the
on-call-ack acknowledgement, the blocklist-propagation push), the
sibling names that deferral on the artifact rather than invent a
binding — the honest framing the cluster pattern already established.

The MTTD/MTTR pair now closes as the detection-and-remediation
latency surface on the same OCSF-binding contract, on the same
`.viz.md` sibling property, on the same metric YAML
`measurement.inputs[]` back-reference.

## What this wave does to the catalogue floor

After this window, the `content/metrics/` surface carries:

- **Forty-four committed `.viz.md` siblings on the catalogue
  floor** — the G-04 def-of-done reference-visualisation pass
  reaches structural completion at 44/44, every catalogue entry
  carries a committed sibling on the cluster pattern set by PR #449.
- **OCSF source-data-shape bindings on both latency clusters** —
  the MTTD detection-latency family (unscoped + four per-scenario)
  and the MTTR response-latency family (unscoped + two scoped +
  three per-scenario) both carry OCSF class + attribute bindings
  on the `.viz.md` sibling and a back-reference on the metric YAML
  `measurement.inputs[]` row.
- **The G-04 lane fully exemplified across both axes the
  property contract has** — the chart-and-threshold axis on every
  entry, the OCSF-source axis on the latency families that opened
  the lane. Subsequent passes walk the OCSF axis across the
  remaining clusters; the chart axis is already at floor.

## Why the OCSF binding matters for catalogue maturity

A committed reference visualisation closed the *which chart, against
which thresholds* question on the dashboard surface. The OCSF
source-data-shape binding closes the symmetric question on the
upstream surface: *which event shape does this metric read against,
and how does the latency clock bind to the OCSF class attributes?*

Without the binding, the catalogue says *this is an MTTD against a
detection event* and the operator carries the source-event mapping
in whichever SIEM/XDR they picked first. With the binding, the
catalogue names the OCSF class on the artifact, the attribute the
clock starts on, the attribute the clock stops on, and any profile
extensions the per-scenario variants narrow against. Two operators
running different upstream stacks compile the same latency clock
against the same OCSF binding — the catalogue defines the source
contract, the operator's adapter normalises into it, and a
divergence between the catalogue and the runtime ingest becomes a
visible diff on the adapter layer rather than a re-derivation
during the audit.

For the G-04 catalogue floor specifically, the OCSF binding closes
the property the lane needs to be portable across the three
reference compile targets: an n8n compile, a Temporal compile, and
a LangGraph compile each emit the same metric definition against
the same OCSF event-shape contract, not three differently-shaped
ingest paths against the same catalogue prose.

## Honest framing on what stays open behind the row

The four-PR closeout wave plus the two OCSF-binding PRs close one
axis at floor and open a second axis on two clusters; the rest of
the lane:

- **OCSF bindings across the remaining clusters.** The MTTD and
  MTTR latency families carry OCSF source-data-shape bindings
  after this window. The other six clusters — CRA Article 14
  regulatory-clock, identity-lifecycle, regulator-notification
  SLA, coverage, remediation-throughput, phishing-detection —
  plus the new four — detection-quality, corrective-action
  governance, incident-process integrity, CLOSEOUT — still defer
  the OCSF source-data-shape binding behind the row. Subsequent
  passes walk the binding across each cluster on the contract PR
  #463 and PR #464 established.
- **Operator-tool deferred bindings remain operator-tool deferred.**
  Some metrics (the coverage family, the phishing-simulation
  click-rate, the on-call-ack lifecycle event) bind against an
  operator-tool decision rather than a single OCSF class. The
  OCSF pass surfaces the deferral on the artifact rather than
  invent a binding — the same honest framing the catch-up wave
  established on the `.viz.md` side.
- **Floor-wide CI guard on telemetry refs + viz coverage.** The
  EXTEND sibling that asserts every `content/metrics/*.yaml`
  carries both a `telemetry_refs[]` binding and a committed
  `.viz.md` sibling is the next CI lift, moving the property from
  regression-net-on-allow-list to floor-wide enforcement now that
  the allow-list is at 44/44.

The accurate claim on this row is: the F-MET G-04
reference-visualisation pass closes at forty-four of forty-four
entries across the executive-metrics catalogue, the cluster
pattern is structurally complete on the chart-and-threshold axis,
and the OCSF source-data-shape binding axis opens on the two
latency clusters as the next catalogue-maturity step behind the
row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the detection-quality cluster lands at
  [PR #459](https://github.com/secops-ng/secops-ng-framework/pull/459);
  the corrective-action governance cluster at
  [PR #460](https://github.com/secops-ng/secops-ng-framework/pull/460);
  the incident-process integrity cluster at
  [PR #461](https://github.com/secops-ng/secops-ng-framework/pull/461);
  the CLOSEOUT cluster (44/44) at
  [PR #462](https://github.com/secops-ng/secops-ng-framework/pull/462);
  the OCSF source-data-shape bindings on the MTTD detection-latency
  cluster at
  [PR #463](https://github.com/secops-ng/secops-ng-framework/pull/463);
  and the OCSF source-data-shape bindings on the MTTR
  response-latency cluster at
  [PR #464](https://github.com/secops-ng/secops-ng-framework/pull/464).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-four that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community
  lane, the auto-generated roadmap.

Two beats close this window. The `.viz.md` sibling-file convention
on the F-MET executive-metrics lane reaches forty-four of forty-four
committed siblings across the catalogue floor — the G-04 def-of-done
reference-visualisation pass is structurally complete. The OCSF
source-data-shape binding opens as the next catalogue-maturity step
on the MTTD detection-latency and MTTR response-latency clusters,
tying each latency KPI to a concrete OCSF event shape on both the
`.viz.md` sibling and the metric YAML's `measurement.inputs[]`
back-reference. The OCSF binding across the remaining clusters, the
operator-tool deferred bindings staying honest, and the floor-wide
CI guard on telemetry refs + viz coverage open as the next passes
behind the row.
