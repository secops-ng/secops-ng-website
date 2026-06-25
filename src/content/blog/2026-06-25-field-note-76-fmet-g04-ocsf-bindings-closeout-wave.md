---
title: "Field note #76 — the F-MET G-04 OCSF source-data-shape binding axis closes across the remaining executive-metrics clusters"
description: "Seventy-sixth field note from the SecOps-NG Digital Commons: seven PRs against the framework walk the OCSF source-data-shape binding axis across the remaining G-04 executive-metrics clusters — CRA / regulatory-clock, cloud-posture, corrective-action, coverage, phishing-efficacy, incident-response operational-SLA, and identity-compromise. Paired with the MTTD/MTTR latency bindings already announced in field note #75, every shipped KPI/KRI on the executive-metrics catalogue floor now declares its concrete OCSF event source on both the `.viz.md` sibling and the metric YAML `measurement.inputs[]` back-reference."
pubDate: 2026-06-25
author: "The SecOps-NG commons"
tags: ["shipping-update", "f-met", "metrics", "kpi", "kri", "g-04", "ocsf", "ocsf-binding", "cra", "regulatory-clock", "cloud-posture", "corrective-action", "coverage", "phishing-efficacy", "incident-response", "identity-compromise", "digital-commons", "audit-readable"]
---

The previous field note read two beats closing the prior window:
the F-MET G-04 reference-visualisation pass reached forty-four of
forty-four committed `.viz.md` siblings across the catalogue floor,
and the OCSF source-data-shape binding axis opened on the MTTD
detection-latency and MTTR response-latency clusters. The accurate
claim on that row was *one axis closed at floor, the second axis
opened on two clusters*; the remaining executive-metrics clusters
still deferred the OCSF binding behind the row.

This note reads the closeout of the second axis. Seven PRs against
the framework walk the OCSF source-data-shape binding across the
remaining G-04 clusters — CRA / regulatory-clock, cloud-posture,
corrective-action, coverage, phishing-efficacy, incident-response
operational-SLA, and identity-compromise — on the same contract
PR #463 and PR #464 set on the latency families. Combined with the
already-bound MTTD/MTTR clusters, every shipped KPI/KRI on the
executive-metrics catalogue floor now declares its concrete OCSF
event source.

## What landed in this window

Seven PRs against the framework, all merged to `main`. Each PR
walks the OCSF source-data-shape binding across one cluster: the
sibling `.viz.md` artifact gains an OCSF source-data-shape section
that names the concrete OCSF class behind the row, and the metric
YAML's `measurement.inputs[]` row carries a back-reference to the
same OCSF class so the catalogue YAML carries the binding as a
first-class field rather than as a `.viz.md`-only annotation.

### CRA / regulatory-clock cluster (PR #465)

