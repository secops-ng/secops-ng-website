---
title: "Field note #89 — the KPI/KRI catalogue gets OCSF-grounded: every posture and detection-latency metric now declares a source-data shape, enforced by nightly CI"
description: "Eighty-ninth field note from the SecOps-NG Digital Commons: seven framework PRs deepen determinism-coverage on the KRI margin (#533), land a CRA Art. 13(9) update-availability mapping row (#534), and walk the metrics catalogue from a bare KPI/KRI definition to a declared OCSF source-data-shape binding across posture (#535–#536), detection-latency (#537–#538), and a catalogue-wide guard (#539). The story is metrics you can actually feed from real telemetry."
pubDate: 2026-06-29
author: "The SecOps-NG commons"
tags: ["shipping-update", "g-04", "f-met", "f-met-det", "f-met-ocsf-posture", "f-met-ocsf-detect", "f-met-ocsf-catalogue", "ocsf", "kpi-kri", "f-map-cra", "orphan-ci", "digital-commons"]
---

Seven framework PRs land in this wave, and they read together as one
move: the KPI/KRI catalogue stops being a list of names-and-formulas
and starts being a list of metrics that name the OCSF event shape they
expect to be fed from. The determinism-coverage KRI gets its margin
deepened (#533), a CRA Art. 13(9) update-availability mapping row
lands (#534), and the OCSF source-data-shape binding walks from posture
metrics (#535–#536) through the detection-latency cluster (#537–#538)
to a catalogue-wide guard (#539) — each step ending with a nightly CI
assertion the orphan-CI lane carries.

## What landed

Seven PRs against the framework, all merged to `main`.

### F-MET-DET CORE — determinism-coverage KRI margin deepened (PR #533)

[PR #533](https://github.com/secops-ng/secops-ng-framework/pull/533)
extends the determinism-coverage KRI catalogue on the G-04 margin:
more clauses, more playbook anchors, and tighter thresholds against the
existing definition. The KRI continues to read against the same
public formula — finalized determinism-tagged surfaces over the
finalized surface count — and the change is depth, not redefinition.
The catalogue row this PR strengthens is the one the determinism story
has been narrated against on the public tree for several waves; the
PR closes the gap between the narrative depth and the catalogue depth.

### F-MAP-CRA Art. 13(9) — update-availability mapping entry (PR #534)

[PR #534](https://github.com/secops-ng/secops-ng-framework/pull/534)
adds a per-clause mapping row for Cyber Resilience Act Art. 13(9)
(update-availability obligation) against the `patch_management`
playbook surface. The mapping row uses the same `playbook_refs:` shape
every other CRA Art. 13 clause already carries, which is the surface
that re-arms the orphan-CI lane against the patch_management citation.

### F-MET-OCSF-POSTURE SKELETON — posture metrics declare their OCSF source-data shape (PR #535)

[PR #535](https://github.com/secops-ng/secops-ng-framework/pull/535)
threads the OCSF source-data-shape binding into the posture cluster of
the KPI/KRI catalogue (asset-coverage and patch-posture metrics): each
metric YAML row now carries an `ocsf_source:` block naming the OCSF
event class it expects to be fed from in production. The SKELETON
phase covers the binding shape and one row per metric in the cluster;
it does not yet assert that every row in the cluster has one.

### F-MET-OCSF-POSTURE CORE — nightly CI assertion on the posture cluster (PR #536)

[PR #536](https://github.com/secops-ng/secops-ng-framework/pull/536)
turns the SKELETON into a guard: a nightly CI lane fails if any
posture metric in the catalogue does not declare an `ocsf_source:`
binding. The assertion runs against the finalized rows in the posture
cluster and uses the same orphan-CI exit-code shape the existing
mapping rings use, so the lane composes into the catalogue-wide
nightly run without a bespoke harness.

### F-MET-OCSF-DETECT SKELETON — OCSF source-data-shape binding lint for the MTTD cluster (PR #537)

[PR #537](https://github.com/secops-ng/secops-ng-framework/pull/537)
extends the binding shape to the detection-latency (MTTD) cluster.
Each `mttd_*` metric (alert-to-triage, triage-to-investigation,
investigation-to-containment) now carries the same `ocsf_source:`
block as the posture cluster, naming the OCSF detection-finding event
shape it reads against. The lint walks the cluster and reports rows
that have not yet been bound.

### F-MET-OCSF-DETECT CORE — full mttd_* cluster + shared helper + nightly orphan-CI lane (PR #538)

[PR #538](https://github.com/secops-ng/secops-ng-framework/pull/538)
closes the cluster. Every `mttd_*` row carries an OCSF source-data
binding; the per-cluster lints from #536 and #537 are refactored into
a shared `ocsf_cluster_lint` helper so future clusters reuse the same
assertion shape; and the nightly orphan-CI lane on the framework now
runs the helper across the bound clusters. The orphan-CI summary the
lane emits is the same shape the mapping rings already publish:
`finalized / bound / orphans / grace / skipped`, scoped to the
clusters that have entered the binding phase.

### F-MET-OCSF-CATALOGUE SKELETON — catalogue-wide source-data-shape binding guard (PR #539)

[PR #539](https://github.com/secops-ng/secops-ng-framework/pull/539)
generalises the per-cluster lint into a catalogue-wide guard. The
SKELETON walks every finalized metric row in the KPI/KRI catalogue
and reports the binding state per cluster, with a documented skip-list
for clusters that have not yet entered the binding phase (the
narrative-only and reporting-shape rows are skipped by name, the same
discipline the mapping orphan-skip lane uses). The catalogue-wide
guard is the surface a future CORE PR will arm; the SKELETON is the
shape and the inventory.

## Why this reads against G-04

G-04 on the published roadmap is the catalogue-maturity goal: every
shipped artifact (playbook, primitive, control, metric, mapping row)
moves from a bare definition to a declared, machine-readable surface
that an orphan-CI lane can walk. For the KPI/KRI catalogue, "declared"
means two things: the metric carries a formula, and the metric names
the OCSF event shape it expects to be fed from. Before this wave, the
KPI/KRI rows carried the first part but not the second; an operator
reading a metric definition could see what was being measured, but
the gap between the metric and the telemetry it ran on was a
human-judgement bridge.

After this wave, two clusters (posture, detection-latency) carry the
binding mechanically, a shared helper enforces it on nightly CI, and
a catalogue-wide guard inventories the remaining clusters against the
same discipline. The catalogue is closer to a surface a regulator or
an internal auditor can pull and walk against real telemetry, not
against a narrative claim that the metric is feedable.

## Sovereignty stance on this wave

The wave does not change the sovereignty stance on any operational
artifact. OCSF is an open data shape; declaring an OCSF source-data
binding on a metric row does not pin the operator to any particular
vendor of telemetry, any particular SIEM, or any particular hosted
correlation surface. The binding names a shape; the operator decides
which compatible source emits that shape inside their own stack.

The discipline that the project does not ship its own runtime, its
own agent framework, or its own SOAR continues to apply. The metrics
in the catalogue are evaluated by the operator against telemetry the
operator runs, on one of the three reference compile targets the
operator chooses. The binding makes that pairing explicit; it does
not constrain it.

## Honest framing on what stays open

This is a depth wave, not a milestone wave. The honest open beats:

- **Two clusters bound, several to go.** Posture and detection-latency
  are the first KPI/KRI clusters to enter the binding phase. The
  catalogue-wide guard (#539) is a SKELETON; a CORE PR that arms it
  catalogue-wide will follow as more clusters reach the same
  discipline.
- **Binding is a surface, not a benchmark.** Declaring an OCSF event
  class on a metric row says the metric is shaped to be fed from
  that class; it does not measure how well any given operator's
  telemetry covers that class. Coverage in production is the
  operator's problem and the project does not pretend otherwise.
- **G-04 catalogue maturity continues.** The next windows continue to
  walk depth into the catalogue, not breadth-only headline counts.

The accurate claim on this wave is: the KPI/KRI catalogue's posture
and detection-latency clusters now declare an OCSF source-data-shape
binding, a nightly CI lane enforces it, a catalogue-wide guard
inventories the rest, the determinism-coverage KRI margin is deeper,
and the CRA Art. 13(9) row lands on the same wave.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — this wave at
  [PR #533](https://github.com/secops-ng/secops-ng-framework/pull/533),
  [PR #534](https://github.com/secops-ng/secops-ng-framework/pull/534),
  [PR #535](https://github.com/secops-ng/secops-ng-framework/pull/535),
  [PR #536](https://github.com/secops-ng/secops-ng-framework/pull/536),
  [PR #537](https://github.com/secops-ng/secops-ng-framework/pull/537),
  [PR #538](https://github.com/secops-ng/secops-ng-framework/pull/538),
  and [PR #539](https://github.com/secops-ng/secops-ng-framework/pull/539).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the eighty-eight that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the issues,
  the good-first-issues open against the community lane, the
  auto-generated roadmap.

Seven PRs close this window. The KPI/KRI catalogue is one binding
phase deeper: posture and detection-latency metrics declare the OCSF
event shape they expect to be fed from, a nightly CI lane keeps the
declaration honest, a catalogue-wide guard inventories the rest, and
the determinism-coverage KRI margin sits a clause closer to its
narrative.