[PR #465](https://github.com/secops-ng/secops-ng-framework/pull/465)
lands OCSF source-data-shape bindings on the CRA / regulatory-clock
cluster — the metrics that read against the Cyber Resilience Act
notification-clock window and the broader regulator-notification
SLA family. The cluster reads a CRA Article 14 fixed-window clock
on the catalogue side; on the OCSF side it binds against the
incident-finding event class for the regulator-facing notification
artifact and against the class-specific time attribute the
notification-clock binds its start and stop on. The binding is the
honest framing the CRA family needs to be portable: the catalogue
defines the clock contract, the operator's adapter normalises the
incident-finding event into the same OCSF class, and the regulator
sees the same artifact shape regardless of which case-management
tool the operator picked first.

### Cloud-posture cluster (PR #466)

[PR #466](https://github.com/secops-ng/secops-ng-framework/pull/466)
lands OCSF source-data-shape bindings on the cloud-posture cluster
— the recurring-misconfiguration KRI family and the broader
cloud-control-effectiveness surface. The cluster reads against the
OCSF compliance-finding and posture-finding event classes; the
binding names the class on the artifact and the attributes the
in-period denominator binds against so the recurrence rate and
the misconfiguration-aging KRI both read against the same OCSF
event shape rather than two differently-shaped posture feeds.

### Corrective-action cluster (PR #467)

[PR #467](https://github.com/secops-ng/secops-ng-framework/pull/467)
lands OCSF source-data-shape bindings on the corrective-action
governance cluster — the overdue-count KRI, the close-rate KPI, and
the control-effectiveness KPI. The cluster reads against the
compliance-finding event class on the OCSF side, with the
remediation-state attribute carrying the close-event the close-rate
KPI binds against. The audit-side question the cluster answers —
*is the corrective-action programme closing findings on the cadence
the framework declares* — now reads against the same OCSF source
event regardless of which GRC tool emitted the finding.

### Coverage cluster (PR #468)

[PR #468](https://github.com/secops-ng/secops-ng-framework/pull/468)
lands OCSF source-data-shape bindings on the coverage cluster. The
coverage family is one of the clusters the previous field note
flagged as carrying an operator-tool deferred binding: there is no
single OCSF class that universally covers asset-coverage or
playbook-coverage on the artifact side. PR #468 carries that
honest framing onto the OCSF section directly — the cluster names
the candidate OCSF classes the in-period numerator and denominator
read against (the inventory class on the asset-coverage side, the
detection-finding class on the playbook-coverage side), and the
artifact names the deferral on the operator-tool side rather than
invent a binding. The catalogue says what it can bind and surfaces
what it cannot on the artifact rather than as silent prose behind
the row.

### Phishing-efficacy cluster (PR #469)

[PR #469](https://github.com/secops-ng/secops-ng-framework/pull/469)
lands OCSF source-data-shape bindings on the phishing-efficacy
cluster — the phishing-simulation click-through KRI, the user-report
KPI on suspected phishing, and the detection-side phishing-triage
metrics. The cluster binds against the email-activity event class
on the user-report side and against the detection-finding class on
the triage-outcome side. As with the coverage cluster, the
simulation-platform side of the click-through KRI remains
operator-tool deferred — the PR names that deferral on the artifact
on the contract the catch-up wave established for the `.viz.md`
side.

### Incident-response operational-SLA cluster (PR #470)

[PR #470](https://github.com/secops-ng/secops-ng-framework/pull/470)
lands OCSF source-data-shape bindings on the incident-response
operational-SLA cluster — the timeline-completeness KPI, the
post-incident review on-time-rate, and the handoff-brief delivery
SLA across shift transitions. The cluster binds against the
incident-finding event class on the case-side artifact and against
the activity-time and update-time attributes the SLA windows read
their start and stop on. The audit-side reading of incident-process
integrity now resolves against the same OCSF event shape across
operators rather than against three differently-shaped case-tool
exports.

### Identity-compromise cluster (PR #471)

[PR #471](https://github.com/secops-ng/secops-ng-framework/pull/471)
lands OCSF source-data-shape bindings on the identity-compromise
cluster — the identity-lifecycle KRI family, the credential-leak
intake aging, and the orphan-credential surface metrics. The
cluster binds against the OCSF identity-and-access-management
event family — the account-change class on the lifecycle side, the
authentication class on the suspicious-authentication surface, and
the user-inventory class on the orphan-credential side. This PR
closes the seventh and final cluster on the catalogue floor: every
shipped F-MET G-04 metric now declares its OCSF source-data-shape
binding on both the `.viz.md` sibling and the metric YAML
`measurement.inputs[]` back-reference.

## What this wave does to the catalogue floor

After this window, the `content/metrics/` surface carries:

- **OCSF source-data-shape bindings on every G-04 cluster.** Combined
  with the MTTD detection-latency and MTTR response-latency clusters
  announced in field note #75, the seven clusters that landed in this
  window — CRA / regulatory-clock, cloud-posture, corrective-action,
  coverage, phishing-efficacy, incident-response operational-SLA,
  identity-compromise — close the binding axis across the executive-
  metrics catalogue. Every shipped KPI/KRI names the OCSF class the
  in-period numerator and denominator read against on the artifact.
- **The G-04 lane fully exemplified across both property axes.** The
  chart-and-threshold axis reached floor at PR #462 (44/44 committed
  `.viz.md` siblings). The OCSF-source axis now reaches floor on the
  same catalogue. Both halves of the def-of-done property contract
  the lane carries are structurally complete.
- **Operator-tool deferred bindings stay honest on the artifact.**
  Where no unambiguous OCSF class covers a metric's source event —
  the coverage cluster on the playbook-coverage side, the
  phishing-simulation click-through, the on-call-ack lifecycle
  transition the MTTR cluster already flagged — the artifact names
  the deferral on the OCSF section rather than invent a binding. The
  catalogue surfaces what it can bind and what it cannot on the same
  artifact, on the same contract.

## Why the closeout matters for catalogue maturity

The previous note read the OCSF binding as the symmetric upstream
property of the reference visualisation: the chart-and-threshold pass
closed the dashboard-side question, the OCSF binding closes the
ingest-side question. A binding on one cluster lets one operator
compile a portable pipeline; a binding across every cluster lets a
community of operators running different upstream stacks compile the
same catalogue against the same OCSF event-shape contract on every
shipped metric.

For the G-04 catalogue floor specifically, the closeout means an
operator reading the F-MET executive-metrics surface picks any
KPI/KRI on the floor and finds, on the same artifact, the chart
contract (kind, headline figure, threshold bands), the threshold
references back into the catalogue YAML, and the OCSF class the
in-period numerator and denominator read against. The artifact
reads against itself; the audit reads against the artifact; the
regulator reads against the same artifact the operator does. The
catalogue defines the property; the artifact carries it; the audit
verifies it. No re-derivation step sits between the catalogue and
the runtime ingest.

For the three reference compile targets — n8n, Temporal, and
LangGraph — the closeout means each compile emits the same metric
definition against the same OCSF event-shape contract on every
cluster, not three differently-shaped ingest paths against the same
catalogue prose. The portability property the framework's foundation
declares now reads concretely on every G-04 row.

## Honest framing on what stays open behind the row

Two axes close at floor on the G-04 lane after this wave; the rest
of the lane:

- **Floor-wide CI guard on telemetry refs plus viz coverage.** The
  EXTEND sibling that asserts every `content/metrics/*.yaml` carries
  both a `telemetry_refs[]` binding and a committed `.viz.md` sibling
  is the next CI lift, moving the property from regression-net-on-
  allow-list to floor-wide enforcement now that both the allow-list
  and the binding axis are at floor.
- **Operator-tool deferred bindings remain operator-tool deferred.**
  The deferrals the OCSF pass surfaces on the coverage cluster, the
  phishing-simulation click-through, and the on-call-ack lifecycle
  transition stay deferred against the operator-tool decision rather
  than invent a binding. The artifact names the deferral; the
  catalogue does not silently paper over it.
- **The other governance lanes — F-MAP, F-CTL, F-ART.** The G-04
  executive-metrics lane reaches floor on both property axes after
  this wave. The other lanes carry their own def-of-done properties
  and walk on their own cadences; the cluster pattern this lane
  established (CORE exemplar → SKELETON catch-up → floor-wide
  closeout → CI guard) is the recipe the other lanes follow rather
  than a one-shot result.

The accurate claim on this row is: the F-MET G-04 OCSF source-data-
shape binding axis closes across the remaining executive-metrics
clusters in seven PRs against the framework, the binding axis now
reads at floor on the same catalogue the chart-and-threshold axis
already reached at floor, and the next CI lift to floor-wide
enforcement of the joint `telemetry_refs[]` + `.viz.md` property
opens as the next pass behind the row.

## Where the work is

- [`secops-ng-framework`](https://github.com/secops-ng/secops-ng-framework)
  — the CRA / regulatory-clock cluster lands at
  [PR #465](https://github.com/secops-ng/secops-ng-framework/pull/465);
  the cloud-posture cluster at
  [PR #466](https://github.com/secops-ng/secops-ng-framework/pull/466);
  the corrective-action cluster at
  [PR #467](https://github.com/secops-ng/secops-ng-framework/pull/467);
  the coverage cluster at
  [PR #468](https://github.com/secops-ng/secops-ng-framework/pull/468);
  the phishing-efficacy cluster at
  [PR #469](https://github.com/secops-ng/secops-ng-framework/pull/469);
  the incident-response operational-SLA cluster at
  [PR #470](https://github.com/secops-ng/secops-ng-framework/pull/470);
  and the identity-compromise cluster (G-04) at
  [PR #471](https://github.com/secops-ng/secops-ng-framework/pull/471).
  All merged to `main`.
- [`secops-ng-website`](https://github.com/secops-ng/secops-ng-website)
  — this note and the seventy-five that preceded it.
- [`github.com/secops-ng`](https://github.com/secops-ng) — the
  issues, the good-first-issues open against the community lane,
  the auto-generated roadmap.

One beat closes this window. The F-MET G-04 OCSF source-data-shape
binding axis closes across the remaining executive-metrics clusters
in seven PRs, every shipped KPI/KRI on the catalogue floor now
declares its concrete OCSF event source on both the `.viz.md`
sibling and the metric YAML `measurement.inputs[]` back-reference,
and the G-04 def-of-done property contract reaches structural
completion across both axes the lane carries. The floor-wide CI
guard on telemetry refs plus viz coverage, the operator-tool
deferred bindings staying honest, and the cluster pattern walking
into the other governance lanes open as the next passes behind the
row.
